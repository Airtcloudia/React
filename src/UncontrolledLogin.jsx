const UncontrolledLogin = () => {
    return (
        <form>
            <input name="username"/>
            <input name="password"  type="password"/>
            <input name="remember" type="checkbox"/>
            <button>Login</button>
            <button type="reset">Reset</button>
        </form>
    )
}

export default UncontrolledLogin