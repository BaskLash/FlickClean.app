import type { Metadata } from "next";
import { ContactForm } from "@easycontact/react";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { SiteFooter } from "@/components/landing/SiteFooter";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the FlickClean team. Questions, feedback, or partnership ideas — we'd love to hear from you.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
          <div className="mb-10 text-center">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Contact us
            </h1>
            <p className="mt-3 text-white/60">
              Questions, feedback, or just want to say hi? Drop us a message and
              we&apos;ll get back to you as soon as we can.
            </p>
          </div>
          <ContactForm projectId="4cb853f5fba5efbf574fdd3f" theme="dark" />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
