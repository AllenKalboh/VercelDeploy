import { useState } from 'react'
import { supabase } from '../components/CreateClient';
import {Link} from "react-router-dom";
const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: any) => {
        e?.preventDefault();
        setMessage("");
        setIsLoading(true);

        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password
        });
        if (error) {
            setMessage(error.message);
            setEmail("");
            setPassword("");
            return;
        } if (data) {
            setMessage("User Account Created Check Your Supabase Authentication please :>");
          
        }
        setIsLoading(false);
        setEmail("");
        setPassword("");
    }
  

    return (
        <>
            <div className='p-2 m-2'>
                <h2 className='font-bold text-2xl'> Register </h2>
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
                        {isLoading ? "Creating Account..." : "Create Account"}
                    </button>
                </form>
                <span>Already have an Account? </span>
                <Link to="/login" className='underline'>Log in </Link>
            </div>
        </>
    )
}

export default Register
