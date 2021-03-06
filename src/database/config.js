const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CONECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log('Base de datos online');
  } catch (error) {
    console.log(error);
    throw new Error('No se ha podido conectar a la base de datos.');
  }
};

module.exports = { dbConnection };
