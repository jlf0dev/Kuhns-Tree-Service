// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

interface IFormData {
  firstName: string;
  lastName: string;
  phone: number;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  serviceType: string;
  details: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IFormData>
) {
  const body = JSON.parse(req.body);
  console.log(body);
  res.status(200);
}
