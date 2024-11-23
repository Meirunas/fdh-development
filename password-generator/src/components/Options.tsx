import { usePasswordStore } from "../store/passwordStore";
import CheckIcon from "../icons/CheckIcon";

function options() {
  const {
    uppercase,
    lowercase,
    numbers,
    symbols,
    setUppercase,
    setLowercase,
    setNumbers,
    setSymbols,
  } = usePasswordStore();

  return (
    <div className="flex flex-col gap-4">
      {/* Uppercase Letters */}
      <label className="flex items-center gap-5">
        <div className="input-div">
          <input
            type="checkbox"
            className="checkbox checked:bg-neon-green checked:border-neon-green"
            checked={uppercase}
            onChange={() => setUppercase(!uppercase)}
          />
          {uppercase && <CheckIcon className="checkIcon" />}
        </div>
        <span className="label-text">Include Uppercase Letters</span>
      </label>

      {/* Lowercase Letters */}
      <label className="flex items-center gap-5">
        <div className="input-div">
          <input
            type="checkbox"
            className="checkbox checked:bg-neon-green checked:border-neon-green"
            checked={lowercase}
            onChange={() => setLowercase(!lowercase)}
          />
          {lowercase && <CheckIcon className="checkIcon" />}
        </div>
        <span className="label-text">Include Lowercase Letters</span>
      </label>

      {/* Numbers */}
      <label className="flex items-center gap-5">
        <div className="input-div">
          <input
            type="checkbox"
            className="checkbox checked:bg-neon-green checked:border-neon-green"
            checked={numbers}
            onChange={() => setNumbers(!numbers)}
          />
          {numbers && <CheckIcon className="checkIcon" />}
        </div>
        <span className="label-text">Include Numbers</span>
      </label>

      {/* Symbols */}
      <label className="flex items-center gap-5">
        <div className="input-div">
          <input
            type="checkbox"
            className="checkbox checked:bg-neon-green checked:border-neon-green"
            checked={symbols}
            onChange={() => setSymbols(!symbols)}
          />
          {symbols && <CheckIcon className="checkIcon" />}
        </div>
        <span className="label-text">Include Symbols</span>
      </label>
    </div>
  );
}

export default options;
