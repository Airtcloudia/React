const MouseClicker = () => {
  const handleButtonClick = (event) => {
    console.log(event.target.name);
  };
  return (
    <button name="one" onClick={handleButtonClick}>
      {" "}
      <img onClick={handleButtonClick} src="" width={24} height={24} />
      Click me
    </button>
  );
};

export default MouseClicker;

/*Com' è possibile impedire che il name attributo del pulsante venga stampato sulla console quando si fa clic sull'immagine? usando a riga 3 console.log(event.target.name)
 in modo che prende solo l'onClick di button e non tutto quello all'interno del div*/
