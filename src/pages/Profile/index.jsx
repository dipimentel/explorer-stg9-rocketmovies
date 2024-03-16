import { Container, Form, Avatar } from "./styles";

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';

import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';


export function Profile() {
   return(
      <Container>
         <header>
            <ButtonText to="/" title="Voltar" icon={FiArrowLeft} />
         </header>

         <Form>
            <Avatar>
               <img src="https://github.com/dipimentel.png" alt="Foto do usuário" />
               <label htmlFor="userImg">
                  <FiCamera />
                  <input type="file" id="userImg" />
               </label>
            </Avatar>

            <Input type="text" defaultValue="Diego Pimentel" icon={FiUser} />
            <Input type="email" defaultValue="di.pimentel.as@gmail.com" icon={FiMail} />
            <Input type="password" placeholder="Senha atual" icon={FiLock} />
            <Input type="password" placeholder="Nova senha" icon={FiLock} />

            <Button title="Salvar" disabled/>
         </Form>
      </Container>
   );
}