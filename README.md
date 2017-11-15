# Socio
A simple social network implemented using Vue, Vuetify, Vuex, Vue-Router, Tappy, NodeJS, ExpressJS, MariaDB, Sequelize and BCrypt.

## Installation instrutions
From the root folder of the project issue the following command.

```
bash installdependencies.sh
```

## Environment Variables
* SQLDBNAME - The Database name. (NOTE: Must already be created prior to execution)
* SQLUSER - Sql Username.
* SQLPASSWORD - Corresponding Sql User password.

## Local Execution
From the root folder of the project issue the following command.

```
npm run dev
```

## Online Demo
The project is also hosted on [heroku](http://socio-dbms.herokuapp.com). (NOTE: Triggers and Procedures cannot be implemented on Ignite-Free version of ClearDB on heroku, hence those two are disabled)

## Misc
* One must note that the ```email``` field during registration and login of users has Keystroke Dynamics enabled. So they have to remember the rhythm too apart from their password.
* The credentials for Admin are email - 'red@gmail.com' and password - '528751011', lose the quotes.
