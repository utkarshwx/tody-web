export default function HowItWorks() {
  return (
    <section id="how-it-works" className="how-section">
      <div className="section-heading">
        <span className="section-kicker">HOW IT WORKS</span>

        <h2>
          Put everything
          <br />
          in one place.
        </h2>

        <p>
          Tody keeps your tasks organized so you can spend less time
          deciding what to do and more time actually doing it.
        </p>
      </div>

      <div className="steps">
        <div className="step">
          <span className="step-number">01</span>
          <h3>Add</h3>
          <p>Capture what needs to get done.</p>
        </div>

        <div className="step-arrow">→</div>

        <div className="step">
          <span className="step-number">02</span>
          <h3>Prioritize</h3>
          <p>Give your important work a place.</p>
        </div>

        <div className="step-arrow">→</div>

        <div className="step">
          <span className="step-number">03</span>
          <h3>Do</h3>
          <p>Open Tody and know what comes next.</p>
        </div>
      </div>
    </section>
  );
}