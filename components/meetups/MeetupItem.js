import {Card} from '@/components/ui/Card';
import classes from './MeetupItem.module.css';
import {useRouter} from "next/router";

export const MeetupItem = (props) => {

    const router = useRouter();
    const showDetailsHandler = () => {
        router.push('/' + props.id);
    }
    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.imageContainer}>
                    <img
                        className={classes.image}
                        style={{maxWidth: '800px', height: 'auto'}}
                        src={props.image}
                        alt={props.title}
                    />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                </div>
                <div className={classes.actions}>
                    <button onClick={showDetailsHandler}>Show Details</button>
                </div>
            </Card>
        </li>
    );
}
