import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

export default function ToggleButtons({ setSelectetTaps, taps }) {
  return (
    <ToggleButtonGroup
      value={taps}
      exclusive
      onChange={(e, newTap) => {
        setSelectetTaps(newTap);
      }}
      className="text-9xl"
    >
      <ToggleButton value="addTrader" >
        اضافه تاجر
      </ToggleButton>
      <ToggleButton value="receiveTrader" >
      استلام من تاجر
      </ToggleButton>
      <ToggleButton 
       value="addFradany"
       >
        الفرداني
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
