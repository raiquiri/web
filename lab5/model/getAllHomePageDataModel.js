const { readFileSync, readdirSync } = require("fs");
const { join } = require("path");

const readJSONFile = (filePath) => {
    try {
        const file = readFileSync(filePath, "utf-8");
        return JSON.parse(file);
    } catch (error) {
        console.log(`Ошибка при чтении файла ${filePath}:`, error.message);
        return null;
    }
};

const getAllHomePageDataModel = () => {
    try {
        const directoryPath = join(__dirname, "..", "db", "files");
        const files = readdirSync(directoryPath).filter(file => file.endsWith(".json"));
        const pageData = {};

        files.forEach((file) => {
            const section = file.replace(".json", "");
            const filePath = join(directoryPath, file);
            const data = readJSONFile(filePath);
            if (data) {
                pageData[section] = data;
            }
        });

        return pageData;
    } catch (error) {
        console.log("Ошибка при сборе данных страницы:", error.message);
        throw new Error("Не удалось собрать данные для страницы");
    }
};

module.exports = { getAllHomePageDataModel };