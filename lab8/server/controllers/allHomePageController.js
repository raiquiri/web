const {
    getAllHomePageDataModel,
} = require("../model/getAllHomePageDataModel");

const getAllHomePageData = (req, res, next) => {
  try {
    const data = getAllHomePageDataModel();

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = { getAllHomePageData };