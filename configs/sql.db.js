
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "testdb",
});


db.connect((err) => { });

const query = "SELECT * FROM users";
db.query(query, (err, results) => {
    if (err) {
        console.error("Error fetching users:", err);
        return res.status(500).json({ error: "Database query failed." });
    }
})