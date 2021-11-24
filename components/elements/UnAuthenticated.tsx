/*
Author: chankruze (chankruze@geekofia.in)
Created: Wed Nov 24 2021 00:07:21 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2021 and beyond
*/

import { signIn } from "next-auth/react";
import Layout from "../modules/Layout";

const UnAuthenticated = () => {
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
                <p className="text-lg pb-2 lowercase">
                    You are not authenticated
                </p>
                <button
                    className="bg-red-500 text-white py-2 px-4 rounded capitalize"
                    onClick={() => signIn()}
                >
                    Sign in to continue
                </button>
            </main>
        </Layout>
    );
};

export default UnAuthenticated;
