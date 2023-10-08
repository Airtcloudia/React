const MouseClicker = () => {
    const handleButtonClick = (event) => {
        console.log(event.currentTarget.name)
    }
    return (
        <button name="one" onClick={handleButtonClick}> <img onClick={handleButtonClick} src ="" width={24} height={24}/>Click me</button>
    )
}

export default MouseClicker

/*Il  name attributo del pulsante viene comunque stampato sulla console quando si fa clic sull'immagine perchè l'evento onClick è associato all'elemento su cui è stato definito
 (in questo caso, l'immagine), quindi quando viene cliccato l'immagine, verrà eseguito solo il codice associato a quell'evento ovvero handleButtonClick. */