import { MongoClient } from "mongodb";
export default async function handler(req, res) {
  if (req.method === "GET") {
    const client = await MongoClient.connect(
      "mongodb+srv://meet-up:U8mUrBnj4nMUQNdw@testing-cluster.qqjhnqq.mongodb.net/?retryWrites=true&w=majority&appName=Testing-Cluster"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");

    const meetups = await meetupsCollection.find().toArray();

    client.close();

    res.status(200).json(
      meetups.map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
      }))
    );
  }
}
