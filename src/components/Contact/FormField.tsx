import { cn } from "../../utils/cn";

export const FormField = ({
  name,
  label,
  type = "text",
  required = false,
  placeholder,
  rows,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  rows?: number;
}) => {
  const isTextarea = type === "textarea";
  const inputClassName = cn(
    "w-full px-3 py-2 border placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input ",
    "flex min-h-9 w-full min-w-0 rounded-md border bg-transparent text-base shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
     "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
     "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  );

  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-muted-foreground mb-2"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {isTextarea ? (
        <textarea
          id={name}
          name={name}
          required={required}
          rows={rows || 4}
          className={`${inputClassName} resize-none`}
          placeholder={placeholder}
          aria-describedby={`${name}-description`}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          required={required}
          className={inputClassName}
          placeholder={placeholder}
          aria-describedby={`${name}-description`}
        />
      )}
    </div>
  );
};
