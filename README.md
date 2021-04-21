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