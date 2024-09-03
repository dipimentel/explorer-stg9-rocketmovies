import { Container, Logo, Profile } from "./styles";

import { forwardRef } from "react";

import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { Input } from '../Input';


export function Header({ refInput, ...rest}) {

   const { signOut, user, setSearch, searchData } = useAuth();
   const navigate = useNavigate();

   function handleSearch(e) {
      setSearch(e.target.value);
      navigate("/");
   }

   return(
      <Container>
         <Logo>
            RocketMovies
         </Logo>

         <Input
            type="search"
            ref={refInput}
            placeholder="Pesquisar pelo título"
            width="630px"
            value={searchData}
            onChange={e => handleSearch(e)}
         />

         <Profile>
            <div>
               <strong>{user.name}</strong>
               <button onClick={signOut}>
                  sair
               </button>
            </div>
            <Link to="/profile">
               <img src={`${api.defaults.baseURL}/files/${user.avatar}`} alt={user.name} />
            </Link>
         </Profile>
      </Container>
   );
};