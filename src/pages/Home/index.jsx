import { Container, TitleBar, Content } from "./styles";

import { FiPlus } from 'react-icons/fi';
import { Link, useNavigate } from "react-router-dom";

import { useState, useEffect, useRef } from "react";
import { api } from "../../services/api";

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Note } from '../../components/Note';

import {useAuth } from '../../hooks/auth';


export function Home() {
   const inputSearch = useRef(null);

   const { searchData } = useAuth();    

   const [notes, setNotes] = useState([]);

   const navigate = useNavigate();

   function handleNoteDetails(id) {
      navigate(`/details/${id}`)
   }

   useEffect(() => {
      async function fetchNotes() {
         const response =  await api.get(`/notes?title=${searchData}`);
         setNotes(response.data);

         if (searchData !== "") {
            inputSearch.current.focus()
         }
      }

      fetchNotes();
   }, [searchData]);

      return(
         <Container>
            <Header refInput={inputSearch}/>

            <main>
               <TitleBar>
                  <h1>Meus filmes</h1>
                  <Link to="/new">
                     <Button title="Adicionar filme" icon={ FiPlus } />
                  </Link>
               </TitleBar>

               <Content>
                  {
                     notes.map(note => (
                        <Note
                           key={note.id}
                           noteData={note}
                           onClick={() => handleNoteDetails(note.id)}
                        />
                     ))
                  }
                  
               </Content>
            </main>
         </Container>
   );
}