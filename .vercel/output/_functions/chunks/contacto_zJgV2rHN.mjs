import { Resend } from 'resend';

const prerender = false;
const resendApiKey = "re_EWF6C5Wu_JJspRLaKUP3FR1So6HRpAQzr";
const resend = new Resend(resendApiKey) ;
const toEmail = "elenabodom@gmail.com"?.trim() || "elenapapoula98@gmail.com";
const fromEmail = "Contacto desde Porfolio<onboarding@resend.dev>"?.trim() || "Contacto web <onboarding@resend.dev>";
const GET = () => {
  return new Response(JSON.stringify({ ok: true, message: "Endpoint de contacto listo" }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
};
const POST = async ({ request }) => {
  const contentType = request.headers.get("content-type") ?? "";
  let data = null;
  try {
    if (contentType.includes("application/x-www-form-urlencoded")) {
      const text = await request.text();
      data = new URLSearchParams(text);
    } else {
      data = await request.formData();
    }
  } catch {
    try {
      const text = await request.text();
      data = new URLSearchParams(text);
    } catch {
      data = null;
    }
  }
  const getValue = (key) => {
    if (!data) return null;
    if (data instanceof URLSearchParams) {
      return data.get(key)?.toString().trim() ?? null;
    }
    return data.get(key)?.toString().trim() ?? null;
  };
  const nombre = getValue("nombre");
  const email = getValue("email");
  const mensaje = getValue("mensaje");
  if (!nombre || !email || !mensaje) {
    return new Response(JSON.stringify({ success: false, error: "Faltan campos" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  if (!resend) {
    return new Response(JSON.stringify({ success: false, error: "Falta RESEND_API_KEY" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
  try {
    const result = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `Nuevo mensaje de ${nombre}`,
      replyTo: email,
      text: `De: ${nombre} (${email})

${mensaje}`
    });
    return new Response(JSON.stringify({ success: true, id: result.data?.id ?? null }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error al enviar correo con Resend:", error);
    return new Response(JSON.stringify({ success: false, error: "No se pudo enviar el mensaje" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
