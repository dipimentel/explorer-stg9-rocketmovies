import { Container } from "./styles";
import { Link } from "react-router-dom";

import { Rating } from '../Rating';
import { Tag } from '../Tag';

export function Note({ noteData, ...rest }) {

   const previousDescription = noteData.description.slice(0, 200);
   const isBiggerThanPrevious = noteData.description.length > 200

   return(
      <Container {...rest}>
         <h2>{ noteData.title }</h2>
         <Rating rating={ noteData.rating } small />
         <p>
            { previousDescription.trim() }
            { isBiggerThanPrevious ? "..." : "" }
         </p>
         <footer>
            {
               noteData.tags.map((tag) => <Tag title={tag.name} key={tag.id} />)
            }
         </footer>
      </Container>
   );
}