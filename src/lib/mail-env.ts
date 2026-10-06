export function getMailEnv() {
  const user = process.env.GMAIL_USER?.trim();
  const rawPass = process.env.GMAIL_APP_PASSWORD?.trim();
  const pass = rawPass?.replace(/\s/g, "");

  if (!user || !pass) {
    throw new Error(
      "Mail is not configured. Set GMAIL_USER and GMAIL_APP_PASSWORD in your environment.",
    );
  }

  return { user, pass };
}
