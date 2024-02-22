import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [palyerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsediting] = useState(false);

  function handleEditClick() {
    setIsediting((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, palyerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{palyerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={palyerName} onChange={handleChange} />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="palyer-simbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "save" : "edit"}</button>
    </li>
  );
}
