import { Container, Form, Background } from "./style";

import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { api } from "../../services/api";
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button} from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

export function SignUp() {

   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const navigate = useNavigate();

   function handleKeyPress(event) {
      if (event.key === "Enter") {
         handleSignUp()
      }
   }

   function handleSignUp() {

      if ( !name || !email || !password ) {
         return alert("É necessário preencher todos os campos!")
      }

      api.post("/user", {name, email, password})
      .then(() => {
         alert("Usuário criado com sucesso!");
         navigate("/");
      })
      .catch((error) => {
         if (error.response) {
            alert(error.response.data.message);
         } else {
            alert("Não foi possível criar o usuário. Tente novamente.");
         }
      })
   }

   return(
      <Container>
         <Form>
            <h1>RocketMovies</h1>
            <p>Aplicação para acompanhar tudo que assistir.</p>

            <h2>Crie sua conta</h2>

            <Input 
               type="text"
               placeholder="Name"
               icon={FiUser}
               onKeyPress={(event) => handleKeyPress(event)}
               onChange={(e) => setName(e.target.value)}
            />

            <Input 
               type="email"
               placeholder="E-mail"
               icon={FiMail}
               onKeyPress={(event) => handleKeyPress(event)}
               onChange={(e) => setEmail(e.target.value)}
            />

            <Input 
               type="password"
               placeholder="Senha"
               icon={FiLock}
               onKeyPress={(event) => handleKeyPress(event)}
               onChange={(e) => setPassword(e.target.value)}
            />

            <Button
               title="Cadastrar"
               onClick={handleSignUp}
            />
            
            <ButtonText to="/" title="Voltar para o login" icon={FiArrowLeft} />
         </Form>
         <Background />
      </Container>

   );
}