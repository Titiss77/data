const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");

const app = express();
app.use(cors()); // Autoriser les requêtes depuis le front-end

const uri = "mongodb+srv://Titiss:Mmdp.2726@cluster0.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function connectDB() {
    await client.connect();
    console.log("Connecté à MongoDB !");
}
connectDB();

// Route pour récupérer les utilisateurs
app.get("/users", async (req, res) => {
    try {
        const db = client.db("Amfs");
        const users = await db.collection("amfs").find().toArray();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération" });
    }
});

app.listen(3000, () => {
    console.log("Serveur démarré sur http://localhost:3000");
});
