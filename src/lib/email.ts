import { ReactElement } from 'react';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

type SendEmailParams = {
  from: string,
  to: string;
  subject: string;
  react: ReactElement;
  text: string;
};


export async function sendMail({
  from,
  to,
  subject,
  text,
  react,
}: SendEmailParams) {
  if (!from) throw new Error('No sender email configured');
  try {
    const { error } = await resend.emails.send({
      from,
      to,
      subject,
      react,
      text,
    });
    if (error) {
      throw new Error('Email failed to send');
    }
  } catch {
      throw new Error('Email failed to send');
  }
}