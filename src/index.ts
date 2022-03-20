import { config } from 'dotenv'
import Server from './api/server'
import * as path from 'path'

config({ path: path.join(__dirname, '../.env') });
import configuration from './infra/config'

Server.start(configuration)
