import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Layout2 from "@/Layouts/Layout2";
import Layout from "@/Layouts/Layout";

// import SiteLayout from "./SiteLayout";
// import NestedLayout from "./NestedLayout";

const Home = (props) => {
    // console.log({ props });
    // let xxxx = usePage().props;

    console.log(props);

    return (
        <>
            <h1>Search Page </h1>
            <p>
                Hi ! , {props.auth.user.name}, , <br /> welcome to your first
                Inertia app!
            </p>
        </>
    );
};

Home.layout = (page) => (
    <Layout2 title="Welcome">
        <Layout children={page} />
    </Layout2>
);

export default Home;
