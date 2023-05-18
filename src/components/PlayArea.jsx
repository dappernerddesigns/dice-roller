import { useState } from "react";
import { Dice } from "./Dice";
import { Selection } from "./Selection";
import { Roller } from "./Roller";

export const PlayArea = () => {
  const [dice, setDice] = useState([]);
  const [rolled, setRolled] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const whichDie = (die) => {
    const dieNum = die.split("");
    dieNum.shift();
    const dieValue = dieNum.join("");

    const value = Number(dieValue);
    const dieRandom = Math.floor(Math.random() * value) + 1;

    setDice((currItems) => {
      return [...currItems, { dice: dieValue, diceRoll: dieRandom }];
    });
  };
  return (
    <>
      <Dice whichDie={whichDie} disabled={disabled} />
      <Selection dice={dice} setDice={setDice} />
      <Roller
        dice={dice}
        setDice={setDice}
        rolled={rolled}
        setRolled={setRolled}
        setDisabled={setDisabled}
      />
    </>
  );
};
