import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

const resendApiKey = import.meta.env.RESEND_API_KEY as string | undefined;
const resend = resendApiKey ? new Resend(resendApiKey) : null;
const toEmail = (import.meta.env.RESEND_TO_EMAIL as string | undefined)?.trim() || 'elenapapoula98@gmail.com';
const fromEmail = (import.meta.env.RESEND_FROM_EMAIL as string | undefined)?.trim() || 'Contacto web <onboarding@resend.dev>';

export const GET: APIRoute = () => {
  return new Response(JSON.stringify({ ok: true, message: 'Endpoint de contacto listo' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};

export const POST: APIRoute = async ({ request }) => {
  const contentType = request.headers.get('content-type') ?? '';
  let data: FormData | URLSearchParams | null = null;

  try {
    if (contentType.includes('application/x-www-form-urlencoded')) {
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

  const getValue = (key: string) => {
    if (!data) return null;
    if (data instanceof URLSearchParams) {
      return data.get(key)?.toString().trim() ?? null;
    }
    return data.get(key)?.toString().trim() ?? null;
  };

  const nombre = getValue('nombre');
  const email = getValue('email');
  const mensaje = getValue('mensaje');

  if (!nombre || !email || !mensaje) {
    return new Response(JSON.stringify({ success: false, error: 'Faltan campos' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (!resendApiKey || !resend) {
    return new Response(JSON.stringify({ success: false, error: 'Falta RESEND_API_KEY' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const result = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `Nuevo mensaje de ${nombre}`,
      replyTo: email,
      text: `De: ${nombre} (${email})\n\n${mensaje}`,
    });

    return new Response(JSON.stringify({ success: true, id: result.data?.id ?? null }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error al enviar correo con Resend:', error);
    return new Response(JSON.stringify({ success: false, error: 'No se pudo enviar el mensaje' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};