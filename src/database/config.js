const { connect } = require('mongoose');

const dbConnection = async () =>{
    try {
        await connect(process.env.DB_CONECTION,{
            useNewUrlParser: true,
        });

        console.log('Connection to data base is success');

    } catch (error) {
        console.log('Opp! there is a error', error);
    }
}

module.exports = { dbConnection }