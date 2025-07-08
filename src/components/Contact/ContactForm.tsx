import { useState, useTransition } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

import { SocialLinks } from "../Banner/SocialLinks";
import type { SubmitStatus } from "./type";
import { StatusMessage } from "./StatusMessage";
import { FormField } from "./FormField";
import { SubmitButton } from "./SubmitButton";
import { cn } from "../../utils/cn";

export default function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

  const handleSubmit = (e: React.FormEvent) => {
    startTransition(async () => {
      e.preventDefault();

      setSubmitStatus("idle");

      const token = await executeRecaptcha!("submit_action");

      const formData = new FormData(e.target as HTMLFormElement);
      const data = Object.fromEntries(formData);

      try {
        // Simulate form submission
        const res = await fetch(
          "https://telegram-micro.vercel.app/send-message",
          {
            body: JSON.stringify(data),
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "X-Recaptcha-Token": token || "",
            },
          }
        );

        if (!res.ok) {
          throw new Error("Failed to send message");
        }

        setSubmitStatus("success");

        // Reset form after success
        (e.target as HTMLFormElement).reset();
      } catch (error) {
        setSubmitStatus("error");
      }
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "space-y-6",
        !executeRecaptcha && "opacity-60 pointer-events-none"
      )}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <FormField
          name="name"
          label="Full Name"
          type="text"
          required
          placeholder="John Doe"
        />
        <FormField
          name="email"
          label="Email Address"
          type="email"
          required
          placeholder="john@example.com"
        />
        <div className="sm:col-span-2">
          <FormField
            name="message"
            label="Message"
            type="textarea"
            required
            placeholder="Tell me about your project, timeline, and any specific requirements..."
            rows={8}
          />
        </div>
      </div>

      <div className="text-xs text-muted-foreground text-center">
                <span>This site is protected by reCAPTCHA and the Google</span>
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline px-2"
                >
                  Privacy Policy
                </a>
                <span>and</span>
                <a
                  href="https://policies.google.com/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline px-2"
                >
                  Terms of Service
                </a>
                <span>apply.</span>
              </div>

      <SubmitButton isSubmitting={isPending} />
      <StatusMessage status={submitStatus} />

      <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
        <p className="text-center text-muted-foreground mb-4">
          Or connect with me directly:
        </p>
        <div className="flex justify-center">
          <SocialLinks />
        </div>
      </div>
    </form>
  );
}
