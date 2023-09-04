 
import mongoose from "mongoose"; 
import dotenv from "dotenv"

dotenv.config();
const USERNAME  = process.env.DB_USERNAME;
const PASSWORD =  process.env.DB_PASSWORD;
export const Connection = () => {
    const MONGODB_URL = `mongodb://${USERNAME}:${PASSWORD}@ac-dyxtfcd-shard-00-00.mbiyul4.mongodb.net:27017,ac-dyxtfcd-shard-00-01.mbiyul4.mongodb.net:27017,ac-dyxtfcd-shard-00-02.mbiyul4.mongodb.net:27017/?ssl=true&replicaSet=atlas-sixufj-shard-0&authSource=admin&retryWrites=true&w=majority`;

    mongoose.connect(MONGODB_URL, { useNewUrlParser: true });

    mongoose.connection.on('connected', () => {
        console.log('Database is connected successfully');
    });

    mongoose.connection.on('disconnected', () => {
        console.log('Database is disconnected');
    });

    mongoose.connection.on('error', (error) => {
        console.log('Error while connecting the database', error.message);
    });
}

 