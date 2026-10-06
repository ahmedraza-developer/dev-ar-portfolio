import mail from "@/helpers/mail";
import { apiError, apiSuccess } from "@/lib/api-response";
import { leadRequestSchema } from "@/lib/lead-schema";
import { rateLimit } from "@/lib/rate-limit";
import { NextRequest } from "next/server";

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }

  return request.headers.get("x-real-ip") ?? "unknown";
}

function formatZodErrors(
  fieldErrors: Record<string, string[] | undefined>,
): Record<string, string[]> {
  return Object.fromEntries(
    Object.entries(fieldErrors)
      .filter((entry): entry is [string, string[]] => Boolean(entry[1]?.length))
      .map(([field, messages]) => [field, messages]),
  );
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  const limit = rateLimit(`leads:${ip}`);

  if (!limit.success) {
    return apiError(
      429,
      `Too many requests. Try again in ${limit.retryAfterSeconds} seconds.`,
    );
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return apiError(400, "Invalid JSON body.");
  }

  const parsed = leadRequestSchema.safeParse(body);

  if (!parsed.success) {
    return apiError(
      400,
      "Validation failed.",
      formatZodErrors(parsed.error.flatten().fieldErrors),
    );
  }

  const { website, ...lead } = parsed.data;

  if (website?.trim()) {
    return apiSuccess();
  }

  try {
    const mailResponse = await mail(lead);

    if (!mailResponse?.messageId) {
      return apiError(500, "Failed to send message. Please try again later.");
    }

    return apiSuccess();
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unexpected error occurred.";
    return apiError(500, message);
  }
}
