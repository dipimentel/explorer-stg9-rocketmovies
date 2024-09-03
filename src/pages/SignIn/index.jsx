import { Container, Form, Background } from "./style";
import { useState } from "react";

import { FiMail, FiLock } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button} from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

import { useAuth } from "../../hooks/auth";


export function SignIn() {
   
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   
   const { signIn } = useAuth();

   function handleKeyPress(event) {
      if (event.key === "Enter") {
         handleSignIn()
      }
   }

   function handleSignIn() {
      if (!email || !password) {
         return alert("É necessário preencher todos os campos!");
      }

      signIn({ email, password });
   }

   return(
      <Container>
         <Form>
            <h1>RocketMovies</h1>
            <p>Aplicação para acompanhar tudo que assistir.</p>

            <h2>Faça seu login</h2>

            <Input
               type="email"
               placeholder="E-mail"
               icon={FiMail}
               onKeyPress={e => handleKeyPress(e)}
               onChange={(e) => setEmail(e.target.value)}
            />

            <Input
               type="password"
               placeholder="Senha"
               icon={FiLock}
               onKeyPress={e => handleKeyPress(e)}
               onChange={(e) => setPassword(e.target.value)}
            />

            <Button
               title="Entrar"
               onClick={handleSignIn}
            />
            
            <ButtonText to="/register" title="Criar conta" />
         </Form>
         <Background />
      </Container>

   );
}