import dbConnect from "../../../db/connect";
import { places } from "../../../lib/db";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const places = await Place.find();
    return response.status(200).json(places);
  }

  if (request.method === "POST") {
    try {
      const placeData = request.body;
      const place = new Place(placeData);
      await place.save();
      return response.status(201).json(place);
    } catch (error) {
      console.log(error);

      return response.status(200).json(places);
    }
  }
}
