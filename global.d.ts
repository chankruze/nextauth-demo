/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Dec 03 2021 20:01:23 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2021 and beyond
*/

import { MongoClient } from "mongodb";

declare global {
    var _mongoClientPromise: Promise<MongoClient>;
}
