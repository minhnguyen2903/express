const express = require("express");
const fs = require("fs");
const verityToken = require("../middleware/verifyToken");
const db = require("../models");
const router = express.Router();
const vocabulary = require("./vocabulary.json");
/* GET home page. */
router.get("/", function (req, res, next) {
  console.log("user access");
  res.render("index", { title: "Express" });
});

router.get("/mount", async function (req, res, next) {
  // db.users.create()
  await db.timezones.sync();
  await db.invoices.sync();
  await db.vocabulary.sync();
  const { vocabularies } = vocabulary;
  const timezoneCount = await db.timezones.count();
  const vocabularyCount = await db.vocabulary.count();
  !timezoneCount &&
    timezones.forEach((element) => db.timezones.create(element));
  !vocabularyCount &&
    vocabularies.forEach((element) => {
      db.vocabulary.create(element);
    });
  res.send("mount done!");
});

module.exports = router;

const timezones = [
  {
    region: "Casablanca",
    timezone: "UTC",
  },
  {
    region: "Coordinated Universal Time",
    timezone: "UTC",
  },
  {
    region: "Dublin, Edinburgh, Lisbon, London",
    timezone: "UTC",
  },
  {
    region: "Monrovia, Reykjavik",
    timezone: "UTC",
  },
  {
    region: "Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna",
    timezone: "UTC+01:00",
  },
  {
    region: "Belgrade, Bratislava, Budapest, Ljubljana, Prague",
    timezone: "UTC+01:00",
  },
  {
    region: "Brussels, Copenhagen, Madrid, Paris",
    timezone: "UTC+01:00",
  },
  {
    region: "Sarajevo, Skopje, Warsaw, Zagreb",
    timezone: "UTC+01:00",
  },
  {
    region: "West Central Africa",
    timezone: "UTC+01:00",
  },
  {
    region: "Windhoek",
    timezone: "UTC+01:00",
  },
  {
    region: "Amman",
    timezone: "UTC+02:00",
  },
  {
    region: "Athens, Bucharest",
    timezone: "UTC+02:00",
  },
  {
    region: "Beirut",
    timezone: "UTC+02:00",
  },
  {
    region: "Cairo",
    timezone: "UTC+02:00",
  },
  {
    region: "Damascus",
    timezone: "UTC+02:00",
  },
  {
    region: "Harare, Pretoria",
    timezone: "UTC+02:00",
  },
  {
    region: "Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius",
    timezone: "UTC+02:00",
  },
  {
    region: "Istanbul",
    timezone: "UTC+02:00",
  },
  {
    region: "Jerusalem",
    timezone: "UTC+02:00",
  },
  {
    region: "Nicosia",
    timezone: "UTC+02:00",
  },
  {
    region: "Baghdad",
    timezone: "UTC+03:00",
  },
  {
    region: "Kaliningrad, Minsk",
    timezone: "UTC+03:00",
  },
  {
    region: "Kuwait, Riyadh",
    timezone: "UTC+03:00",
  },
  {
    region: "Nairobi",
    timezone: "UTC+03:00",
  },
  {
    region: "Tehran",
    timezone: "UTC+03:30",
  },
  {
    region: "Abu Dhabi, Muscat",
    timezone: "UTC+04:00",
  },
  {
    region: "Baku",
    timezone: "UTC+04:00",
  },
  {
    region: "Moscow, St. Petersburg, Volgograd",
    timezone: "UTC+04:00",
  },
  {
    region: "Port Louis",
    timezone: "UTC+04:00",
  },
  {
    region: "Tbilisi",
    timezone: "UTC+04:00",
  },
  {
    region: "Yerevan",
    timezone: "UTC+04:00",
  },
  {
    region: "Kabul",
    timezone: "UTC+04:30",
  },
  {
    region: "Islamabad, Karachi",
    timezone: "UTC+05:00",
  },
  {
    region: "Tashkent",
    timezone: "UTC+05:00",
  },
  {
    region: "Chennai, Kolkata, Mumbai, New Delhi",
    timezone: "UTC+05:30",
  },
  {
    region: "Sri Jayawardenepura",
    timezone: "UTC+05:30",
  },
  {
    region: "Kathmandu",
    timezone: "UTC+05:45",
  },
  {
    region: "Astana",
    timezone: "UTC+06:00",
  },
  {
    region: "Dhaka",
    timezone: "UTC+06:00",
  },
  {
    region: "Ekaterinburg",
    timezone: "UTC+06:00",
  },
  {
    region: "Yangon (Rangoon)",
    timezone: "UTC+06:30",
  },
  {
    region: "Bangkok, Hanoi, Jakarta",
    timezone: "UTC+07:00",
  },
  {
    region: "Novosibirsk",
    timezone: "UTC+07:00",
  },
  {
    region: "Beijing, Chongqing, Hong Kong, Urumqi",
    timezone: "UTC+08:00",
  },
  {
    region: "Krasnoyarsk",
    timezone: "UTC+08:00",
  },
  {
    region: "Kuala Lumpur, Singapore",
    timezone: "UTC+08:00",
  },
  {
    region: "Perth",
    timezone: "UTC+08:00",
  },
  {
    region: "Taipei",
    timezone: "UTC+08:00",
  },
  {
    region: "Ulaanbaatar",
    timezone: "UTC+08:00",
  },
  {
    region: "Irkutsk",
    timezone: "UTC+09:00",
  },
  {
    region: "Osaka, Sapporo, Tokyo",
    timezone: "UTC+09:00",
  },
  {
    region: "Seoul",
    timezone: "UTC+09:00",
  },
  {
    region: "Adelaide",
    timezone: "UTC+09:30",
  },
  {
    region: "Darwin",
    timezone: "UTC+09:30",
  },
  {
    region: "Brisbane",
    timezone: "UTC+10:00",
  },
  {
    region: "Canberra, Melbourne, Sydney",
    timezone: "UTC+10:00",
  },
  {
    region: "Guam, Port Moresby",
    timezone: "UTC+10:00",
  },
  {
    region: "Hobart",
    timezone: "UTC+10:00",
  },
  {
    region: "Yakutsk",
    timezone: "UTC+10:00",
  },
  {
    region: "Solomon Is., New Caledonia",
    timezone: "UTC+11:00",
  },
  {
    region: "Vladivostok",
    timezone: "UTC+11:00",
  },
  {
    region: "Auckland, Wellington",
    timezone: "UTC+12:00",
  },
  {
    region: "Coordinated Universal Time+12",
    timezone: "UTC+12:00",
  },
  {
    region: "Fiji",
    timezone: "UTC+12:00",
  },
  {
    region: "Magadan",
    timezone: "UTC+12:00",
  },
  {
    region: "Petropavlovsk-Kamchatsky - Old",
    timezone: "UTC+12:00",
  },
  {
    region: "Nuku'alofa",
    timezone: "UTC+13:00",
  },
  {
    region: "Samoa",
    timezone: "UTC+13:00",
  },
  {
    region: "Azores",
    timezone: "UTC-01:00",
  },
  {
    region: "Cape Verde Is.",
    timezone: "UTC-01:00",
  },
  {
    region: "Coordinated Universal Time-02",
    timezone: "UTC-02:00",
  },
  {
    region: "Mid-Atlantic",
    timezone: "UTC-02:00",
  },
  {
    region: "Brasilia",
    timezone: "UTC-03:00",
  },
  {
    region: "Buenos Aires",
    timezone: "UTC-03:00",
  },
  {
    region: "Cayenne, Fortaleza",
    timezone: "UTC-03:00",
  },
  {
    region: "Greenland",
    timezone: "UTC-03:00",
  },
  {
    region: "Montevideo",
    timezone: "UTC-03:00",
  },
  {
    region: "Salvador",
    timezone: "UTC-03:00",
  },
  {
    region: "Newfoundland",
    timezone: "UTC-03:30",
  },
  {
    region: "Asuncion",
    timezone: "UTC-04:00",
  },
  {
    region: "Atlantic Time (Canada)",
    timezone: "UTC-04:00",
  },
  {
    region: "Cuiaba",
    timezone: "UTC-04:00",
  },
  {
    region: "Georgetown, La Paz, Manaus, San Juan",
    timezone: "UTC-04:00",
  },
  {
    region: "Santiago",
    timezone: "UTC-04:00",
  },
  {
    region: "Caracas",
    timezone: "UTC-04:30",
  },
  {
    region: "Bogota, Lima, Quito",
    timezone: "UTC-05:00",
  },
  {
    region: "Eastern Time (US & Canada)",
    timezone: "UTC-05:00",
  },
  {
    region: "Indiana (East)",
    timezone: "UTC-05:00",
  },
  {
    region: "Central America",
    timezone: "UTC-06:00",
  },
  {
    region: "Central Time (US & Canada)",
    timezone: "UTC-06:00",
  },
  {
    region: "Guadalajara, Mexico City, Monterrey",
    timezone: "UTC-06:00",
  },
  {
    region: "Saskatchewan",
    timezone: "UTC-06:00",
  },
  {
    region: "Arizona",
    timezone: "UTC-07:00",
  },
  {
    region: "Chihuahua, La Paz, Mazatlan",
    timezone: "UTC-07:00",
  },
  {
    region: "Mountain Time (US & Canada)",
    timezone: "UTC-07:00",
  },
  {
    region: "Baja California",
    timezone: "UTC-08:00",
  },
  {
    region: "Pacific Time (US & Canada)",
    timezone: "UTC-08:00",
  },
  {
    region: "Alaska",
    timezone: "UTC-09:00",
  },
  {
    region: "Hawaii",
    timezone: "UTC-10:00",
  },
  {
    region: "Coordinated Universal Time-11",
    timezone: "UTC-11:00",
  },
  {
    region: "International Date Line West",
    timezone: "UTC-12:00",
  },
];

const invoices = [];
