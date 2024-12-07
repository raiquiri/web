const isFarewellDataValid = require("../validators/isFarewellDataValid");

const {
  getFarewellDataModel,
  postFarewellDataModel,
} = require("../model/files/farewellDataModel");

const getFarewellData = (req, res, next) => {
  try {
    const data = getFarewellDataModel();

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const postFarewellData = (req, res, next) => {
  try {
    const data = req.body;

    // валидируем данные
    // если невалидны, то бросит ошибку
    isFarewellDataValid(data);

    // если с данными все ок, тогда пишем в файл через модель файлов
    postFarewellDataModel(JSON.stringify(data));
    res.status(200).json({
      message: "Данные успешно обновлены",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = { getFarewellData, postFarewellData };
