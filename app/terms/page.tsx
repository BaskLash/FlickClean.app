import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { SiteFooter } from "@/components/landing/SiteFooter";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The rules for using FlickClean and our subscription service. Plain language, fair terms.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "May 7, 2026";
const EFFECTIVE_DATE = "May 7, 2026";

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 pb-24">
        <section className="relative overflow-hidden bg-ambient">
          <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors"
              data-track-id="terms_back_home"
              data-track-type="nav"
              data-track-click="click_nav"
              data-track-hover="true"
            >
              <ArrowLeft className="size-4" />
              Back home
            </Link>
            <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-wider text-white/40">
              <span>Legal</span>
              <span className="size-1 rounded-full bg-white/20" />
              <span>Last updated {LAST_UPDATED}</span>
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.1]">
              Terms of Service
            </h1>
            <p className="mt-5 text-lg text-white/60">
              The rules for using FlickClean. Written in plain language so you
              actually know what you&rsquo;re agreeing to.
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-3xl px-6 pt-4">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 text-sm text-white/70 leading-relaxed">
            <p className="text-white/80">
              <span className="font-medium text-white">In short.</span> By
              using FlickClean, you agree to these Terms. The app is provided
              as-is. Subscriptions auto-renew through the App Store and you can
              cancel any time in your Apple ID settings. Be kind, don&rsquo;t
              try to break things, and we&rsquo;ll keep building a tool that
              helps you tidy your gallery.
            </p>
          </div>

          <div className="mt-12 space-y-12">
            <Section id="agreement" title="1. Agreement">
              <p>
                These Terms of Service (&ldquo;Terms&rdquo;) form a binding
                agreement between you and FlickClean (&ldquo;FlickClean&rdquo;,
                &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), based
                in Switzerland. They govern your access to and use of the
                FlickClean mobile app, the website at flickclean.app, and any
                related services (together, the &ldquo;Service&rdquo;).
              </p>
              <p>
                By downloading, installing, or using the Service, you confirm
                that you have read, understood, and agree to be bound by these
                Terms and by our{" "}
                <Link
                  href="/privacy"
                  className="text-[#7c9cff] hover:text-white transition-colors"
                  data-track-id="terms_privacy_link"
                  data-track-type="legal_link"
                  data-track-click="click_legal_link"
                  data-track-hover="true"
                >
                  Privacy Policy
                </Link>
                . If you do not agree, please do not use the Service.
              </p>
            </Section>

            <Section id="eligibility" title="2. Who can use FlickClean">
              <p>
                You must be at least 13 years old to use FlickClean. If you are
                under the age of majority where you live, you may only use the
                Service with the consent and supervision of a parent or legal
                guardian who agrees to these Terms on your behalf.
              </p>
              <p>
                You must also have the legal right to install and use apps
                purchased through the Apple App Store in your country.
              </p>
            </Section>

            <Section id="service" title="3. What FlickClean does">
              <p>
                FlickClean is a photo cleanup app that helps you swipe through
                your gallery, free up storage, and stay on top of clutter. All
                photo reading, sorting, and deletion happens locally on your
                device using Apple&rsquo;s Photos framework. We do not upload,
                copy, or store your photos on our servers. See our{" "}
                <Link
                  href="/privacy"
                  className="text-[#7c9cff] hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>{" "}
                for the details.
              </p>
              <p>
                We may add, change, or remove features over time. We will try
                to give you reasonable notice of significant changes, but we
                cannot guarantee that any specific feature will remain
                available indefinitely.
              </p>
            </Section>

            <Section id="account" title="4. Your account and device">
              <p>
                FlickClean does not currently require a separate account.
                Subscription status is tied to the Apple ID used to make the
                purchase.
              </p>
              <p>You are responsible for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>the device and Apple ID you use with the Service;</li>
                <li>
                  keeping your device&rsquo;s operating system reasonably up to
                  date;
                </li>
                <li>
                  any backups you want to keep before deleting photos &mdash;
                  always make sure important memories are backed up before
                  using FlickClean.
                </li>
              </ul>
            </Section>

            <Section
              id="subscriptions"
              title="5. Subscriptions, billing, and renewals"
            >
              <p>
                FlickClean offers paid features through auto-renewing
                subscriptions sold through the Apple App Store. Pricing,
                billing periods, and any free trial are shown at the point of
                purchase before you confirm.
              </p>
              <h3 className="mt-6 text-base font-semibold text-white">
                How auto-renewal works
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Payment is charged to your Apple ID at confirmation of
                  purchase.
                </li>
                <li>
                  Your subscription automatically renews at the end of each
                  billing period unless auto-renew is turned off at least 24
                  hours before the end of the current period.
                </li>
                <li>
                  Your account is charged for renewal within 24 hours prior to
                  the end of the current period at the renewal price disclosed
                  to you.
                </li>
                <li>
                  You can manage and cancel your subscription at any time by
                  going to your Apple ID account settings on your device.
                  Cancellation takes effect at the end of the current billing
                  period &mdash; you keep access until then.
                </li>
              </ul>
              <h3 className="mt-6 text-base font-semibold text-white">
                Free trials
              </h3>
              <p>
                If we offer a free trial, you will only be charged when the
                trial ends, unless you cancel at least 24 hours before that
                point. Any unused portion of a free trial will be forfeited if
                you purchase a subscription before the trial ends.
              </p>
              <h3 className="mt-6 text-base font-semibold text-white">
                Price changes
              </h3>
              <p>
                If we change the price of a subscription, we will let you know
                in advance and, where required, ask you to confirm the new
                price before it takes effect.
              </p>
            </Section>

            <Section id="refunds" title="6. Refunds">
              <p>
                Because subscriptions are sold through the App Store, refunds
                are handled by Apple under their standard refund policy. You
                can request a refund at{" "}
                <a
                  href="https://reportaproblem.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7c9cff] hover:text-white transition-colors"
                >
                  reportaproblem.apple.com
                </a>
                . If you have a problem we should know about, please contact
                us at{" "}
                <a
                  href="mailto:business.promptin@gmail.com"
                  className="text-[#7c9cff] hover:text-white transition-colors"
                >
                  business.promptin@gmail.com
                </a>{" "}
                &mdash; we&rsquo;ll do what we can to make it right.
              </p>
              <p>
                Where you have a statutory right to a refund or to withdraw
                from the contract under your local consumer law (for example,
                in the EEA, UK, or Switzerland), nothing in these Terms limits
                that right.
              </p>
            </Section>

            <Section id="license" title="7. License">
              <p>
                Subject to these Terms, we grant you a personal, limited,
                non-exclusive, non-transferable, revocable license to download
                and use the FlickClean app on devices you own or control, for
                your personal, non-commercial use.
              </p>
              <p>You may not:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  copy, modify, distribute, sell, or lease any part of the
                  Service;
                </li>
                <li>
                  reverse engineer, decompile, or attempt to extract the source
                  code, except where the law expressly permits it;
                </li>
                <li>
                  use the Service to build a competing product or to scrape,
                  copy, or harvest content;
                </li>
                <li>
                  bypass, disable, or interfere with security or
                  subscription-verification features.
                </li>
              </ul>
              <p>
                All rights not expressly granted to you are reserved by
                FlickClean and its licensors.
              </p>
            </Section>

            <Section id="conduct" title="8. Acceptable use">
              <p>When using FlickClean, you agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  use the Service in violation of any applicable law or
                  regulation;
                </li>
                <li>
                  upload, transmit, or otherwise interact with content that is
                  illegal, abusive, or that you do not have the right to use;
                </li>
                <li>
                  attempt to gain unauthorised access to any part of the
                  Service, our systems, or other users&rsquo; devices;
                </li>
                <li>
                  use automated means to access the Service in a way that
                  burdens our infrastructure;
                </li>
                <li>
                  impersonate anyone, misrepresent your affiliation, or harass
                  our team or other users.
                </li>
              </ul>
            </Section>

            <Section id="content" title="9. Your content">
              <p>
                Your photos are yours. We do not claim ownership of any content
                on your device, and as described in our{" "}
                <Link
                  href="/privacy"
                  className="text-[#7c9cff] hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
                , your photos never leave your device through FlickClean.
              </p>
              <p>
                If you send us feedback, suggestions, or ideas, you agree we
                may use them without restriction or compensation. We will never
                publish identifying information from your messages without your
                permission.
              </p>
            </Section>

            <Section id="ip" title="10. Our intellectual property">
              <p>
                The FlickClean app, the website, the FlickClean name and logo,
                and all related text, graphics, and software are owned by
                FlickClean or its licensors and are protected by intellectual
                property laws. These Terms do not transfer any such rights to
                you.
              </p>
            </Section>

            <Section id="third-parties" title="11. Third-party services">
              <p>
                The Service relies on third-party platforms and providers, in
                particular Apple (App Store, Photos framework, in-app
                purchases) and Vercel (hosting and analytics for our website).
                Your use of those services is governed by their own terms and
                policies, which we do not control.
              </p>
            </Section>

            <Section
              id="warranty"
              title="12. Disclaimer of warranties"
            >
              <p>
                The Service is provided <span className="text-white">&ldquo;as is&rdquo;</span>{" "}
                and{" "}
                <span className="text-white">&ldquo;as available&rdquo;</span>{" "}
                without warranties of any kind, whether express or implied, to
                the maximum extent permitted by law. We do not warrant that the
                Service will be uninterrupted, error-free, secure, or free of
                viruses or other harmful components, or that any defects will
                be corrected.
              </p>
              <p>
                You are responsible for reviewing photos before deleting them
                and for keeping appropriate backups. While the iOS &ldquo;Recently
                Deleted&rdquo; album gives you a grace period to recover
                photos, we are not responsible for content lost as a result of
                actions you take in the app.
              </p>
              <p>
                Some jurisdictions do not allow the exclusion of certain
                warranties, so some of the above exclusions may not apply to
                you.
              </p>
            </Section>

            <Section
              id="liability"
              title="13. Limitation of liability"
            >
              <p>
                To the maximum extent permitted by law, FlickClean and its
                officers, employees, and agents shall not be liable for any
                indirect, incidental, special, consequential, or punitive
                damages, or for any loss of profits, revenue, data, or
                goodwill, arising out of or related to your use of the Service.
              </p>
              <p>
                Our total cumulative liability to you for any claim arising
                from or related to the Service is limited to the greater of
                (a) the amount you paid us in the twelve months before the
                event giving rise to the claim, or (b) CHF 50.
              </p>
              <p>
                Nothing in these Terms excludes or limits liability for fraud,
                gross negligence, intentional misconduct, or any other
                liability that cannot be limited by law.
              </p>
            </Section>

            <Section
              id="indemnity"
              title="14. Indemnity"
            >
              <p>
                You agree to defend, indemnify, and hold harmless FlickClean
                from and against any claims, liabilities, damages, losses, and
                expenses (including reasonable legal fees) arising out of or in
                any way connected with your use of the Service in breach of
                these Terms or applicable law.
              </p>
            </Section>

            <Section id="termination" title="15. Suspension and termination">
              <p>
                You can stop using FlickClean at any time by uninstalling the
                app and cancelling any active subscription through your Apple
                ID settings.
              </p>
              <p>
                We may suspend or terminate your access to the Service if you
                materially breach these Terms, if continued service would
                expose us to legal risk, or if we discontinue the Service. We
                will give you reasonable notice where practical.
              </p>
              <p>
                Sections that by their nature should survive termination
                (including the disclaimers, limitation of liability,
                intellectual property, and governing law sections) will
                continue to apply.
              </p>
            </Section>

            <Section id="changes" title="16. Changes to these Terms">
              <p>
                We may update these Terms from time to time. When we make
                material changes, we will update the &ldquo;Last updated&rdquo;
                date and, where appropriate, notify you in the app or by
                another reasonable means. Your continued use of the Service
                after the changes take effect means you accept the updated
                Terms. If you do not agree, please stop using the Service.
              </p>
            </Section>

            <Section
              id="governing-law"
              title="17. Governing law and disputes"
            >
              <p>
                These Terms are governed by the laws of Switzerland, without
                regard to conflict-of-laws principles. The courts of
                Switzerland will have exclusive jurisdiction over any disputes
                arising out of or in connection with these Terms or the
                Service, except that we may seek injunctive relief in any
                competent court.
              </p>
              <p>
                If you are a consumer, you may also be entitled to bring
                proceedings in your country of residence under mandatory local
                consumer-protection law.
              </p>
            </Section>

            <Section id="apple" title="18. Apple-specific terms">
              <p>
                The following applies to your use of FlickClean on
                Apple-branded devices:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  These Terms are between you and FlickClean, not Apple. Apple
                  is not responsible for the app or its content.
                </li>
                <li>
                  The license granted in these Terms is limited to use on
                  Apple-branded devices that you own or control, in accordance
                  with the Apple Media Services Terms and the App Store
                  Usage Rules.
                </li>
                <li>
                  Apple has no obligation to provide maintenance or support
                  for the app.
                </li>
                <li>
                  In the event of any failure of the app to conform to any
                  applicable warranty, you may notify Apple, and Apple will
                  refund the purchase price (if any) for the app. To the
                  maximum extent permitted by law, Apple has no other warranty
                  obligation with respect to the app.
                </li>
                <li>
                  Apple and its subsidiaries are third-party beneficiaries of
                  these Terms and may enforce them against you.
                </li>
              </ul>
            </Section>

            <Section id="general" title="19. General">
              <p>
                These Terms, together with our{" "}
                <Link
                  href="/privacy"
                  className="text-[#7c9cff] hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
                , are the entire agreement between you and FlickClean about the
                Service. If any provision is found to be unenforceable, the
                remaining provisions will remain in full effect. Our failure to
                enforce any right is not a waiver of that right. You may not
                assign these Terms without our consent; we may assign them as
                part of a corporate transaction.
              </p>
            </Section>

            <Section id="contact" title="20. Contact">
              <p>
                Questions about these Terms? Email{" "}
                <a
                  href="mailto:business.promptin@gmail.com"
                  className="text-[#7c9cff] hover:text-white transition-colors"
                  data-track-id="terms_contact_email"
                  data-track-type="contact"
                  data-track-click="click_contact"
                  data-track-hover="true"
                >
                  business.promptin@gmail.com
                </a>
                .
              </p>
              <p className="text-white/40 text-sm">
                Effective date: {EFFECTIVE_DATE}.
              </p>
            </Section>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
        {children}
      </div>
    </section>
  );
}
