# Technical test for Integrate IQ

Project developed for Integrate IQ - technical test. 

## ✏ About this project

The aim of this project was to develop an integration that consumes an AWS API and pushes the data received as contact data into HubSpot.

The app was developed using <strong>MSC architecture</strong>, implemented with <strong>Node.js</strong> and <strong>Javascript</strong>.

## 🛸 Main technologies used

- [Node.js](https://nodejs.org/en/);
- [Express.js](https://expressjs.com/);
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript);

## ⚙ How to run this project locally

<strong>1. Clone the repository and change the directory to it:</strong>

- Kindly check that the current working directory is the desired one before proceeding

``` 
 git clone git@github.com:CarolinaKauark/to-do-app_backend.git
 cd integrate-technical-test
 ```

<strong>2 Install dependencies inside the container using:</strong>

  ``` 
  npm install
  ``` 
  
<strong>3 Run these scripts to start the backend service:</strong>
  
  ``` 
  npm run dev
  ```

## ⚙ How to test this project locally 

<strong>1. Open your favorite tool used for testing client APIs</strong>

- Select the "PUT" method and add the URL below as your endpoint. Remember to change the PORT variable.

 ``` 
  http://localhost:{PORT}/create-new-contacts
  ```

© Developed by [Carolina Kauark Fontes](https://www.linkedin.com/in/carolina-kauark-fontes/)
