import { BaseCommand } from '@adonisjs/core/build/standalone'
import Client from 'App/Models/Client'

import reader from 'xlsx';

const directory = process.cwd();



export default class ProcessClient extends BaseCommand {
    public static commandName = 'process:client'

    public static description = 'process excel client into database'

    public static settings = {
        loadApp: true,
    }

    public async run() {
        const file = reader.readFile(directory + '/public/assets/Sheet\ 1.xlsx')
        let clientData = [];
        clientData = reader.utils.sheet_to_json(file.Sheets['Clients'])
        const clientInserted = await Client.createMany(clientData)
        this.processClient(clientInserted)
    }

    public async processClient(clients: Client[]) {
        //Write your code here, you should comment below line.
        this.logger.info(JSON.stringify(clients, null, 2))
    }
}
