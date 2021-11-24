import { signIn, signOut, useSession } from "next-auth/react";
import Layout from "../components/modules/Layout";
import LoadingSession from "../components/elements/LoadingSession";

const Home = () => {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return <LoadingSession />;
    }

    if (status === "unauthenticated") {
        return signIn();
    }

    return (
        <Layout
            className="flex flex-col w-full flex-1
        bg-gray-50 min-h-screen items-center
            user-select-none"
            title="Dashboard"
            footer
        >
            <main
                className="bg-white w-[400px] flex flex-col my-auto
                p-4 rounded drop-shadow-md justify-center items-center"
            >
                <p className="text-sm p-2">Signed in as</p>
                <p className="text-2xl p-2">
                    {session && session.user && session.user.name}
                </p>
                <button
                    className="bg-red-500 text-white py-2 px-4 mt-6 rounded"
                    onClick={() => signOut()}
                >
                    Sign out
                </button>
            </main>
        </Layout>
    );
};

export default Home;
