# welcome to flights and sevices 

## Project setup
- clone the project in local 
- Execute `npm install` on the same path as of your root directory
- Create a `.env ` in the root directory and add following environment variables 
- `PORT=3000`
- Inside the `src/config` folder create a new file `config.json` and add the following json code 
```
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flight_Search_DEV_DB",
    "host": "127.0.0.1",
    "dialect": "mysql"
  } 
}

```