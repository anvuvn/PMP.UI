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
            <Accordion defaultActiveKey="0">
                {messages.map((m,index) => {
                    return <Accordion.Item eventKey={index}>
                        
                        <Accordion.Header>Sender: {m.senderName} - <span className="time-ago">{moment(m.createdDate).fromNow()}</span></Accordion.Header>
                        <Accordion.Body>
                            {m.message}
                        </Accordion.Body>
                    </Accordion.Item>
                })}

            </Accordion>
            : ""}

    </div>
}

export default MessageList