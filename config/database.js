module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("PGHOST", "containers-us-west-98.railway.app"),
      port: env.int("PGPORT", 5789),
      database: env("PGDATABASE", "railway"),
      user: env("PGUSER", "postgres"),
      password: env("PGPASSWORD", "f8JvOs0RxMpJXedJ1zyF"),
    },
  },
});
