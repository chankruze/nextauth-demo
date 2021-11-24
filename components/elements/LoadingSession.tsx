/*
Author: chankruze (chankruze@geekofia.in)
Created: Wed Nov 24 2021 00:08:14 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2021 and beyond
*/

import React from "react";
import { PuffLoader } from "react-spinners";
import Layout from "../modules/Layout";

const LoadingSession = () => {
    return (
        <Layout
            className="flex flex-col justify-center w-full flex-1 
            bg-gray-50 min-h-screen items-center user-select-none"
            title="Dashboard"
        >
            <PuffLoader />
        </Layout>
    );
};

export default LoadingSession;
