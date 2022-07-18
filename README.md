# 페이지 단위 마크업 작업을 편하게! 
- 버리긴 아쉬워서 올려둬야지..

## Gulp, SCSS 등 환경
- 페이지 단위 결과물 관리
- html fileInclude를 사용한 header, footer 같은 공통 요소 관리
- css 전처리를 사용한 SCSS 사용
- 핫리로딩 적용으로 결과물 빠르게 확인

### 주의사항 
- required version node: v10, npm: v6 이하에서 동작한다.
- node, npm 버전에 유의하자. 예전 프로젝트 살린 거라 버전이 높아지면 실행이 안 된다.

### 시작
```
$ nvm use // 필수는 아님(nvm 사용시 정의된 버전으로 변경)
$ npm install
$ npm run start
-> http://localhost:3000

$ npm run start:dist // dist 디렉토리가 있어야한다.
-> http://localhost:3030
```

### 사용법
```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <title>example</title>
    <link rel="stylesheet" href="/css/common.css" />
    <link rel="stylesheet" href="/css/example.css" />
    <script src="/js/example.js"></script>
  </head>
  <body>
    @@include('./html/header.html', 'utf8')
    <div id="contents">contents</div>
    @@include('./html/footer.html', 'utf8')
  </body>
</html>
```

### 알고 있으면 좋은 것
- scss 파일명을 _(언더바)로 시작하면 css 파일로 변환 안 된다.
  - _utils.scss 변환 안됨, scss 파일에서만 참조 가능
  - page.scss -> page.css 변환됨
