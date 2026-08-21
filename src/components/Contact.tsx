import { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Send, CheckCircle2, MessageCircle } from 'lucide-react';
import {
  ADDRESS_LINES, PHONE_INTL, EMAIL, TEL_URL, WHATSAPP_URL, MAILTO_URL,
} from '@/lib/constants';
import { ZariDivider } from '@/components/ZariDivider';

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', city: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${form.name}%0APhone: ${form.phone}%0ACity: ${form.city}%0ADetails: ${form.message}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent('Saree Enquiry')}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="bg-cream-100 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-gold-600">Get In Touch</span>
          <h2 className="mt-3 text-3xl font-bold text-silk-800 sm:text-4xl">Visit Us</h2>
          <ZariDivider className="mt-5" />
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-charcoal-700">
            We are always eager to hear from you. Whether you want to ask about our services or schedule a visit,
            feel free to contact us anytime. Your satisfaction is our priority, and we ensure a quick and easy
            process to give you the best value for your old silk items.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Form */}
          <div className="rounded-2xl bg-white p-7 shadow-card sm:p-9">
            <h3 className="text-xl font-semibold text-silk-800">Enquiry Form</h3>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Name"
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                  required
                  placeholder="Your name"
                />
                <Field
                  label="Phone Number"
                  type="tel"
                  value={form.phone}
                  onChange={(v) => setForm({ ...form, phone: v })}
                  required
                  placeholder="Your phone"
                />
              </div>
              <Field
                label="City"
                value={form.city}
                onChange={(v) => setForm({ ...form, city: v })}
                placeholder="Your city"
              />
              <div>
                <label className="mb-1.5 block text-sm font-medium text-charcoal-700">Message / Saree Details</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your sarees..."
                  className="w-full rounded-lg border border-gold-300 bg-cream-50 px-4 py-3 text-sm text-charcoal-800 outline-none transition focus:border-gold-500 focus:ring-2 focus:ring-gold-200"
                />
              </div>
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-silk-500 px-6 py-3.5 font-semibold text-white shadow-sm transition hover:bg-silk-600"
              >
                {sent ? (
                  <><CheckCircle2 size={18} /> Sent — we'll contact you soon!</>
                ) : (
                  <><Send size={18} /> Submit Enquiry</>
                )}
              </button>
            </form>
          </div>

          {/* Details card */}
          <div className="rounded-2xl bg-silk-700 p-7 text-white shadow-card sm:p-9">
            <h3 className="text-xl font-semibold text-gold-300">Visit Us Details</h3>
            <div className="mt-6 space-y-5">
              <div className="flex gap-3.5">
                <MapPin size={20} className="mt-0.5 shrink-0 text-gold-400" />
                <div>
                  <div className="text-sm uppercase tracking-wider text-gold-300">Address</div>
                  <div className="mt-1 text-sm leading-relaxed text-cream-100">
                    {ADDRESS_LINES.map((l) => <div key={l}>{l}</div>)}
                  </div>
                </div>
              </div>
              <div className="flex gap-3.5">
                <Clock size={20} className="mt-0.5 shrink-0 text-gold-400" />
                <div>
                  <div className="text-sm uppercase tracking-wider text-gold-300">Opening Hours</div>
                  <div className="mt-1 text-sm text-cream-100">Mon – Sat, 9:00 am – 9:30 pm</div>
                </div>
              </div>
              <div className="flex gap-3.5">
                <Phone size={20} className="mt-0.5 shrink-0 text-gold-400" />
                <div>
                  <div className="text-sm uppercase tracking-wider text-gold-300">Phone</div>
                  <a href={TEL_URL} className="mt-1 block text-sm text-cream-100 transition hover:text-gold-300">{PHONE_INTL}</a>
                </div>
              </div>
              <div className="flex gap-3.5">
                <Mail size={20} className="mt-0.5 shrink-0 text-gold-400" />
                <div>
                  <div className="text-sm uppercase tracking-wider text-gold-300">Email</div>
                  <a href={MAILTO_URL} className="mt-1 block break-all text-sm text-cream-100 transition hover:text-gold-300">{EMAIL}</a>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-whatsapp-green px-5 py-3 font-semibold text-white transition hover:bg-whatsapp-greenDark"
              >
                <MessageCircle size={17} />
                WhatsApp
              </a>
              <a
                href={TEL_URL}
                className="flex flex-1 items-center justify-center gap-2 rounded-full border border-gold-400 px-5 py-3 font-semibold text-gold-300 transition hover:bg-gold-400 hover:text-silk-800"
              >
                <Phone size={17} />
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, value, onChange, required, placeholder, type = 'text',
}: {
  label: string; value: string; onChange: (v: string) => void;
  required?: boolean; placeholder?: string; type?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-charcoal-700">{label}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-gold-300 bg-cream-50 px-4 py-3 text-sm text-charcoal-800 outline-none transition focus:border-gold-500 focus:ring-2 focus:ring-gold-200"
      />
    </div>
  );
}
