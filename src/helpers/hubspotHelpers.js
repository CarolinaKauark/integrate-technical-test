const { default: axios } = require('axios');
require('dotenv').config();

const API_KEY = process.env.API_KEY;

const updateOrCreateContacts = async (payload) => {
  try {
    const response = await axios.post(`https://api.hubapi.com/contacts/v1/contact/batch/`, payload, {
      headers: {
          'Authorization': 'Bearer ' + API_KEY,
          'Content-Type': 'application/json'
      },
    })
    return response.data.results;
  } catch(error) {
    console.log('updateOrCreateContacts error', error);
  }
}

const getContacts = async () => {
  try {
    const response = await axios.get(`https://api.hubspot.com/crm/v3/objects/contacts`, {
      headers: {
          'Authorization': 'Bearer ' + API_KEY,
          'Content-Type': 'application/json'
      }
    })

    console.log('get contacts data', response.data);
    return response.data.results;
  } catch(error) {
    console.log('get contacts error', error.message);
  }
}

const updateBatchContacts = async (payload) => {
  try {
    const response = await axios.post(`https://api.hubspot.com/crm/v3/objects/contacts/batch/update`, payload, {
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

const createBatchContacts = async (payload) => {
  try {
    const response = await axios.post(`https://api.hubspot.com/crm/v3/objects/contacts/batch/create`, payload, {
      headers: {
          'Authorization': 'Bearer ' + API_KEY,
          'Content-Type': 'application/json'
      },
    })
    console.log('createContacts data', response.data);
    return response.data.results;
  } catch(error) {
    console.log('createContacts error', error);
  }
}

const createContact = async (payload) => {
  try {
    const response = await axios.post(`https://api.hubspot.com/crm/v3/objects/contacts`, payload, {
      headers: {
          'Authorization': 'Bearer ' + API_KEY,
          'Content-Type': 'application/json'
      },
    })
    console.log('createContacts data', response.data);
    return response.data.results;
  } catch(error) {
    console.log('createContacts error', error);
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

module.exports = { updateOrCreateContacts };