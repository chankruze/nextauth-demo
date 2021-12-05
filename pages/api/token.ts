/*
Author: chankruze (chankruze@geekofia.in)
Created: Sat Dec 04 2021 12:11:35 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2021 and beyond
*/

import { NextApiRequest, NextApiResponse } from "next";
import * as jwt from "next-auth/jwt";

const secret = process.env.SECRET;

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const token = await jwt.getToken({ req, secret });
    res.send(JSON.stringify(token, undefined, 2));
};
