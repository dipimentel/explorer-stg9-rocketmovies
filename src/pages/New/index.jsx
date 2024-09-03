import { Container, Form, Markers, Buttons } from "./styles";

import { FiArrowLeft } from 'react-icons/fi';

import { Input } from "../../components/Input";
import { Header } from '../../components/Header';
import { Button } from "../../components/Button";
import { Textarea } from "../../components/Textarea";
import { TagMaker } from "../../components/TagMaker";
import { ButtonText } from "../../components/ButtonText";

import { api } from "../../services/api";
import { useState, useEffect } from "react";

export function New() {

   const [ title, setTitle ] = useState("");
   const [ ratingValue, setRatingValue ] = useState("");
   const [ description, setDescription ] = useState("");

   const [ tags, setTags ] = useState([]);
   const [ newTag, setNewTag ] = useState("");


   const handleRating = (e) => {
      const value = e.target.value.trim();
      const regex = /^[0-5]$/;

      if (regex.test(value) || value === "") {
         setRatingValue(value)
      }
   }

   function handleKeyPress(event) {
      if(event.key === "Enter") {
         handleAddTag();
      }
   }

   function handleAddTag() {
      if (newTag) {
         setTags(prevState => [...prevState, newTag]);
         setNewTag("");
      }
   }

   function handleDeleteTag(delTag) {
      const filteredTags = tags.filter(tag => tag !== delTag);
      setTags(filteredTags);
   }

   function handleClearFields() {
      setTitle("");
      setRatingValue("");
      setDescription("");
      setTags([]);
   }

   async function createNote() {
      const notesData = {
         title,
         description,
         rating: ratingValue ? ratingValue : 0,
         tags
      }

      if (!title) {
         return alert("É necessário incluir um título para a nota.");
      }

      if (newTag) {
         return alert("Você digitou uma tag, mas não a adicionou. Adicione ou deixe o campo vazio.")
      }

      try {
         await api.post("/notes", notesData);
         alert("Nota criada com sucesso!");
         handleClearFields();

      } catch (error) {
         if (error.response) {
            alert(error.response.data.message);
         } else {
            alert("Não foi possível criar a nota");
         }
      }
   }

   useEffect(() => {}, [tags])

   return(
      <Container>
         <Header />

         <main>
            <ButtonText to="/" title="Voltar" icon={FiArrowLeft} />   
            <Form>

               <h1>Novo filme</h1>

               <div>
                  <Input type="text" placeholder="Título" value={title} onChange={e => setTitle(e.target.value)} />
                  <Input type="text" placeholder="Sua nota (de 0 a 5)" value={ratingValue} onChange={handleRating} />
               </div>

               <Textarea placeholder="Observações" value={description} onChange={e => setDescription(e.target.value)} />

               <h2>Marcadores</h2>

               <Markers>
                  

                  {
                     tags.map((tag, id) => (
                        <TagMaker
                           key={id}
                           value={tag}
                           onClick={() => handleDeleteTag(tag)}
                        />
                     ))
                  }

                  <TagMaker
                     placeholder="Novo marcador"
                     isNew
                     value={newTag}
                     onChange={e => setNewTag(e.target.value)}
                     onKeyPress={handleKeyPress}
                     onClick={handleAddTag}
                  />
               </Markers>

               <Buttons>
                  <Button title="Excluir filme" dark />
                  <Button title="Salvar alterações" onClick={createNote} />
               </Buttons>
            </Form>
         </main>
      </Container>
   );
}