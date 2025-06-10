import { sendMail } from '@/lib/email';
import { NextResponse } from 'next/server';
import sanitizeHtml from 'sanitize-html';
import SubmitterEmailTemplate from '@/components/contact/submitter-email-template';
import AdminEmailTemplate from '@/components/contact/admin-email-template';

const RECEIVER_EMAIL = process.env.RESEND_RECEIVER!;

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const clean = (input: string) => sanitizeHtml(input.trim(), { allowedTags: [], allowedAttributes: {} });

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const name = clean(body.name || '');
        const email = clean(body.email || '');
        const subject = clean(body.subject || '');
        const message = clean(body.message || '');
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: "All fields are required." },
                { status: 400 }
            );
        }
        if (!isValidEmail(email)) {
            return NextResponse.json(
                { error: 'Invalid email address.' },
                { status: 400 }
            );
        }
        if (!RECEIVER_EMAIL) {
            return NextResponse.json(
                { error: "Receiver email is not configured." },
                { status: 500 }
            );
        }
        await sendMail({
            from: `Portfolio Message ${process.env.RESEND_FROM_EMAIL!}`,
            to: RECEIVER_EMAIL,
            subject,
            text: `Message from ${name} <${email}>:\n\n${message}`,
            react: AdminEmailTemplate({name, email, subject, message}),
        });
        await sendMail({
            from: `Yacine Belahadji ${process.env.RESEND_FROM_EMAIL!}`,
            to: email,
            subject: `Thanks for reaching out, ${name}!`,
            text: `Thanks for reaching out ${name}. Your message has been received by Yacine Belahadji.\n\nEmail used: <${email}>:\n\nMessage: ${message}`,
            react: SubmitterEmailTemplate({name, subject, message}),
        });

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch  {
        return new Response(JSON.stringify({ error: 'Email failed to send' }), { status: 500 });
    }
}
