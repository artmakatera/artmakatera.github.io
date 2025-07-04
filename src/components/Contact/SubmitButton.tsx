import { Send } from "lucide-react";
import { Button } from "../ui/Button";

export const SubmitButton = ({ isSubmitting }: { isSubmitting: boolean }) => (
   <Button
    type="submit"
    disabled={isSubmitting}
    className="w-full py-3 px-4 rounded-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-semibold text-base disabled:opacity-50 disabled:cursor-not-allowed mb-6"
    aria-label={isSubmitting ? "Sending message..." : "Send message"}
    variant="callToAction"
        size="custom"
  >
    {isSubmitting ? (
      <>
        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
        Sending...
      </>
    ) : (
      <>
        Send Message
        <Send className="w-5 h-5" />
      </>
    )}
  </Button>
);