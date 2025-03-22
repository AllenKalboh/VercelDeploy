
import { supabase } from '../components/CreateClient';
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
    const navigate = useNavigate();

    const signOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) throw error ;
        navigate("/login");
    }
    return (
        <div className='m-2 p-2 '>
           <h2 className='text-2xl font-bold'> Hello You are Logged in!  </h2>
            <button onClick={signOut}
            className="border-2
            m-2
            p-2
            cursor-pointer">
                Sign Out
            </button>
        </div>
    )
}

export default Dashboard
