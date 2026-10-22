export function getMailEnv() {
  const user = process.env.GMAIL_USER?.trim();
  const to = process.env.GMAIL_TO?.trim() || user;
  const rawPass = process.env.GMAIL_APP_PASSWORD?.trim();
  const pass = rawPass?.replace(/\s/g, "");

  if (!user || !pass || !to) {
    throw new Error(
      "Mail is not configured. Set GMAIL_USER, GMAIL_APP_PASSWORD, and optionally GMAIL_TO in your environment.",
    );
  }

  return { user, to, pass };
}
