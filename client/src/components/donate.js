import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";

function Donate() {
  const [open, setOpen] = React.useState(false);
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Donate Here</Button>}
    >
      <Modal.Header>Make a Donation</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Header>stripe stuff</Header>
          <p>stripe stuff goes here</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Not Today
        </Button>
        <Button
          content="Donate Now"
          labelPosition="right"
          icon="checkmark"
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default Donate;
