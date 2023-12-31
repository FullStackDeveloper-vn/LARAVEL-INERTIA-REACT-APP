import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";
import PaginatedItems from "@/Layouts/PaginatedItems";
import { usePage } from "@inertiajs/react";
import { Link } from "@inertiajs/react";
import Home from "@/Layouts/Home";
import { useState } from "react";

export default function xx({ auth, userx }) {
    // const list_users = userx.map((user) => <li>{user.name}</li>);

    const { component, url } = usePage();
    console.log({ component, url });

    const [query, setQuery] = useState("");
    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    // console.log({ userx });

    return (
        <>
            <Link
                href="/users"
                className={url.startsWith("/x") ? "active" : ""}
            >
                Users
            </Link>

            <Link preserveScroll href="/">
                Home
            </Link>
            <input onChange={handleChange} value={query} />
            <Link href="/search" data={query} preserveState>
                Search
            </Link>
            <p>
                <b>The lists of users : </b>
            </p>
            {/* <ul>{list_users}</ul> */}
            <PaginatedItems data={userx} itemsPerPage={10}>
                <Head title="Welcome" />
                <h1>Welcome </h1>
            </PaginatedItems>
            <Link href="/logout" method="post" as="button" type="button">
                <b>Logout</b>
            </Link>
            {/* <Link href="/endpoint" method="post" data={{ foo: bar }}>
                Save
            </Link> */}
            <Link replace href="/">
                <b>Home</b>
            </Link>
            <hr />
        </>
    );
}
