import { Container, Form, Avatar } from "./styles";

import { api } from "../../services/api";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';

import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';


export function Profile() {

   const { user, updateProfile } = useAuth();

   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [oldPassword, setOldPassword] = useState("");

   const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
   const [avatar, setAvatar] = useState( avatarURL );
   const [avatarFile, setAvatarFile] = useState(null);


   async function handleUpdateProfile() {

      const user = {
         name,
         email,
         password,
         oldPassword
      }
      updateProfile( user, avatarFile);
   }

   function handleUpdateAvatar(event) {
      const file = event.target.files[0];
      setAvatarFile(file);

      const avatarURL = URL.createObjectURL(file);
      setAvatar(avatarURL);
   }

   return(
      <Container>
         <header>
            <ButtonText to="/" title="Voltar" icon={FiArrowLeft} />
         </header>

         <Form>
            <Avatar>
               <img src={avatar} alt={user.name} />
               <label htmlFor="userImg">
                  <FiCamera />
                  <input type="file" id="userImg" onChange={handleUpdateAvatar} />
               </label>
            </Avatar>

            <Input
               type="text"
               placeholder="Nome"
               defaultValue={user.name}
               icon={FiUser}
               onChange={e => setName(e.target.value)}
            />

            <Input
               type="email"
               placeholder="E-mail"
               defaultValue={user.email}
               icon={FiMail}
               onChange={e => setEmail(e.target.value)}
            />

            <Input
               type="password"
               placeholder="Senha atual"
               icon={FiLock}
               onChange={e => setOldPassword(e.target.value)}
            />

            <Input
               type="password"
               placeholder="Nova senha"
               icon={FiLock}
               onChange={e => setPassword(e.target.value)}
            />


            <Button
               title="Salvar"
               disabled={ name || email || password || oldPassword || avatarFile ? false : true }
               onClick={handleUpdateProfile}
            />
         </Form>
      </Container>
   );
}