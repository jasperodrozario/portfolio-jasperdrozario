"use client";

import React, { useRef } from "react";
import Button from "@/components/utils/button";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);
    emailjs
      .sendForm(
        "service_yc670aa",
        "template_7bqr8kh",
        form.current,
        "o7ZJLbK4if9ofkW_G"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message, try again later.", error.text);
        }
      );
  };

  const now = new Date();
  const currDate = now.toLocaleDateString();

  return (
    <div className="bg-neutral-900 p-8 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-6 text-[#63FFD9]">
        Send a Message
      </h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-6">
        <div>
          <input type="hidden" name="time" value={currDate} />
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-3 border border-teal-700 rounded-lg focus:outline-none focus:border-[#63FFD9] focus:ring-1 focus:ring-[#63FFD9] transition-colors"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-3 border border-teal-700 rounded-lg focus:outline-none focus:border-[#63FFD9] focus:ring-1 focus:ring-[#63FFD9] transition-colors"
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full px-4 py-3 border border-teal-700 rounded-lg focus:outline-none focus:border-[#63FFD9] focus:ring-1 focus:ring-[#63FFD9] transition-colors"
            placeholder="Project Discussion"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-4 py-3 border border-teal-700 rounded-lg focus:outline-none focus:border-[#63FFD9] focus:ring-1 focus:ring-[#63FFD9] transition-colors resize-none"
            placeholder="Tell me about your project..."
            required
          />
        </div>

        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </div>
  );
}
