const io=require ('socket.io')(3000)
io.on('connection',socket=>{
    //extracts the id parameter from the handshake query.
    const id=socket.handshake.query.id
    socket.join(id)

    socket.on('send-message',({recipients,text})=>{
        recipients.forEach(recipient=>{
            const newRecipients =recipients.filter(r=>r!==recipient)
            newRecipients.push(id)
            socket.braodcast.to(recipient).emit('receive-message',{
                recipients:newRecipients,sender:id,text
            })
        })
       
    })
})