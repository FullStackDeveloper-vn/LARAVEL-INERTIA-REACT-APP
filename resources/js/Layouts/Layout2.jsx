import { Link } from "@inertiajs/react";

export default function Layout2({ children }) {
    return (
        <main>
            <header>
                Hi ! Layout2 From Layout2 : <br />
                <hr />
                <Link href="/">Home from Layout2</Link> ---
                <Link href="/xx">About from Layout2</Link>---
                <Link href="/contact">Contact from Layout2</Link>
            </header>
            <hr />

            <article>{children}</article>
        </main>
    );
}
