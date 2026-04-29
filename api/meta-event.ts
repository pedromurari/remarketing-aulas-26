// Vercel Edge Function — Meta Conversions API (CAPI)
// Espelha os eventos do Pixel client-side, deduplica via event_id
// Variável de ambiente necessária: META_CAPI_TOKEN (configurar no painel Vercel)

export const config = { runtime: 'edge' };

const PIXEL_ID = '1472969447740954';

interface UserData {
  fbp?: string;
  fbc?: string;
}

interface EventBody {
  eventName: string;
  eventId: string;
  eventSourceUrl: string;
  userData?: UserData;
  customData?: Record<string, unknown>;
}

export default async function handler(request: Request): Promise<Response> {
  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  const token = process.env.META_CAPI_TOKEN;
  if (!token) {
    return new Response('CAPI token not configured', { status: 500 });
  }

  let body: EventBody;
  try {
    body = await request.json() as EventBody;
  } catch {
    return new Response('Invalid JSON', { status: 400 });
  }

  const { eventName, eventId, eventSourceUrl, userData, customData } = body;

  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? '';
  const ua = request.headers.get('user-agent') ?? '';

  const payload = {
    data: [
      {
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId,           // chave de deduplicação com o Pixel
        event_source_url: eventSourceUrl,
        action_source: 'website',
        user_data: {
          client_ip_address: ip,
          client_user_agent: ua,
          ...(userData?.fbp && { fbp: userData.fbp }),
          ...(userData?.fbc && { fbc: userData.fbc }),
        },
        ...(customData && { custom_data: customData }),
      },
    ],
  };

  const metaRes = await fetch(
    `https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${token}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }
  );

  const result = await metaRes.json();
  return Response.json(result, { status: metaRes.status });
}
