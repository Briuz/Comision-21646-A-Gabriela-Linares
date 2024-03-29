import { Sequelize } from "sequelize";


export const sequelize = new Sequelize('epica', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

  export const startDb = async() => {
    try {
        await sequelize.authenticate();
        //await sequelize.sync({force : true}); //Borra posts creados anteriormente
        await sequelize.sync();
        console.log('La conexion se establecio exitosamente.');
      } catch (error) {
        console.error('Imposible conectarse a la base de datos:', error);
      }
  }