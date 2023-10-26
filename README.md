# next
next 설치
ㄴ https://nodejs.org/ko
이거 왼쪽  187 어쩌구로 다운 

------------------------------------------- 

폴더생성후 터미널에
ㄴnpx create-next-app 폴더이름
ㄴ√ Would you like to use TypeScript? ... No / Yes
√ Would you like to use ESLint? ... No / Yes
√ Would you like to use Tailwind CSS? ... No / Yes
√ Would you like to use `src/` directory? ... No / Yes
√ Would you like to use App Router? (recommended) Yes
√ Would you like to customize the default import alias? ... No / Yes 

ㄴcd 폴더이름
ㄴnpm run dev(실행) 

사용법https://nextjs.org/ 

*next dev ⇒ 개발 모드에서 실행
*next build ⇒ 프로덕션 빌드 용도로 애플리케이션 빌드 

*ㄴnpm run dev(실행)
*ㄴnpm run build
*ㄴnpm run start 

<Link href='/'>로 링크이동
폴더이름이 /뒤에들어가야됌 

ㄴ ctrl+c => npm start중지
ㄴ npm start (재실행) 

파일옮길때는 git이용하거나 
집에서 파일 만들고 구축후
src,package.json만 복붙 덮어쓰기
ㄴ npm i
ㄴ npm start

## github 브랜치
로컬 브랜치 생성 > git checkout -b 브랜치명 (이걸로 터미널창에 생성하면됌)
원격 브랜치 적용 > git push --set upstream origin 브랜치명 

로컬 브랜치 삭제 > git branch -d 브랜치명
원격 브랜치 삭제 > git push origin --delete 브랜치명 

------------------------------------------- 

팀플시 github에 있는 파일 받는방법 or 내가 이미 올린파일 받기 

1. 
*방법1 파일생성 후 파일내에서 오른쪽클릭 
    - open git bash
    - $ git clone 깃주소
    (방법1로 하면될듯 
     맥은 모르겠고 window에서 사용가능)
*방법2 git desktop -> 클론 폴더생성 

2. 
clone 후 작업 전 
ㄴ npm i 

*next실행
ㄴ npn run dev 

*react실행
ㄴ npn start 

3. git checkout -b 브랜치명
4. git branch -v(브랜치명확인)
5. git add .
6. git commit -m 'up'
7. git push origin 브랜치명


파일수정 후 3번부터 실행
3. git checkout -b 브랜치명
4. git branch -v(브랜치명확인)
5. git add .
6. git commit -m 'up'
7. git push origin 브랜치명 

------------------------------------------- 

내가 git에 파일 올리는 방법
ㄴ git 사이트에서 레파지토리(respon 어쩌구)생성후 

1.git clone 깃주소
2.cd 복제폴더
3.git checkout -b 브랜치명
4. git branch -v(브랜치명확인)
5.git add .
6.git commit -m 'up'
7.git push origin 브랜치명
파일수정 후 업로드는 3번부터 진행

## react
폴더생성후 ctrl+j(터미널에)
ㄴ npx-create-react-app 폴더이름(하위폴더)
ㄴ cd 폴더이름
ㄴ npm i 모듈이름(scss같은 모듈설치-없으면 생략)
ㄴ npm start 

ㄴ ctrl+c => npm start중지
ㄴ npm start (재실행) 

파일옮길때는 git이용하거나 
집에서 파일 만들고 구축후
src,package.json만 복붙 덮어쓰기
ㄴ npm i
ㄴ npm start
