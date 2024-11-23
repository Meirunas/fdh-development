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

  // Color mapping for the strength levels
  const strengthColors = [
    "bg-red-500",   // For Too Weak (1 red bar)
    "bg-orange-500", // For Weak (2 orange bars)
    "bg-yellow-500", // For Medium (3 yellow bars)
    "bg-green-500",  // For Strong (4 green bars)
  ];

  return (
    <div className="bg-very-dark-gray px-4 py-3.5 flex items-center justify-between w-full mt-8">
      <p className="text-base uppercase text-gray font-bold md:text-lg">Strength</p>
      <div className="flex items-center gap-4">
        {/* Dynamic Strength Label */}
        <p className="text-lg text-almost-white uppercase font-bold md:text-2xl">
          {strengthLabel}
        </p>
        {/* Always 4 bars, dynamic colors based on strength */}
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4].map((level) => (
            <span
              key={level}
              className={`w-2.5 h-7 ${
                level <= strength
                  ? strengthColors[level - 1] // Apply color to the filled bars based on strength
                  : "bg-transparent border-2 border-almost-white" // Empty bars with border (unfilled)
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StrengthMeter;


// Too Weak (1):
// Less than 8 characters, or no uppercase, numbers, or special characters.
// Weak (2):
// Length >= 8, and at least 1 condition (uppercase, number, or special character).
// Medium (3):
// Length >= 8, and at least 2 conditions (uppercase, number, or special character).
// Strong (4):
// Length >= 8, and all 3 conditions (uppercase, number, and special character).