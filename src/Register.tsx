import { useState } from 'react'
import { supabase } from './components/CreateClient'

const Register = () => {

    const [message, setMessage] = useState<string | null>(null)
    const [name, setName] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)


    const handleMessageChange = (e: any) => {
        setMessage(e.target.value)
    }

    const handleNameChange = (e: any) => {
        setName(e.target.value)
    }

    const insertMessage = async () => {
        setIsLoading(true)
        const { error } = await supabase.from('YowSer').insert({
            name: name,
            message: message
        });
        if (!message || message.trim() === "" && name || name.trim() === "") {
            alert("May kulang daw nga na field nga");
            setIsLoading(false)
            return; // Stop execution if message is empty
        }
        if (error) {
            alert('dili nag send nag iror haha')
            setIsLoading(false)
        } else {
            setIsLoading(false)
            alert('nag send na okay na haha')
            setMessage("")
        }

    }

    return (
        <div>
            <div className='flex justify-center items-center'>
                <h1 className='mt-6 p-4 font-bold text-white text-3xl'>Say something to Allen</h1>
            </div>
            <div className='flex flex-col justify-center items-center'>

            <input
                    required
                    type="text"
                    placeholder='Enter your Name'
                    value={name ?? ""}
                    className='p-2 m-1 text-2xl text-white border-2 border-white rounded-2xl'
                    onChange={handleNameChange}
                />

                <input
                    required
                    type="text"
                    placeholder='type something...'
                    value={message ?? ""}
                    className='p-2 m-4 text-2xl text-white border-2 border-white rounded-2xl'
                    onChange={handleMessageChange}
                />

                

                <button className='border-2 border-white text-white p-2 m-2 rounded-2xl w-30 hover:bg-white hover:cursor-pointer hover:text-[#384B70] duration-300'
                    onClick={insertMessage}>
                    {isLoading ? "Sending..." : "Send"}
                </button>
            </div>
            {/* <p>
                Name:    {name}
            </p> */}
            <div className='m-4 rounded-2xl'>
                {/* <p className='m-2 p-2 break-words'>
                    Dear Allen, */}
                <div className='text-white break-words text-4xl'>
                    Message: <p className='italic indent-8'> {message} </p>
                </div>
                {/* </p> */}
            </div>


        </div>
    )
}

export default Register
