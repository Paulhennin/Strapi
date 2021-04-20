module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'myp'),
        username: env('DATABASE_USERNAME', 'myp'),
        password: env('DATABASE_PASSWORD', 'myp'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
