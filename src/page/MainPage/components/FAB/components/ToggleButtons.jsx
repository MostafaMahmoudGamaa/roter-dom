import FormatAlignLeftIcon from "@material-ui/icons/FormatAlignLeft";
import FormatAlignCenterIcon from "@material-ui/icons/FormatAlignCenter";
import FormatAlignRightIcon from "@material-ui/icons/FormatAlignRight";
import FormatAlignJustifyIcon from "@material-ui/icons/FormatAlignJustify";
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
