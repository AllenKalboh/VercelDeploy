import { useState } from 'react'
import { supabase } from './components/CreateClient'

// interface User{
//     name: string | null
//     message: string | null
// }

const Register = () => {

    // const [name, setName] = useState<string | null>(null)
    const [message, setMessage] = useState<string>()
    // const [user, setUser] = useState<User | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    // const handleNameChange = (e: any) => {
    //     setName(e.target.value)
    // }

    const handleMessageChange = (e: any) => {
        setMessage(e.target.value)
    }

    const insertMessage = async () => {
        setIsLoading(true)
        const { error } = await supabase.from('YowSer').insert({
            message: message
        });
        if (error) {
            alert('dili nag send ang imong messiji :<')
            setIsLoading(false)
        } else {
           setIsLoading(false)
           alert('nag send ang imong messiji! ^_^')
           setMessage("")
        }

    }

    // const fetchMessage = async () =>{
    //     await supabase.from('Yowser').select('*')
    // }


    return (
        <div>
        
            <h1 className='m-2 p-2 font-bold'>Say something to Allen</h1>
            <input
                type="text"
                placeholder='loeee'
                value={message ?? ""}
                className='p-2 m-2 border-2 rounded-2xl'
                onChange={handleMessageChange}
                required />

            <button className='border-2 p-2 m-2 rounded-2xl w-30 hover:bg-amber-100 hover:cursor-pointer duration-300'
                onClick={insertMessage}>
             {isLoading ? "Sending..." : "Submit"}
            </button>

            {/* <p>
                Name:    {name}
            </p> */}
            <div className='m-4 rounded-2xl'>
                {/* <p className='m-2 p-2 break-words'>
                    Dear Allen, */}
                    <p className=''>
                       Message: {message}
                    </p>
                {/* </p> */}
            </div>


        </div>
    )
}

export default Register
