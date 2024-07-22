const { MongoClient } = require('mongodb');
import { connectDatabase,insertDocument } from "@/helper/db-util";

async function handler(req, res) {
    if(req.method === 'POST') {
        //POST
        const userEmail = req.body.email;
        if(!userEmail || !userEmail.includes('@')) {
            res.status(422).json({ message: 'Invalid email address' });
            return;
        }

        let client;
        try {
            client = await connectDatabase();
            // client = await MongoClient.connect(mongodbUrl);
        }catch(error) {
            res.status(500).json({ message: 'Could not connect to database.' });
        }

        try{
            await insertDocument(client,'emails',{ email:userEmail })
            res.status(201).json({ message: 'Signed Up!' });
        } catch (error) {
            res.status(500).json({ message: 'Failed to insert data' });
        } finally {
            if (client) {
                client.close();
            }
        }

    }else{
        //GET
        res.status(201).json({ message: 'GET methos work!' });
    }
}

export default handler;