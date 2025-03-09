const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://Titiss:Mmdp.2726@cluster0.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function createDatabase() {
    try {
        await client.connect();
        const db = client.db("MaBase"); // Créer ou sélectionner la base
        const collection = db.collection("Utilisateurs"); // Créer une collection
        console.log("Base de données et collection créées !");
    } finally {
        await client.close();
    }
}

createDatabase().catch(console.dir);
