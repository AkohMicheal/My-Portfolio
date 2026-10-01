// src/components/contact/ContactSection.tsx
"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend, FiCopy, FiCheck } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const ContactSection: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("akohmicheal@gmail.com");
    setCopied(true);
    toast.success("Email copied to clipboard!");
    setTimeout(() => setCopied(false), 2500);
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    setLoading(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

    if (!serviceId || !templateId || !publicKey) {
      setLoading(false);
      toast.error("Email service configuration missing. Please email akohmicheal@gmail.com directly.");
      return;
    }

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey).then(
      () => {
        setLoading(false);
        toast.success("Message dispatched successfully! I will reply shortly.");
        formRef.current?.reset();
      },
      (error) => {
        setLoading(false);
        console.error("EmailJS Error:", error);
        toast.error("Failed to send message. Please email akohmicheal@gmail.com directly.");
      },
    );
  };

  return (
    <section
      id="contactsection"
      className="py-16 md:py-24 border-t border-zinc-800/80 scroll-mt-20"
    >
      <Toaster 
        position="top-center" 
        toastOptions={{
          style: {
            background: '#18181b',
            color: '#f4f4f5',
            border: '1px solid #27272a',
          }
        }} 
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Outreach & Status */}
          <div className="lg:col-span-5 text-left">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-mono text-emerald-400 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              DIRECT OUTREACH
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight leading-tight mb-4">
              Let&apos;s build something high-impact.
            </h2>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-8">
              Currently evaluating opportunities for Software Engineer, Full-Stack, and Applied ML roles. Whether you have an open position, an engineering question, or a project in mind, my inbox is open.
            </p>

            {/* Direct Contact Meta */}
            <div className="space-y-4 mb-8">
              {/* Email with copy button */}
              <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <FiMail className="text-base" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-zinc-400 uppercase">Primary Email</div>
                    <a 
                      href="mailto:akohmicheal@gmail.com"
                      className="text-sm font-mono text-zinc-200 hover:text-emerald-400 transition-colors"
                    >
                      akohmicheal@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label="Copy email address"
                  className="p-2 text-zinc-400 hover:text-emerald-400 rounded-lg bg-zinc-800/60 hover:bg-zinc-800 transition-colors"
                >
                  {copied ? <FiCheck className="text-emerald-400" /> : <FiCopy />}
                </button>
              </div>

              {/* Phone */}
              <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <FiPhone className="text-base" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-zinc-400 uppercase">Direct Telephone</div>
                  <a 
                    href="tel:+2348100915397"
                    className="text-sm font-mono text-zinc-200 hover:text-emerald-400 transition-colors"
                  >
                    +234 810 091 5397
                  </a>
                </div>
              </div>

              {/* Location & Timezone */}
              <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <FiMapPin className="text-base" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-zinc-400 uppercase">Location &amp; Availability</div>
                  <div className="text-sm text-zinc-200">
                    Lagos, Nigeria (GMT+1) · Global Remote
                  </div>
                </div>
              </div>

              {/* Turnaround Guarantee */}
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 px-1">
                <FiClock className="text-emerald-400" />
                <span>Typical response time: Under 12 hours</span>
              </div>
            </div>

            {/* Social Profiles */}
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com/in/micheal-akoh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 hover:text-emerald-400 hover:border-emerald-500/30 transition-all"
              >
                <FaLinkedin className="text-sm" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/MichealAkoh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 hover:text-emerald-400 hover:border-emerald-500/30 transition-all"
              >
                <FaGithub className="text-sm" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-zinc-800 shadow-2xl">
              <h3 className="text-lg font-bold text-zinc-100 mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs text-zinc-400 mb-6 font-mono">
                Dispatches straight to my verified primary inbox.
              </p>

              <form ref={formRef} onSubmit={sendEmail} className="space-y-4 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label 
                      htmlFor="user_name"
                      className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-1.5"
                    >
                      Your Name
                    </label>
                    <input
                      id="user_name"
                      type="text"
                      name="user_name"
                      required
                      autoComplete="name"
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-100 placeholder-zinc-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label 
                      htmlFor="user_email"
                      className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-1.5"
                    >
                      Email Address
                    </label>
                    <input
                      id="user_email"
                      type="email"
                      name="user_email"
                      required
                      autoComplete="email"
                      spellCheck={false}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-100 placeholder-zinc-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
                    />
                  </div>
                </div>

                {/* Message Input */}
                <div>
                  <label 
                    htmlFor="message"
                    className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-1.5"
                  >
                    Project or Role Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell me about the engineering challenges or team context…"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-100 placeholder-zinc-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all resize-none"
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center gap-2 font-mono text-xs">
                      <span className="h-3 w-3 rounded-full border-2 border-zinc-950 border-t-transparent animate-spin" />
                      DISPATCHING MESSAGE…
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <span>Send Message</span>
                      <FiSend className="text-xs" />
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
