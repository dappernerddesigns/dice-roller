export const Selection = ({ dice, rolled }) => {
  return (
    <>
      <div className="dice-pool">
        {dice.map((die, index) => {
          console.log(die);
          return (
            <div className="rolled" key={index}>
              <img src={die.img} className="dice-pool-dice" />
              {rolled ? <h3 className="result">{die.dice}</h3> : null}
            </div>
          );
        })}
      </div>
    </>
  );
};
