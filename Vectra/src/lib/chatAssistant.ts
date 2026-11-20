export type ChatRole = "user" | "assistant";

export type ChatTurn = {
  role: ChatRole;
  content: string;
};

const endpoint = import.meta.env.VITE_CHAT_API_URL?.trim();
export const hasChatEndpoint = Boolean(endpoint);

function localReply(message: string): string {
  const text = message.toLowerCase();

  if (/\b(hi|hello|hey|good morning|good afternoon)\b/.test(text)) {
    return "Hello! I can help you explore Vectra's services, talk through a project, or find the right way to contact the team.";
  }
  if (/\b(price|pricing|cost|quote|budget)\b/.test(text)) {
    return "Project pricing depends on the features and scope. Share a little about what you need on our contact page and the team can prepare a clear quote.";
  }
  if (/\b(contact|email|call|team|talk)\b/.test(text)) {
    return "You can reach the Vectra team through the contact page. Include a few details about your project and what you'd like to achieve.";
  }
  if (/\b(mpesa|m-pesa|payment|pay|checkout)\b/.test(text)) {
    return "Vectra can integrate M-Pesa payment flows into websites and apps. The right setup depends on how you take orders and confirm payments.";
  }
  if (/\b(whatsapp|chatbot|automation|automate)\b/.test(text)) {
    return "Vectra builds WhatsApp automation for common questions, order updates and customer support. Tell us what you want to automate and we can discuss the best fit.";
  }
  if (/\b(website|web|app|mobile|software|build|develop)\b/.test(text)) {
    return "Vectra builds websites, web apps, mobile apps and custom business systems. What would you like your product to help people do?";
  }
  if (/\b(service|services|offer|do you do)\b/.test(text)) {
    return "Vectra offers web and mobile development, M-Pesa integration, WhatsApp automation, digital marketing, UI/UX, business systems, backend APIs, AI integration and graphic design.";
  }

  return "I can help with Vectra's services, M-Pesa and WhatsApp integrations, project quotes, or getting in touch. What are you hoping to build?";
}

/**
 * Add a server endpoint later with VITE_CHAT_API_URL. It should accept
 * POST { message, history } and return JSON { reply }. Keep provider API keys
 * on that server; never expose them in VITE_* variables.
 */
export async function getAssistantReply(message: string, history: ChatTurn[]): Promise<string> {
  if (!endpoint) return localReply(message);

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message, history }),
  });

  if (!response.ok) throw new Error(`Assistant endpoint returned ${response.status}`);

  const data: unknown = await response.json();
  if (typeof data !== "object" || data === null || !("reply" in data) || typeof data.reply !== "string") {
    throw new Error("Assistant endpoint response must contain a string reply.");
  }

  return data.reply;
}
