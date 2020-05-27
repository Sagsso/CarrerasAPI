const mysql = require('mysql');

export default class Model {

    static dbc: any = mysql.createConnection({
        host: 'localhost',
        user: 'apicarre_galveg',
        password: 'Galvegbackend'
    }); 
    
    constructor() {}

    static async execQuery(query: string) {
        let result = new Promise((resolve, reject) => {
            Model.dbc.query(query, (err: any, rows: any, fields: any) => {
                if (err) { reject(err); }
                resolve(rows);
            });
        });

        return result;
    }
}
