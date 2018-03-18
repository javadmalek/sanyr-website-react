# Express Application (NodeJS, Express, Mongoose, JWT and REST API)
Securing Node, Express and Mongoose REST API using Passport.js Authentication. 

## Scripts
1. Start the project `npm start` Open: `http://localhost:3000`
2. Test the project `npm test`
 
## Libraries
```
npm install mongoose bcrypt-nodejs jsonwebtoken morgan passport passport-jwt --save
npm install mocha chai supertest--save - dev  

```

## Directories
```
./config => Configure Node.js Application

```

## Models
```
./models/
User Model  (Using "Bcrypt" and a function for compared encrypted password.)
Book Model
```

## API-Router and Endpoints

/api/users/signup (post) => a router for signup or register the new user. 
```
    end-point: http://localhost:3000/api/users/signup
    x-www-form-urlendoded
    body {
        username:mrjavad@gmail.com
        password:malek123
    }
    res {
        "success": true,
        "msg": "Successful created new user."
    }
```
            
/api/users/signin (post) => a router for login or sign-in.
```
    end-point: http://localhost:3000/api/users/signin
    x-www-form-urlendoded
    body {
        username:mrjavad@gmail.com
        password:malek123
    }
    res {
        "success": true,
        "token": "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwiX2lkIjoiNWE1YmQwZTAyNTNjODEyYjFjY2E2NjE5Iiwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsicGFzc3dvcmQiOiJpbml0IiwidXNlcm5hbWUiOiJpbml0IiwiX192IjoiaW5pdCIsIl9pZCI6ImluaXQifSwic3RhdGVzIjp7Imlnbm9yZSI6e30sImRlZmF1bHQiOnt9LCJpbml0Ijp7Il9fdiI6dHJ1ZSwicGFzc3dvcmQiOnRydWUsInVzZXJuYW1lIjp0cnVlLCJfaWQiOnRydWV9LCJtb2RpZnkiOnt9LCJyZXF1aXJlIjp7fX0sInN0YXRlTmFtZXMiOlsicmVxdWlyZSIsIm1vZGlmeSIsImluaXQiLCJkZWZhdWx0IiwiaWdub3JlIl19LCJwYXRoc1RvU2NvcGVzIjp7fSwiZW1pdHRlciI6eyJkb21haW4iOm51bGwsIl9ldmVudHMiOnt9LCJfZXZlbnRzQ291bnQiOjAsIl9tYXhMaXN0ZW5lcnMiOjB9LCIkb3B0aW9ucyI6dHJ1ZX0sImlzTmV3IjpmYWxzZSwiX2RvYyI6eyJfX3YiOjAsInBhc3N3b3JkIjoiJDJhJDEwJDd5eTdjMUFJNkllSmpuWkRGM04wL2V5YS9vZUVIMlNuYlI0YXJHeG5Ick5tZGs4OFZ4aXFHIiwidXNlcm5hbWUiOiJtcmphdmFkQGdtYWlsLmNvbSIsIl9pZCI6IjVhNWJkMGUwMjUzYzgxMmIxY2NhNjYxOSJ9LCIkaW5pdCI6dHJ1ZSwiaWF0IjoxNTE1OTY3MDc2fQ.VyWMZd7vMj88s3vs8xLeh7A0zfkFn0HjIFNlVkPQZPE"
    }
```
  
/api/books/book (post) => a router for add new book that only accessible to authorized user.
```
```

/api/books/book (get) => a router for getting list of books that accessible for authorized user.
```
    end-point: http://localhost:3000/api/books/book
    Header{
        Authorization:JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwiX2lkIjoiNWE1YmQwZTAyNTNjODEyYjFjY2E2NjE5Iiwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsicGFzc3dvcmQiOiJpbml0IiwidXNlcm5hbWUiOiJpbml0IiwiX192IjoiaW5pdCIsIl9pZCI6ImluaXQifSwic3RhdGVzIjp7Imlnbm9yZSI6e30sImRlZmF1bHQiOnt9LCJpbml0Ijp7Il9fdiI6dHJ1ZSwicGFzc3dvcmQiOnRydWUsInVzZXJuYW1lIjp0cnVlLCJfaWQiOnRydWV9LCJtb2RpZnkiOnt9LCJyZXF1aXJlIjp7fX0sInN0YXRlTmFtZXMiOlsicmVxdWlyZSIsIm1vZGlmeSIsImluaXQiLCJkZWZhdWx0IiwiaWdub3JlIl19LCJwYXRoc1RvU2NvcGVzIjp7fSwiZW1pdHRlciI6eyJkb21haW4iOm51bGwsIl9ldmVudHMiOnt9LCJfZXZlbnRzQ291bnQiOjAsIl9tYXhMaXN0ZW5lcnMiOjB9LCIkb3B0aW9ucyI6dHJ1ZX0sImlzTmV3IjpmYWxzZSwiX2RvYyI6eyJfX3YiOjAsInBhc3N3b3JkIjoiJDJhJDEwJDd5eTdjMUFJNkllSmpuWkRGM04wL2V5YS9vZUVIMlNuYlI0YXJHeG5Ick5tZGs4OFZ4aXFHIiwidXNlcm5hbWUiOiJtcmphdmFkQGdtYWlsLmNvbSIsIl9pZCI6IjVhNWJkMGUwMjUzYzgxMmIxY2NhNjYxOSJ9LCIkaW5pdCI6dHJ1ZSwiaWF0IjoxNTE1OTY3MDc2fQ.VyWMZd7vMj88s3vs8xLeh7A0zfkFn0HjIFNlVkPQZPE
    }
    res {
    
    }
    
```

## Tests
/api/uesrs:
```
 it should CREATE a User.
 it should NOT CREATE a User because the inputs are wrong.
 it should NOT CREATE a User because of duplicate email.
```

## MongoDB
```
Databes: C:\data\db

Run mongoDB: mongod
```

## Links

[HTTP-STATUS-CODES](http://www.restapitutorial.com/httpstatuscodes.html)

[DEVLOPMENT](https://www.djamware.com/post/58eba06380aca72673af8500/node-express-mongoose-and-passportjs-rest-api-authentication)