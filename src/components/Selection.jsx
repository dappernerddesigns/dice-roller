import d4 from "../assets/d4.png";
import d6 from "../assets/d6.png";
import d8 from "../assets/d8.png";
import d10 from "../assets/d10.png";
import d12 from "../assets/d12.png";
import d20 from "../assets/d20.png";

export const Selection = ({ dice, setDice }) => {
  const removeDice = (die) => {
    setDice((currDice) => {
      return currDice.filter((dice) => {
        return dice !== die;
      });
    });
  };

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
        {dice.length ? (
          <p>To remove a dice click on a dice in the pool below</p>
        ) : null}
        {dice.map((die, index) => {
          return (
            <div className="rolled" key={index}>
              <img
                src={imagePaths[die.dice]}
                className="dice-pool-dice"
                onClick={() => removeDice(die)}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
