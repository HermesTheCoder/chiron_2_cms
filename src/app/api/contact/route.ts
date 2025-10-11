import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    const { name, email, subject, message } = body;
    
    // Validate the inputs
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Recipient email (where the form submissions will be sent)
    const recipientEmail = process.env.RECIPIENT_EMAIL || 'info@chironthx.com';
    const senderEmail = process.env.EMAIL_USER || 'info@chironthx.com';

    // Email content for the notification to the site admin
    const adminMailOptions = {
      from: `"Chiron Website Contact Form" <${senderEmail}>`,
      to: recipientEmail,
      subject: `[WEBSITE CONTACT] ${subject}`,
      text: `
        New Contact Form Submission from Website
        
        Contact Details
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        
        Message:
        ${message}
        
        ---
        This email was sent from the Chiron Therapeutics website contact form.
        Date: ${new Date().toLocaleString()}
      `,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333333;
              max-width: 600px;
              margin: 0 auto;
            }
            .container {
              border: 1px solid #e0e0e0;
              border-radius: 8px;
              overflow: hidden;
            }
            .header {
              background-color: #0f766e;
              color: white;
              padding: 20px;
              text-align: center;
            }
            .content {
              padding: 20px;
              background-color: #ffffff;
            }
            .section {
              margin-bottom: 20px;
              padding-bottom: 20px;
              border-bottom: 1px solid #f0f0f0;
            }
            .section:last-child {
              border-bottom: none;
              margin-bottom: 0;
              padding-bottom: 0;
            }
            .label {
              font-weight: bold;
              color: #0f766e;
            }
            .message-box {
              background-color: #f9f9f9;
              padding: 15px;
              border-radius: 6px;
              margin-top: 10px;
            }
            .footer {
              background-color: #f5f5f5;
              padding: 15px;
              text-align: center;
              font-size: 12px;
              color: #666666;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Contact Form Submission</h2>
            </div>
            <div class="content">
              <div class="section">
                <h3>Contact Details</h3>
                <p><span class="label">Name:</span> ${name}</p>
                <p><span class="label">Email:</span> <a href="mailto:${email}">${email}</a></p>
                <p><span class="label">Subject:</span> ${subject}</p>
              </div>
              
              <div class="section">
                <h3>Message</h3>
                <div class="message-box">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>
            </div>
            <div class="footer">
              This email was sent from the Chiron Therapeutics website contact form.<br>
              Date: ${new Date().toLocaleString()}<br>
              <strong>Note:</strong> You can reply directly to this email to respond to ${name}.
            </div>
          </div>
        </body>
        </html>
      `,
      // Set reply-to to the sender's email
      replyTo: email,
    };

    // Send the notification email to admin
    try {
      // Create a fresh transporter for each email
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST || 'mail.chironthx.com',
        port: parseInt(process.env.EMAIL_PORT || '465'),
        secure: process.env.EMAIL_SECURE === 'true',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
        tls: {
          rejectUnauthorized: false,
          minVersion: 'TLSv1.2',
          maxVersion: 'TLSv1.3'
        },
        connectionTimeout: 60000, // Increase to 60 seconds
        socketTimeout: 60000, // Increase to 60 seconds
        greetingTimeout: 30000, // Add greeting timeout
        debug: true,
        logger: true
      });
      
      // Set a timeout for the entire operation
      const emailPromise = transporter.sendMail(adminMailOptions);
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Email operation timed out')), 40000)
      );
      
      await Promise.race([emailPromise, timeoutPromise]);
      
      // Close the transporter
      transporter.close();
      
      return NextResponse.json({ success: true });
    } catch (emailError) {
      console.error('Failed to send admin email:', emailError);
      
      // Return more detailed error information
      return NextResponse.json(
        { 
          error: 'Failed to send message', 
          details: emailError instanceof Error ? emailError.message : 'Unknown error',
          code: emailError instanceof Error && 'code' in emailError ? emailError.code : undefined
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error processing contact form:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to send message',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
