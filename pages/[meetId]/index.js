import { useRouter } from "next/router";
import MeetUpDetail from "../../components/meetups/MeetUpDetail";
export default function DetailMeetPage(props) {
  const router = useRouter();
  return (
    <MeetUpDetail
      img="https://upload.wikimedia.org/wikipedia/commons/7/74/Alger-Aurore.jpg"
      title="First Meetup"
      address=" Some Street"
      description="This is a first meetup"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false, // allows to pregenarate the path if it wasn't supported in the object we sent (false means it would return a 404 not found while with true it would generate the page dynamically )
    paths: [
      {
        params: {
          meetId: "meetid1",
        },
      },
      {
        params: {
          meetId: "meetid2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetId; // meetId because it is the ID we used for the page id [meetId]
  return {
    props: {
      meetupData: {
        img: "https://upload.wikimedia.org/wikipedia/commons/7/74/Alger-Aurore.jpg",
        title: "First Meetup",
        address: " Some Street",
        description: "This is a first meetup",
      },
    },
  };
}
