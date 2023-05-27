## 1. Installation

```bash
$ npm install
```

## 2. Make .env File

Please make .env file and write variables on this project. 

AWS_ACCESS_KEY_ID = "your aws access key id"
AWS_SECRET_ACCESS_KEY = "your aws secret access key"
AWS_REGION = "your aws region"

JWT_ACCESS_SECRET = "jwt_access_secret"
JWT_REFRESH_SECRET = "jwt_refresh_secret"

## 3. Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
The server will be running on localhost:3000
## 4. APIs

- Register api: 
role value must be "Admin" or "User" on this api. 

api: localhost:3000/auth/signup
method: POST
params:
{
    "email": "xxx.xx@com",
    "firstName": "xxx",
    "lastName": "xxx",
    "companyName": "xxx",
    "companyNumber": 1,
    "password": "xxxx",
    "role": "User"
}

- Login Api: 

endpoint: localhost:3000/auth/signin
method: POST
params:
{
    "email": "xxx@xxx.com",
    "password": "xxx"
}

- Get All Users Api: 
Only the Admin user can access to the api. Once common user try to access to there, the request will be rejected. 
The request must send with Bearer accessToken.

endpoint: localhost:3000/users
method: GET

- Get My Profile Api: 
The request must send with Bearer accessToken. This api return logged in user's profile.

endpoint: localhost:3000/users/userdata
method: GET

- GetUserById Api: 
The request must send with Bearer accessToken. 

endpoint: localhost:3000/users/:userId
method: GET
