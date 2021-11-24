/*
Author: chankruze (chankruze@geekofia.in)
Created: Mon Nov 22 2021 18:30:17 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2021 and beyond
*/

import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export default NextAuth({
    secret: process.env.SECRET,
    providers: [
        // OAuth authentication providers...
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
    pages: {
        signIn: "/signin",
    },
});
