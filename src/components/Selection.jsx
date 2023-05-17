import d4 from "../assets/d4.png";
import d6 from "../assets/d6.png";
import d8 from "../assets/d8.png";
import d10 from "../assets/d10.png";
import d12 from "../assets/d12.png";
import d20 from "../assets/d20.png";

export const Selection = ({ dice, rolled }) => {
  const imagePaths = {
    4: d4,
    6: d6,
    8: d8,
    10: d10,
    12: d12,
    20: d20,
  };
  return (
    <>
      <div className="dice-pool">
        {dice.map((die, index) => {
          console.log(die);
          return (
            <div className="rolled" key={index}>
              <img src={imagePaths[die.dice]} className="dice-pool-dice" />
              {rolled ? <h3 className="result">{die.diceRoll}</h3> : null}
            </div>
          );
        })}
      </div>
    </>
  );
};
