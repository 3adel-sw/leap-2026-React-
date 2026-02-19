import React from "react";

type SelectOption = {
  label: string;
  value: string;
  disabled?: boolean;
};

type FormFieldProps = {
  id: string;
  label: string;
  required?: boolean;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  className?: string;
  as?: "input" | "textarea" | "select";
  rows?: number;
  options?: SelectOption[];
  fieldProps?:
    | React.InputHTMLAttributes<HTMLInputElement>
    | React.TextareaHTMLAttributes<HTMLTextAreaElement>
    | React.SelectHTMLAttributes<HTMLSelectElement>;
};

const baseControlClass =
  "w-full p-3 mt-1 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-sky-200 transition-all";

const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  required = false,
  type = "text",
  placeholder,
  className,
  as = "input",
  rows = 5,
  options = [],
  fieldProps,
}) => {
  const Label = (
    <label htmlFor={id} className="text-sm font-bold text-slate-700">
      {label}
      {required ? <span className="text-red-500"> *</span> : null}
    </label>
  );

  return (
    <div className="space-y-2">
      {Label}
      {as === "textarea" ? (
        <textarea
          id={id}
          rows={rows}
          placeholder={placeholder}
          required={required}
          {...(fieldProps as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          className={`${baseControlClass} resize-none ${className ?? ""}`}
        />
      ) : as === "select" ? (
        <select
          id={id}
          required={required}
          {...(fieldProps as React.SelectHTMLAttributes<HTMLSelectElement>)}
          className={`${baseControlClass} bg-white/50 text-slate-400 ${className ?? ""}`}
        >
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          required={required}
          {...(fieldProps as React.InputHTMLAttributes<HTMLInputElement>)}
          className={`${baseControlClass} ${className ?? ""}`}
        />
      )}
    </div>
  );
};

export default FormField;
