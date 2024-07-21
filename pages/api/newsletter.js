const { MongoClient } = require('mongodb');


async function handler(req, res) {
    if(req.method === 'POST') {
        //POST
        const userEmail = req.body.email;
        if(!userEmail || !userEmail.includes('@')) {
            res.status(422).json({ message: 'Invalid email address' });
            return;
        }
        

        // const mongodbUrl = 'mongodb+srv://luke:5Z1I9q40ZBXEkhUX@cluster0.5gvy97r.mongodb.net/newsletter';
        const mongodbUrl = process.env.MONGODB_URI;

        let client;

        try {
            client = await MongoClient.connect(mongodbUrl);

            const db = client.db();

            await db.collection('emails').insertOne({ email: userEmail });

            res.status(201).json({ message: 'Signed Up!' });
        } catch (error) {
            res.status(500).json({ message: 'Could not connect to database.' });
        } finally {
            if (client) {
                client.close();
            }
        }

        console.log(userEmail);
        res.status(201).json({ message: 'Signed Up!' });

    }else{
        //GET
        res.status(201).json({ message: 'GET methos work!' });
    }
}

export default handler;