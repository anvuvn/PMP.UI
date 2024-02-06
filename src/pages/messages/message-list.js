import { useEffect, useState } from "react"
import { Accordion } from "react-bootstrap"
import { MessageService } from "../../service/messager-service"
import moment from 'moment'
const MessageList = () => {
    const [messages, setmessages] = useState([])
    useEffect(() => {
        MessageService.getMyMessage().then(res => {
            setmessages(res);
        })
    }, [])
    return <div className="message-list">
        
        {messages.length > 0 ?
        <div>
            <h1 className="text-center mb-5 mt-5">Message send to: {messages[0].receiverName}</h1>
            <Accordion defaultActiveKey="0">
                {messages.map((m,index) => {
                    return <Accordion.Item eventKey={index}>
                        
                        <Accordion.Header>Sender: {m.senderName} - <span className="time-ago">{moment(m.createdDate).fromNow()}</span></Accordion.Header>
                        <Accordion.Body>
                            <span className="blockquote">{m.message}</span>
                        </Accordion.Body>
                    </Accordion.Item>
                })}

            </Accordion>
        </div>
            
            : ""}

    </div>
}

export default MessageList