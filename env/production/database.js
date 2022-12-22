module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      PGHOST: env("DATABASE_HOST", "containers-us-west-159.railway.app"),
      PGPORT: env.int("DATABASE_PORT", 5522),
      PGDATABASE: env("DATABASE_NAME", "railway"),
      PGUSER: env("DATABASE_USERNAME", "postgres"),
      PGPASSWORD: env("DATABASE_PASSWORD", "7ZbNSjqh2La1cI7QzxRY"),
      DATABASE_URL: env(
        "DATABASE_URL",
        `postgresql://${{ PGUSER }}:${{ PGPASSWORD }}@${{ PGHOST }}:${{
          PGPORT,
        }}/${{ PGDATABASE }}`
      ),
      schema: env("DATABASE_SCHEMA", "public"), // Not required
    },
    debug: false,
  },
});
