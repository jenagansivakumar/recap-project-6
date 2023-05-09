import dbConnect from "../../../../db/connect";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (!id) {
    return;
  }

  const place = places.find((place) => place.id === id);

  if (!place) {
    return response.status(404).json({ status: "Not found" });
  }

  response.status(200).json(place);
}
