import { useState, useEffect } from 'react'
import { supabase } from '../components/CreateClient';
import {Navigate} from "react-router-dom";
const Wrapper = ({ children }: any) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getSession = async () => {
            const {
                data: { session },
            } = await supabase.auth.getSession();
            setAuthenticated(!!session);
            setIsLoading(false);
        };

        getSession();
    }, []);

    if (isLoading) {
        return <div> Loading.... </div>
    } else {
        if (authenticated) {
            return <> {children}</>
        }
        return <Navigate to="/login"/> 
    } 
}
    


export default Wrapper
