import MeetupList from "../components/meetups/MeetupList";
function HomePage(props) {
  return (
    <>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("http://localhost:3000/api/meetups", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const meetups = await response.json();

  return {
    props: {
      meetups,
    },
    revalidate: 10,
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
