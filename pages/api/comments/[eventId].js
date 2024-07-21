function handler(req, res) {
    const eventId = req.query.eventId;
    if(req.method === 'POST') {
        //POST
        const { email,name,text } = req.body;

        if(!email || !name || name.trim() === '' || text.trim() === '') {
            res.status(422).json({ message:'Invalid input' })
            return;
        }

        const newComment = {
            id: new Date().toISOString(),
            email,
            name,
            text
        };

        console.log(newComment);
        res.status(201).json({ message: 'Added comment',comment:newComment })

    }
    
    if(req.method === 'GET'){
        //GET
        const comments=[
            {
                id:'1',
                name:'luke',
                email:'countstarss404@gamil.com',
                text:'hey,luke,nice to meet you!'
            },
            {
                id:'2',
                name:'jonas',
                email:'jonas@gamil.com',
                text:'hey,jonas,nice to meet you!'
            },
            {
                id:'3',
                name:'max',
                email:'max@gamil.com',
                text:'hey,max,nice to meet you!'
            },
        ];

        res.status(200).json({ comments: comments})

    }
}

export default handler;