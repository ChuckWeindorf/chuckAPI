//controller between mysql and the express routes
import query from "../database/connection";

async function logIt(description) {
    return await query(
        `INSERT INTO transactions SET trans_desc = ("${description}")`,
        []);
};

async function getAll() {
    //get all employees and must consume the promise
    logIt(`GET all records from novels`);
    return await query("SELECT * FROM novels", []);
}

async function getOne(id) {
    logIt(`GET ${id} record from novels`);
    return await query("SELECT * FROM novels WHERE id = ?", [id]);
}


async function getCharacter(name) {
    logIt(`GET character ${name} records from novels`);
    return await query(
        `SELECT * FROM novels WHERE main_character = ?`,
        [name]);
};


async function getGenre(genre) {
    logIt(`GET genre ${genre} records from novels`);
    return await query(
        `SELECT * FROM novels WHERE genre = ?`,
        [genre]);
};

// this is the short notation
async function insertOne(novelsData) {
    logIt(`INSERT new novel to novels`);
    return await query(
        `INSERT INTO novels SET ?`,
        [novelsData]);
};

// this is the short notation
async function updateOne(id, novelsData) {
    logIt(`UPDATE ${id} record from novels`);
    return await query(
        `UPDATE novels SET ? WHERE id = ?`,
        [novelsData, id]);
};

// this is the short notation
async function deleteOne(id) {
    logIt(`DELETE ${id} record from novels`);
    return await query(
        `DELETE FROM novels WHERE id = ?`,
        [id]);
};

export { getAll, 
         getOne, 
         getCharacter, 
         getGenre, 
         insertOne, 
         updateOne, 
         deleteOne,
         };