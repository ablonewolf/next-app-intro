import {MeetupDetail} from "@/components/meetups/MeetupDetail";
import {demoMeetupList} from "@/pages";

function MeetupDetailsPage(props) {
    return (
        <MeetupDetail
            meetupDetail={props.meetupDetail}
        />);
}

export function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: '1'
                }
            },
            {
                params: {
                    meetupId: '2'
                }
            }
        ]
    }
}

export async function getStaticProps(context) {
    // fetch data for a single meetup
    const meetupId = context.params.meetupId;
    return {
        props: {
            meetupDetail: {
                meetupId: meetupId,
                image: demoMeetupList[meetupId - 1].image,
                title: demoMeetupList[meetupId - 1].title,
                address: demoMeetupList[meetupId - 1].address,
                description: demoMeetupList[meetupId - 1].description
            }
        }
    }
}

export default MeetupDetailsPage