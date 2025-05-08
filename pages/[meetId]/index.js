import { useRouter } from "next/router";
import MeetUpDetail from "../../components/meetups/MeetUpDetail";
export default function DetailMeetPage() {
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
