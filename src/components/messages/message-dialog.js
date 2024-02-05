import { Modal } from "react-bootstrap"
import SendMessage from "./send-message"

const MessageDialog = ({ receiver, show, onClose }) => {
    const handleClose = () => {
        onClose()
    }
    return <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Sending message to: {receiver.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body><SendMessage onMessageSent={handleClose} receiver={receiver}></SendMessage>
        </Modal.Body>
    </Modal>
}

export default MessageDialog