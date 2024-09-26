const express = require('express');
const dotenv = require('dotenv');
const { MongoClient, ObjectId } = require('mongodb');
const cors = require('cors');

dotenv.config();

const client = new MongoClient(process.env.MONGO_URI);
const dbName = 'VaultGaurd';
const app = express();
const port = 3000;

// Use built-in middleware instead of body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure CORS for production use
app.use(cors());

// Handle MongoDB connection with error handling
const dbConnect = async () => {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1); // Exit the app if connection fails
    }
};
dbConnect();

// Get all the passwords
app.get('/', async (req, res) => {
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    try {
        const findResult = await collection.find({}).toArray();
        res.json(findResult);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch passwords' });
    }
});

// Add or update a password
app.post('/', async (req, res) => {
    const db = client.db(dbName);
    try {
        const { _id, sitename, username, password } = req.body;

        if (!_id) {
            // Handle new item case
            await db.collection('passwords').insertOne({
                sitename,
                username,
                password
            });
            res.status(201).json({ message: 'Password saved successfully' });
        } else {
            // Handle existing item update
            await db.collection('passwords').updateOne(
                { _id: new ObjectId(_id) },
                { $set: { sitename, username, password } }
            );
            res.status(200).json({ message: 'Password updated successfully' });
        }
    } catch (error) {
        console.error('Error saving password:', error.message, error.stack);
        res.status(500).json({ error: 'Failed to save password' });
    }
});

// Delete a password by id or delete all passwords
app.delete('/', async (req, res) => {
    const db = client.db(dbName);
    const collection = db.collection('passwords');

    try {
        if (req.body._id) {
            // Delete a specific password by id
            const deleteResult = await collection.deleteOne({ _id: new ObjectId(req.body._id) });
            res.send({ success: true, result: deleteResult });
        } else {
            // Delete all passwords
            const deleteResult = await collection.deleteMany({});
            res.send({ success: true, result: deleteResult });
        }
    } catch (error) {
        console.error('Error deleting password:', error.message, error.stack);
        res.status(500).json({ error: 'Failed to delete password' });
    }
});

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`);
});
