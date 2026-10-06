import { NextResponse } from "next/server";

type ApiBody = {
  success: boolean;
  message?: string;
  error?: string;
  errors?: Record<string, string[]>;
};

export function apiJson(body: ApiBody, status: number) {
  return NextResponse.json(body, { status });
}

export function apiSuccess(message = "Message sent successfully.") {
  return apiJson({ success: true, message }, 200);
}

export function apiError(
  status: number,
  error: string,
  errors?: Record<string, string[]>,
) {
  return apiJson({ success: false, error, errors }, status);
}
