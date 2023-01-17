"use strict";
exports.__esModule = true;
var url = "https://jsonplaceholder.ir/users";
fetch(url, {
    method: "GET"
})
    .then(function (response) { return response.json(); })
    .then(function (json) { return console.log(json); });
