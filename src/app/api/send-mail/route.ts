import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, company, service, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: Name, Email, and Message are required.' }, 
        { status: 400 }
      );
    }

    const receiverEmail = process.env.RECEIVER_EMAIL || 'biorajlabsngp@gmail.com';

    const { data, error } = await resend.emails.send({
      from: 'Bioraj Inquiry <onboarding@resend.dev>', // Apna custom domain verify karne ke baad change kar sakte hain
      to: [receiverEmail],
      replyTo: email,
      subject: `[New Lab Inquiry] ${service || 'General Testing'} - ${name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 24px; color: #1e293b; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
          
          {/* Header Banner */}
          <div style="background: #0A3F7A; padding: 18px 24px; border-radius: 8px 8px 0 0; border-bottom: 4px solid #7EB327; margin: -24px -24px 20px -24px;">
            <h2 style="color: #ffffff; margin: 0; font-size: 18px; letter-spacing: 0.5px;">BIORAJ LABORATORIES PVT. LTD.</h2>
            <p style="color: #7EB327; margin: 4px 0 0 0; font-size: 11px; font-weight: bold; text-transform: uppercase;">Direct Testing & Sample Intake Radar</p>
          </div>

          <p style="font-size: 14px; margin-top: 0; color: #334155;">
            You have received a new analytical testing inquiry from the website console:
          </p>

          <table style="width: 100%; border-collapse: collapse; font-size: 13px; margin: 16px 0;">
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 6px; font-weight: bold; color: #0A3F7A; width: 35%;">Client Name:</td>
              <td style="padding: 10px 6px; color: #0f172a; font-weight: 600;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 6px; font-weight: bold; color: #0A3F7A;">Company / Org:</td>
              <td style="padding: 10px 6px; color: #0f172a;">${company || 'Not Specified'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 6px; font-weight: bold; color: #0A3F7A;">Phone Number:</td>
              <td style="padding: 10px 6px; color: #0f172a; font-weight: bold;">
                <a href="tel:${phone}" style="color: #0A3F7A; text-decoration: none;">${phone || 'Not Provided'}</a>
              </td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 6px; font-weight: bold; color: #0A3F7A;">Official Email:</td>
              <td style="padding: 10px 6px; color: #0f172a;">
                <a href="mailto:${email}" style="color: #0A3F7A; text-decoration: none;">${email}</a>
              </td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 6px; font-weight: bold; color: #0A3F7A;">Testing Division:</td>
              <td style="padding: 10px 6px; color: #7EB327; font-weight: 800;">${service || 'General Testing'}</td>
            </tr>
          </table>

          <div style="margin-top: 16px; padding: 14px; background-color: #f8fafc; border-radius: 8px; border-left: 4px solid #0A3F7A;">
            <p style="margin: 0 0 6px 0; font-size: 11px; font-weight: bold; color: #64748b; text-transform: uppercase;">Sample Details / Parameters Query:</p>
            <p style="margin: 0; font-size: 13px; line-height: 1.6; color: #0f172a; white-space: pre-wrap;">${message.replace(/\n/g, '<br/>')}</p>
          </div>

          <div style="margin-top: 24px; text-align: center;">
            <a href="mailto:${email}?subject=Quotation%20for%20${encodeURIComponent(service || 'Testing')}%20-%20Bioraj%20Laboratories" 
               style="display: inline-block; background-color: #0A3F7A; color: #ffffff; padding: 10px 20px; font-size: 12px; font-weight: bold; text-decoration: none; border-radius: 6px;">
              Reply to Client
            </a>
            ${phone ? `
              <a href="tel:${phone}" 
                 style="display: inline-block; background-color: #7EB327; color: #ffffff; padding: 10px 20px; font-size: 12px; font-weight: bold; text-decoration: none; border-radius: 6px; margin-left: 8px;">
                Call Directly
              </a>
            ` : ''}
          </div>

          <p style="font-size: 11px; color: #94a3b8; margin-top: 24px; text-align: center; border-top: 1px solid #f1f5f9; pt: 12px;">
            Submitted securely via Bioraj Laboratories Web Dispatch Console (Pune Unit)
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return NextResponse.json({ error: error.message || 'Resend error' }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    console.error('API Error:', err);
    return NextResponse.json({ error: err.message || 'Internal Server Error' }, { status: 500 });
  }
}