import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, email, company, projectType, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: 'WBW Contact Form <contact@webuildsites.net>',
    to: 'info@webuildsites.net',
    replyTo: email,
    subject: `New enquiry from ${name}${company ? ` (${company})` : ''}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : '',
      projectType ? `Project type: ${projectType}` : '',
      '',
      message,
    ]
      .filter(Boolean)
      .join('\n'),
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <h2 style="color:#1d4ed8;margin-bottom:24px">New enquiry from ${name}</h2>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px 0;color:#71717a;width:120px">Name</td><td style="padding:8px 0;font-weight:600">${name}</td></tr>
          <tr><td style="padding:8px 0;color:#71717a">Email</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#1d4ed8">${email}</a></td></tr>
          ${company ? `<tr><td style="padding:8px 0;color:#71717a">Company</td><td style="padding:8px 0">${company}</td></tr>` : ''}
          ${projectType ? `<tr><td style="padding:8px 0;color:#71717a">Project type</td><td style="padding:8px 0">${projectType}</td></tr>` : ''}
        </table>
        <hr style="border:none;border-top:1px solid #e4e4e7;margin:24px 0"/>
        <p style="color:#3f3f46;white-space:pre-wrap;line-height:1.6">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
        <p style="color:#a1a1aa;font-size:12px;margin-top:32px">Sent via webuildsites.net contact form</p>
      </div>
    `,
  });

  if (error) {
    console.error('Resend error:', error);
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
