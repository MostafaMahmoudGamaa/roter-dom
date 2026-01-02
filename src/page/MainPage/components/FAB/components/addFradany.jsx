import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import { useAddNewTrader, useStock } from "../../../../../hoks/useStock";
import { useToast } from "../../../../../hoks/useToast";
import { addTrader } from "../../../../../features/FBASlices/traderSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useMemo } from "react";
import React from "react";

const AddFradany = React.memo(({ handleClose }) => {
  const { addFrdany } = useAddNewTrader();
  const { showToast } = useToast();
  const dispatch = useDispatch();
  const { invalidData, data: trader } = useStock();
  const [disabled, setDisabled] = useState(false);
  const [traderData, setTraderData] = useState({
    traderName: "اهالي",
    traderMlian: "1",
    traderfadi: "1",
    traderMoney: "230",
    traderSalry: 235,
  });

  const addTraderHandler = async () => {
    setDisabled(true);
    try {
      await dispatch(
        addTrader({
          traderData,
          addFrdany,
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
        ? showToast("يوجد عمليه قائمه بالفعل", "error")
        : showToast(error.m, error.t);
      setTimeout(() => {
        setDisabled(false);
      }, 1000);
      return;
    }
  };

  return (
    <div>
      <DialogContent>
        <DialogContentText>برجاء تعبئه بينات الفرداني</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="الاسم"
          type="email"
          value={traderData.traderName}
          onChange={(e) => {
            setTraderData({ ...traderData, traderName: e.target.value });
          }}
          fullWidth
        />
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
        <TextField
          margin="dense"
          id="salry"
          label="سعر الاسطوانه"
          type="numver"
          value={traderData.traderSalry}
          onChange={(e) => {
            setTraderData({
              ...traderData,
              traderSalry: e.target.value,
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
    </div>
  );
});
export default AddFradany;
