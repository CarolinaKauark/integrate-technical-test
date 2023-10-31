const { default: axios } = require('axios');
require('dotenv').config();

const AWS_TOKEN = process.env.AWS_TOKEN;

// return a array of all the budgets in teamwork
const getAWSData = async () => {

  try {
    const response = await axios.get(`https://l0hefgbbla.execute-api.us-east-1.amazonaws.com/prod/contacts`, {
      headers: {
          'Authorization': 'Bearer ' + AWS_TOKEN,
          'Content-Type': 'application/json'
      }
    })

    console.log('get aws data', response.data);
    return response.data;
  } catch(error) {
    console.log('get aws data error', error.message);
  }
}

module.exports = getAWSData;