import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMBY_DATA = [
  {
    id: "meetid1",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/74/Alger-Aurore.jpg",
    title: "This is Just a meet up",
    address: "7 rue de coulmiers",
    description: "random text"
  },
  {
    id: "meetid2",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/74/Alger-Aurore.jpg",
    title: "This is Just a meetup2",
    address: "7 rue de coulmiers",
    description: "random text"
  },
  {
    id: "meetid3",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/74/Alger-Aurore.jpg",
    title: "This is Just a meet up3",
    address: "7 rue de coulmiers",
    description: "random text"
  },
];

function HomePage(props) {
  return (
    <>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

export async function getStaticProps(){
    // fetch data from API
    return {
        props: {
            meetups: DUMBY_DATA

        }
    }
}

export default HomePage;
