import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - PostgresMac",
  description:
    "PostgresMac Privacy Policy - Your data stays on your device. We do not collect, transmit, or store any personal information.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <div className="flex-1 py-12 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <header className="mb-12 border-b border-gray-200 dark:border-gray-800 pb-8">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Privacy Policy for PostgresMac
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Last Updated: December 1, 2025
          </p>
        </header>

        {/* Content sections */}
        <div className="space-y-12">
          {/* Introduction */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100">
              Introduction
            </h2>
            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
              This Privacy Policy explains how PostgresMac handles your
              information. All data stays on your device.
            </p>
            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
              PostgresMac is a local-only application. We do not collect,
              transmit, store, or share any of your personal information or
              usage data. This privacy policy explains what data the app
              accesses on your device and how it is used.
            </p>
          </section>

          {/* Information We Do NOT Collect */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100">
              Information We Do NOT Collect
            </h2>
            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
              PostgresMac does not collect any information from you, including
              but not limited to: Personal information (name, email, phone
              number, etc.), usage analytics or statistics, crash reports or
              diagnostic data, device information, IP addresses or location
              data, SQL queries or database content you work with, and
              connection credentials or database information.
            </p>
            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
              We do not track you. We do not analyze your behavior. We do not
              collect any data whatsoever.
            </p>
          </section>

          {/* Information the App Accesses Locally */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100">
              Information the App Accesses Locally
            </h2>
            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
              While PostgresMac does not collect or transmit any data, it does
              access the following information locally on your device to provide
              its functionality:
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  PostgreSQL Connection Information
                </h3>
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                  Database connection credentials (host, port, username,
                  password, database name), saved connection profiles with your
                  chosen names and settings, and connection parameters you
                  configure.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Database Content
                </h3>
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                  The databases, tables, and data you choose to access through
                  the PostgreSQL servers you connect to, SQL queries you write
                  and execute, and query results returned from your PostgreSQL
                  servers.
                </p>
              </div>
            </div>

            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
              Important: All of this information remains exclusively on your
              Mac. It is never transmitted to us or any third party.
            </p>
          </section>

          {/* How Your Data is Stored */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100">
              How Your Data is Stored
            </h2>
            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
              All data used by PostgresMac is stored locally on your device:
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  macOS Keychain Integration
                </h3>
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                  Database passwords are securely stored in your macOS Keychain.
                  This is Apple&apos;s built-in secure storage system designed
                  to protect sensitive credentials. Only PostgresMac can access
                  these stored passwords, and only with your system&apos;s
                  permission. Passwords are encrypted and protected by your
                  Mac&apos;s security features.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Local Application Storage
                </h3>
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                  Connection profiles (excluding passwords) are stored in your
                  application&apos;s local storage. This includes connection
                  names, hostnames, ports, usernames, and database names. All
                  data is stored using standard macOS application data storage.
                  No data is synchronized to iCloud or any cloud service.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  SQL Queries and Results
                </h3>
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                  SQL queries you write are executed directly against the
                  PostgreSQL servers you specify. Query results are displayed in
                  the app but not permanently stored. No history of your queries
                  or results is maintained by the application.
                </p>
              </div>
            </div>
          </section>

          {/* Data Security */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100">
              Data Security
            </h2>
            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
              Your data security is ensured through:
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Local-Only Architecture
                </h3>
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                  PostgresMac operates entirely on your device. No data
                  transmission to external servers (except PostgreSQL servers
                  you explicitly connect to). No network connections initiated
                  by the app except to your specified database servers.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  macOS Security Features
                </h3>
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                  Leverages macOS Keychain for credential security. Uses
                  standard macOS application sandboxing and security features.
                  Protected by your Mac&apos;s security settings and user
                  permissions.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Direct Database Connections
                </h3>
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                  When you connect to a PostgreSQL server, the connection goes
                  directly from your Mac to that server. We are not an
                  intermediary in this connection. All communication follows the
                  standard PostgreSQL protocol with its security features.
                </p>
              </div>
            </div>
          </section>

          {/* Third-Party Services */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100">
              Third-Party Services
            </h2>
            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
              PostgresMac does not use any third-party services, including
              analytics platforms (no Google Analytics, Mixpanel, etc.), crash
              reporting services, advertising networks, cloud storage services,
              and authentication services.
            </p>
            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
              The only network connections made by PostgresMac are directly to
              the PostgreSQL database servers you explicitly configure and
              choose to connect to.
            </p>
          </section>

          {/* Data Sharing */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100">
              Data Sharing
            </h2>
            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
              We do not share any data with third parties because we do not
              collect any data. Your database credentials, connection
              information, SQL queries, and results never leave your device
              (except when sent directly to your PostgreSQL servers as part of
              normal database operations).
            </p>
          </section>

          {/* Your Rights and Control */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100">
              Your Rights and Control
            </h2>
            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
              You have complete control over your data:
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Deleting Connection Profiles
                </h3>
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                  You can delete any saved connection profile directly in the
                  app. Deleting a connection removes it from local storage.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Removing Passwords
                </h3>
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                  Deleting a connection profile also removes associated
                  passwords from macOS Keychain. You can also manage stored
                  passwords through macOS System Preferences &gt; Passwords.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Uninstalling the App
                </h3>
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                  Uninstalling PostgresMac removes the application and its local
                  data. You may need to manually remove Keychain entries through
                  System Preferences if desired. No data remains on our servers
                  because no data was ever sent to us.
                </p>
              </div>
            </div>
          </section>

          {/* Mac App Store Privacy */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100">
              Mac App Store Privacy
            </h2>
            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
              For Mac App Store users, PostgresMac&apos;s privacy label
              indicates &quot;No Data Collected&quot; because the app does not
              collect any data that leaves your device. The app accesses local
              data only as necessary to provide database management
              functionality.
            </p>
          </section>

          {/* Changes to This Privacy Policy */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100">
              Changes to This Privacy Policy
            </h2>
            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
              We may update this Privacy Policy from time to time to reflect
              changes in the app, legal requirements, or our privacy practices.
              When we make changes, the &quot;Last Updated&quot; date at the top
              of this policy will be revised. If distributed through the Mac App
              Store, updates will be noted in release notes. For significant
              changes, we will provide notice through the app or our website.
              Continued use of the app after changes indicates acceptance of the
              updated policy.
            </p>
            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
              We encourage you to review this Privacy Policy periodically to
              stay informed about how we protect your privacy.
            </p>
          </section>

          {/* Future Changes to the App */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100">
              Future Changes to the App
            </h2>
            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
              Currently, PostgresMac is a completely local application with no
              data collection. If we ever introduce features that involve data
              collection, cloud synchronization, or online services, this
              Privacy Policy will be updated accordingly, users will be clearly
              notified before any such features are enabled, any data collection
              features will be optional and require explicit user consent, and
              the core principle of privacy protection will remain central to
              the app.
            </p>
          </section>

          {/* Contact Us */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100">
              Contact Us
            </h2>
            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or PostgresMac&apos;s privacy practices, please
              contact us at:
            </p>
            <div className="space-y-2 text-gray-700 dark:text-gray-300">
              <p>Email: fikri@mghazi.com</p>
              <p>Website: postgresmac.com</p>
              <p>Developer: Fikri Ghazi</p>
            </div>
          </section>

          {/* Summary */}
          <section className="space-y-4 border-t border-gray-200 dark:border-gray-800 pt-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100">
              Summary
            </h2>
            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
              To summarize PostgresMac&apos;s approach to privacy: No data
              collection - we do not collect any information from you. Local
              storage only - all data stays on your Mac. Secure credentials -
              passwords protected by macOS Keychain. No tracking - no analytics,
              no crash reports, no usage statistics. No third parties - no
              external services or data sharing. You are in control - complete
              control over your connection profiles and data.
            </p>
            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
              PostgresMac does not collect any data from you. All information
              remains stored locally on your device.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
