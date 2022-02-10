let pickaways;
let users;

class UsersDAO {
  async injectDB(conn) {
    if (pickaways) {
      return;
    }
    try {
      pickaways = await conn.db(process.env.PICKAWAYS_DB_NAME);
      users = await conn.db(process.env.PICKAWAYS_DB_NAME).collection("users");
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in usersDAO: ${e}`
      );
    }
  }

  async login({ id, displayName }) {
    let user;
    try {
      let candidate = await users.findOne({ $where: id });
      if (!candidate) {
        try {
          user = await users.insertOne({ _id: id, displayName });
        } catch (e) {
          console.error(`Unable to create user, ${e}`);
        }
      }
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`);
      return { user: {} };
    }
    return { user };
  }
}

module.exports = new UsersDAO();
