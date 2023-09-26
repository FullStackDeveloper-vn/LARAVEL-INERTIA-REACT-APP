import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";

export default function Dashboard(props) {
    return (
        <>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Dashboard User : {props.auth.user.name}
                    </h2>
                }
            >
                <Head title="Dashboard" />

                <div className="main">
                    <div className="overlay"></div>
                    <video src="videoBg.mp4" autoPlay loop muted />
                </div>
            </AuthenticatedLayout>
        </>
    );
}
