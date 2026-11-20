import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Bot, LoaderCircle, MessageCircle, RotateCcw, Send, Sparkles } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { getAssistantReply, hasChatEndpoint } from "../lib/chatAssistant";
import type { ChatTurn } from "../lib/chatAssistant";

type Message = ChatTurn & { id: number; failed?: boolean };

const quickReplies = ["What services do you offer?", "How does M-Pesa integration work?", "How can I get a quote?"];

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, role: "assistant", content: "Hi! I'm the Vectra assistant. Ask me about our services or tell me what you're looking to build." },
  ]);
  const [draft, setDraft] = useState("");
  const [sending, setSending] = useState(false);
  const nextId = useRef(1);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, sending]);

  async function sendMessage(text: string, retry = false) {
    const content = text.trim();
    if (!content || sending) return;

    const currentMessages = retry ? messages.slice(0, -1) : messages;
    if (!retry) {
      setMessages((current) => [...current, { id: nextId.current++, role: "user", content }]);
    } else {
      setMessages(currentMessages);
    }
    setSending(true);

    const historyMessages = retry ? currentMessages.slice(0, -1) : currentMessages;
    const history: ChatTurn[] = historyMessages.map(({ role, content: turn }) => ({ role, content: turn }));
    try {
      const reply = await getAssistantReply(content, history);
      setMessages((current) => [...current, { id: nextId.current++, role: "assistant", content: reply }]);
    } catch {
      setMessages((current) => [...current, {
        id: nextId.current++,
        role: "assistant",
        content: "I couldn't reach the assistant service just now. Please try again, or contact the Vectra team directly.",
        failed: true,
      }]);
    } finally {
      setSending(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const content = draft;
    setDraft("");
    void sendMessage(content);
  }

  function retryLast() {
    const previousUser = [...messages].reverse().find((message) => message.role === "user");
    if (previousUser) void sendMessage(previousUser.content, true);
  }

  return <><Navbar/><main>
    <section className="bg-neutral-50"><div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 md:py-16">
      <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-[.18em] text-vectra"><Bot size={16}/> VECTRA ASSISTANT</span>
      <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">How can we <span className="text-vectra">help you today?</span></h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-neutral-600">Ask about our services, share a project idea, or find out how to get started.</p>
    </div></section>

    <section className="mx-auto grid max-w-7xl items-start gap-8 px-5 py-10 sm:px-8 md:py-14 lg:grid-cols-[1.15fr_.85fr] lg:gap-14">
      <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xl shadow-neutral-900/5">
        <div className="flex items-center gap-3 border-b border-neutral-100 px-5 py-4">
          <span className="grid size-11 place-items-center rounded-full bg-vectra text-white"><Bot size={21}/></span>
          <div className="min-w-0 flex-1"><p className="text-sm font-bold">Vectra Assistant</p><p className="mt-1 text-xs text-neutral-500"><span className={`mr-1.5 inline-block size-2 rounded-full ${hasChatEndpoint ? "bg-emerald-500" : "bg-amber-400"}`}/>{hasChatEndpoint ? "Assistant endpoint configured" : "Local FAQ mode · no backend connected"}</p></div>
          <Sparkles className="text-rose-400" size={19}/>
        </div>

        <div className="max-h-[460px] min-h-[300px] space-y-4 overflow-y-auto bg-neutral-50 p-5 sm:p-7" aria-live="polite" aria-label="Chat messages">
          {messages.map((message) => <div key={message.id} className={message.role === "user" ? "ml-auto max-w-[88%]" : "max-w-[92%]"}>
            <div className={message.role === "user" ? "rounded-2xl rounded-tr-sm bg-vectra p-4 text-sm leading-6 text-white" : "rounded-2xl rounded-tl-sm border border-neutral-200 bg-white p-4 text-sm leading-6 text-neutral-800"}>{message.content}</div>
            {message.failed && <button type="button" onClick={retryLast} className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-vectra hover:text-rose-800"><RotateCcw size={13}/> Try again</button>}
          </div>)}
          {messages.length === 1 && <div className="flex flex-wrap gap-2">{quickReplies.map((reply) => <button key={reply} type="button" onClick={() => void sendMessage(reply)} className="rounded-full border border-neutral-200 bg-white px-3 py-2 text-left text-xs text-neutral-600 transition hover:border-rose-300 hover:text-vectra">{reply}</button>)}</div>}
          {sending && <div className="flex items-center gap-2 text-xs text-neutral-500"><LoaderCircle size={15} className="animate-spin text-vectra"/>Thinking…</div>}
          <div ref={bottomRef}/>
        </div>

        <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-neutral-100 bg-white p-3 sm:p-4">
          <label htmlFor="chat-message" className="sr-only">Write your message</label>
          <input id="chat-message" value={draft} onChange={(event) => setDraft(event.target.value)} disabled={sending} placeholder="Write your message..." className="min-w-0 flex-1 rounded-lg border border-neutral-200 px-4 py-3 text-sm outline-none transition placeholder:text-neutral-400 focus:border-vectra focus:ring-4 focus:ring-rose-100 disabled:bg-neutral-50"/>
          <button type="submit" disabled={sending || !draft.trim()} aria-label="Send message" className="grid size-11 shrink-0 place-items-center rounded-lg bg-vectra text-white transition hover:bg-rose-700 disabled:cursor-not-allowed disabled:opacity-40"><Send size={17}/></button>
        </form>
      </div>

      <aside className="pt-2 sm:pt-5"><span className="grid size-14 place-items-center rounded-2xl bg-rose-50 text-vectra"><MessageCircle size={25}/></span><h2 className="mt-5 font-display text-3xl font-extrabold">A useful first conversation.</h2><p className="mt-4 leading-7 text-neutral-600">This assistant can answer common questions about Vectra and guide visitors to the right next step.</p>
        <div className="mt-6 rounded-xl border border-neutral-200 bg-white p-5"><h3 className="text-sm font-bold">What it can help with</h3><ul className="mt-3 space-y-2 text-sm leading-6 text-neutral-600"><li>• Services and project fit</li><li>• M-Pesa and WhatsApp integrations</li><li>• Quotes and getting in touch</li></ul></div>
        {!hasChatEndpoint && <p className="mt-4 text-xs leading-5 text-neutral-500">Answers currently come from a small local FAQ. Connect a server endpoint later to use a live AI assistant.</p>}
        <Link to="/Contact" className="mt-6 inline-flex items-center gap-2 font-bold text-vectra hover:text-rose-800">Contact the Vectra team <ArrowUpRight size={17}/></Link>
      </aside>
    </section>
  </main><Footer/></>;
}
