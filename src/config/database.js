module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    timestamps: true,
    underscoded: true,
    underscodedAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
};
