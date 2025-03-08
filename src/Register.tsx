import { useState } from 'react'
import { supabase } from './components/CreateClient'

interface User{
    name: string | null
    message: string | null
}

const Register = () => {

    const [name, setName] = useState<string | null>(null)
    const [message, setMessage] = useState<string | null>(null)
    const [user, setUser] = useState<User | null>(null)

    const handleNameChange = (e: any) => {
        setName(e.target.value)
    }

    const handleMessageChange = (e: any) => {
        setMessage(e.target.value)
    }

    const insertUser = async () => {
        await supabase.from('YowSer').insert({
            name: name,
            message: message
        })
    }

    const fetchMessage = async () =>{
        await supabase.from('Yowser').select('*')
    }


    return (
        <div>
            <input
                type="text"
                placeholder='name'
                value={name ?? ""}
                className='p-2 m-2 border-2 rounded-2xl'
                onChange={handleNameChange} />

            <input
                type="text"
                placeholder='message'
                value={message ?? ""}
                className='p-2 m-2 border-2 rounded-2xl'
                onChange={handleMessageChange} />

            <button className='border-2 p-2 m-2 rounded-2xl w-30 hover:bg-amber-100 hover:cursor-pointer duration-300'
                onClick={insertUser}>
                Submit
            </button>

            <p>
                Name:    {name}
            </p>

            <p>
                Message: {message}
            </p>


        </div>
    )
}

export default Register
