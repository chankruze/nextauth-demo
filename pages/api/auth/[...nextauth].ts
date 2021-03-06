/*
Author: chankruze (chankruze@geekofia.in)
Created: Mon Nov 22 2021 18:30:17 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2021 and beyond
*/

import type { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import EmailProvider from "next-auth/providers/email";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
    // Do whatever you want here, before the request is passed down to `NextAuth`
    return await NextAuth(req, res, {
        secret: process.env.SECRET,
        adapter: MongoDBAdapter(clientPromise),
        providers: [
            // OAuth authentication providers...
            GitHubProvider({
                clientId: process.env.GITHUB_ID,
                clientSecret: process.env.GITHUB_SECRET,
            }),
            EmailProvider({
                server: {
                    host: process.env.EMAIL_SERVER_HOST,
                    port: process.env.EMAIL_SERVER_PORT,
                    auth: {
                        user: process.env.EMAIL_SERVER_USER,
                        pass: process.env.EMAIL_SERVER_PASS,
                    },
                },
                // server: process.env.EMAIL_SERVER,
                from: process.env.EMAIL_FROM,
            }),
        ],
        session: {
            // Use JSON Web Tokens for session instead of database sessions.
            // This option can be used with or without a database for users/accounts.
            // Note: `strategy` should be set to 'jwt' if no database is used.
            strategy: "jwt",

            // Seconds - How long until an idle session expires and is no longer valid.
            // maxAge: 30 * 24 * 60 * 60, // 30 days

            // Seconds - Throttle how frequently to write to database to extend a session.
            // Use it to limit write operations. Set to 0 to always update the database.
            // Note: This option is ignored if using JSON Web Tokens
            // updateAge: 24 * 60 * 60, // 24 hours
        },
        // JSON Web tokens are only used for sessions if the `jwt: true` session
        // option is set - or by default if no database is specified.
        // https://next-auth.js.org/configuration/options#jwt
        jwt: {
            // A secret to use for key generation (you should set this explicitly)
            // secret: 'INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw',
            secret: process.env.SECRET,
            // Set to true to use encryption (default: false)
            // encryption: true,
            // You can define your own encode/decode functions for signing and encryption
            // if you want to override the default behaviour.
            // encode: async ({ secret, token, maxAge }) => {},
            // decode: async ({ secret, token, maxAge }) => {},
        },
        // pages: {
        //     signIn: "/signin",
        // },
        // Callbacks are asynchronous functions you can use to control what happens
        // when an action is performed.
        // https://next-auth.js.org/configuration/callbacks
        callbacks: {
            // async signIn({ user, account, profile, email, credentials }) { return true },
            // async redirect({ url, baseUrl }) { return baseUrl },
            // async session({ session, token, user }) { return session },
            // async jwt({ token, user, account, profile, isNewUser }) { return token }
        },

        // Events are useful for logging
        // https://next-auth.js.org/configuration/events
        events: {},

        // You can set the theme to 'light', 'dark' or use 'auto' to default to the
        // whatever prefers-color-scheme is set to in the browser. Default is 'auto'
        // theme: {
        //     colorScheme: "light",
        // },

        // Enable debug messages in the console if you are having problems
        debug: true,
        pages: {
            signIn: "/signin",
        },
    });
}
