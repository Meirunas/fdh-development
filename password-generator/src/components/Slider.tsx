import { useEffect } from "react";
import { usePasswordStore } from "../store/passwordStore";

function Slider() {
  const { passwordLength, setPasswordLength } = usePasswordStore();

  function handleSliderChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value;

    // Update the password length state
    setPasswordLength(newValue);

    // Dynamically update the slider background
    const numericValue = parseInt(newValue, 10);
    event.target.style.background = `linear-gradient(to right, #A4FFAF ${
      ((numericValue - 6) / (20 - 6)) * 100
    }%, #18171f ${((numericValue - 6) / (20 - 6)) * 100}%)`;
  }

  // Set initial background when the component mounts
  useEffect(() => {
    const slider = document.getElementById(
      "password-length"
    ) as HTMLInputElement;
    const numericValue = parseInt(passwordLength, 10); // Convert string to number
    slider.style.background = `linear-gradient(to right, #A4FFAF ${
      ((numericValue - 6) / (20 - 6)) * 100
    }%, #18171f ${((numericValue - 6) / (20 - 6)) * 100}%)`;
  }, [passwordLength]);

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-2 md:mb-4">
        <label
          htmlFor="password-length"
          className="text-base text-almost-white font-bold md:text-lg"
        >
          Character Length
        </label>
        <p className="text-2xl font-bold text-neon-green md:text-[1.5rem]">
          {passwordLength}
        </p>
      </div>
      <input
        type="range"
        id="password-length"
        name="password-length"
        value={passwordLength}
        min={6}
        max={20}
        onChange={handleSliderChange}
      />
    </div>
  );
}

export default Slider;
