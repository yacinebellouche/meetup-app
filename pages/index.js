import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMBY_DATA = [
  {
    id: "meetid1",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/74/Alger-Aurore.jpg",
    title: "This is Just a meet up",
    address: "7 rue de coulmiers",
    description: "random text",
  },
  {
    id: "meetid2",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/74/Alger-Aurore.jpg",
    title: "This is Just a meetup2",
    address: "7 rue de coulmiers",
    description: "random text",
  },
  {
    id: "meetid3",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/74/Alger-Aurore.jpg",
    title: "This is Just a meet up3",
    address: "7 rue de coulmiers",
    description: "random text",
  },
];

function HomePage(props) {
  return (
    <>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

export async function getStaticProps() {
  // fetch data from API
  return {
    props: {
      meetups: DUMBY_DATA,
    },
    revalidate: 10, //allows to re pregenerate this page (upon request for it) on the server every 10 seconds, this way we make sure that our page is up to date
  };
}

/*export async function getServerSideProps(context) {
  const req = context.req; // auth, session cookie, request body...etc
  const res = context.res; // we can manipulate the response object so we can return our props object

  return {
    props: {
      meetups: DUMBY_DATA,
    },
  };
}
*/
export default HomePage;
