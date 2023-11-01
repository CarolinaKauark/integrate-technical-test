const getAWSData = require("../helpers/AWSRequests");
const { createOrUpdateHubContact } = require("../service/contact.service");

const handleContacts = async (req, res, next) => {
  try {
    const AWSData = await getAWSData();
    await createOrUpdateHubContact(AWSData);
    res.status(204).end();
  } catch(error) {
    next(error);
  }
}

module.exports = handleContacts;