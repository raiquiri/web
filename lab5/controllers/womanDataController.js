const isWomanDataValid = require("../validators/isWomanDataValid");

const {
  getWomanDataModel,
  postWomanDataModel,
} = require("../model/files/womanDataModel");

const getWomanData = (req, res, next) => {
  try {
    const data = getWomanDataModel();

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const postWomanData = (req, res, next) => {
  try {
    const data = req.body;

    // валидируем данные
    // если невалидны, то бросит ошибку
    isWomanDataValid(data);

    // если с данными все ок, тогда пишем в файл через модель файлов
    postWomanDataModel(JSON.stringify(data));
    res.status(200).json({
      message: "Данные успешно обновлены",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = { getWomanData, postWomanData };
