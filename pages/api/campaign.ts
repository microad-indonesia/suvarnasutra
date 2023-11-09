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
  console.log("body: ", body);
  if (!body.FirstName || !body.Email) {
    // Sends a HTTP bad request error code
    return res?.status(400).json({ data: "name or email not found" });
  }

  const test = {
    AgeRange: "25-34",
    Email: "juzo@suzuya.com",
    FirstName: "juzo",
    LastName: "hahaha",
    Message: "adadadad",
    PageFrom: "basanta-external",
    PhoneNumbe: "09099989",
  };

  await axios.post(
    `${process.env.POST_URL}`,
    { test },
    {
      headers: {
        Authorization: `Basic ${process.env.TOKEN}`,
        "Content-Type": "application/json",
      },
    },
  );

  return res?.status(200).json(body);
}
