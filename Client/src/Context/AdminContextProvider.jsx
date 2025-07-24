import  { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
// eslint-disable-next-line react-refresh/only-export-components
export const AdminContext = createContext(null);

function AdminContextProvider({ children }) {
    const navigate=useNavigate();
   const handleLogout = () => {
      setUser(null);
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: "",
          email: "",
          password: "",
          role: "",
          phonenumber: "",
        })
      );
      localStorage.setItem("token", JSON.stringify(""));
      navigate('/login')
      toast.success("Logout Successfull")
    };
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser
      ? JSON.parse(storedUser)
      : {
          name: "",
          email: "",
          password: "",
          role: "",
          phonenumber: "",
        };
  });
  const [token,setToken]=useState(()=>{
    const storedToken = localStorage.getItem('token');
    return storedToken
      ? JSON.parse(storedToken)
      :""
  });

  return (
    <AdminContext.Provider value={{ user, setUser ,token,setToken,handleLogout }}>
      {children}
    </AdminContext.Provider>
  );
}

export default AdminContextProvider;
