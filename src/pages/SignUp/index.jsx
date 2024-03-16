import { Container, Form, Background } from "./style";

import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button} from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

export function SignUp() {
   return(
      <Container>
         <Form>
            <h1>RocketMovies</h1>
            <p>Aplicação para acompanhar tudo que assistir.</p>

            <h2>Crie sua conta</h2>

            <Input type="text" placeholder="Name" icon={FiUser} />
            <Input type="email" placeholder="E-mail" icon={FiMail} />
            <Input type="password" placeholder="Senha" icon={FiLock} />

            <Button title="Cadastrar" />
            
            <ButtonText to="/" title="Voltar para o login" icon={FiArrowLeft} />
         </Form>
         <Background />
      </Container>

   );
}