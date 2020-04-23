# NodeSerial
ETS-DMX512M 의 PLAN 설정 예시 프로그램

# Release 버젼 사용
### Release 버젼 다운로드
1. https://github.com/enthusapp/NodeSerial/releases#latest 에서 x64.zip 또는 x86.zip 다운로드
1. 압축해제
1. Windows prompt (cmd.exe) 실행
1. 압축해제한 폴더로 이동
1. 아래 명령어 실행
```
> dmxPlanSet_x86.exe <USB to 485 COM Port 번호> <PLAN 번호>
```

##### 예시
```
F:\electron\x86>dmxPlanSet_x86.exe COM1 1
COM1 opened
Send 2,250,255,255,249,1,0,0,0,0,0,0,0,1,245,247,3
```

# 개발
### Install
##### 1. Install Node.js
https://nodejs.org/ko/download/

##### 2. npm i
```
C:\NodeSerial> npm i
```

### Run
Serial port 번호와 Plan 번호를 차례로 옵션 입력
```
C:\NodeSerial> node index.js COM3 1
```
