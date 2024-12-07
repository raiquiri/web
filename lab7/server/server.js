// это импорт приложения из пакета
// аналогичен import X from 'ROUTE' из es6
require("dotenv").config();
const express = require("express");
// для того, чтобы разрешить запросы на сервер (без него никак не получается)
const cors = require("cors");

// импортируем роутер
const router = require("./routers/router");
const errorRouter = require("./routers/errorRouter");

// вызываем экспресс для получения приложения
const app = express();

// middleware для использования json
app.use(express.json());

// доступ клиента
app.use(cors({
  origin: "http://localhost:3000", // Укажите URL вашего клиента
  methods: "GET, POST", // Разрешённые методы
  allowedHeaders: "Content-Type, Authorization", // Разрешённые заголовки
})
);

// добавляем роутер в приложение
app.use("/api/cms", router);

// если маршрут неверный среди всех API
app.use("*", errorRouter);

// читаем порт приложения или берем по умолчанию 5к
const APP_PORT = process.env.APP_PORT || 5000;

// запускаем приложение
app.listen(APP_PORT, () => {
  console.log(`Server started on PORT: ${APP_PORT}`);
});
