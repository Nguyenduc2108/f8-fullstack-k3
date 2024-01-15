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
  existEmail: (email, id = 0) => {
    const ignore = id > 0 ? sql`AND id != ${id}` : sql``;
    return sql`SELECT id FROM users WHERE email=${email}${ignore} `;
  },
  create: ({ name, email, status }) => {
    return sql`INSERT INTO users(name,email,status,created_at,updated_at) VALUES(${name},${email},${status}, NOW(),NOW())`;
  },
  find: (id) => {
    return sql`SELECT * FROM users WHERE id = ${id}`;
  },
  update: ({ name, email, status }, id) => {
    return sql`UPDATE users SET name=${name},email=${email},status=${status},update_at=NOW() WHERE id=${id}`;
  },
  delete: (id) => {
    return sql`DELETE FROM users WHERE id=${id}`;
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
