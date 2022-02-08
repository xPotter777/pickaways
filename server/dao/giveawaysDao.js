let giveaways;
let pickaways;

class GiveawaysDAO {
  async injectDB(conn) {
    if (pickaways) {
      return;
    }
    try {
      pickaways = await conn.db(process.env.PICKAWAYS_DB_NAME);
      giveaways = await conn
        .db(process.env.PICKAWAYS_DB_NAME)
        .collection("giveaways");
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in moviesDAO: ${e}`
      );
    }
  }
  async getGiveaways() {
    let cursor;

    try {
      cursor = await giveaways.find();
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`);
      return { giveawaysList: [] };
    }

    try {
      const giveawaysList = await cursor.toArray();
      console.log("giveawaysList", giveawaysList);
      return { giveawaysList };
    } catch (e) {
      console.error(
        `Unable to convert cursor to array or problem counting documents, ${e}`
      );
      return { giveawaysList: [], totalNumMovies: 0 };
    }
  }
}

module.exports = new GiveawaysDAO();
