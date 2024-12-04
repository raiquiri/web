const express = require("express");
const router = express.Router();

// Header роутер
const {
  getHeaderData,
  postHeaderData,
} = require("../controllers/headerDataController");

router.route("/header").get(getHeaderData).post(postHeaderData);

// Hero роутер
const {
  getHeroData,
  postHeroData,
} = require("../controllers/heroDataController");

router.route("/hero").get(getHeroData).post(postHeroData);

// Brands роутер
const {
  getBrandsData,
  postBrandsData,
} = require("../controllers/brandsDataController");

router.route("/brands").get(getBrandsData).post(postBrandsData);

// Future Here роутер
const {
  getFutureHereData,
  postFutureHereData,
} = require("../controllers/futureHereDataController");

router.route("/future-here").get(getFutureHereData).post(postFutureHereData);

// WhatIsGpt роутер
const {
  getWhatIsGptData,
  postWhatIsGptData,
} = require("../controllers/whatIsGptDataController");

router.route("/what-is-gpt").get(getWhatIsGptData).post(postWhatIsGptData);

// Woman роутер
const {
  getWomanData,
  postWomanData,
} = require("../controllers/womanDataController");

router.route("/woman").get(getWomanData).post(postWomanData);

// Offer роутер
const {
  getOfferData,
  postOfferData,
} = require("../controllers/offerDataController");

router.route("/offer").get(getOfferData).post(postOfferData);

// Blog роутер
const {
  getBlogData,
  postBlogData,
} = require("../controllers/blogDataController");

router.route("/blog").get(getBlogData).post(postBlogData);

// Farewell роутер
const {
  getFarewellData,
  postFarewellData,
} = require("../controllers/farewellDataController");

router.route("/farewell").get(getFarewellData).post(postFarewellData);

// Law роутер
const {
  getLawData,
  postLawData,
} = require("../controllers/lawDataController");

router.route("/law").get(getLawData).post(postLawData);

// HomePage роутер
const {
  getAllHomePageData,
} = require("../controllers/allHomePageController");

router.route("/homePage").get(getAllHomePageData);

module.exports = router;