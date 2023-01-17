import axios from "axios";

const url = "https://jsonplaceholder.ir/users";

fetch(url, {
  method: "GET",
})
  .then((response) => response.json())
  .then((json) => console.log(json));
