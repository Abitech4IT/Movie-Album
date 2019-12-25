import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Imovie } from './movies';


export class MovieData implements InMemoryDbService {
    
    createDb(){
        const movies: Imovie[] = [
            {
                id: 1,
                title: "Spider Man",
                imageUrl: "assets/images/spider2.jfif",
                actor: "Peter",
                producer: "Charles",
                date: "09/14/1977",
                country: "United State",
                language: "English",
                runtime: "90 minutes",
                director: "Stallof",
                rating: 3.5,
                writer: "Rose"
            },
            
            {
                id: 2,
                title: "Bahubali",
                imageUrl: "assets/images/bahu.jpg",
                actor: "Prabhas",
                producer: "Shetty",
                date: "09/07/2015",
                country: "India",
                language: "Telugu",
                runtime: "158 minutes",
                director: "S.S Rajamouli",
                rating: 4.5,
                writer: "K.V Vijayendra"
            },
            {
                id: 3,
                title: "Happy New Year",
                imageUrl: "assets/images/hnyear.jfif",
                actor: "Shahrukh Khan",
                producer: "Farah Khan",
                date: "01/01/2014",
                country: "India",
                language: "Hindu",
                runtime: "180 minutes",
                director: "Farah Khan",
                rating: 4.3,
                writer: "Mayour Puri"
            },
            {
              id: 4,
              title: "Spider Man",
              imageUrl: "assets/images/spider2.jfif",
              actor: "Peter",
              producer: "Charles",
              date: "09/14/1977",
              country: "United State",
              language: "English",
              runtime: "90 minutes",
              director: "Stallof",
              rating: 3.5,
              writer: "Rose"
          },
          
          {
              id: 5,
              title: "Bahubali",
              imageUrl: "assets/images/bahu.jpg",
              actor: "Prabhas",
              producer: "Shetty",
              date: "09/07/2015",
              country: "India",
              language: "Telugu",
              runtime: "158 minutes",
              director: "S.S Rajamouli",
              rating: 4.5,
              writer: "K.V Vijayendra"
          },
          {
              id: 6,
              title: "Happy New Year",
              imageUrl: "assets/images/hnyear.jfif",
              actor: "Shahrukh Khan",
              producer: "Farah Khan",
              date: "01/01/2014",
              country: "India",
              language: "Hindu",
              runtime: "180 minutes",
              director: "Farah Khan",
              rating: 4.3,
              writer: "Mayour Puri"
          }
        ];
        return { movies };
    }
    

}