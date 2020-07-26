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
        <Modal.Body>Due to Covid-19 the Rutgers Club Sports has restructured our practice schedule. The times shown below are bound to change. Please email <strong>ruclubswim@gmail.com</strong> for more information.</Modal.Body>
      </Modal>
    </>
  );
}
  
export default AlertDismissibleExample;