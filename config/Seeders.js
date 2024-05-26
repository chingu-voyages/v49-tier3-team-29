import { faker } from '@faker-js/faker';
import mongoose from "mongoose";
import Books from "../models/Books.js";
import Users from "../models/Users.js";

export const genres = [
    'Fiction',
    'Non-Fiction',
    'Science Fiction',
    'Fantasy',
    'Biography',
    'History',
    'Romance',
    'Thriller',
    'Mystery',
    'Self-Help',
    'Health',
  ];

//Getting random genres
export const getRandomGenre = () => {
    const randomIndex = Math.floor(Math.random() * genres.length);
    return genres[randomIndex]
  }

  //Getting the users
  export const getAllUsersId = async () => {
    try {
      const documentos = await Users.find({}, '_id');
      const ids = documentos.map(documento => documento._id);
     return ids 
    } catch (error) {
      console.error('Error al recuperar los IDs:', error);
      return [];
    }

  };

  //Getting a random userId
  export const getRandomUserId = async () => {
    try {
      const ids = await getAllUsersId();
      if (ids.length === 0) {
        throw new Error('No hay IDs disponibles');
      }
      const indiceAleatorio = Math.floor(Math.random() * ids.length);
      return ids[indiceAleatorio];
    } catch (error) {
      console.error('Error al obtener ID aleatorio:', error);
      return null;
    }
  };



  
export const seedData = async () => {
   //Cleaning collections
    Books.collection.drop();
    Users.collection.drop();

    // Connection URL
    const uri = process.env.DB_URI;
    const seed_count = 10;
    mongoose.set("strictQuery", false);
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Connected to db")
    }).catch((err) => {
        console.log("error", err)
    })

    let timeSeriesData = [];
    let BookData = [];
    // create 5000 fake data
     for (let i = 0; i < seed_count; i++) {
         const name = faker.person.fullName();
       const username = faker.person.firstName();
         const email = faker.internet.email();
         const password = faker.internet.password();
         const created_at = faker.date.recent();
         const isActive = true;

         timeSeriesData.push({ name, username, email, password, created_at, isActive});
     }
     await Users.insertMany(timeSeriesData)

    for (let i = 0; i < seed_count; i++) {
        const title =  faker.lorem.words(4);
        const description = faker.lorem.paragraph();
        const genre = getRandomGenre();
        const updated_at = faker.date.future();
         const userId = await getRandomUserId(); //faker.string.uuid(); 
       
        const truncatedIsban = faker.string.uuid();
        const isBan =  truncatedIsban.slice(0, 12); 

        BookData.push({ title, description, genre, userId, isBan, updated_at});
    }

    const seedDB = async () => {
        // await Users.insertMany(timeSeriesData)
        await Books.insertMany(BookData)
    }

    seedDB().then(() => {
        mongoose.connection.close()
        console.log("seed success")
    })
}

