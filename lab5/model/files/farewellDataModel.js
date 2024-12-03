const { readFileSync, writeFileSync } = require("fs");
const { join } = require("path");

const filePath = join(__dirname, "..", "..", "db", "files", "farewellData.json");

const getFarewellDataModel = () => {
  try {
    const file = readFileSync(filePath, "utf-8");
    console.log(file);

    return JSON.parse(file);
  } catch (error) {
    console.log(error);
    throw new Error("Не получилось прочитать данные и файла");
  }
};

const postFarewellDataModel = (data) => {
  try {
    writeFileSync(filePath, data);
  } catch (error) {
    console.log(error);
    throw new Error("Не получилось записать данные в файл");
  }
};

module.exports = { getFarewellDataModel, postFarewellDataModel };
