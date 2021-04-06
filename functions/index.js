const functions = require("firebase-functions");
const express = require("express");
const cors = require('cors')({origin: true});

const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();

const app = express();
app.use(cors);

app.get('/', async (req, res) => {
    try {
        const ninjaRef = db.collection('ninjas').doc();
        await ninjaRef.set({
            'first': 'Nec',
            'last': 'test'
        });
        res.send("Ninja successfully added.");    
    } catch (error) {
        functions.logger.error(error);
    }
    
});

app.get('/api', (req, res) => {
    const date = new Date();
    functions.logger.info("Log from /api route", {structuredData: true});
    res.json({ notToday: date, value: "Test /api" });
});

exports.app = functions.https.onRequest(app);