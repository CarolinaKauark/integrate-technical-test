const getAWSData = require("../helpers/AWSRequests");

const handleContacts = async (req, res, next) => {
  try {
    // await getBudget();
    const AWSData = await getAWSData();
    // await createCustomObject(teamworkData);
    res.status(200).json(AWSData);
  } catch(error) {
    next(error);
  }
}

module.exports = handleContacts;