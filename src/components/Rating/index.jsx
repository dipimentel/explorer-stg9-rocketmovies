import { Container } from "./styles";

import { FiStar } from 'react-icons/fi';

export function Rating({ small = false, rating }) {

   let assessment = []
   let emptyStars = []

   function criaEstrelas() {
      for (let i = Number(rating); i > 0; i-- ) {
         assessment.push(i) 
      }
      for (let i = (5 - Number(rating)); i > 0; i--) {
         emptyStars.push(i)
      }
      
   }
   criaEstrelas()


   return(
      <Container $small={ small.toString() }>
         <span>
         {
            assessment.map((star) => <FiStar key={star} />)
         }
         </span>
         {
            emptyStars.map((star) => <FiStar key={star} />) 
         }
      </Container>
   );
}