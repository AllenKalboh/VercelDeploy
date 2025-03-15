import { useState } from "react";
import { supabase } from "./CreateClient";
import { User } from "./Types";

const InsertUser = () => {
  const [user, setUser] = useState<Omit<User, "id" | "created_at">>({
    first_name: "",
    last_name: "",
    age: 0,
    email: "",
    barangay: "",
    phone_number: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("users").insert([user]);

    if (error) {
      console.error("Error inserting user:", error);
    } else {
      alert("User added successfully!");
      setUser({ first_name: "", last_name: "", age: 0, email: "", barangay: "", phone_number: "" });
    }
    setLoading(false);
  };

  return (
    <div className="mt-4 p-6 border rounded shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Insert New User</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input type="text" name="first_name" placeholder="First Name" value={user.first_name} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="text" name="last_name" placeholder="Last Name" value={user.last_name} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="number" name="age" placeholder="Age" value={user.age} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="text" name="barangay" placeholder="Barangay" value={user.barangay} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="text" name="phone_number" placeholder="Phone Number" value={user.phone_number} onChange={handleChange} className="w-full p-2 border rounded" required />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded" disabled={loading}>
          {loading ? "Adding..." : "Add User"}
        </button>
      </form>
    </div>
  );
};

export default InsertUser;
