const { default: axios } = require('axios');
require('dotenv').config();

const API_KEY = process.env.API_KEY;


const getContacts = async () => {
  try {
    const response = await axios.get(`https://api.hubspot.com/crm/v3/objects/contacts`, {
      headers: {
          'Authorization': 'Bearer ' + API_KEY,
          'Content-Type': 'application/json'
      }
    })

    // console.log('get contacts data', response.data);
    return response.data.results;
  } catch(error) {
    console.log('get contacts error', error.message);
  }
}

const updateContacts = async (contactId, payload) => {
  console.log('updateContacts');
  try {
    const response = await axios.patch(`https://api.hubspot.com/crm/v3/objects/contacts/${contactId}`, payload, {
      headers: {
          'Authorization': 'Bearer ' + API_KEY,
          'Content-Type': 'application/json'
      },
    })
    console.log('updateContacts data', response.data);
    return response.data.results;
  } catch(error) {
    console.log('updateContacts error', error);
  }
}

module.exports = {getContacts, updateContacts};