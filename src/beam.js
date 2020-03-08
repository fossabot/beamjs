'use strict';

    require("dotenv").config();

var { login, getUserInfo } = require(`${__dirname}/functions/main.js`);
module.exports = {
    login: login,
    getUserInfo: getUserInfo,
};
