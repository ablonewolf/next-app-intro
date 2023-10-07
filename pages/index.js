import {MeetupList} from "@/components/meetups/MeetupList";

const demoMeetupList = [
    {
        id: 1,
        title: "Regular Hangout Place",
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Curzon_Hall_Panorama.jpg',
        address: "Curzon Hall, Doyel Circle, University of Dhaka, Dhaka",
        description: "Central Exam hall of Curzon Hall"
    },
    {
        id: 2,
        title: "Second Preferred hangout zone",
        image: 'https://prod-media-eng.dhakatribune.com/uploads/2020/12/tsc-1608390694064.jpg',
        address: "TSC, University of Dhaka, Dhaka",
        description: "The inner field of TSC"
    }
]

function HomePage(props) {
    return <MeetupList meetups={props.meetups}/>
}

/*export async function getServerSideProps() {
    // fetch data from an api
    return {
        props: {
            meetups: demoMeetupList
        }
    };
}*/

export async function getStaticProps() {
    // fetch data from an api
    return {
        props: {
            meetups: demoMeetupList
        },
        revalidate: 10
    };
}

export default HomePage;