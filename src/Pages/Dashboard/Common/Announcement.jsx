import { Helmet } from "react-helmet-async";


const Announcement = () => {

    return (
        <div>
            <div>
                <Helmet>
                    <title>Safoon Estate | announcement </title>
                </Helmet>
            </div>
            <h2 className="text-red-400 font-bold text-5xl">Admin Announcement</h2>
            <p className="text-green-500 font-semibold text-3xl">Your destination for everything running. Get inspired, <br /> get connected, and get geared up.</p>

        </div>
    );
};

export default Announcement;