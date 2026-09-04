import { useState, type FormEvent } from "react";
import { bookVisitMessage, contact, primaryPhone, whatsappLink } from "@/data/site";

const field =
  "w-full border border-border bg-card px-4 py-3 text-sm text-navy outline-none transition-colors placeholder:text-slate/60 focus:border-gold focus:ring-1 focus:ring-gold";

export function BookVisitForm({ tone = "light" }: { tone?: "light" | "dark" }) {
  const [values, setValues] = useState({
    parentName: "",
    childName: "",
    phone: "",
    date: "",
    message: "",
  });
  const [target, setTarget] = useState<string>(primaryPhone.wa);

  const set = (k: keyof typeof values) => (e: { target: { value: string } }) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    window.open(whatsappLink(target, bookVisitMessage(values)), "_blank", "noopener");
  }

  const labelCls = `mb-2 block text-[0.7rem] uppercase tracking-[0.18em] ${
    tone === "dark" ? "text-ivory/60" : "text-slate"
  }`;

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <div>
        <label className={labelCls} htmlFor="parentName">
          Parent name
        </label>
        <input
          id="parentName"
          name="parentName"
          required
          value={values.parentName}
          onChange={set("parentName")}
          className={field}
          placeholder="Your full name"
        />
      </div>
      <div>
        <label className={labelCls} htmlFor="childName">
          Child name
        </label>
        <input
          id="childName"
          name="childName"
          required
          value={values.childName}
          onChange={set("childName")}
          className={field}
          placeholder="Child's name"
        />
      </div>
      <div>
        <label className={labelCls} htmlFor="phone">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          value={values.phone}
          onChange={set("phone")}
          className={field}
          placeholder="+91 ..."
        />
      </div>
      <div>
        <label className={labelCls} htmlFor="date">
          Preferred visit date
        </label>
        <input
          id="date"
          name="date"
          type="date"
          required
          value={values.date}
          onChange={set("date")}
          className={field}
        />
      </div>
      <div className="sm:col-span-2">
        <label className={labelCls} htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={values.message}
          onChange={set("message")}
          className={field}
          placeholder="Anything you would like us to know"
        />
      </div>
      <div className="sm:col-span-2">
        <label className={labelCls} htmlFor="target">
          Send to
        </label>
        <select
          id="target"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          className={field}
        >
          {contact.phones.map((p) => (
            <option key={p.wa} value={p.wa}>
              WhatsApp {p.label}
            </option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="w-full border border-gold bg-gold px-8 py-4 text-[0.72rem] uppercase tracking-[0.22em] text-navy transition-colors hover:bg-transparent hover:text-gold sm:w-auto"
        >
          Send on WhatsApp
        </button>
        <p className={`mt-3 text-xs ${tone === "dark" ? "text-ivory/50" : "text-slate"}`}>
          Your details open as a pre-filled WhatsApp message — nothing is stored on our website.
        </p>
      </div>
    </form>
  );
}
