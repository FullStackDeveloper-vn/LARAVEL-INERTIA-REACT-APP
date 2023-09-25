import Layout from "@/Layouts/Layout";

const Home2 = ({ user }) => {
    return (
        <>
            <H1>Welcome</H1>
            <p>Hello {user.name}, welcome to your first Inertia app!</p>
        </>
    );
};

Home2.layout = (page) => <Layout children={page} title="Welcome" />;

export default Home2;
