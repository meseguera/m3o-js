import * as db from '@m3o/services/db';

// Update a record in the database. Include an "id" in the record to update.
async function UpdateArecord() {
    let dbService = new db.DbService(process.env.MICRO_API_TOKEN);
    let rsp = await dbService.update({
        record: {
            age: 43,
            id: '1'
        },
        table: 'users'
    });
    console.log(rsp);
}

await UpdateArecord();
