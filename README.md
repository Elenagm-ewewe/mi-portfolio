# Elena - Porfolio Web
Proyecto desplegado: [egumo.com](https://www.egumo.com/)

Mi porfolio personal está desarrollado con [Astro](https://astro.build) y [Tailwind CSS](https://tailwindcss.com), con un formulario de contacto funcional que envía correos a través de [Resend](https://resend.com).

## 🚀 Tecnologías

- **[Astro](https://astro.build)** — framework principal, renderiza el sitio como HTML estático con rutas dinámicas puntuales.
- **[Tailwind CSS](https://tailwindcss.com)** — estilado mediante utilidades.
- **[Resend](https://resend.com)** — envío de emails desde el formulario de contacto.
- **[Vercel](https://vercel.com)** — hosting y despliegue, con funciones serverless para el endpoint de contacto.

## 📁 Estructura del proyecto

```text
/
├── public/
│   └── images/
├── src/
│   ├── components/
│   │   └── ContactForm.astro     # Formulario de contacto
│   ├── content/
│   │   └── content.ts            # Textos y traducciones
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── projects.astro
│   │   └── api/
│   │       └── contacto.ts       # Endpoint que envía el email vía Resend
│   └── styles/
├── astro.config.mjs
├── package.json
└── README.md
```

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando                   | Acción                                              |
| :------------------------ | :--------------------------------------------------- |
| `npm install`              | Instala las dependencias                             |
| `npm run dev`               | Levanta el servidor de desarrollo en `localhost:4321` |
| `npm run build`             | Genera el build de producción                        |
| `npm run preview`            | Previsualiza el build localmente antes de desplegar   |

## ✉️ Configuración del formulario de contacto

El formulario envía los datos a `src/pages/api/contacto.ts`, un endpoint de servidor (`prerender = false`) que usa la API de Resend para enviar el email.

### Variables de entorno

Crea un archivo `.env` en la raíz del proyecto (no se sube al repositorio) con:

```dotenv
RESEND_API_KEY=tu_clave_de_resend
RESEND_TO_EMAIL=tu_correo@ejemplo.com
RESEND_FROM_EMAIL=Contacto web <onboarding@resend.dev>
```

- **`RESEND_API_KEY`** — clave de la API de Resend. Consíguela en [resend.com/api-keys](https://resend.com/api-keys).
- **`RESEND_TO_EMAIL`** — dirección donde quieres recibir los mensajes del formulario.
- **`RESEND_FROM_EMAIL`** — remitente del email. Por defecto se usa `onboarding@resend.dev` (dominio de pruebas de Resend); para producción, verifica tu propio dominio en [resend.com/domains](https://resend.com/domains) y usa una dirección de ese dominio.

> ⚠️ **El `.env` está incluido en `.gitignore` por defecto.

### Despliegue en Vercel

Las variables de entorno también deben añadirse en el dashboard de Vercel:

**Settings → Environment Variables** → añade cada variable para los entornos `Production`, `Preview` y `Development` según corresponda.

Tras añadir o modificar variables, es necesario volver a desplegar (**Deployments → ⋯ → Redeploy**) para que se apliquen.

## 🔐 Seguridad

- El archivo `.env` y la carpeta `.vercel/` están excluidos del control de versiones (ver `.gitignore`).
- La API key de Resend nunca debe exponerse en código del lado del cliente ni en variables con el prefijo `PUBLIC_` (Astro expone esas al navegador).
- Si una clave llega a filtrarse (por ejemplo, subida por error a un repositorio público), revócala inmediatamente desde el dashboard de Resend y genera una nueva.

## 📦 Despliegue

El proyecto está configurado para desplegarse en Vercel usando [`@astrojs/vercel`](https://docs.astro.build/en/guides/integrations-guide/vercel/) como adaptador, con `output: 'static'` y el endpoint de contacto marcado como ruta dinámica (`export const prerender = false`). El resto del sitio se sirve como HTML estático.



## 📄 Licencia

Proyecto personal — todos los derechos reservados.
