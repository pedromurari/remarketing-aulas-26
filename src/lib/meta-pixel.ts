// Meta Pixel + CAPI — utilitário de rastreamento
// Cada evento dispara o Pixel (client) e a CAPI (server) com o mesmo event_id
// garantindo deduplicação no Gerenciador de Eventos da Meta.

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
    __META_PV_ID__?: string;
  }
}

const genId = (): string =>
  `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;

const getCookie = (name: string): string | undefined =>
  document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`))?.[2];

const sendCAPI = (
  eventName: string,
  eventId: string,
  customData?: Record<string, unknown>
): void => {
  const fbp = getCookie('_fbp');
  const fbc =
    getCookie('_fbc') ||
    new URLSearchParams(location.search).get('fbclid') ||
    undefined;

  fetch('/api/meta-event', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      eventName,
      eventId,
      eventSourceUrl: location.href,
      userData: {
        ...(fbp && { fbp }),
        ...(fbc && { fbc }),
      },
      customData,
    }),
  }).catch(() => {});
};

// Dispara Pixel + CAPI com o mesmo event_id
export const track = (
  eventName: string,
  customData?: Record<string, unknown>
): void => {
  const eventId = genId();
  window.fbq?.('track', eventName, customData ?? {}, { eventID: eventId });
  sendCAPI(eventName, eventId, customData);
};

// PageView: Pixel já disparou em index.html com __META_PV_ID__
// Aqui apenas espelhamos o mesmo ID no CAPI para deduplicação
export const trackPageViewCAPI = (): void => {
  const eventId = window.__META_PV_ID__ ?? genId();
  sendCAPI('PageView', eventId);
};

export const trackLead = (): void =>
  track('Lead', { content_name: 'Grupo VIP Turma #33' });

export const trackViewContent = (aula: string): void =>
  track('ViewContent', { content_name: aula, content_type: 'video' });

export const trackInitiateCheckout = (aula: string): void =>
  track('InitiateCheckout', { content_name: aula });
