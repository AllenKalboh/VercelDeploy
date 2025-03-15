import { useEffect, useState } from "react";
import { User } from "./Types";
import UserCard from "./UserCard";
import { supabase } from "./CreateClient";

const UsersList = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchUsers = async () => {
            const { data, error } = await supabase.from("users").select("*");
            if (error) {
                console.error("Error fetching users:", error);
            } else {
                setUsers(data as User[]);
            }
            setLoading(false);
        };

        fetchUsers();
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Users List</h1>
            {loading ? (
                <p>Loading users...</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {users.map((user) => (
                        <UserCard key={user.id} user={user} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default UsersList;
