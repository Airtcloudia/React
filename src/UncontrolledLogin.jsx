const UncontrolledLogin = () => {
    const handleFormSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)

        const data = {
            form: formData.get("form"),
            username: formData.get("username"),
            password: formData.get("password"),
        }
        console.log(data)
        

    }
    return (
        <form name= "form" onSubmit={handleFormSubmit}>
            <input name="username"/>
            <input name="password"  type="password"/>
            <input name="remember" type="checkbox"/>
            <button>Login</button>
            <button type="reset">Reset</button>
        </form>
    )
}

export default UncontrolledLogin

/*Qual è l'API standard? Esistono API non standard che possono essere utilizzate per accedere ai dati del modulo?  
l'API standard è FormData ma,
esistono altri modi per accedere ai dati del DOM, o con useRef o document.getElementById */