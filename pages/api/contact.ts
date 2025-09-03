// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';
import SMTP2GOApi from 'smtp2go-nodejs';

interface FormResponse {
  status: string;
}

const api = SMTP2GOApi(process.env.SMTP2GO_API_KEY ?? '');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<FormResponse>,
) {
  const { body, method } = req;
  const { data, token } = JSON.parse(body);

  if (method === 'POST') {
    // If email or captcha are missing return an error
    if (!data || !token) {
      return res.status(422).json({
        status: 'Unproccesable request, please provide the required fields',
      });
    }
    try {
      // Ping the google recaptcha verify API to verify the captcha code you received
      const response = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
          },
          method: 'POST',
        },
      );
      const captchaValidation: any = await response.json();
      /**
       * The structure of response from the verify API is
       * {
       *  "success": true|false,
       *  "challenge_ts": timestamp,  // timestamp of the challenge load (ISO format yyyy-MM-dd'T'HH:mm:ssZZ)
       *  "hostname": string,         // the hostname of the site where the reCAPTCHA was solved
       *  "error-codes": [...]        // optional
        }
       */
      if (captchaValidation.success) {
        try {
          const mailService = api
            .mail()
            .to({ email: process.env.CONTACT_FORM_SUBMIT_TO ?? '' })
            .from({ email: 'hi@kuhnstreeservice.com' })
            .subject('New Website Submission').html(`
            <p>${data.firstName} ${data.lastName}</p>
            <p>${data.phone}</p>
            <p>${data.email}</p>
            <p>${data.address}</p> 
            <p>${data.city}, ${data.state} ${data.zip}</p>
            <p>${data.serviceType}</p>
            <p>${data.details}</p>`);
          await api.client().consume(mailService);
        } catch (error: any) {
          return res
            .status(error.statusCode || 500)
            .json({ status: error.message });
        }
        return res.status(200).send({ status: 'Ok' });
      }

      return res.status(422).json({
        status: 'Unproccesable request, Invalid captcha code',
      });
    } catch (error) {
      return res.status(422).json({ status: 'Something went wrong' });
    }
  }
  // Return 404 if someone pings the API with a method other than
  // POST
  return res.status(404).send({ status: 'Not found' });
}
