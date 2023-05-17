import d4 from "../assets/d4.png";
import d6 from "../assets/d6.png";
import d8 from "../assets/d8.png";
import d10 from "../assets/d10.png";
import d12 from "../assets/d12.png";
import d20 from "../assets/d20.png";

export const Dice = ({ whichDie }) => {
  return (
    <div className="dice-wrapper">
      <img src={d4} className="dice" id="d4" onClick={() => whichDie("d4")} />
      <img src={d6} className="dice" id="d6" onClick={() => whichDie("d6")} />
      <img src={d8} className="dice" id="d8" onClick={() => whichDie("d8")} />
      <img
        src={d10}
        className="dice"
        id="d10"
        onClick={() => whichDie("d10")}
      />
      <img
        src={d12}
        className="dice"
        id="d12"
        onClick={() => whichDie("d12")}
      />
      <img
        src={d20}
        className="dice"
        id="d20"
        onClick={() => whichDie("d20")}
      />
    </div>
  );
};
