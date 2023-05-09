import dbConnect from "../../../db/connect";
import { places } from '../../../lib/db';

export default function handler(request, response) {
    await dbConnect();
    if (request.method === "GET") {
    const places = await Place.find();
    return response.status(200).json(places);
  }

  return response.status(200).json(places);
}



export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const places = await Place.find();
    return response.status(200).json(places);
  }
  if (request.method === "POST") {
    try {
      const jokeData = request.body 
      // create a new joke document
      // jokeData has to be in the format that is
      // specified in the Joke model
      const joke = new Joke(jokeData)
      await joke.save()
      return response.status(201).json(joke);
    } catch(error) {
      console.log(error)
      return response.status(400).json({error: error.message});
    }
  }
}