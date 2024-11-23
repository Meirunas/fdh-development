import { useEffect, useState } from "react";
import { usePasswordStore } from "../store/passwordStore";

function StrengthMeter() {
  const { password } = usePasswordStore(); // Fetch password from the store
  const [strength, setStrength] = useState(0); // Password strength (0 to 4)
  const [strengthLabel, setStrengthLabel] = useState("Too Weak"); // Strength label

  // Function to calculate password strength
  function calculatePasswordStrength(password: string): number {
    let strength = 0;
    // Conditions for password strength
    const lengthCondition = password.length >= 8;
    const uppercaseCondition = /[A-Z]/.test(password);
    const numberCondition = /[0-9]/.test(password);
    const specialCharacterCondition = /[^A-Za-z0-9]/.test(password);

    // Check password strength
    if (lengthCondition) strength++;
    if (uppercaseCondition) strength++;
    if (numberCondition) strength++;
    if (specialCharacterCondition) strength++;

    return Math.min(strength, 4); // Max strength level is 4
  }
  /*
  Too Weak (1):
  Less than 8 characters, or no uppercase, numbers, or special characters.
  Weak (2):
  Length >= 8, and at least 1 condition (uppercase, number, or special character).
  Medium (3):
  Length >= 8, and at least 2 conditions (uppercase, number, or special character).
  Strong (4):
  Length >= 8, and all 3 conditions (uppercase, number, and special character).
  */

  // Update strength and label dynamically based on password
  useEffect(() => {
    const validPassword = password || ""; // Fallback if password is undefined
    const computedStrength = calculatePasswordStrength(validPassword);
    setStrength(computedStrength);

    // Set strength label based on computed strength
    switch (computedStrength) {
      case 1:
        setStrengthLabel("Too Weak");
        break;
      case 2:
        setStrengthLabel("Weak");
        break;
      case 3:
        setStrengthLabel("Medium");
        break;
      case 4:
        setStrengthLabel("Strong");
        break;
      default:
        setStrengthLabel("Too Weak");
    }
  }, [password]); // Re-run effect when password changes

  return (
    <div className="bg-very-dark-gray px-4 py-3.5 flex items-center justify-between w-full mt-8">
      <p className="text-base uppercase text-gray font-bold md:text-lg">
        Strength
      </p>
      <div className="flex items-center gap-4">
        {/* Dynamic Strength Label */}
        <p className="text-lg text-almost-white uppercase font-bold md:text-2xl">
          {strengthLabel}
        </p>
        {/* Always 4 bars, dynamic colors based on strength */}
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4].map((level) => {
            let backgroundColor = "transparent"; // Default background color
            let borderColor = "#D1D5DB"; // Default border color (white)

            // Set the color based on the strength level
            if (level <= strength) {
              if (strength === 1) {
                backgroundColor = "red"; // Red for the first bar when strength = 1
              } else if (strength === 2) {
                backgroundColor = "orange"; // Orange for the first two bars when strength = 2
              } else if (strength === 3) {
                backgroundColor = "yellow"; // Yellow for the first three bars when strength = 3
              } else if (strength === 4) {
                backgroundColor = "green"; // Green for all bars when strength = 4
              }
            } else {
              // Border color for the empty bars
              borderColor = "#D1D5DB"; // White border for empty bars
            }

            return (
              <span
                key={level}
                style={{
                  width: "0.625rem", // w-2.5
                  height: "1.75rem", // h-7
                  backgroundColor: backgroundColor, // Dynamic color for the bar
                  border:
                    level > strength ? `2px solid ${borderColor}` : "none", // Border for empty bars
                }}
              ></span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default StrengthMeter;
