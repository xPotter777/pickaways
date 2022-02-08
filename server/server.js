//std node libraries
require("dotenv").config();
const http = require("http");
const { MongoClient } = require("mongodb");
//modules
const app = require("./app");
//DAO layers
const GiveawaysDao = require("./dao/giveawaysDao");

const server = http.createServer(app);

const PORT = process.env.PORT || 8000;

const mongoClient = new MongoClient(process.env.PICKAWAYS_DB_URI, {
  useNewUrlParser: true,
});

mongoClient
  .connect()
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  })
  .then(async (client) => {
    await GiveawaysDao.injectDB(client);

    server.listen(PORT, () => {
      console.log(`SERVER HAS STARTED ON ${PORT}`);
    });
  });
