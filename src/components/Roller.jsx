import { useState } from "react";

export const Roller = ({ dice, setDice, rolled, setRolled, setDisabled }) => {
  const [total, setTotal] = useState();
  const [rolledStr, setRolledStr] = useState();

  const rollStr = () => {
    let outputStr = dice.map((die) => {
      return die.diceRoll;
    });
    return setRolledStr(outputStr.join(" + "));
  };
  const rollDice = () => {
    let total = 0;

    dice.forEach((die) => {
      total += die.diceRoll;
    });
    rollStr();
    setTotal(total);
    setRolled(true);
    setDisabled(true);
  };

  const reset = () => {
    setDice([]);
    setRolled(false);
    setDisabled(false);
  };
  return (
    <>
      {dice.length > 0 ? (
        <>
          {" "}
          {rolled ? (
            <></>
          ) : (
            <>
              <p>Roll dem bones!</p>
              <button
                onClick={() => {
                  rollDice();
                }}
              >
                Roll
              </button>
            </>
          )}
        </>
      ) : null}
      {rolled ? (
        <div className="results">
          <h2>Your total : {total}</h2>
          <p>{rolledStr}</p>
          <button
            onClick={() => {
              reset();
            }}
          >
            Reset
          </button>
        </div>
      ) : null}
    </>
  );
};
