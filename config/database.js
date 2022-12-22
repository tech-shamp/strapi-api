module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("PGHOST", "containers-us-west-159.railway.app"),
      port: env.int("PGPORT", 5522),
      database: env("PGDATABASE", "railway"),
      user: env("PGUSER", "postgres"),
      password: env("PGPASSWORD", "7ZbNSjqh2La1cI7QzxRY"),
      ssl: env.bool(true),
    },
  },
});
