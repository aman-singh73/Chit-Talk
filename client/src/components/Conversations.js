import React from "react";
import ListGroup from "react-bootstrap";
import useConversations from "../contexts/ConversationsProvider";

export default  function Consversations(){
const {Consversations,selectConversationIndex}=useConversations()
return (
    <ListGroup variant="flush">
        {Consversations.map((conversation,index)=>(
            <ListGroup.item
                key={index}
                action
                onClick={()=>selectConversationIndex(index)}
                active={conversation.selected}
                >
                    {conversation.recipients.map(r=>r.name).join(', ')}
            </ListGroup.item>
        ))}
    </ListGroup>
)
}