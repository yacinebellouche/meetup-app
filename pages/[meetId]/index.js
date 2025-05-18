import MeetUpDetail from "../../components/meetups/MeetUpDetail";
import { MongoClient, ObjectId } from "mongodb";
export default function DetailMeetPage(props) {
  return (
    <MeetUpDetail
      img={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://meet-up:U8mUrBnj4nMUQNdw@testing-cluster.qqjhnqq.mongodb.net/?retryWrites=true&w=majority&appName=Testing-Cluster"
  );
  const db = client.db();
  const meetups = db.collection("meetups");
  const meetupIds = await meetups.find({}, { _id: 1 }).toArray(); // the first object is used to add a filter zhile the second is used to choose the fields we want to get
  client.close();
  return {
    fallback: false, // allows to pregenarate the path if it wasn't supported in the object we sent (false means it would return a 404 not found while with true it would generate the page dynamically )
    paths: meetupIds.map((meetup) => ({
      params: {
        meetId: meetup._id.toString(),
      },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetId; // meetId because it is the ID we used for the page id [meetId]
  const client = await MongoClient.connect(
    "mongodb+srv://meet-up:U8mUrBnj4nMUQNdw@testing-cluster.qqjhnqq.mongodb.net/?retryWrites=true&w=majority&appName=Testing-Cluster"
  );
  const db = client.db();
  const meetups = db.collection("meetups");
  const selectedMeetup = await meetups.findOne({ _id: new ObjectId(meetupId) }); // ObjectId is used to convert the string to qn object Id so mongodb would recognize it
  client.close();
  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
    },
  };
}
