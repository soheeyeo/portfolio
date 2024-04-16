# 🔎 Portfolio

React + TypeScript + MongoDB를 활용한 포트폴리오 웹 페이지입니다.<br>
<br>
[🔗포트폴리오 바로가기](https://web-portfolio-yeo-2aat2clv24dqyt.sel5.cloudtype.app/)<br>
<br>
<img src = "https://github.com/soheeyeo/portfolio/assets/95061372/bd2213c7-3658-4955-9008-cfe2d41e86bd" width="100%">

## 💬 프로젝트 설명

React + TypeScript를 적용한 개인 프로젝트입니다.<br>
<br>
mongoose를 활용하여 MongoDB 접근 및 데이터베이스 작업을 수행하였습니다.<br>
<br>
리소스 낭비를 방지하기 위해 requestAnimationFrame API를 활용하여 애니메이션을 구현했습니다.<br>
<br>
사용자의 시야에서만 애니메이션이 동작하도록 intersection observer API를 사용했습니다.
<br>
<br>

## ⚙️ 개발 환경

#### [개발기간]

2024.03 - 2024.04

#### [기술]

-   `React`, `TypeScript`, `Styled-Components`, `Axios`<br>
-   `Express`, `MongoDB`<br>
-   `Git` `Figma` `cloudtype`
    <br>
    <br>

## 📁 폴더구조

-   server/ : 서버 디렉토리
-   api/ : api 로직 관련 디렉토리
-   components/ : 공통 컴포넌트 디렉토리
-   hooks/ : Custom hook 디렉토리
-   utils/ : canvas, typing function 디렉토리

```
📦
┣ 📂public
┃ ┣ 📜favicon.ico
┃ ┗ 📜index.html
┣ 📂server
┃ ┣ 📂controllers
┃ ┣ 📂model
┃ ┣ 📂routes
┃ ┣ 📂types
┃ ┗ 📜server.ts
┣ 📂src
┃ ┣ 📂api
┃ ┣ 📂assets
┃ ┣ 📂components
┃ ┃ ┣ 📂modal
┃ ┃ ┣ 📂navbar
┃ ┃ ┗ 📂section
┃ ┣ 📂hooks
┃ ┣ 📂styles
┃ ┣ 📂utils
┃ ┣ 📜App.tsx
┃ ┣ 📜index.tsx
┃ ┣ 📜react-app-env.d.ts
┃ ┗ 📜type.d.ts
┣ 📜.eslintrc.json
┣ 📜.gitignore
┣ 📜.prettierrc
┣ 📜package-lock.json
┣ 📜package.json
┗ 📜tsconfig.json
```

<br>
<br>

## 💡 핵심 코드

### 1) forwardRef를 활용한 NavBar 스크롤 이벤트

NavBar 스크롤 이벤트를 구현하기 위해 최상단의 ref를 배열로 만들고, 각각의 컴포넌트에 forwardRef()로 ref를 넘겨받게 하였습니다. <br>
current에 해당 DOM을 추가하고 버튼 클릭 시 컴포넌트의 index에 대응하는 DOM의 위치로 이동하도록 하였습니다.
https://github.com/soheeyeo/portfolio/blob/33bf6a7824b403c27a139db74c84be538a6d3955/src/App.tsx#L10-L24

https://github.com/soheeyeo/portfolio/blob/33bf6a7824b403c27a139db74c84be538a6d3955/src/components/section/Contact.tsx#L130-L139

https://github.com/soheeyeo/portfolio/blob/33bf6a7824b403c27a139db74c84be538a6d3955/src/components/navbar/Navbar.tsx#L45-L66

<br>

### 2) IntersectionObserver API를 활용한 애니메이션

요소가 사용자의 시야에 있을 때 애니메이션이 동작하도록 IntersectionObserver API를 활용하였습니다. <br>
여러 컴포넌트에 반복적으로 사용하기 때문에 Custom Hook으로 구현하여 사용했습니다. <br>
컴포넌트별 rootMargin을 다르게 설정하기 위해 파라미터로 전달하여 사용했습니다. <br>

https://github.com/soheeyeo/portfolio/blob/33bf6a7824b403c27a139db74c84be538a6d3955/src/hooks/useScrollAnimation.tsx#L21-L40

https://github.com/soheeyeo/portfolio/blob/33bf6a7824b403c27a139db74c84be538a6d3955/src/components/section/Skills.tsx#L135-L139
