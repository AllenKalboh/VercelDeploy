import { User } from "./Types";


const UserCard = ({ user }: { user: User }) => {
    return (
        <div className="p-4 border rounded shadow-md">
            <h2 className="text-lg font-bold">
                {user.first_name} {user.last_name}
            </h2>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
            <p>Barangay: {user.barangay}</p>
            <p>Phone: {user.phone_number}</p>
        </div>
    );
};

export default UserCard;
