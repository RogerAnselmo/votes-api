import { config } from 'dotenv'
import Server from './api/server'
import * as path from 'path'

config({ path: path.join(__dirname, '../.env') });
import configuration from './infra/config'
import { connectDatabase } from './infra/database.config';

async function main(){
    await connectDatabase(configuration.Database)   
    Server.start(configuration.Configuration)
}

main();