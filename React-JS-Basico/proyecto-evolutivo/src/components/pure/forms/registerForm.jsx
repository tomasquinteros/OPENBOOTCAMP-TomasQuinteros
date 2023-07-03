import { useRef } from "react"
import { User } from "../../../models/user.class"
import { ROLES } from "../../../models/roles.enum"


function verification(username, email, password, confirmPassword, roles) {
    console.log(username.length, email.length, password.length, confirmPassword.length, roles)
    if (username.length < 6) return false
    if (email.length < 12) return false
    if (password.length < 8) return false
    if (confirmPassword !== password) return false
    if (roles.length < 1) return false
    console.log(true)
    return true
}



export default function RegisterForm() {
    const usernameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPassword = useRef()
    const roleRef = useRef()
    const onRegister = (e) => {
        e.preventDefault()
        if (verification(usernameRef.current.value, emailRef.current.value, passwordRef.current.value, confirmPassword.current.value, roleRef.current.value)) {
            const register = new User(usernameRef.current.value, emailRef.current.value, confirmPassword.current.value, roleRef.current.value)
            console.log(register)
            alert(JSON.stringify(register))
        }
    } 
    return (
        <div className="flex flex-col gap-8 w-2/4 justify-center items-center">
            <h2 className="text-2xl font-bold">Sign In</h2>
            <form onSubmit={(e) => onRegister(e)}>
                <ul className="flex flex-col gap-4">
                    <li>
                        <label className="flex gap-2" htmlFor="username">Username 
                            <input className="w-full p-[0.1rem] border-2" type="text" id="username" ref={usernameRef}/>
                        </label>
                    </li>
                    <li>
                        <label className="flex gap-2" htmlFor="email">Email 
                            <input className="w-full p-[0.1rem] border-2" type="email" id="email" ref={emailRef}/>
                        </label>
                    </li>
                    <li>
                        <label className="flex gap-2" htmlFor="password">Password 
                            <input className="w-full p-[0.1rem] border-2" type="password" id="password" ref={passwordRef}/>
                        </label>
                    </li>
                    <li>
                        <label className="flex gap-2" htmlFor="password-confirm">Confirm Password 
                            <input className="w-full p-[0.1rem] border-2" type="password" id="password-confirm" ref={confirmPassword}/>
                        </label>
                    </li>
                    <li>
                        <label className="flex gap-2" htmlFor="optionSelect">Choose role</label>
                        <select name="optionSelect" id="optionSelect" ref={roleRef}>
                            <option value="">
                                --Please choose role--
                            </option>
                            <option value={ROLES.USER}>User</option>
                            <option value={ROLES.ADMIN}>Admin</option>
                        </select>
                    </li>
                </ul>
                <button type="submit">Register Account</button>
            </form>
        </div>
    )
}
