const sql = require("../utils/db");

module.exports = {
  all: (status, keyword) => {
    let filter = sql`WHERE name IS NOT NULL`;
    if (status === "active" || status === "inactive") {
      filter = sql`WHERE status=${status === "active"}`;
    }
    if (keyword) {
      filter = sql`${filter} AND LOWER(email) LIKE ${
        "%" + keyword.toLowerCase() + "%"
      }`;
    }

    return sql`SELECT * FROM users ${filter}`;
  },
};

/*
1. khong loc
SELECT * FROM users

2.Loc the status
SELECT * FROM users WHERE status=${status}

3.Loc the keyword
SELECT * FROM users WHERE email LIKE '%${keyword}%'

4. loc theo status va keyword
*/
