# NLW5 - Website chat application

This is a website contact chat application proposed by [Rocketseat](https://rocketseat.com.br/) to be developed in a week long bootcamp. 


# Getting started

## Installing the project dependencies
Before getting started, it's important to notice that NodeJS and NPM are both essential dependencies to this project.
Having that you must install all its dependencies through the NPM package manager.

```bash
npm install
```
## Setting up the database
Having the dependencies installed, we can setup the database for our application. This could be done by running its migrations through the command:
```
yarn typeorm migrations:run
```

## Running the application
To run this application locally you just need to run the following:
```
yarn dev
```
This will run the web server and will be aware of any changes made in the code, so you don't have to re-run for every change that is made.

# Developer info

If you need to make changes to the database schema in this project - like creating new tables or altering them in any way, you should do it through migrations.

The database is managed by an ORM called typeorm. Its CLI is being used in this project through the script `typeorm` defined in `package.json`.

To create a new migration, you can run the following command:

```
yarn typeorm migrations:create -n <your-migration-name>

```
This will generate a migration script in the directory `src/database/migrations` where you can define the functions `up` and `down` for the changes using `typeorm`'s predefined functions to manage the database. 

Then, for your changes to take place you just run:
``` 
yarn typeorm migrations:run
```
In case of error or problems with the migration, you can rollback it by doing the following:
```
yarn typeorm migrations:revert
```