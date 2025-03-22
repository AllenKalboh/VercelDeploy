import { useState } from 'react'
import { supabase } from '../components/CreateClient';
import {Link, useNavigate} from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: any) => {
        e?.preventDefault();
        setMessage("");
        setIsLoading(true);

        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        });
        if (error) {
            setMessage(error.message);
            setEmail("");
            setPassword("");
        } else if (data) {
           navigate("/dashboard");
           return;
        }
        setIsLoading(false);
    };
  return (
    <>
            <div className='p-2 m-2'>
                <h2 className='font-bold text-2xl'> Log in </h2>
                {message && <span> {message}</span>}
                <form onSubmit={handleSubmit}>
                    <input type="email"
                        name="email"
                        placeholder="allen@gmail.coms"
                        required
                        className='border-2 m-2  p-2'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input type="password"
                        name="password"
                        placeholder="**********"
                        required
                        className='border-2 m-2 p-2'
                        onChange={(e) => setPassword(e.target.value)} />
                    <button
                        className='border-2 m-2 p-2 cursor-pointer'
                        type='submit'
                        disabled={isLoading}>
                        {isLoading ? "Signing In..." : "Log In"}
                    </button>
                </form>
                <span>Dont have an Account? </span>
                <Link to="/register"><button className='underline cursor-pointer'> Register </button></Link>
            </div>
        </>
  )
}

export default Login
