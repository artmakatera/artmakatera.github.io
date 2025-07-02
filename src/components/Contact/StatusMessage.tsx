import { AlertCircle, CheckCircle } from "lucide-react";
import type { SubmitStatus } from "./type";

export 
const StatusMessage = ({ status }: { status: SubmitStatus }) => {
  if (status === "idle") return null;

  const isSuccess = status === "success";
  const config = isSuccess
    ? {
        icon: <CheckCircle className="w-5 h-5" />,
        text: "Message sent successfully! I'll get back to you soon.",
        className:
          "text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800",
      }
    : {
        icon: <AlertCircle className="w-5 h-5" />,
        text: "Something went wrong. Please try again.",
        className:
          "text-red-700 dark:text-red-400 bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800",
      };

  return (
    <div
      className={`flex items-center gap-2 p-4 rounded-lg border ${config.className}`}
      role="alert"
    >
      {config.icon}
      <span>{config.text}</span>
    </div>
  );
};