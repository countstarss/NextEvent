import { MongoClient } from "mongodb";
import { connectDatabase,insertDocument } from "@/helper/db-util";


async function handler(req, res) {
    const eventId = req.query.eventId;
    if(req.method === 'POST') {
        //POST
        const { email,name,text } = req.body;

        if(!email || !name || name.trim() === '' || text.trim() === '') {
            res.status(422).json({ message:'Invalid input' })
            return;
        }

        const newComment = {
            email,
            name,
            text,
            eventId
        };

        console.log(`[eventId]:23 -> newComment:${newComment}`);

        let client;
        try {
            client = await connectDatabase();
        }catch(error) {
            res.status(500).json({ message: 'Could not connect to database.' });
        }

        try {
            const result = await insertDocument(client,'comment',newComment)

            newComment.id = result.insertedId;

            res.status(201).json({ message:'Added new comment',comment:newComment })
        }catch(error) {
            res.status(500).json({ message: 'Failed to insert data' });
        }finally {
            if(client){
                client.close()
            }
        }

    }
    
    if(req.method === 'GET'){

        const mongodbUrl = process.env.MONGODB_URI;
        let client;
        try {
            client = await MongoClient.connect(mongodbUrl)
            const db = client.db()

            // const document = await db
            //     .collection('comment')
            //     .find()
            //     .sort({ _id: -1 })
            //     .toArray();
            const document = await db
                .collection('comment')
                .find({ eventId: eventId })
                .sort({ _id: -1 })
                .toArray();

            console.log(document[0]);
            console.log(`[eventId]:90 -> document:${document}`);
            res.status(200).json({ message:`success get ${document.length} comments`,comments: document})
        }catch(error) {
            res.status(500).json({ message: 'Getting comments failed' });
        }finally {
            if(client){
                client.close()
            }
        }
    }
}

export default handler;