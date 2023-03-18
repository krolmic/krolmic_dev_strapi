module.exports = ({ env }) => ({
    connection: {
      client: "DATABASE_CLIENT",
      connection: {
        host: env("DATABASE_HOST", ""),
        port: env.int("DATABASE_PORT", 1234),
        database: env("DATABASE_NAME", ""),
        user: env("DATABASE_USERNAME", ""),
        password: env("DATABASE_PASSWORD", ""),
      },
      acquireConnectionTimeout: 1000000,
      pool: {
        min: 0,
        max: 5,
        acquireTimeoutMillis: 300000,
        createTimeoutMillis: 300000,
        destroyTimeoutMillis: 300000,
        idleTimeoutMillis: 30000,
        reapIntervalMillis:1000,
        createRetryIntervalMillis: 2000
      },
      debug: false,
    },
  });
  