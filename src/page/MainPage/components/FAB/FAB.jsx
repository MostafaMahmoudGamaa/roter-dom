
import Dialog from "@material-ui/core/Dialog";

import { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import AddTrader from "./components/AddTrader";
import FabContainer from "./components/FabContainer";
import ToggleButtons from "./components/ToggleButtons";
export default function AddTraderF() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button
        onClick={handleClickOpen}
        className="fixed bottom-6 right-6  bg-blue-600 text-white p-4 rounded-full shadow-lg text-5xl"
      >
        <IoMdAddCircleOutline />
      </button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        className="text-center"
      >

        <FabContainer
        handleClose={handleClose}
        
        
        />
      
      </Dialog>
    </div>
  );
}
