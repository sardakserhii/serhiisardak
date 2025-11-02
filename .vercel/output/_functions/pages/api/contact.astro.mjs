import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

async function POST({ request }) {
  try {
    const data = await request.formData();
    const name = (data.get("name") ?? "").toString().trim();
    const email = (data.get("email") ?? "").toString().trim();
    const message = (data.get("message") ?? "").toString().trim();
    const company = (data.get("company") ?? "").toString().trim();
    if (company) return new Response(null, { status: 204 });
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ ok: false, error: "VALIDATION" }), {
        status: 400
      });
    }
    const resend = new Resend(undefined                              );
    await resend.emails.send({
      from: undefined                             || "Portfolio <noreply@your-domain.dev>",
      to: [undefined                          ],
      reply_to: email,
      subject: `Neue Nachricht von ${name}`,
      text: `Name: ${name}
Email: ${email}

Nachricht:
${message}`
    });
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ ok: false, error: "SERVER" }), {
      status: 500
    });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
