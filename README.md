# NodeSerial
ETS-DMX512M 의 PLAN 설정 예시 프로그램

## [ETS-DMX512M PLAN 선택 Protocol](./dmx512m_remote.md)

## Release 버젼 사용
### Release 버젼 다운로드
1. USB-485 와 DMX512M 의 Remote 포트를 연결
1. 윈도우즈 장치관리자에서 USB-485 의 COM 포트 번호를 확인
1. https://github.com/enthusapp/NodeSerial/releases#latest 에서 x64.zip 또는 x86.zip 다운로드
1. 압축해제
1. 압출해제한 폴더의 주소창에 `cmd .` 을 입력
1. Windows prompt 가 실행되면 아래 명령어를 입력
1. DMX512M 의 LCD 의 PLAN 번호가 변경되었는지 확인
```
> dmxPlanSet_x86.exe <USB to 485 COM Port 번호> <PLAN 번호 - 1>
```

### 예시
USB to 485 가 COM1 로 설정되어 있고 PLAN 2 를 선택할때

```
F:\electron\x86>dmxPlanSet_x86.exe COM1 1
COM1 opened
Send 2,250,255,255,249,1,0,0,0,0,0,0,0,1,245,247,3    // ETS-DMX512M Protocol
```

## 개발
### Install
##### 1. Install Node.js
https://nodejs.org/ko/download/

##### 2. npm modules install
```
C:\NodeSerial> npm i
```

### Run
Serial port 번호와 Plan 번호를 차례로 옵션 입력
```
C:\NodeSerial> node index.js COM3 1
```
