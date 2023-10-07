import {Card} from '@/components/ui/Card';
import classes from './MeetupItem.module.css';

export const MeetupItem = (props) => {
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
                    <button>Show Details</button>
                </div>
            </Card>
        </li>
    );
}