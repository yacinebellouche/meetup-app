import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Head from "next/head";
export default function NewMeetupPage() {
  const router = useRouter();
  async function addMeetupHandler(newMeetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(newMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);
    // router.replace('/') //we can't go back with the backbutton 
    router.replace('/')

  }

  return <>
       <Head>
        <title>Add Meetup</title>
        <meta
          name="description"
          content="Add a new meetup"
        />
      </Head>
  <NewMeetupForm onAddMeetup={addMeetupHandler} />
  </> ;
}
