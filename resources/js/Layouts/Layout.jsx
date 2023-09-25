import { Link } from "@inertiajs/react";

export default function Layout({ children }) {
    return (
        <main>
            <header>
                Hi ! From Layout : <br />
                <hr />
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </header>
            <article>{children}</article>
        </main>
    );
}
