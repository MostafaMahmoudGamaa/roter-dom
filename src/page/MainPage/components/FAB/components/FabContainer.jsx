import { DialogTitle } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { useState } from "react";
import AddFradany from "./addFradany";
import AddTrader from "./AddTrader";
import ReceiveFromTrader from "./ReceiveFromTrader";
import ToggleButtons from "./ToggleButtons";

export default function FabContainer({ handleClose }) {
  const [selectedTap, setSelectedTap] = useState("addTrader");
  return (
    <>
      <DialogTitle id="form-dialog-title">اختار عمليه</DialogTitle>

      <Divider />
      <div className="mt-2 flex justify-center items-center flex-col">
        <ToggleButtons setSelectetTaps={setSelectedTap} taps={selectedTap} />
      </div>

      {selectedTap === "addTrader" && <AddTrader handleClose={handleClose} />} {/* اضافه تاجر جديد*/} 

      {selectedTap === "receiveTrader" && <ReceiveFromTrader handleClose={handleClose} />} {/* استلام من تاجر */}

      {selectedTap === "addFradany" && <AddFradany handleClose={handleClose}/>}


    </>
  );
}
