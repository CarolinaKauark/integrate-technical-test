const hubspot = require('@hubspot/api-client');
const { default: axios } = require('axios');

require('dotenv').config();

const API_KEY = process.env.API_KEY;
const hubspotClient = new hubspot.Client({ accessToken: API_KEY })

const getContacts = async () => {
  try {
    const allContacts = await hubspotClient.crm.contacts.getAll();
    console.log(allContacts);

    return allContacts;
  } catch(error) {
    console.log('get contacts error', error.message);
  }
}

const updateContacts = async (email, payload) => {
  console.log('updateContacts');
  try {
    // await hubspotClient.crm.contacts.basicApi.update({ inputs: payload });
    const response = await axios.post(`https://api.hubapi.com/contacts/v1/contact/email/${email}/profile`, payload, {
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