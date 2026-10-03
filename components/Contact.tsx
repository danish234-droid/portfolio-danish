"use client";

import { useState } from "react";
import { useFormik } from "formik";
import { siteConfig } from "@/data/site";
import { contactValidationSchema, ContactFormValues, submitContactForm } from "@/lib/contact";
import confetti from "canvas-confetti";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Phone,
  Send,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
  const [submitStatus, setSubmitStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
    isSimulated?: boolean;
  }>({
    submitted: false,
    success: false,
    message: "",
  });

  const formik = useFormik<ContactFormValues>({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      _gotcha: "",
    },
    validationSchema: contactValidationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const response = await submitContactForm(values);
        setSubmitStatus({
          submitted: true,
          success: response.success,
          message: response.message,
          isSimulated: response.isSimulated,
        });

        if (response.success) {
          // Trigger subtle celebration confetti
          try {
            confetti({
              particleCount: 40,
              spread: 60,
              origin: { y: 0.8 },
            });
          } catch {
            // Ignore if canvas unsupported
          }
          resetForm();
        }
      } catch {
        setSubmitStatus({
          submitted: true,
          success: false,
          message: "Unable to submit. Please reach out directly via email.",
        });
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <section id="contact" className="py-24 bg-card/30 border-y border-border/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header (FR-C1) */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Start a Conversation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Let&apos;s Build Something
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mt-3 mb-4" />
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl">
            Have a project, idea, or opportunity? I&apos;d love to hear about it.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Direct Contact Cards (FR-C6) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-bold text-foreground mb-1">Direct Channels</h3>
              <p className="text-xs text-muted-foreground mb-6">
                Feel free to email me directly or connect across developer platforms.
              </p>

              <div className="space-y-3.5 text-xs">
                {/* Email */}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-muted/40 hover:bg-muted border border-border/50 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-semibold text-foreground block">Email</span>
                      <span className="text-muted-foreground">{siteConfig.email}</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>

                {/* GitHub */}
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-muted/40 hover:bg-muted border border-border/50 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-semibold text-foreground block">GitHub</span>
                      <span className="text-muted-foreground">github.com/danish234-droid</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>

                {/* LinkedIn */}
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-muted/40 hover:bg-muted border border-border/50 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-semibold text-foreground block">LinkedIn</span>
                      <span className="text-muted-foreground">linkedin.com/in/danish-ali</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>

                {/* Location */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-muted/40 border border-border/50">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-foreground block">Location</span>
                    <span className="text-muted-foreground">{siteConfig.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Formik + Yup Validated Form (FR-C2, FR-C3, FR-C5, FR-C7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="lg:col-span-7 rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm"
          >
            <form onSubmit={formik.handleSubmit} noValidate className="space-y-4">
              {/* Anti-spam Honeypot Field (FR-C7) */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="_gotcha">Leave this field blank</label>
                <input
                  type="text"
                  id="_gotcha"
                  name="_gotcha"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formik.values._gotcha}
                  onChange={formik.handleChange}
                />
              </div>

              {/* Status Banner */}
              {submitStatus.submitted && (
                <div
                  className={`p-4 rounded-xl text-xs flex flex-col gap-2 border ${
                    submitStatus.success
                      ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400"
                      : "bg-rose-500/10 border-rose-500/20 text-rose-600 dark:text-rose-400"
                  }`}
                  role="alert"
                >
                  <div className="flex items-center gap-2 font-semibold">
                    {submitStatus.success ? (
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-emerald-500" />
                    ) : (
                      <AlertCircle className="w-4 h-4 flex-shrink-0 text-rose-500" />
                    )}
                    <span>{submitStatus.success ? "Validation Succeeded" : "Notice"}</span>
                  </div>
                  <p className="leading-relaxed">{submitStatus.message}</p>
                  {submitStatus.isSimulated && (
                    <a
                      href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(
                        formik.values.subject || "Portfolio Inquiry"
                      )}`}
                      className="inline-flex items-center gap-1 font-semibold underline mt-1"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Click here to open email client directly</span>
                    </a>
                  )}
                </div>
              )}

              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-foreground mb-1.5">
                  Your Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="e.g. John Doe"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  aria-describedby={formik.touched.name && formik.errors.name ? "name-error" : undefined}
                  className={`w-full px-4 py-3 rounded-xl border text-xs bg-muted/40 text-foreground transition-colors focus:bg-card ${
                    formik.touched.name && formik.errors.name
                      ? "border-rose-500 focus-visible:ring-rose-500"
                      : "border-border hover:border-border/80"
                  }`}
                />
                {formik.touched.name && formik.errors.name && (
                  <p id="name-error" className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {formik.errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-foreground mb-1.5">
                  Email Address <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="e.g. john@example.com"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  aria-describedby={formik.touched.email && formik.errors.email ? "email-error" : undefined}
                  className={`w-full px-4 py-3 rounded-xl border text-xs bg-muted/40 text-foreground transition-colors focus:bg-card ${
                    formik.touched.email && formik.errors.email
                      ? "border-rose-500 focus-visible:ring-rose-500"
                      : "border-border hover:border-border/80"
                  }`}
                />
                {formik.touched.email && formik.errors.email && (
                  <p id="email-error" className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {formik.errors.email}
                  </p>
                )}
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-foreground mb-1.5">
                  Subject <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="e.g. Internship Opportunity / Project Collaboration"
                  value={formik.values.subject}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  aria-describedby={formik.touched.subject && formik.errors.subject ? "subject-error" : undefined}
                  className={`w-full px-4 py-3 rounded-xl border text-xs bg-muted/40 text-foreground transition-colors focus:bg-card ${
                    formik.touched.subject && formik.errors.subject
                      ? "border-rose-500 focus-visible:ring-rose-500"
                      : "border-border hover:border-border/80"
                  }`}
                />
                {formik.touched.subject && formik.errors.subject && (
                  <p id="subject-error" className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {formik.errors.subject}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-foreground mb-1.5">
                  Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Write your message here..."
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  aria-describedby={formik.touched.message && formik.errors.message ? "message-error" : undefined}
                  className={`w-full px-4 py-3 rounded-xl border text-xs bg-muted/40 text-foreground transition-colors focus:bg-card resize-none ${
                    formik.touched.message && formik.errors.message
                      ? "border-rose-500 focus-visible:ring-rose-500"
                      : "border-border hover:border-border/80"
                  }`}
                />
                {formik.touched.message && formik.errors.message && (
                  <p id="message-error" className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {formik.errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={formik.isSubmitting}
                className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-all shadow-md shadow-primary/20 flex items-center justify-center gap-2 disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-primary"
              >
                {formik.isSubmitting ? (
                  <span>Validating &amp; Sending...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              <p className="text-[11px] text-muted-foreground text-center pt-2">
                Responses typically sent within 24 hours. Your details are never shared.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
