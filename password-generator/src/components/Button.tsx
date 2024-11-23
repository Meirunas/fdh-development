import { usePasswordStore } from "../store/passwordStore";
import ArrowIcon from "../icons/ArrowIcon";
import { UC, LC, NC, SC } from "../PasswordChars";

function Button() {

  const {uppercase, lowercase, numbers, symbols, passwordLength, setPassword} = usePasswordStore();

  // Generate Password
  function generatePassword() {
    let finalPassword = "";
    let charSet = "";
    if (uppercase || lowercase || numbers || symbols) {
      if (uppercase) charSet += UC;
      if (lowercase) charSet += LC;
      if (numbers) charSet += NC;
      if (symbols) charSet += SC;

      for (let i = 0; i < parseInt(passwordLength); i++) {
        finalPassword += charSet.charAt(
          Math.floor(Math.random() * charSet.length)
        );
      }

      setPassword(finalPassword);
    } else {
      alert("Please select an option.");
    }
  }

  return (
    <button className="btn group" onClick={generatePassword}>
      <p className="btn-text">Generate</p>
      <ArrowIcon className="group-active:fill-neon-green fill-dark-gray" />
    </button>
  );
}

export default Button;
