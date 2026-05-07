import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { SiteFooter } from "@/components/landing/SiteFooter";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How FlickClean handles your data. Photos stay on your device. We collect only what we need to keep the app working.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "May 7, 2026";
const EFFECTIVE_DATE = "May 7, 2026";

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 pb-24">
        <section className="relative overflow-hidden bg-ambient">
          <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors"
              data-track-id="privacy_back_home"
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
              Privacy Policy
            </h1>
            <p className="mt-5 text-lg text-white/60">
              Your photos stay on your phone. We keep what we collect small,
              honest, and only what we need to make FlickClean work.
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-3xl px-6 pt-4">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 text-sm text-white/70 leading-relaxed">
            <p className="text-white/80">
              <span className="font-medium text-white">The short version.</span>{" "}
              FlickClean is a photo cleanup app that runs entirely on your
              device. We never upload, copy, or look at your photos. We use a
              minimum of analytics to understand how the app and website are
              used, and we rely on the App Store for sign-in and payments.
            </p>
          </div>

          <div className="mt-12 space-y-12">
            <Section id="who-we-are" title="1. Who we are">
              <p>
                FlickClean (&ldquo;FlickClean&rdquo;, &ldquo;we&rdquo;,
                &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is the operator of the
                FlickClean mobile app and the website at{" "}
                <span className="text-white">flickclean.app</span>. We are based
                in Switzerland.
              </p>
              <p>
                If you have any questions about this policy or how we handle
                your data, you can reach us at{" "}
                <a
                  href="mailto:business.promptin@gmail.com"
                  className="text-[#7c9cff] hover:text-white transition-colors"
                  data-track-id="privacy_contact_email"
                  data-track-type="contact"
                  data-track-click="click_contact"
                  data-track-hover="true"
                >
                  business.promptin@gmail.com
                </a>
                .
              </p>
            </Section>

            <Section
              id="scope"
              title="2. What this policy covers"
            >
              <p>
                This policy explains what we collect, how we use it, and your
                choices when you:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>visit our website at flickclean.app;</li>
                <li>install or use the FlickClean mobile app;</li>
                <li>email us or otherwise contact support.</li>
              </ul>
              <p>
                It does not cover services that we link to but do not operate
                (for example, the Apple App Store). Their own privacy policies
                apply.
              </p>
            </Section>

            <Section id="photos" title="3. Your photos stay on your device">
              <p>
                FlickClean is built so that your photos never leave your phone.
                When you swipe through and clean your gallery, all reading,
                sorting, and deletion happens locally on your device using
                Apple&rsquo;s Photos framework.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  We do <span className="text-white">not</span> upload your
                  photos or videos to our servers.
                </li>
                <li>
                  We do <span className="text-white">not</span> have access to
                  your photo library, and no one at FlickClean can view your
                  photos.
                </li>
                <li>
                  We do <span className="text-white">not</span> use your photos
                  to train AI models or share them with third parties.
                </li>
              </ul>
              <p>
                Deletions you make in FlickClean go through the standard
                Photos &ldquo;Recently Deleted&rdquo; flow, so you can recover
                them within Apple&rsquo;s grace period if you change your mind.
              </p>
            </Section>

            <Section id="data-we-collect" title="4. Data we collect">
              <p>We try to collect as little as possible. In practice:</p>

              <h3 className="mt-6 text-base font-semibold text-white">
                Information you give us
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="text-white">Support correspondence.</span>{" "}
                  When you email us, we receive your email address and the
                  contents of your message.
                </li>
                <li>
                  <span className="text-white">Feedback you submit</span>{" "}
                  through the app or website (for example, ratings or written
                  feedback).
                </li>
              </ul>

              <h3 className="mt-6 text-base font-semibold text-white">
                Information collected automatically
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="text-white">Usage analytics.</span>{" "}
                  Anonymous events like screen views, button taps, and feature
                  usage so we can improve the product. Where possible, this
                  data is aggregated and not tied to you.
                </li>
                <li>
                  <span className="text-white">Device and app information.</span>{" "}
                  Device model, operating system version, app version, language,
                  and approximate region (country level).
                </li>
                <li>
                  <span className="text-white">Diagnostic data.</span> Crash
                  reports and performance metrics, used to find and fix bugs.
                </li>
                <li>
                  <span className="text-white">Web analytics.</span> When you
                  visit flickclean.app, we collect basic page views, referrers,
                  and approximate location through the providers listed below.
                </li>
              </ul>

              <h3 className="mt-6 text-base font-semibold text-white">
                Information from the App Store
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="text-white">Subscription status.</span> A
                  receipt token issued by Apple that tells the app whether your
                  subscription is active. We do not receive your name, billing
                  address, or full payment details.
                </li>
              </ul>
            </Section>

            <Section
              id="how-we-use-data"
              title="5. How we use your data"
            >
              <p>We use the data above to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>operate and maintain FlickClean and our website;</li>
                <li>
                  unlock features you have purchased and verify your
                  subscription;
                </li>
                <li>
                  understand how people use the app so we can fix bugs, improve
                  performance, and design better features;
                </li>
                <li>respond to your questions and support requests;</li>
                <li>
                  detect and prevent fraud, abuse, and violations of our Terms;
                </li>
                <li>
                  comply with our legal obligations and enforce our agreements.
                </li>
              </ul>
            </Section>

            <Section
              id="legal-bases"
              title="6. Legal bases (for users in the EEA, UK, and Switzerland)"
            >
              <p>If you are in the EEA, UK, or Switzerland, we rely on:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="text-white">Performance of a contract</span>{" "}
                  &mdash; to provide the app and any subscription you purchase.
                </li>
                <li>
                  <span className="text-white">Legitimate interests</span>{" "}
                  &mdash; to improve, secure, and promote FlickClean. We balance
                  these interests against your rights.
                </li>
                <li>
                  <span className="text-white">Consent</span> &mdash; where
                  required, for example for certain analytics or marketing.
                  You can withdraw consent at any time.
                </li>
                <li>
                  <span className="text-white">Legal obligation</span> &mdash;
                  when we have to keep records or respond to lawful requests.
                </li>
              </ul>
            </Section>

            <Section id="sharing" title="7. Who we share data with">
              <p>
                We never sell your personal data. We share limited data with a
                small set of trusted service providers who help us run
                FlickClean:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="text-white">Apple</span> &mdash; for app
                  distribution, in-app purchases, and subscription receipts.
                </li>
                <li>
                  <span className="text-white">Vercel</span> &mdash; for
                  hosting our website and basic web analytics.
                </li>
                <li>
                  <span className="text-white">Google Analytics</span> &mdash;
                  for aggregated website usage statistics.
                </li>
                <li>
                  <span className="text-white">Crash and analytics tooling</span>{" "}
                  used inside the app to capture anonymous events and crash
                  reports.
                </li>
                <li>
                  <span className="text-white">Email providers</span> we use to
                  read and reply to messages sent to{" "}
                  <a
                    href="mailto:business.promptin@gmail.com"
                    className="text-[#7c9cff] hover:text-white transition-colors"
                  >
                    business.promptin@gmail.com
                  </a>
                  .
                </li>
              </ul>
              <p>
                We may also share data when required by law, to enforce our
                Terms, or in connection with a merger, acquisition, or sale of
                assets &mdash; in which case we will give you reasonable notice.
              </p>
            </Section>

            <Section
              id="international"
              title="8. International transfers"
            >
              <p>
                FlickClean is operated from Switzerland, but our service
                providers may process data in the United States or other
                countries. Where we transfer personal data out of the EEA, UK,
                or Switzerland, we rely on appropriate safeguards such as the
                European Commission&rsquo;s Standard Contractual Clauses or
                equivalent mechanisms.
              </p>
            </Section>

            <Section id="retention" title="9. How long we keep data">
              <p>
                We keep personal data only as long as needed for the purposes
                in this policy. In practice:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Analytics events are retained for up to 26 months and then
                  aggregated or deleted.
                </li>
                <li>
                  Subscription receipts are kept while your subscription is
                  active and for as long as required by tax and accounting
                  rules afterwards.
                </li>
                <li>
                  Support emails are kept while we&rsquo;re helping you and for
                  a reasonable period afterwards so we can follow up.
                </li>
              </ul>
            </Section>

            <Section id="rights" title="10. Your rights">
              <p>
                Depending on where you live, you may have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>access the personal data we hold about you;</li>
                <li>ask us to correct or delete it;</li>
                <li>
                  object to or restrict certain processing, including direct
                  marketing;
                </li>
                <li>
                  receive a copy of your data in a portable format;
                </li>
                <li>withdraw consent where we rely on it;</li>
                <li>
                  lodge a complaint with your local data protection authority.
                </li>
              </ul>
              <p>
                To exercise any of these rights, email us at{" "}
                <a
                  href="mailto:business.promptin@gmail.com"
                  className="text-[#7c9cff] hover:text-white transition-colors"
                >
                  business.promptin@gmail.com
                </a>
                . We may need to verify your identity before acting on a
                request.
              </p>
            </Section>

            <Section id="security" title="11. Security">
              <p>
                We use reasonable technical and organisational measures to
                protect the data we collect: encryption in transit, restricted
                access, and reputable infrastructure providers. No system is
                perfectly secure, but we keep our footprint small on purpose:
                most of what makes FlickClean useful never leaves your device.
              </p>
            </Section>

            <Section id="children" title="12. Children">
              <p>
                FlickClean is not directed at children under 13. We do not
                knowingly collect personal data from children under 13. If you
                believe a child has provided us with personal data, please
                contact us and we will delete it.
              </p>
            </Section>

            <Section id="changes" title="13. Changes to this policy">
              <p>
                We may update this policy as the product evolves. When we make
                material changes, we will update the &ldquo;Last updated&rdquo;
                date above and, where appropriate, notify you in the app or by
                another reasonable means. Continued use of FlickClean after the
                changes take effect means you accept the updated policy.
              </p>
            </Section>

            <Section id="contact" title="14. Contact">
              <p>
                Questions, requests, or concerns? Email{" "}
                <a
                  href="mailto:business.promptin@gmail.com"
                  className="text-[#7c9cff] hover:text-white transition-colors"
                  data-track-id="privacy_contact_email_bottom"
                  data-track-type="contact"
                  data-track-click="click_contact"
                  data-track-hover="true"
                >
                  business.promptin@gmail.com
                </a>
                . We&rsquo;re a small team and we read every message.
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
