import classes from './MeetupDetail.module.css'
import {useRouter} from "next/router";

export const MeetupDetail = (props) => {
    const router = useRouter();
    const showHomePageHandler = () => {
        router.push('/');
    }
    return (
        <section className={classes.detail}>
            <img
                src={props.meetupDetail.image}
                alt={props.meetupDetail.title}
            />
            <h1>{props.meetupDetail.title}</h1>
            <address>{props.meetupDetail.address}</address>
            <p>{props.meetupDetail.description}</p>
            <button onClick={showHomePageHandler}>Go Back</button>
        </section>
    )
}