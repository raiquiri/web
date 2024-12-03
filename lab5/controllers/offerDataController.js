const isOfferDataValid = require("../validators/isOfferDataValid");

const {
  getOfferDataModel,
  postOfferDataModel,
} = require("../model/files/offerDataModel");

const getOfferData = (req, res, next) => {
  try {
    const data = getOfferDataModel();

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const postOfferData = (req, res, next) => {
  try {
    const data = req.body;

    // валидируем данные
    // если невалидны, то бросит ошибкуW
    isOfferDataValid(data);

    // если с данными все ок, тогда пишем в файл через модель файлов
    postOfferDataModel(JSON.stringify(data));
    res.status(200).json({
      message: "Данные успешно обновлены",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = { getOfferData, postOfferData };
