// const db = require("../db/database.js");


// //CREATE DATABASE
// exports.createDB = (req, res) => {
//     let q = 'CREATE DATABASE tododatabase';
//     db.query(q, (err, result) => {
//         if (err) throw err;
//         return res.status(201).json("DB created");
//     })
// }

// //CREATE TABLE
// exports.createTable = (req, res) => {
//     let q = 'CREATE TABLE todolist1(id int AUTO_INCREMENT, firstName VARCHAR(255), lastName VARCHAR(255), PRIMARY KEY(id))';
//     db.query(q, (err, result) => {
//         if (err) throw err;
//         return res.status(201).json("TABLE CREATED");
//     });
// }


// //CREATE LIST
// exports.createList = (req, res) => {
//     const q = "INSERT INTO todolist1 SET ?";

//     const { firstName, lastName } = req.body;

//     db.query(q, { firstName, lastName }, (err, result) => {
//         if (err) return res.json(err);
//         return res.status(200).json(result);
//     });
// }


// //SHOW TODOS
// exports.showTodos = (req, res) => {
//     const q = "SELECT * FROM todolist1";

//     db.query(q, (err, result) => {
//         if (err) return res.json(err);
//         return res.status(200).json(result);
//     });
// };

// //SHOW SINGLE TODO
// exports.singleTodo = (req, res) => {
//     const q = `SELECT * FROM todolist1 where id=${req.params.id}`;

//     db.query(q, (err, result) => {
//         if (err) return res.json(err);
//         return res.status(200).json(result[0]);
//     });
// }


// //UPDATE TODO
// exports.updateTodo = (req, res) => {
//     const { firstName, lastName } = req.body;
//     // const q = `UPDATE todolist1 SET firstName ='${firstName}' lastName ='${lastName}' where id=${req.params.id}`;
//     const q = `UPDATE todolist1 SET ? where id=${req.params.id}`;

//     db.query(q, { firstName, lastName }, (err, result) => {
//         if (err) return res.json(err);
//         return res.status(200).json(result);
//     });
// }


// //DELETE SINGLE TODO
// exports.deleteSingleTodo = (req, res) => {

//     const q = `DELETE FROM todolist1  WHERE id=${req.params.id}`;

//     db.query(q, (err, result) => {
//         if (err) return res.json(err);
//         return res.status(200).json({ data: "todo deleted" });
//     });
// }

const db = require("../db/database.js");


//CREATE DATABASE
exports.createDB = (req, res) => {
    console.log("Starting to create the database...");
    let q = 'CREATE DATABASE tododatabase';
    db.query(q, (err, result) => {
        if (err) {
            console.error("Error creating database:", err);
            throw err;
        }
        console.log("Database created successfully:", result);
        return res.status(201).json("DB created");
    });
};

//CREATE TABLE
exports.createTable = (req, res) => {
    console.log("Starting to create the table...");
    let q = 'CREATE TABLE todolist1(id int AUTO_INCREMENT, firstName VARCHAR(255), lastName VARCHAR(255), PRIMARY KEY(id))';
    db.query(q, (err, result) => {
        if (err) {
            console.error("Error creating table:", err);
            throw err;
        }
        console.log("Table created successfully:", result);
        return res.status(201).json("TABLE CREATED");
    });
};

//CREATE LIST
exports.createList = (req, res) => {
    console.log("Creating a new list item...");
    const q = "INSERT INTO todolist1 SET ?";

    const { firstName, lastName } = req.body;
    console.log("Request body:", req.body);

    db.query(q, { firstName, lastName }, (err, result) => {
        if (err) {
            console.error("Error inserting list item:", err);
            return res.json(err);
        }
        console.log("List item created successfully:", result);
        return res.status(200).json(result);
    });
};

//SHOW TODOS
exports.showTodos = (req, res) => {
    console.log("Fetching all todos...");
    const q = "SELECT * FROM todolist1";

    db.query(q, (err, result) => {
        if (err) {
            console.error("Error fetching todos:", err);
            return res.json(err);
        }
        console.log("Todos fetched successfully:", result);
        return res.status(200).json(result);
    });
};

//SHOW SINGLE TODO
exports.singleTodo = (req, res) => {
    console.log(`Fetching todo with ID: ${req.params.id}...`);
    const q = `SELECT * FROM todolist1 WHERE id=${req.params.id}`;

    db.query(q, (err, result) => {
        if (err) {
            console.error(`Error fetching todo with ID ${req.params.id}:`, err);
            return res.json(err);
        }
        console.log(`Todo with ID ${req.params.id} fetched successfully:`, result);
        return res.status(200).json(result[0]);
    });
};

//UPDATE TODO
exports.updateTodo = (req, res) => {
    console.log(`Updating todo with ID: ${req.params.id}...`);
    const { firstName, lastName } = req.body;
    console.log("Request body:", req.body);
    const q = `UPDATE todolist1 SET ? WHERE id=${req.params.id}`;

    db.query(q, { firstName, lastName }, (err, result) => {
        if (err) {
            console.error(`Error updating todo with ID ${req.params.id}:`, err);
            return res.json(err);
        }
        console.log(`Todo with ID ${req.params.id} updated successfully:`, result);
        return res.status(200).json(result);
    });
};

//DELETE SINGLE TODO
exports.deleteSingleTodo = (req, res) => {
    console.log(`Deleting todo with ID: ${req.params.id}...`);
    const q = `DELETE FROM todolist1 WHERE id=${req.params.id}`;

    db.query(q, (err, result) => {
        if (err) {
            console.error(`Error deleting todo with ID ${req.params.id}:`, err);
            return res.json(err);
        }
        console.log(`Todo with ID ${req.params.id} deleted successfully:`, result);
        return res.status(200).json({ data: "Todo deleted" });
    });
};







