import { useState } from "react";

export const Roller = ({ dice, setDice, rolled, setRolled }) => {
  const [total, setTotal] = useState();

  const rollDice = () => {
    let total = 0;

    dice.forEach((die) => {
      total += die.dice;
    });
    setTotal(total);
    setRolled(true);
  };

  const reset = () => {
    setDice([]);
    setRolled(false);
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
