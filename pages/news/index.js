import {Fragment} from "react";
import Link from "next/link";

const NewsPage = () => {
    return (
        <Fragment>
            <h1>News Page Header</h1>
            <ul>
                <li>
                    <Link href={'/news/detail'}>
                        Detail page
                    </Link>
                </li>
                <li>
                    Some Other page
                </li>
            </ul>
        </Fragment>
    )
};
export default NewsPage;
