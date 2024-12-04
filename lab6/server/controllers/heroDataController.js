const isHeroDataValid = require("../validators/isHeroDataValid");

const {
  getHeroDataModel,
  postHeroDataModel,
} = require("../model/files/heroDataModel");

const getHeroData = (req, res, next) => {
  try {
    const data = getHeroDataModel();

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const postHeroData = (req, res, next) => {
  try {
    const data = req.body;

    // валидируем данные
    // если невалидны, то бросит ошибку
    isHeroDataValid(data);

    // если с данными все ок, тогда пишем в файл через модель файлов
    postHeroDataModel(JSON.stringify(data));
    res.status(200).json({
      message: "Данные успешно обновлены",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = { getHeroData, postHeroData };
