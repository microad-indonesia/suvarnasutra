/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // Get data submitted in request's body.
  const body: any = req.body;
  // console.log("body: ", body);
  if (!body.FirstName || !body.Email) {
    // Sends a HTTP bad request error code
    return res?.status(400).json({ data: "name or email not found" });
  }

  const test = {
    AgeRange: "25-34",
    FirstName: "juzo",
    LastName: "hahaha",
    Email: "juzo@suzuya.com",
    Message: "test send message from new landingpage",
    PageFrom: "basanta-external",
    PhoneNumber: "6285760886989",
  };

  // const URLEncode: string = new URLSearchParams(test).toString();

  await axios.post(`${process.env.POST_URL}`, test, {
    headers: {
      Authorization: `Basic ${process.env.TOKEN}`,
      "Content-Type": "application/json",
    },
  });

  return res?.status(200);
}
