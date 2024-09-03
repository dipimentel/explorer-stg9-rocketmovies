import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";


const AuthContext = createContext({});

function AuthProvider({ children }) {

   const [data, setData] = useState({});
   const [searchData, setSearchData] = useState("");

   async function signIn({ email, password }) {

      try {
         const response = await api.post("/session", { email, password });
         const { user, token } = response.data

         const userData = {
            id: user.id,
            name: user.name,
            email: user.email,
            avatar: user.avatar
         }
         
         api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
         
         localStorage.setItem("@movieNotesUser", JSON.stringify(userData));
         localStorage.setItem("@movieNotesToken", token);
         setData({ user: userData, token })

      } catch (error) {
         if (error.response) {
            alert(error.response.data.message);
         } else {
            alert("Não foi possível efetuar o login.")
         }
      }

   }

   function signOut() {
      localStorage.removeItem("@movieNotesUser");
      localStorage.removeItem("@movieNotesToken");

      setData({});
   }

   async function updateProfile( user, avatarFile ) {

      const userUpdated = data.user;

      if (avatarFile) {
         try {
            const fileUpdateForm = new FormData();
            fileUpdateForm.append("avatar", avatarFile);

            const response = await api.patch("/user/avatar", fileUpdateForm);
            userUpdated.avatar = response.data.avatar;

         } catch (error) {
            if (error.response) {
               alert(error.response.data.message);
            } else {
               alert("Não foi possível atualizar o avatar.");
            }
         }
      }

      try {

         await api.put("/user", user);

         userUpdated.name = user.name ? user.name : userUpdated.name
         userUpdated.email = user.email ? user.email : userUpdated.email
         setData({ user: userUpdated, token: data.token });

         localStorage.setItem("@movieNotesUser", JSON.stringify(userUpdated));

         alert("Usuário atualizado!");

      } catch (error) {
         if (error.response) {
            alert(error.response.data.message);
         } else {
            alert("Não foi possível atualizar. Tente novamente.")
         }
      }
   }

   function setSearch(data) {
      setSearchData(data);
   }

   useEffect(() => {
      const user = JSON.parse(localStorage.getItem("@movieNotesUser"));
      const token = localStorage.getItem("@movieNotesToken");

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`

      setData({ user, token })

   }, []);

   return (
      <AuthContext.Provider value={{ signIn, signOut, updateProfile, setSearch, searchData, user: data.user }}>
         { children }
      </AuthContext.Provider>
   );

}

function useAuth() {
   const context = useContext(AuthContext);
   return context;
}

export {
   AuthProvider,
   useAuth
}