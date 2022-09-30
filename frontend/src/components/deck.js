import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import ReactModal from 'react-modal'
import {useEffect,useState} from 'react'
const Deck = ( {name, description, changeScreen}) => {
    const [showModal,setShowModal] = useState(false)
    const handleClose = () => {setShowModal(false)}
    const handleShow = () => {setShowModal(true)}
    return (
        <div>
            <Button variant="primary" onClick = {handleShow}>
                <Card style={{ width: '50rem' }}  border = "primary" >
                <Card.Img variant="top" src="https://www.rd.com/wp-content/uploads/2020/08/GettyImages-85120553.jpg?fit=700,468" />
                        <Card.ImgOverlay>
                            <Card.Body>
                                <Card.Text>
                                    {name}
                                </Card.Text>
                            </Card.Body>
                        </Card.ImgOverlay>
                </Card>
            </Button>
            <ReactModal isOpen = {showModal} shouldCloseOnOverlayClick={true}>
                {description}
                <Button onClick = {handleClose}>
                    X
                </Button>
                <Button onClick = {changeScreen}>
                    Play 
                </Button>
            </ReactModal>
        </div>

    );
}

export default Deck