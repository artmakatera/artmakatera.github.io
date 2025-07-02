



export const FormField = ({
  name,
  label,
  type = "text",
  required = false,
  placeholder,
  rows,
}: {
  name:string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  rows?: number;
}) => {
  const isTextarea = type === "textarea";
  const inputClassName =
    "w-full px-3 py-2 border border-gray-300 dark:border-gray-600  text-muted-foreground rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors";

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