import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Mail, MapPin, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { profile } from '@/data/profile';
import { emailjsConfig, isEmailjsConfigured } from '@/lib/emailjs';

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

type SubmitState = 'idle' | 'sending' | 'success' | 'error';

export function Contact() {
  const [status, setStatus] = useState<SubmitState>('idle');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>();

  const onSubmit = async (values: ContactFormValues) => {
    if (!isEmailjsConfigured) {
      setStatus('error');
      return;
    }

    setStatus('sending');
    try {
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: values.name,
          from_email: values.email,
          message: values.message,
          to_name: profile.name,
        },
        { publicKey: emailjsConfig.publicKey }
      );
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something."
          description="Open to full-time, internship, and freelance opportunities — reach out directly or send a message below."
        />

        <div className="mt-14 grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
          <Reveal>
            <div className="space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-4 glass rounded-2xl p-5 hover:border-accent/40 transition-colors duration-200"
              >
                <span className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-accent shrink-0">
                  <Mail size={18} />
                </span>
                <div>
                  <p className="text-xs text-muted font-mono uppercase tracking-wide">Email</p>
                  <p className="text-text text-sm mt-0.5">{profile.email}</p>
                </div>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 glass rounded-2xl p-5 hover:border-accent/40 transition-colors duration-200"
              >
                <span className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-accent shrink-0">
                  <FaGithub size={18} />
                </span>
                <div>
                  <p className="text-xs text-muted font-mono uppercase tracking-wide">GitHub</p>
                  <p className="text-text text-sm mt-0.5">Manthan's projects</p>
                </div>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 glass rounded-2xl p-5 hover:border-accent/40 transition-colors duration-200"
              >
                <span className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-accent shrink-0">
                  <FaLinkedin size={18} />
                </span>
                <div>
                  <p className="text-xs text-muted font-mono uppercase tracking-wide">LinkedIn</p>
                  <p className="text-text text-sm mt-0.5">Connect professionally</p>
                </div>
              </a>

              <div className="flex items-center gap-4 glass rounded-2xl p-5">
                <span className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-accent shrink-0">
                  <MapPin size={18} />
                </span>
                <div>
                  <p className="text-xs text-muted font-mono uppercase tracking-wide">Based in</p>
                  <p className="text-text text-sm mt-0.5">{profile.location}</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit(onSubmit)} className="glass rounded-2xl p-6 sm:p-8 space-y-5">
              <div>
                <label htmlFor="name" className="text-xs font-mono uppercase tracking-wide text-muted">
                  Name
                </label>
                <input
                  id="name"
                  {...register('name', { required: 'Your name is required' })}
                  className="mt-2 w-full bg-surface border border-line rounded-xl px-4 py-3 text-sm text-text placeholder:text-muted focus:border-accent outline-none transition-colors duration-200"
                  placeholder="Jane Doe"
                />
                {errors.name && (
                  <p className="text-xs text-warn mt-1.5">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="text-xs font-mono uppercase tracking-wide text-muted">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email', {
                    required: 'Your email is required',
                    pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email address' },
                  })}
                  className="mt-2 w-full bg-surface border border-line rounded-xl px-4 py-3 text-sm text-text placeholder:text-muted focus:border-accent outline-none transition-colors duration-200"
                  placeholder="jane@company.com"
                />
                {errors.email && (
                  <p className="text-xs text-warn mt-1.5">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="text-xs font-mono uppercase tracking-wide text-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register('message', {
                    required: 'Add a short message',
                    minLength: { value: 10, message: 'Message should be at least 10 characters' },
                  })}
                  className="mt-2 w-full bg-surface border border-line rounded-xl px-4 py-3 text-sm text-text placeholder:text-muted focus:border-accent outline-none transition-colors duration-200 resize-none"
                  placeholder="What are you looking to build?"
                />
                {errors.message && (
                  <p className="text-xs text-warn mt-1.5">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium bg-primary text-white hover:bg-primary-soft transition-colors duration-200 disabled:opacity-60 w-full sm:w-auto"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 size={15} className="animate-spin" /> Sending…
                  </>
                ) : (
                  <>
                    Send message <Send size={15} />
                  </>
                )}
              </button>

              {status === 'success' && (
                <p className="flex items-center gap-2 text-sm text-good">
                  <CheckCircle2 size={15} /> Message sent — thanks for reaching out.
                </p>
              )}
              {status === 'error' && (
                <p className="flex items-center gap-2 text-sm text-warn">
                  <AlertCircle size={15} />
                  {isEmailjsConfigured
                    ? "Couldn't send right now — try again or email directly."
                    : `Email isn't configured yet — reach out directly at ${profile.email}.`}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
