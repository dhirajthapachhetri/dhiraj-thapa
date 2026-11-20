import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { profile } from "@/content/site";
import { buildMailto, contactSchema, type ContactValues } from "@/lib/contact";
import { cn } from "@/lib/utils";

const fields = [
  { name: "name", label: "Name", type: "text", autoComplete: "name" },
  { name: "email", label: "Email", type: "email", autoComplete: "email" },
  { name: "subject", label: "Subject", type: "text", autoComplete: "off" },
] as const;

/**
 * Validates the message, then opens the visitor's own email app with it filled in,
 * addressed to Dhiraj. Nothing is stored on a server.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({ resolver: zodResolver(contactSchema), mode: "onTouched" });

  const onSubmit = (values: ContactValues) => {
    window.location.href = buildMailto(profile.email, values);
    setSent(true);
  };

  const inputClass =
    "w-full border-0 border-b border-input bg-transparent py-3 text-lg tracking-tight outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-foreground aria-[invalid=true]:border-destructive";

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-8">
      <div className="grid gap-8 sm:grid-cols-2">
        {fields.map((f) => (
          <div key={f.name} className={cn(f.name === "subject" && "sm:col-span-2")}>
            <label htmlFor={f.name} className="eyebrow text-muted-foreground">
              {f.label}
            </label>
            <input
              id={f.name}
              type={f.type}
              autoComplete={f.autoComplete}
              aria-invalid={!!errors[f.name]}
              aria-describedby={errors[f.name] ? `${f.name}-error` : undefined}
              className={inputClass}
              {...register(f.name)}
            />
            {errors[f.name] ? (
              <p id={`${f.name}-error`} className="mt-2 text-sm text-destructive">
                {errors[f.name]?.message}
              </p>
            ) : null}
          </div>
        ))}
      </div>
      <div>
        <label htmlFor="message" className="eyebrow text-muted-foreground">
          Message
        </label>
        <textarea
          id="message"
          rows={6}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={cn(inputClass, "resize-y")}
          {...register("message")}
        />
        {errors.message ? (
          <p id="message-error" className="mt-2 text-sm text-destructive">
            {errors.message.message}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xs text-xs leading-relaxed text-muted-foreground">
          Sending opens your email app with this message ready to go to {profile.email}.
        </p>
        <Button type="submit" variant="ink" size="xl" disabled={isSubmitting}>
          Send message →
        </Button>
      </div>

      {sent ? (
        <div role="status" className="border-l-2 border-accent bg-paper-deep p-5 text-sm leading-relaxed">
          Your email app should now be open with the message filled in — press send there to deliver it. If nothing opened,
          write directly to{" "}
          <a href={`mailto:${profile.email}`} className="font-semibold underline underline-offset-4">
            {profile.email}
          </a>
          .
        </div>
      ) : null}
    </form>
  );
}
