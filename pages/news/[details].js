import {useRouter} from "next/router";

const DetailsPage = () => {
    const router = useRouter();
    console.log(router.query.details);
    return (
        <h1>The Details Page Header</h1>
    )
};
export default DetailsPage;