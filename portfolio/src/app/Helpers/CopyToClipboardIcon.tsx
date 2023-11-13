import { faCheck, faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function CopyToClipboardIcon() {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 3000);
  };
  return (
    <button onClick={handleClick}>
      {isClicked ? (
        <FontAwesomeIcon icon={faCheck} style={{ color: "#6247bf" }} />
      ) : (
        <FontAwesomeIcon icon={faCopy} style={{ color: "#5f5c64" }} />
      )}
    </button>
  );
}
