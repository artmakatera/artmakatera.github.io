import { useState, useTransition } from "react";
import { SocialLinks } from "../Banner/SocialLinks";
import type { SubmitStatus } from "./type";
import { StatusMessage } from "./StatusMessage";
import { FormField } from "./FormField";
import { SubmitButton } from "./SubmitButton";

export default function ContactForm() {
  const [isPending, startTransition] = useTransition();

  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

  const handleSubmit = (e: React.FormEvent) => {
    startTransition(async () => {
      e.preventDefault();

      setSubmitStatus("idle");
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
    <div className="max-w-2xl -mx-8 -mb-16 sm:mb-0 sm:mx-auto ">
      <div className="bg-background p-6 sm:rounded-2xl backdrop-blur-sm">
        <header className="text-center mb-6">
          <h3 className="text-2xl font-semibold text-foreground mb-2">
            Send Me a Message
          </h3>
          <p className="text-muted-foreground">
            Ready to discuss your project? Fill out the form below.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-6">
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
      </div>
    </div>
  );
}
