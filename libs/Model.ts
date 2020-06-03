const mysql = require('mysql');
import ModelI from '../interfaces/ModelI';
import Connection from './Connection';

export default class Model {

    // static dbc: any = mysql.createConnection({
        //     host: 'localhost',
        //     user: 'apicarre_galveg',
        //     password: 'Galvegbackend'
        // }); 
        static connection = Connection.getInstance();
    
    constructor() {}


    static async execQuery(query: string) {
        let result = new Promise((resolve, reject) => {
            Model.connection.query(query, (err: any, rows: any, fields: any) => {
                if (err) { reject(err); }
                resolve(rows);
            });
        });

        return result;
    }


    //apicarre_carreras db in hosting
    static async findAll(table: string ): Promise<any> {
        let query = `SELECT * FROM carreras.${table}`;
        const data = await Model.execQuery(query);
        return data;
    }
    static async findOne(table: string, id: number): Promise<any> {
        let query = `SELECT * FROM carreras.${table} WHERE id = ${id}`;
        const data = await Model.execQuery(query);
        return data;
    }
    static async create(sql: string, values: Array<any>): Promise<any> {
        
        const data = await Model.connection.query(sql, [values], function (err: any, result: any) {
            if (err){
                console.log(err);
                return false;  
            }
            console.log("Number of records inserted: " + result.affectedRows);
            return result.affectedRows;
        });
        return `Se ha añadido ${data} fila(s)`;
    }

    static async update(table: string, sql: string): Promise<any> {
        let query = `UPDATE carreras.${table} SET ${sql}`;
        const data = await Model.execQuery(query);
        return data;
    }
    static async delete(table: string, id: number): Promise<any> {
        let query = `DELETE FROM carreras.${table} WHERE id = ${id}`
        const data = await Model.execQuery(query);
        return data;
        
    }
    

}
