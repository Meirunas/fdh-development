import Slider from "./Slider";
import Options from "./Options";
import StrengthMeter from "./StrengthMeter";
import Button from "./Button";

function Body() {
  return (
    <div className="body-container">
      <Slider />
      <Options />
      <StrengthMeter />
      <Button />
    </div>
  );
}

export default Body;
