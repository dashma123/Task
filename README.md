# Task Manager API

Simple REST API for managing tasks.

## Day 1 - Node & Express setup

- set up project with npm init
- installed express, mongoose, dotenv, cors, morgan, nodemon
- created app.js and server.js
- added basic test route on "/"
- set up .env for port number
- added .gitignore for node_modules and .env

to run:
npm install
npm run dev

## Day 2 - MongoDB connection

- installed mongoose (already done day 1)
- created src/config/db.js to connect to mongodb using mongoose
- added MONGO_URI to .env
- updated server.js to connect to db first, then start the server

## Day 3 - CRUD APIs

- created Task model with title, description, status
- created taskController.js with create, get all, get one, update, delete
- created taskRoutes.js and connected it in app.js
- tested all routes with curl - create, read, update, delete all working