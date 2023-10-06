import Age from './Age';
/*componente che ho creato prima che me lo va a mettere su Age*/

export const Welcome = ({ name, age}) => {
  return (
    <div>
      <p>Welcome, {name} </p>
      {(age > 18 && age < 65) && (name === "John" ) && <Age age={age} />}
    </div>
  );
}