/*
Author: chankruze (chankruze@geekofia.in)
Created: Mon Nov 22 2021 19:52:26 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2021 and beyond
*/

import Head from "next/head";
import { config } from "../../config";
import Footer from "./Footer";
import NavBar from "./NavBar";

interface Props {
    title?: string;
    navbar?: true | undefined;
    footer?: true | undefined;
    className: string;
}

const Layout: React.FC<Props> = ({
    title,
    navbar,
    footer,
    className,
    children,
}) => {
    return (
        <div className={className}>
            {/* head */}
            <Head>
                //* dynamically insert college short name and title
                <title>
                    {title} | {config.APP_NAME} Management
                </title>
                // TODO: update favicon.ico
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content={`management portal of ${config.APP_NAME}`}
                />
                <meta
                    name="developer"
                    content="chankruze <chankruze@gmail.com>"
                />
            </Head>
            {navbar && <NavBar />}
            {/* header/nav */}
            {/* render children */}
            {children}
            {/* footer */}
            {footer && <Footer />}
        </div>
    );
};

export default Layout;
