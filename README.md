# CLIENT RELATIONSHIP MANAGER

Client Relationship manager to manage client details. Intented to act as two separate node applications.

## PREREQUISITES

It is recommended, and necessary, to have node installed to run this project in your system. To run the backend, you will also need mongoDB. _MongoDB Compass is recommended for testing, but not necessary._

## FRONT END: brand_crm

The node application in brand_crm is the front-end weebpage. It fetches and displays the client details, giving you the option to also edit them freely.

### RECOMMENDED: Setup

 Step 1: Install the packages necessary
> First, open the terminal to the directory brand_crm. Then, run the command `npm install`. This will install all the necessary packages.

Step 2: Run the web app

> To run the web app, use `npm start` for the development build or `npm build` for the production build.

### Information: Packages used

The project has been built using [ReactJS](https://react.dev), [Redux Toolkit](https://redux-toolkit.js.org), [React Router](https://reactrouter.com/en/main), [Material UI](https://mui.com) etc.

## BACK END: brand_crm_backend

The node application in brand_crm_backend is the server. It connects to MongoDB and listens to `localhost`. As such, it can be locally hosted

### RECOMMENDED: Setup

Step 1: Install the packages necessary

> First, open the terminal to the directory brand_crm_backend. Then, run the command `npm install`.

Step 2: Server

> To run the server, use `node .\server\app.js`. PS: It is recommended to install [Nodemon](https://nodemon.io) using `npm nodemon` and run the server with `npx nodemon .\server\app.js`, to restart the server more easily.

### Information: Packages used

The project has been built primarily using [MongoDB](https://www.mongodb.com) and [ExpressJS](https://expressjs.com)

##Thank You
