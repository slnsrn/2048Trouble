import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - 2048 Trouble',
  description: 'Privacy Policy for the 2048 Trouble mobile app',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#faf8ef] px-4 py-8">
      <div className="mx-auto max-w-2xl rounded-xl bg-white p-6 shadow-md sm:p-10">
        <h1 className="text-3xl font-bold text-[#776e65]">Privacy Policy</h1>
        <p className="mb-8 mt-1 text-sm text-gray-400">
          Last updated: February 15, 2026
        </p>

        <p className="mb-6 text-gray-700">
          2048 Trouble (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;the
          app&rdquo;) is a puzzle game available on mobile devices. This policy
          explains what data we collect, how we use it, and your choices.
        </p>

        <Section title="1. Data We Collect">
          <p>
            <strong>Account data.</strong> When you first open the app, an
            anonymous account is created automatically. No email, password, or
            personal information is required. We store:
          </p>
          <ul className="mb-2 list-disc pl-6">
            <li>A unique account identifier</li>
            <li>Display name (only if you choose to set one)</li>
            <li>
              Country/region (detected from your device locale, used for
              leaderboard display)
            </li>
          </ul>

          <p>
            <strong>Google Play Games sign-in.</strong> If you sign in with
            Google Play Games, we use it solely to associate your scores with
            your account for leaderboard purposes. We do not access your Google
            contacts, email, or other Google account data.
          </p>

          <p>
            <strong>Gameplay data.</strong> We store your game scores and daily
            puzzle results so we can power the leaderboard and track your
            progress.
          </p>

          <p>
            <strong>Purchase data.</strong> If you purchase ad removal, we store
            the purchase type and date to your account.
          </p>

          <p>
            <strong>Data stored on your device only.</strong> Game settings
            (haptics, reduced motion, large text, show arrows), in-progress game
            state, and high scores are stored locally on your device and are not
            sent to our servers.
          </p>
        </Section>

        <Section title="2. How We Use Your Data">
          <ul className="list-disc pl-6">
            <li>To provide and operate the game</li>
            <li>
              To display leaderboards (your display name, country flag, and
              scores are visible to other players)
            </li>
            <li>To restore your ad removal purchase</li>
          </ul>
        </Section>

        <Section title="3. Advertising">
          <p>
            The app displays ads to support development. Third-party ad networks
            may collect device identifiers, IP address, and general location to
            serve relevant ads. You can remove ads through an in-app purchase.
          </p>
          <p>
            Ad providers have their own privacy policies governing their data
            collection practices.
          </p>
        </Section>

        <Section title="4. Data Sharing">
          <p>
            We do not sell your data. Your information may be visible to other
            players only through the leaderboard (display name, country, and
            scores). We do not share data with third parties except as needed to
            display ads as described above.
          </p>
        </Section>

        <Section title="5. Data Retention">
          <p>
            Your account and gameplay data are retained as long as your account
            exists. Since accounts are anonymous, we cannot link them back to you
            personally.
          </p>
        </Section>

        <Section title="6. Children's Privacy">
          <p>
            The app is not directed at children under 13. We do not knowingly
            collect personal information from children under 13. The anonymous
            account system means we collect minimal identifying information from
            any user.
          </p>
        </Section>

        <Section title="7. Your Choices">
          <ul className="list-disc pl-6">
            <li>You can choose not to set a display name</li>
            <li>
              You can purchase ad removal to stop third-party ad data collection
            </li>
            <li>
              You can delete the app at any time to remove all locally stored
              data
            </li>
          </ul>
        </Section>

        <Section title="8. Security">
          <p>
            We use industry-standard measures including HTTPS encryption and
            secure token-based authentication to protect your data.
          </p>
        </Section>

        <Section title="9. Changes to This Policy">
          <p>
            We may update this policy from time to time. Changes will be
            reflected by updating the date at the top of this page.
          </p>
        </Section>

        <Section title="10. Contact">
          <p>
            If you have questions about this privacy policy, contact us at{' '}
            <a
              href="mailto:support@2048trouble.com"
              className="text-[#f76340] underline"
            >
              support@2048trouble.com
            </a>
            .
          </p>
        </Section>
      </div>
    </div>
  )
}

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="mb-6">
      <h2 className="mb-2 text-xl font-semibold text-[#776e65]">{title}</h2>
      <div className="space-y-2 text-gray-700">{children}</div>
    </section>
  )
}
