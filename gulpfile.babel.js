import gulp from 'gulp'
import sass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer'
import clean from 'gulp-clean'
import runSequence from 'run-sequence'
import htmlvalidator from 'gulp-w3c-html-validator'
import fileInclude from 'gulp-file-include'
import { create } from 'browser-sync'

gulp.task('default', () => runSequence('clean', ['sass', 'html:index', 'html', 'js', 'image', 'watch', 'browser-sync']))

/////////////////////////// clean ///////////////////////////
gulp.task('clean', () => gulp.src('dist').pipe(clean()))

/////////////////////////// browser-sync ///////////////////////////
const browserSync = create()
gulp.task('browser-sync', ['sass', 'html', 'js'], () => {
  return browserSync.init({
    server: './dist',
    // server: {
    //   // dist 폴더를 기준으로 웹서버 실행
    //   baseDir: './dist',
    // },
  })
})

/////////////////////////// js ///////////////////////////
gulp.task(
  'js',
  () =>
    gulp
      .src('src/js/**/*.js')
      .pipe(gulp.dest('dist/js'))
      .pipe(browserSync.reload({ stream: true })), //browserSync 로 브라우저에 반영
  // .pipe(browserSync.stream()), //browserSync 로 브라우저에 반영
)

/////////////////////////// css ///////////////////////////
gulp.task(
  'sass',
  () =>
    gulp
      .src('src/css/**/*.scss')
      //.pipe(sass({ outputStyle: 'compressed' }))
      .pipe(sass({ includePaths: ['./node_modules'] }).on('error', sass.logError))
      .pipe(
        autoprefixer({
          browsers: ['IE 9', 'last 3 versions'],
          cascade: false,
        }),
      )
      .pipe(gulp.dest('dist/css'))
      .pipe(browserSync.reload({ stream: true })), //browserSync 로 브라우저에 반영
  // .pipe(browserSync.stream()), //browserSync 로 브라우저에 반영
)

/////////////////////////// html ///////////////////////////
gulp.task(
  'html',
  () =>
    gulp
      .src('src/html/**/*.html')
      .pipe(
        fileInclude({
          prefix: '@@',
          basepath: 'src/html',
        }),
      )
      //.pipe(htmlvalidator())
      .pipe(gulp.dest('dist/html'))
      .pipe(browserSync.reload({ stream: true })), //browserSync 로 브라우저에 반영
  // .pipe(browserSync.stream()), //browserSync 로 브라우저에 반영
)
gulp.task(
  'html:index',
  () =>
    gulp
      .src('src/index.html')
      .pipe(
        fileInclude({
          prefix: '@@',
          basepath: 'src/html',
        }),
      )
      //.pipe(htmlvalidator())
      .pipe(gulp.dest('dist'))
      .pipe(browserSync.reload({ stream: true })), //browserSync 로 브라우저에 반영
  // .pipe(browserSync.stream()), //browserSync 로 브라우저에 반영
)

/////////////////////////// image ///////////////////////////
gulp.task('image', () => gulp.src('src/image/**').pipe(gulp.dest('dist/image')))

/////////////////////////// watch ///////////////////////////
gulp.task('watch', () => {
  gulp.watch('src/js/**/*.js', ['js'])
  gulp.watch('src/css/**/*.scss', ['sass']).on('change', browserSync.reload)
  gulp.watch('src/index.html', ['html:index']).on('change', browserSync.reload)
  gulp.watch('src/html/**/*.html', ['html']).on('change', browserSync.reload)
  gulp.watch('src/image/**', ['image'])
})
