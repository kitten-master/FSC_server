# jwt-auth login process
## Index
  - [Description](#Description)
  - [Installing](#Installing)
  - [Authors](#Authors)
  - [License](#License)
## About RepositoryTemplate
jwt auth used login process, MVC pattern used this project 

## Description
- 회원가입 부분 
    
    **post 요청 -** **/auth/register**
    
    ### 유저 데이터베이스 테이블
    
    | id | varchar(45) |
    | --- | --- |
    | password | varchar(200) |
    | email | varchar(45) |
    | username | varchar(45) |
    
    ### POST 요청 JSON 형식
    
    ```jsx
    {
        "id":"아이디",
        "username":"유저닉네임",
        "password":"비밀번호",
        "email":"이메일"
    }
    ```
    
    ### 회원가입 예외케이스
    
    - id - 최소3글자~15글자 이하
    - password - 최소 6글자이상
    - 이메일 - 우선 1글자 이상으로 설정
    - 유저닉네임 - 최소3글자~15글자 이하
    
- 로그인 인증 부분
    
    **get 요청 - /auth/login**
    
    ### GET 요청 JSON 형식
    
    ```jsx
    {
        "id":"아이디",
        "password":"비밀번호"
    }
    ```
    
    ### 로그인 예외케이스
    
    - DB에 없는 ID 요청은 오류메시지를 보낸다.
    - 아이디는 맞지만 패스워드가 틀릴경우 오류메시지를 보낸다.
    - 로그인 성공시 성공메시지와 토큰을 보낸다. 토큰은 id값과 연관되어 있다.

### Installing
    npm install

Start Server

    npm start

## Authors
  - [kitten-master](https://github.com/kitten-master) - **DG** - <dgdev@naver.com>
  - more detailed explanation - https://kangeee.tistory.com/236?category=1005552
  
See also the list of [contributors](https://github.com/kitten-master/jwt_login/graphs/contributors)
who participated in this project.


## License

```
MIT License

Copyright (c) 2021 always0ne

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
