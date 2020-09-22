import { NextApiRequest, NextApiResponse } from 'next'
import sgMail from "@sendgrid/mail";
require("dotenv").config();
const apiKey = process.env.SENDGRID_API_KEY!
sgMail.setApiKey(apiKey);

export default (req: NextApiRequest, res: NextApiResponse) => {
  const body = JSON.parse(req.body);
  body.popo = 'sss'
  res.status(200).json(body)
}