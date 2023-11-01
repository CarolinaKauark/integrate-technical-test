const { updateBatchContacts, createBatchContacts, createContact, updateContacts, updateOrCreateContacts } = require("../helpers/hubspotHelpers");

const createContactObject = ({email, first_name, last_name, phone_number}) => {
  return {
    "email": email,
    "properties": [
      {
        "property": "firstname",
        "value": first_name 
      },
      {
        "property": "lastname",
        "value": last_name
      },
      {
        "property": "phone",
        "value": phone_number
      },
    ]
  }
}

const createOrUpdateHubContact = async (AWSData) => {
  const contactList = AWSData.filter((contact) => {
    if(contact.email)
    return createContactObject(contact)
  });
  await updateOrCreateContacts(contactList);
  return contactList; 
}

module.exports = { createOrUpdateHubContact };