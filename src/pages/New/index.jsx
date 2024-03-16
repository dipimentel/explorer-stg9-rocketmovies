import { Container, Form, Markers, Buttons } from "./styles";

import { FiArrowLeft } from 'react-icons/fi';

import { Input } from "../../components/Input";
import { Header } from '../../components/Header';
import { Button } from "../../components/Button";
import { Textarea } from "../../components/Textarea";
import { TagMaker } from "../../components/TagMaker";
import { ButtonText } from "../../components/ButtonText";

import { useState } from "react";

export function New() {

   const [ ratingValue, setRatingValue ] = useState("");

   const handleRating = (e) => {
      const value = e.target.value.trim();
      console.log(value)
      const regex = /^[1-5]$/;

      if (regex.test(value) || value === "") {
         setRatingValue(value)
      }
   }

   return(
      <Container>
         <Header />

         <main>
            <ButtonText to="/" title="Voltar" icon={FiArrowLeft} />   
            <Form>

               <h1>Novo filme</h1>

               <div>
                  <Input type="text" placeholder="Título" />
                  <Input type="number" placeholder="Sua nota (de 0 a 5)" value={ratingValue} onChange={handleRating} />
               </div>

               <Textarea placeholder="Observações" />

               <h2>Marcadores</h2>

               <Markers>
                  <TagMaker value="React" />
                  <TagMaker placeholder="Novo marcador" isNew />
               </Markers>

               <Buttons>
                  <Button title="Excluir filme" dark />
                  <Button title="Salvar alterações" />
               </Buttons>
            </Form>
         </main>
      </Container>
   );
}