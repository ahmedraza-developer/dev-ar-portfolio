import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { message } = await request.json();

    if (!message || !message.trim()) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Groq API configuration
    const GROQ_API_KEY = process.env.GROQ_API_KEY;
    const GROQ_API_URL = process.env.GROQ_API_URL || 'https://api.groq.ai/v1/chat/completions';

    // Call Groq API
    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        instructions: `You are Ahmed Raza, a professional web developer and designer. You help visitors with their queries about web development, design, and portfolio services. Keep responses concise, helpful, and professional. Always provide valuable insights and solutions.`,
        messages: [{ role: 'user', content: message }],
        max_tokens: 150,
        temperature: 0.7,
        stream: false
      })
    });

    if (!response.ok) {
      throw new Error(`Groq API error: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.choices[0]?.message?.content || 'Sorry, I couldn\'t process your request right now.';

    return NextResponse.json(
      { 
        success: true, 
        response: aiResponse,
        model: 'llama-3.3-70b-versatile'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Groq API Error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to get AI response',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

// Handle GET requests (health check)
export async function GET() {
  return NextResponse.json(
    { 
      status: 'Groq API endpoint is running',
      timestamp: new Date().toISOString()
    },
    { status: 200 }
  );
}
