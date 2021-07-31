import React, {useState} from "react";
import Modal from 'react-bootstrap/Modal';


function AlertDismissibleExample() {

  const handleClose = () => setShow(false);
  const [show, setShow] = useState(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Covid-19 Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>Due to Covid-19 practice times can be changed at any time. Please email <strong>ruclubswim@gmail.com</strong> to stay up to date on our practices/events.</Modal.Body>
      </Modal>
    </>
  );
}
  
export default AlertDismissibleExample;