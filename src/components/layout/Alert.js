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
        <Modal.Body>Due to Covid-19 Rutgers University has ordered all sports clubs to suspend all in person activities/practices for Fall 2020. Please email <strong>ruclubswim@gmail.com</strong> for more info about our virtual programming.</Modal.Body>
      </Modal>
    </>
  );
}
  
export default AlertDismissibleExample;