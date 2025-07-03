import { serve } from "https://deno.land/std@0.203.0/http/server.ts";

console.log("🔔 Edge Function Triggered");
serve(async (req) => {
  try {


    const { name, email, message } = await req.json();

    console.log("🔔 Edge Function Triggered");
    console.log("📨 Received:", { name, email, message });

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    console.log("🔑 Resend API key loaded:", RESEND_API_KEY ? "YES" : "MISSING");


    if (!name || !email || !message) {
      return new Response("Missing required fields", { status: 400 });
    }

    const payload = {
      from: "Sanskar Jain <onboarding@resend.dev>",
      to: "sanskar0808jain@gmail.com",
      subject: `📬 New message from ${name}`,
      html: `
        <h2>You've got a new message!</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
        <hr/>
        <small>Sent via portfolio contact form</small>
      `,
    };

     console.log("📦 Payload to Resend:", payload);

   
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const result = await response.json();
    console.log("✅ Resend response:", result);
    

    return new Response(JSON.stringify({ status: "sent", result }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("❌ Resend error:", err);
    return new Response(JSON.stringify({ status: "failed" }), {
      status: 200, // Keep this 200 so DB trigger doesn't break
      headers: { "Content-Type": "application/json" },
    });
  }
});