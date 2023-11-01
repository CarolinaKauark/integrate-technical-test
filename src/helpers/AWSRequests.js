const { default: axios } = require('axios');
const errorGenerate = require('./errorGenerate');
require('dotenv').config();

const AWS_TOKEN = process.env.AWS_TOKEN;

const getAWSData = async () => {
  try {
    const response = await axios.get(`https://l0hefgbbla.execute-api.us-east-1.amazonaws.com/prod/contacts`, {
      headers: {
          'Authorization': 'Bearer ' + AWS_TOKEN,
          'Content-Type': 'application/json'
      }
    })
    return response.data;
  } catch(error) {
    throw errorGenerate(error.status, error.message);
  }
}

module.exports = getAWSData;