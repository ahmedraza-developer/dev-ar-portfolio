import projectFeedbackMail from "@/helpers/projectFeedbackMail";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { project, rating, message } = await request.json();

    if (!project || !rating || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    const mailResponse = await projectFeedbackMail({
      project,
      rating,
      message,
    });

    if (mailResponse) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    return NextResponse.json(
      { success: false, error: "Unable to send feedback." },
      { status: 500 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

