const mysql = require('mysql');

export default class Connection {
    private static instance: Connection;
    static dbc: any = mysql.createConnection({
            host: 'localhost',
            user: 'apicarre_galveg',
            password: 'Galvegbackend'
        }); 
    /**
     * The Connection's constructor should always be private to prevent direct
     * construction calls with the `new` operator.
     */
    private constructor() { }

    public static getInstance() {
        if (!Connection.instance) {
            Connection.instance = new Connection();
        }

        return Connection.dbc;
    }
}