import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useAddNewTrader, useStock } from "../../../../../hoks/useStock";
import SelectTrader from "./SelectTrader";
import { useToast } from "../../../../../hoks/useToast";
import { addTrader } from "../../../../../features/FBASlices/traderSlice";
export default function ReceiveFromTrader({ handleClose }) {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(false);
  const [traderData, setTraderData] = useState({
    traderName: "",
    traderMlian: "",
    traderfadi: "",
    traderMoney: "",
  });
  const { addNewTrader } = useAddNewTrader();
  const { invalidData } = useStock();
  const { showToast } = useToast();
  const addTraderHandler = async () => {
    setDisabled(true);
    try {
      await dispatch(
        addTrader({
          traderData,
          addNewTrader,
          invalidData,
          undefined,
          handleClose,
        })
      ).unwrap();

      setTimeout(() => {
        setDisabled(false);
      }, 3000);
      return;
    } catch (error) {
      error.name === "ConditionError"
        ? showToast("يوجد معامله بالفعل", "error")
        : showToast(error.m, error.t);
      setTimeout(() => {
        setDisabled(false);
      }, 1000);
      return;
    }
  };

  return (
    <>
      <DialogContent>
        <DialogContentText>
          برجاء تعبئه البينات للاستلام من التاجر
        </DialogContentText>

        <SelectTrader getTraderName={setTraderData} tdata={traderData} />

        <TextField
          margin="dense"
          id="mlian"
          label="المليان"
          type="number"
          value={traderData.traderMlian}
          onChange={(e) => {
            setTraderData({
              ...traderData,
              traderMlian: e.target.value,
            });
          }}
          fullWidth
        />
        <TextField
          margin="dense"
          id="fadi"
          label="الفاضي"
          type="number"
          value={traderData.traderfadi}
          onChange={(e) => {
            setTraderData({
              ...traderData,
              traderfadi: e.target.value,
            });
          }}
          fullWidth
        />
        <TextField
          margin="dense"
          id="money"
          label="الفلوس"
          type="numver"
          value={traderData.traderMoney}
          onChange={(e) => {
            setTraderData({
              ...traderData,
              traderMoney: e.target.value,
            });
          }}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          اغلاق
        </Button>
        <Button disabled={disabled} onClick={addTraderHandler} color="primary">
          اتمام العمليه
        </Button>
      </DialogActions>
    </>
  );
}
