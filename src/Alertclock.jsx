const Alertclock = () => {
    const handleButtonClick = () => {
        const now = new Date()
        alert(`Sono le ${now.toLocaleTimeString()}`)
    }

    return(
        <>
        <p>Clicca qui per sapere l'ora</p>
        <button onClick={handleButtonClick}>Clicca qui</button>
        </>
    )
}
export default Alertclock