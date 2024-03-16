import { Container } from "./styles";

import { Rating } from '../Rating';
import { Tag } from '../Tag';

export function Note({ noteData, children }) {
   return(
      <Container>
         <h2>{ noteData.title }</h2>
         <Rating rating={ noteData.rating } small />
         <p>
            { children }
            ...
         </p>
         <footer>
            {
               noteData.tags.map((tag) => <Tag title={tag.name} key={tag.id} />)
            }
         </footer>
      </Container>
   );
}