import config from 'config';
import { dbConfig } from '@interfaces/db.interface';

const { host, port, database, username, password }: dbConfig = config.get('dbConfig');

export const dbConnection = {
  //url: `mongodb://${username}:${password}@${host}:${port}/${database}`,
  url: 'mongodb://admin:admin@mongo:27017/mongoose',

  options: {
    authSource: 'admin',
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
};



