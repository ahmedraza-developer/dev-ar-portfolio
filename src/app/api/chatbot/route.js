import { NextResponse } from 'next/server';
import chatbotMail from '@/helpers/chatbotMail';

export async function POST(request) {
  try {
    const { message, timestamp } = await request.json();

    if (!message || !message.trim()) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Use the same helper function pattern as existing mail.js
    const mailresponse = await chatbotMail({ message, timestamp });
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Message sent successfully',
        mailId: mailresponse.messageId
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Chatbot API Error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to send message',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

// Handle GET requests (optional - for health check)
export async function GET() {
  return NextResponse.json(
    { 
      status: 'Chatbot API is running',
      timestamp: new Date().toISOString()
    },
    { status: 200 }
  );
}
