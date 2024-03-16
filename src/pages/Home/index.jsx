import { Container, TitleBar, Content } from "./styles";

import { FiPlus } from 'react-icons/fi';

import { Link } from "react-router-dom";

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Note } from '../../components/Note';


export function Home() {
   return(
      <Container>
         <Header />

         <main>
            <TitleBar>
               <h1>Meus filmes</h1>
               <Link to="/new">
                  <Button title="Adicionar filme" icon={ FiPlus } />
               </Link>
            </TitleBar>

            <Content>
               <Note noteData={{
                  title: "Interestellar",
                  rating: 4,
                  tags: [
                     {id: 1, name: "Ficção Científica"},
                     {id: 2, name: "Drama"},
                     {id: 3, name: "Família"},
                     ]
                  }}>
                  Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se
               </Note>

               <Note noteData={{
                  title: "Interestellar",
                  rating: 4,
                  tags: [
                     {id: 1, name: "Ficção Científica"},
                     {id: 2, name: "Drama"},
                     {id: 3, name: "Família"},
                     ]
                  }}>
                  Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se
               </Note>

               <Note noteData={{
                  title: "Interestellar",
                  rating: 4,
                  tags: [
                     {id: 1, name: "Ficção Científica"},
                     {id: 2, name: "Drama"},
                     {id: 3, name: "Família"},
                     ]
                  }}>
                  Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se
               </Note>
               
            </Content>
         </main>
      </Container>
   );
}