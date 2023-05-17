export const Selection = ({ dice, rolled }) => {
  return (
    <>
      <div className="dice-pool">
        {dice.map((die) => {
          return (
            <div className="rolled">
              <img src={die.img} className="dice-pool-dice" />
              {rolled ? <h3 className="result">{die.dice}</h3> : null}
            </div>
          );
        })}
      </div>
    </>
  );
};
