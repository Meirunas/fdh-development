import { usePasswordStore } from "../store/passwordStore";
import CopyIcon from "../icons/CopyIcon";

function Header() {
  const { password, isCopied, setIsCopied } = usePasswordStore();

  // Truncate Text
  function truncatePassword(str: string, num: number) {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }

    // Copy to Clipboard
    function copyToClipboard() {
      if (password) {
        navigator.clipboard.writeText(password);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      }
    }

  return (
    <div className="finalPwd-container">
      <input
        type="text"
        value={truncatePassword(password, 11)}
        readOnly
        placeholder="P4$5W0rD!"
        className="password"
      />
      <div className="flex items-center justify-center gap-4">
        {isCopied && <p className="copied-text">Copied</p>}
        <button onClick={copyToClipboard}>
          <CopyIcon />
        </button>
      </div>
    </div>
  );
}

export default Header;
