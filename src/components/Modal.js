import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const BasicModal = ({ data }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log(data);

  return (
    <div>
      <Button onClick={handleOpen}>Open your random quote</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {data.map((i, ind) => (
              <div key={ind}>{i.autor}</div>
            ))}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {data.map((j, ind2) => (
              <div key={ind2}>{j.quote}</div>
            ))}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
