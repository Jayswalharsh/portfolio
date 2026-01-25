
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const GeminiChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setInput('');
    setIsLoading(true);

    try {
      // Fix: Always use process.env.API_KEY directly when initializing GoogleGenAI
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `You are an AI assistant for a portfolio website. 
          The owner is a Full-Stack Developer with 5+ years experience.
          Key skills: React, Next.js, Node.js, AWS, Docker, TypeScript.
          Certifications: AWS Solutions Architect, Meta Front-End, Scrum Master.
          Be professional, concise, and helpful.`,
        },
      });

      const aiResponse = response.text || "I'm sorry, I couldn't generate a response.";
      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Oops, something went wrong with my circuits. Please try again!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="bg-white dark:bg-slate-900 w-[350px] h-[500px] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-primary p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined">auto_awesome</span>
              <span className="font-bold">Portfolio Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:opacity-80 transition-opacity">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar bg-slate-50 dark:bg-slate-900/50">
            {messages.length === 0 && (
              <div className="text-center py-10 text-slate-400">
                <span className="material-symbols-outlined text-4xl mb-2">robot_2</span>
                <p>Hi! I'm an AI. Ask me anything about this developer's skills or experience.</p>
              </div>
            )}
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                  ? 'bg-primary text-white rounded-tr-none' 
                  : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-100 dark:border-slate-700 rounded-tl-none shadow-sm'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl rounded-tl-none shadow-sm flex gap-1">
                  <div className="size-2 bg-primary rounded-full animate-bounce"></div>
                  <div className="size-2 bg-primary rounded-full animate-bounce delay-100"></div>
                  <div className="size-2 bg-primary rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex gap-2">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me a question..."
              className="flex-1 bg-slate-50 dark:bg-slate-800 border-none rounded-lg px-4 py-2 text-sm focus:ring-1 focus:ring-primary outline-none"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-primary text-white p-2 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="size-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-all group overflow-hidden relative"
        >
          <span className="material-symbols-outlined text-3xl group-hover:rotate-12 transition-transform">auto_awesome</span>
          <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </button>
      )}
    </div>
  );
};

export default GeminiChat;
