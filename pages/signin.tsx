/*
Author: chankruze (chankruze@geekofia.in)
Created: Mon Nov 22 2021 19:45:52 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2021 and beyond
*/

import { getProviders, getSession } from "next-auth/react";
import Link from "next/link";
import Layout from "../components/modules/Layout";
import ProviderLoginButton from "../components/modules/ProviderLoginButton";

const SignIn = ({ providers }) => {
    // const { data: session } = useSession();
    // if (session)

    return (
        <Layout
            title="Login"
            className="flex flex-col w-full flex-1 bg-gray-50
            min-h-screen items-center user-select-none"
            footer
        >
            <main
                className="bg-white w-[400px] flex flex-col
            p-4 rounded drop-shadow-md my-auto"
            >
                <div>
                    <img
                        src="https://static.getpostman.com/assets/pm-logo-1.svg"
                        className="h-32 w-32 mx-auto -mt-20"
                    />
                </div>
                {/* signin / signup */}
                <div className="py-2 px-4 pb-4 flex justify-between items-center flex-wrap">
                    <p className="capitalize font-medium text-2xl">sign in</p>
                    <p className="capitalize text-sm">
                        <Link href="/register">
                            <a className="text-blue-500 font-medium">
                                create account
                            </a>
                        </Link>{" "}
                        instead?
                    </p>
                </div>
                <div className="py-2 px-4 ">
                    <p className="font-medium text-sm">Email or Username</p>
                    <input
                        className="w-full p-2 my-2 rounded
                        border bg-gray-50
                        hover:border-yellow-400
                        focus:outline-none focus:border-yellow-700"
                        type="text"
                    />
                </div>
                <div className="py-2 px-4 ">
                    <p className="capitalize font-medium text-sm">password</p>
                    <input
                        className="w-full p-2 my-2 rounded
                        border bg-gray-50
                        hover:border-yellow-400
                        focus:outline-none focus:border-yellow-700"
                        type="password"
                    />
                </div>
                <div className="py-2 px-4 flex justify-between items-center">
                    <div className="flex items-center flex-wrap">
                        <input type="checkbox" />
                        <p className="ml-1 text-sm">Keep me signed in</p>
                    </div>
                    <div>
                        <Link href="/forgot-password">
                            <a
                                className="capitalize text-sm 
                            text-blue-500 font-medium"
                            >
                                forgot password?
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="py-2 px-4">
                    <button
                        className="w-full py-3 px-4 
                        text-white capitalize 
                        bg-yellow-600 rounded"
                    >
                        login
                    </button>
                </div>
                <div className="py-2 px-4 flex justify-evenly items-center">
                    <div className="h-[1px] flex-1 bg-gray-100 mx-8"></div>
                    <p className="text-gray-400 text-sm">or</p>
                    <div className="h-[1px] flex-1 bg-gray-100 mx-8"></div>
                </div>
                {/* render provider login buttons */}
                {providers &&
                    Object.keys(providers).map((key, _idx) => (
                        <div className="py-2 px-4" key={_idx}>
                            <ProviderLoginButton
                                provider={providers[key]}
                                bgColor="bg-black"
                            />
                        </div>
                    ))}
            </main>
        </Layout>
    );
};

SignIn.getInitialProps = async ({ req, res }) => {
    // get session info
    const session = await getSession({ req });
    // use session.accessToken also (jwt)(custom server)
    if (session && res) {
        res.writeHead(302, {
            Location: "/",
        });
        res.end();
        return;
    }

    return {
        providers: await getProviders(),
        session: undefined,
        // csrfToken: await csrfToken(context), // used for email
    };
};

export default SignIn;
