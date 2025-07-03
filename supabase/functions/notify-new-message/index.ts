import { serve } from "https://deno.land/std@0.203.0/http/server.ts";

serve(async (req) => {
  try {
    const { name, email, message } = await req.json();
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

    const payload = {
      from: "Portfolio Contact <no-reply@sanskar.dev>",
      to: "sanskar0808jain@gmail.com",
      subject: `📩 New message from ${name}`,
      html: `
        <h2>You've got a new message!</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    console.log("✅ Email sent via Resend:", data);

    return new Response(JSON.stringify({ status: "sent" }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("❌ Resend error (ignored):", err);
    return new Response(JSON.stringify({ status: "failed" }), {
      status: 200, // ← Important: never return 500, or the insert breaks
      headers: { "Content-Type": "application/json" },
    });
  }
});