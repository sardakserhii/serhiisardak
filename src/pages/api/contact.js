import { Resend } from "resend";

export async function POST({ request }) {
  try {
    const data = await request.formData();
    const name = (data.get("name") ?? "").toString().trim();
    const email = (data.get("email") ?? "").toString().trim();
    const message = (data.get("message") ?? "").toString().trim();
    const company = (data.get("company") ?? "").toString().trim(); // honeypot

    // anti-bot: если «скрытое» поле заполнено — молча выходим
    if (company) return new Response(null, { status: 204 });

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ ok: false, error: "VALIDATION" }), {
        status: 400,
      });
    }

    const resend = new Resend(import.meta.env.RESEND_API_KEY);

    await resend.emails.send({
      from:
        import.meta.env.CONTACT_FROM || "Portfolio <noreply@your-domain.dev>",
      to: [import.meta.env.CONTACT_TO],
      reply_to: email,
      subject: `Neue Nachricht von ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nNachricht:\n${message}`,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ ok: false, error: "SERVER" }), {
      status: 500,
    });
  }
}
