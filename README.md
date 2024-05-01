# 🎮 Ps Market - README
![스크린샷 2024-03-01 오후 4 42 57](https://github.com/chasura416/commerce_project/assets/49605210/7b6f19ef-feea-4027-bfdf-eadc3a767ef2)  
콘솔게임 중고마켓 Ps Market

## 프로젝트 소개
Ps-Market은 2024.01.24 ~ 2024.02.29 1차 개발되었습니다.  
프론트엔드 1인으로 진행한 e-commerce Project 입니다.

> **[프로젝트 상세 소개 사이트 URL](https://horse-vein-162.notion.site/Ps-Market-e-commerce-214f7828e3624a89bd0a4b778a69c9c0?pvs=4)**

## 사용 기술
- **기술 스택**
> <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white"> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white"> <img src="https://img.shields.io/badge/tanstack Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white"> <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white"> <img src="https://img.shields.io/badge/tailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">



- **Tools**

> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/github actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white">


## 🛠️ File Structure

```
src
├── components // 재사용 가능한 UI 컴포넌트
│   └── Modal
│       └── interface
|   ...
├── hooks // 커스텀 훅
├── router // 라우터 매핑
│   ├── Router.tsx
├── context // 전역 상태: context API
│   └── AuthContext.tsx
│
├── interface // 타입   
├── layout
│   ├── GlobalLayout.tsx
│   ├── Header.tsx
│  ...
├── pages // 화면에 그려지는 컴포넌트
│   ├── Cart.tsx
│   ├── Home.tsx
│   ├── Mypage.tsx
│  ...
└── App.tsx 
└── Main.tsx

```

## 🛠️ Architecture
![스크린샷 2024-03-01 오후 4 29 58](https://github.com/chasura416/commerce_project/assets/49605210/342167a4-e30f-40da-90e8-cb325b0af959)


<!-- 꼭 들어가면 좋은 내용
1. 주차별 요구사항 (주차별 요구사항 문서를 베이스로 문서화 추천)
2. 트러블 슈팅 (크게 추천)
3. 설계관련 고민들, 하고싶은 이야기

하지말아야 할 것
1. 텅빈 리드미(아직 완성되지 않았어도 작업중이어도 반드시 피해야 한다.)
2. TMI
3. 너무 많은 강조 -->

## 주차별 요구사항
- 1주차
  - 페이지 라우팅 설계
  - 로그인/회원가입
  - 판매자 페이지 CRUD
- 2주차
  - 상품 CRUD
  - 장바구니 CRUD
- 3주차
  - 결제 SDK 아임포트 연동
    - 구매자 기능
    - 판매자 기능
  - Compound component 패턴을 활용한 modal 기능
  - E2E 테스트
- 4주차
  - SEO 개선하기
  - 번들 사이즈 줄이기
  - 렌더링 최적화
  - 테스트 코드

> [✅ **주차별 요구사항 상세내용 URL**](https://horse-vein-162.notion.site/Commerce-Project-93069997d5094722aec976b844ad0538?pvs=4)




## 프로젝트 실행 방법

### 프로젝트 의존성 설치  

```
yarn install
```

### 프로젝트 서버 실행  

```
yarn dev
```

### 프로젝트 빌드  

```
yarn build
```

---

