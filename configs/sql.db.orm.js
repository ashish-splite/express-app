const sequelize = new Sequelize("testdb", "root", "password", {
    host: "localhost",
    dialect: "mysql",
});

sequelize
    .authenticate()
    .then(() => console.log("Connected to the database!"))
    .catch((err) => {
        console.error("Unable to connect to the database:", err);
        process.exit(1);
    });

const userSchema = {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
}
const User = sequelize.define("User", userSchema);