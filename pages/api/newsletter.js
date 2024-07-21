function handler(req, res) {
    if(req.method === 'POST') {
        //POST
        const userEmail = req.body.email;
        if(!userEmail || !userEmail.includes('@')) {
            res.status(422).json({ message: 'Invalid email address' });
            return;
        }
        
        console.log(userEmail);
        res.status(201).json({ message: 'Signed Up!' });

    }else{
        //GET
        res.status(201).json({ message: 'GET methos work!' });
    }
}

export default handler;