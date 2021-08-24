const express = require("express");
const routes = require("./src/routes/index")
const cors = require("cors")
const app = express();


app.use(cors())
/*app.use(cors({
  origin: "https://applicationdatecontrol.herokuapp.com",
})
);
*/

//Session

app.use(express.json());
app.use(routes);

module.exports = app;
