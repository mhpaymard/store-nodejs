const { Application } = require("./app/app");

new Application({PORT:5000,DB_URL:"mongodb://127.0.0.1:27017/store"})