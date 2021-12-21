const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');

const FILE_NAME = '/db/Aquanomous.db';

const CREATE_COMMAND_CAPTURE_SESSION = "CREATE TABLE IF NOT EXISTS CAPTURE_COORDINATES ( "+
                            "ID TEXT PRIMARY KEY, "+
                            "COORDINATE NUMERIC "+
                        ") ";

module.exports = {
    getDatabase: function() {
        return new sqlite3.Database(FILE_NAME, sqlite3.OPEN_READWRITE, (err) => {
            if (err) {
                return console.error(err.message);
            }
            console.log('Connected to the Aquanomous database.');
        });
    },
    createDatabaseIfNotExists: function() {
        !fs.existsSync('/db/') && fs.mkdirSync('/db/', { recursive: true });

        let db = new sqlite3.Database(FILE_NAME, (err) => {
            if (err) {
                return console.error("ERROR CREATING DATABASE: "+err.stack);
            }

            db.run(CREATE_COMMAND_CAPTURE_SESSION);

            db.run(CREATE_COMMAND_AMPLITUDE_READING, (err) => {
                console.log('Database created!!!');
                if (err) {
                    return console.error("ERROR CREATING DATABASE: "+err.stack);
                }

                db.close();

                console.log('Connected to Aquanomous database.');
            });


        });
    }
};