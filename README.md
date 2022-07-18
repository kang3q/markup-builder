# 페이지 단위 마크업 작업을 편하게! 
- 버리긴 아쉬워서 올려둬야지..

## Gulp, SCSS 등 환경
- 페이지 단위 결과물 관리
- html fileInclude를 사용한 header, footer 같은 공통 요소 관리
- css 전처리를 사용한 SCSS 사용
- 핫리로딩 적용으로 결과물 빠르게 확인

### * required version node: v10, npm: v6 이하에서 동작*
- node, npm 버전에 유의하자. 예전 프로젝트 살린 거라 버전이 높아지면 실행이 안 된다. 

### 시작
```
$ nvm use // 필수는 아님(nvm 사용시 정의된 버전으로 변경)
$ npm install
$ npm run start

http://localhost:3000
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
    <div id="container">
      내용
    </div>
    @@include('./html/footer.html', 'utf8')
  </body>
</html>
```
