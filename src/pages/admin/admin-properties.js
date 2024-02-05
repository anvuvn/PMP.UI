import { useEffect, useState } from "react"
import PropertyTable from "../../components/property/property-table"
import PropertyService from "../../service/property"
import SendMessage from "../../components/messages/send-message"
import { Button, Modal } from "react-bootstrap"
import MessageDialog from "../../components/messages/message-dialog"
import { PropertyStatus } from "../../constant/PropertyStatus"

const AdminProperties = () => {

    const [properties, setProperties] = useState([])
    const [receiver, setReceiver] = useState({});
    const [showMessage, setShowMessage] = useState(false);
    const getProppertiesByStatus = () => {
        PropertyService.getPropertyByStatus().then(res => {
            setProperties(res);
        })
    }
    const approveProperty = (e, property) => {
        e.preventDefault();
        let result = window.confirm("Are you sure you want to Approve?");
        if (result) {
            PropertyService.approveProperty(property.id).then(res => {
                alert("Property Approved")
                getProppertiesByStatus();
            })
        }
    }
    const sendMessage = (e, property) => {
        e.preventDefault();
        setReceiver({ id: property.ownerId, name: property.ownerName })
        showDialog();
    }
    const handleClose = () => setShowMessage(false);
    const showDialog = () => setShowMessage(true);
    const getAction = (sender) => {
        let property = sender;
        return <>
            <a className="action-link" href="#" onClick={(e => sendMessage(e, sender))}>Send message</a>
            {property.status === PropertyStatus.Waiting ?
                <a className="action-link" href="#" onClick={(e) => approveProperty(e, sender)}>Approve</a>
                : ""}
        </>
    }
    const getDialog = () => {
        return <MessageDialog show={showMessage} onClose={handleClose} receiver={receiver}></MessageDialog>
    }
    useEffect(() => {
        getProppertiesByStatus();
    }, [])
    return <>
        <h3>Admin Properties</h3>

        <PropertyTable data={properties} action={getAction}></PropertyTable>
        {getDialog()}
    </>
}

export default AdminProperties