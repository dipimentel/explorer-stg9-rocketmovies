import { Container, Logo, Profile } from "./styles";

import { Link } from "react-router-dom";

import { Input } from '../Input';

export function Header() {
   return(
      <Container>
         <Logo>
            RocketMovies
         </Logo>

         <Input type="text" placeholder="Pesquisar pelo título" width="630px" />

         <Profile>
            <div>
               <strong>Diego Pimentel</strong>
               <a href="#">sair</a>
            </div>
            <Link to="/profile">
               <img src="https://github.com/dipimentel.png" alt="Foto do usuário" />
            </Link>
         </Profile>
      </Container>
   );
}