import { useRef, useState } from 'react'

export default function LoginForm() {
    const [login, setLogin] = useState({
        email: '',
        password: ''
    })
    const emailRef = useRef()
    const passwordRef = useRef()

    function onSubmit (e) {
        e.preventDefault()
        if (emailRef.current.value.length < 2) return
        if (passwordRef.current.value.length < 2) return
        setLogin({email: emailRef.current.value, password: passwordRef.current.value})
        
    }
    console.log(login)
    return (
        <div className='w-2/4 flex flex-col justify-center items-center'>
            <h1>LOGIN</h1>
            <form onSubmit={e => onSubmit(e)} className='flex flex-col gap-2'>
                <ul className='flex flex-col w-full'>
                    <li className='w-full'>
                        <label htmlFor="email"> Email
                            <input className='p-2 border-2 border-gray-600 w-full' type="email" required ref={emailRef} />
                        </label>
                    </li>
                    <li className='w-full'>
                        <label htmlFor="password"> Password
                            <input className='p-2 border-2 border-gray-600 w-full' type="password" required ref={passwordRef} />
                        </label>
                    </li>
                </ul>
                <button className='bg-gray-600 text-white p-2 ' type="submit">Login</button>
            </form>
        </div>
    )
}
