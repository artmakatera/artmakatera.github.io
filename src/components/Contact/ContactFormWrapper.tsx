import { RECAPTCHA_SITE_KEY } from "astro:env/client";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

import ContactForm from "./ContactForm";

export const ContactFormWrapper = () => {
  return (
    <div
      id="contact-form"
      className="max-w-2xl -mx-8 -mb-16 sm:mb-0 sm:mx-auto "
    >
      <div className="bg-background p-6 sm:rounded-2xl backdrop-blur-sm">
        <header className="text-center mb-6">
          <h3 className="text-2xl font-semibold text-foreground mb-2">
            Send Me a Message
          </h3>
          <p className="text-muted-foreground">
            Ready to discuss your project? Fill out the form below.
          </p>
        </header>
        <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_SITE_KEY}>
          <ContactForm />
        </GoogleReCaptchaProvider>
      </div>
    </div>
  );
};
