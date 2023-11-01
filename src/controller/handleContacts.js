const getAWSData = require("../helpers/AWSRequests");
// const {getContacts, updateContacts} = require("../helpers/hubspotClient");
const { getContacts, updateContacts } = require("../helpers/hubspotHelpers");

const handleContacts = async (req, res, next) => {
  try {
    const AWSData = await getAWSData();
    const existentContacts = await getContacts();
    for (let i = 0; i < existentContacts.length;  i += 1) {
      if (existentContacts[i].properties.email === 'new-email@hubspot.com') {
        // const payload = {
        //   id: existentContacts[i].id,
        //   "properties": [
        //     {
        //       "property": "email",
        //       "value": "mariaemail@hubspot.com"
        //     },
        //     {
        //       "property": "firstname",
        //       "value": "Maria"
        //     }]
        //   }

        const payload = {
          "id": 1,
          "properties": {
            "email": "new-email@hubspot.com",
            "firstname": "Maria",
          },
        }
        await updateContacts(existentContacts[i].id, payload);
      }
    }
    // const UPDATEDContacts = await getContacts();
    res.status(200).json(existentContacts);
  } catch(error) {
    next(error);
  }
}

module.exports = handleContacts;