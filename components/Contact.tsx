
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus('submitting');
    const form = event.currentTarget;

    try {
      const formData = new FormData(form);
      const payload = Object.fromEntries(formData.entries());
      // FormSubmit uses this to identify the submitting page, including on localhost.
      payload._url = window.location.href;
      const response = await fetch('https://formsubmit.co/ajax/jaiswalharsh20389@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        referrer: window.location.href,
        referrerPolicy: 'unsafe-url',
        body: JSON.stringify(payload)
      });

      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.message || 'Unable to submit form');
      form.reset();
      setFormStatus('success');
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-20" id="contact">
      <div className="flex flex-col space-y-8">
        <div>
          <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Contact Me</h2>
          <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Let's build something amazing together</h3>
          <p className="text-slate-600 dark:text-slate-300 text-lg">
            Have a project in mind or just want to chat? Drop me a message and I'll get back to you as soon as possible.
          </p>
        </div>
        <div className="space-y-6">
          <div className="flex items-center gap-4 group">
            <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
              <span className="material-symbols-outlined">mail</span>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase">Email</p>
              <a className="text-lg font-semibold hover:text-primary transition-colors break-all" href="mailto:jaiswalharsh20389@gmail.com">jaiswalharsh20389@gmail.com</a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-xs font-bold text-slate-400 uppercase">Follow Me</p>
            <div className="flex gap-4">
              {[
                { name: 'LinkedIn', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
                { name: 'GitHub', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
                { name: 'Twitter', icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' }
              ].slice(0, 2).map((social, idx) => (
                <a key={idx} className="size-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all shadow-sm" href={social.name === 'LinkedIn' ? 'https://www.linkedin.com/in/harshx01' : 'https://github.com/Jayswalharsh'} target="_blank" rel="noreferrer" aria-label={social.name}>
                  <svg className="size-5 fill-current" viewBox="0 0 24 24"><path d={social.icon}></path></svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-black/20 border border-slate-100 dark:border-slate-800 relative">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="_subject" value="New portfolio contact message" />
          <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Name</label>
              <input required name="name" className="rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 focus:ring-primary focus:border-primary px-4 py-3 outline-none transition-all" placeholder="John Doe" type="text" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email Address</label>
              <input required name="email" className="rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 focus:ring-primary focus:border-primary px-4 py-3 outline-none transition-all" placeholder="john@example.com" type="email" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Subject</label>
            <input required name="subject" className="rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 focus:ring-primary focus:border-primary px-4 py-3 outline-none transition-all" placeholder="Project Inquiry" type="text" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Message</label>
            <textarea required name="message" className="rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 focus:ring-primary focus:border-primary px-4 py-3 outline-none transition-all resize-none" placeholder="Tell me about your project..." rows={5}></textarea>
          </div>
          <button 
            disabled={formStatus === 'submitting'}
            className="w-full bg-primary hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70 text-white rounded-lg py-4 font-bold transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2"
            type="submit"
          >
            {formStatus === 'submitting' ? <><span className="material-symbols-outlined animate-spin text-lg">progress_activity</span><span>Sending...</span></> : <><span>Send Message</span><span className="material-symbols-outlined text-lg">send</span></>}
          </button>
          {formStatus === 'success' && <p role="status" className="rounded-lg bg-green-50 px-4 py-3 text-sm font-medium text-green-700 dark:bg-green-950/40 dark:text-green-300">Thank you for reaching out. Your message has been received, and I will get back to you as soon as possible.</p>}
          {formStatus === 'error' && <p role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-700 dark:bg-red-950/40 dark:text-red-300">Your message could not be sent right now. Please try again or contact me by email.</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
