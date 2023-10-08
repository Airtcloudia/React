const MultiButton = () => {
    const handleButtonClick = (event) => {
        console.log(event.target.name)
    }
    return (
        <div>
        <button name="one" onClick={handleButtonClick}> Click me</button>
        <button name="two" onClick={handleButtonClick}> Click me</button>
        <button name="three" onClick={handleButtonClick}> Click me </button>
        </div>
    )
}

export default MultiButton

/*Com' è possibile impedire che il name attributo del pulsante venga stampato sulla console quando si fa clic sull'immagine? usando a riga 3 console.log(event.target.name)
 in modo che prende solo l'onClick di button e non tutto quello all'interno del div*/