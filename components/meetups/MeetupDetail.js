import classes from './MeetupDetail.module.css'

export const MeetupDetail = (props) => {
    return (
        <section className={classes.detail}>
            <img
                src={props.meetupDetail.image}
                alt={props.meetupDetail.title}
            />
            <h1>{props.meetupDetail.title}</h1>
            <address>{props.meetupDetail.address}</address>
            <p>{props.meetupDetail.description}</p>
        </section>
    )
}