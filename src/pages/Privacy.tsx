import { Link } from "react-router-dom";

export default function Privacy() {
  return (
    <div className="privacy-page">
      <header className="privacy-header">
        <Link to="/" className="brand">
          Tody
        </Link>

        <Link to="/" className="privacy-back">
          ← Back to Tody
        </Link>
      </header>

      <main className="privacy-content">
        <div className="privacy-intro">
          <span className="privacy-kicker">PRIVACY</span>

          <h1>Privacy Policy</h1>

          <p className="privacy-updated">
            Last updated: October 3, 2026
          </p>
        </div>

        <section>
          <h2>1. What Tody is</h2>
          <p>
            Tody is a task planning and productivity application that helps
            you organize tasks and determine what to work on next.
          </p>
        </section>

        <section>
          <h2>2. Information we collect</h2>

          <p>
            When you create and use a Tody account, we may store information
            required to provide the service, including:
          </p>

          <ul>
            <li>Your name</li>
            <li>Your email address</li>
            <li>Your account authentication information</li>
            <li>Tasks and task-related information you create</li>
            <li>Goals and goal-related information you create</li>
          </ul>

          <p>
            Task-related information may include titles, descriptions,
            priorities, periods, due dates, resource links, status, and
            completion information.
          </p>
        </section>

        <section>
          <h2>3. How we use your information</h2>

          <p>
            We use the information associated with your account to:
          </p>

          <ul>
            <li>Create and authenticate your account</li>
            <li>Store and display your tasks and goals</li>
            <li>Provide Tody's task management features</li>
            <li>Maintain and operate the service</li>
            <li>Protect the service from unauthorized access</li>
          </ul>
        </section>

        <section>
          <h2>4. Authentication</h2>

          <p>
            Tody uses authentication tokens to keep you signed in. When using
            the browser extension, the authentication token is stored using
            the browser's local extension storage.
          </p>

          <p>
            Your password is not stored in plain text. Passwords are securely
            hashed before being stored by the service.
          </p>
        </section>

        <section>
          <h2>5. Data storage</h2>

          <p>
            Tody stores account, task, and goal data using its backend
            infrastructure and database services.
          </p>

          <p>
            We take reasonable measures to protect stored information and
            restrict access to authorized systems and services.
          </p>
        </section>

        <section>
          <h2>6. Third-party services</h2>

          <p>
            Tody relies on third-party infrastructure and service providers
            to operate parts of the application, such as hosting,
            authentication, and database infrastructure.
          </p>

          <p>
            These providers may process information as necessary to provide
            their services to Tody.
          </p>
        </section>

        <section>
          <h2>7. Data sharing</h2>

          <p>
            Tody does not sell your personal information.
          </p>

          <p>
            We may disclose information when necessary to operate the
            service, comply with applicable law, enforce our terms, or
            protect the security of Tody and its users.
          </p>
        </section>

        <section>
          <h2>8. Data retention</h2>

          <p>
            We retain account and application data for as long as necessary
            to provide the service and meet legitimate operational or legal
            requirements.
          </p>
        </section>

        <section>
          <h2>9. Your information</h2>

          <p>
            You can manage information associated with your Tody account
            through the application where those controls are available.
          </p>

          <p>
            If you need assistance regarding your personal information,
            please contact us using the contact information provided below.
          </p>
        </section>

        <section>
          <h2>10. Children's privacy</h2>

          <p>
            Tody is not intended to knowingly collect personal information
            from children where doing so would violate applicable law.
          </p>
        </section>

        <section>
          <h2>11. Changes to this policy</h2>

          <p>
            We may update this Privacy Policy when Tody's features,
            infrastructure, or legal requirements change. The updated policy
            will be published on this page with a revised date.
          </p>
        </section>

        <section>
          <h2>12. Contact</h2>

          <p>
            For privacy-related questions or requests, contact the Tody team
            through the contact address provided on the Tody website.
          </p>
        </section>

        <div className="privacy-footer-note">
          Tody · Know what to do.
        </div>
      </main>
    </div>
  );
}