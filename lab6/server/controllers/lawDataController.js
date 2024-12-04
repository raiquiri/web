const isLawDataValid = require("../validators/isLawDataValid");

const {
  getLawDataModel,
  postLawDataModel,
} = require("../model/files/lawDataModel");

const getLawData = (req, res, next) => {
  try {
    const data = getLawDataModel();

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const postLawData = (req, res, next) => {
  try {
    const data = req.body;

    // валидируем данные
    // если невалидны, то бросит ошибку
    isLawDataValid(data);

    // если с данными все ок, тогда пишем в файл через модель файлов
    postLawDataModel(JSON.stringify(data));
    res.status(200).json({
      message: "Данные успешно обновлены",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = { getLawData, postLawData };
