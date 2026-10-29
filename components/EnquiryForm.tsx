"use client";

import { useState } from "react";
import { fabrics } from "@/lib/content";
import { waLink } from "@/lib/site";

export default function EnquiryForm() {
  const [error, setError] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !message) {
      setError(true);
      return;
    }
    setError(false);

    const text = [
      "Hello JAK Textiles,",
      "",
      `Name: ${name}`,
      `Buying for: ${data.get("type")}`,
      `Fabric: ${data.get("fabric")}`,
      "",
      message,
    ].join("\n");

    window.open(waLink(text), "_blank", "noopener");
  }

  return (
    <form className="enquiry" onSubmit={handleSubmit} noValidate>
      <h3>Send an enquiry</h3>
      <p className="form-note">This opens WhatsApp with your message ready to send.</p>

      <div className="field">
        <label htmlFor="f-name">Your name</label>
        <input id="f-name" name="name" type="text" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="f-type">I&apos;m buying for</label>
        <select id="f-type" name="type">
          <option>Myself / family</option>
          <option>Aso-ebi (group)</option>
          <option>My tailoring business</option>
          <option>Resale / boutique (wholesale)</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="f-fabric">Fabric</label>
        <select id="f-fabric" name="fabric">
          <option>Not sure yet</option>
          {fabrics.map((f) => (
            <option key={f.slug}>{f.name}</option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="f-msg">What do you need?</label>
        <textarea
          id="f-msg"
          name="message"
          rows={4}
          placeholder="Colour, quantity, occasion, delivery location…"
          required
        />
      </div>
      {error && (
        <p className="form-error" role="alert">
          Please add your name and a short message.
        </p>
      )}
      <button className="btn btn-light btn-block" type="submit">
        Continue on WhatsApp
      </button>
    </form>
  );
}
