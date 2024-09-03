import { Container, Content, MovieTitle, Credits, TagsWrapper, Review } from "./styles";

import { FiArrowLeft, FiClock, FiStar } from 'react-icons/fi';

import { api } from "../../services/api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { useAuth } from "../../hooks/auth";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Tag } from "../../components/Tag";
import { Rating } from "../../components/Rating";

export function Details() {

   const params = useParams();
   const { user } = useAuth();

   const [noteData, setNoteData] = useState({});

   useEffect(() => {
      async function fetchNote() {
         const response = await api.get(`/notes/${params.id}`);
         setNoteData(response.data)
      }

      fetchNote();
   }, []);

   return(
      <Container>
         <Header />

         <main>
            <ButtonText to="/" title="Voltar" icon={FiArrowLeft} />
            <Content>

               <MovieTitle>
                  <h1>{noteData.title}</h1>
                  <Rating rating="4" />
               </MovieTitle>

               <Credits>
                  <div>
                     <img src={`${api.defaults.baseURL}/files/${user.avatar}`} alt="Foto do autor" />
                     <span>Por {user.name}</span>
                  </div>
                  <time dateTime="2022-05-23 08:00">
                     <FiClock />
                     23/05/22 às 08:00
                  </time>
               </Credits>

               <TagsWrapper>
                  <Tag title="Ficção Científica" />
                  <Tag title="Drama" />
                  <Tag title="Família" /> 
               </TagsWrapper>

               <Review>
                  <p>
                  {noteData.description}
                  </p>
               </Review>

            </Content>
         </main>
      </Container>
   );
}
