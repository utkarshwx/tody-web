import ProductPreview from "./ProductPreview";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="eyebrow-dot" />
          A simpler way to get things done
        </div>

        <h1>
          Know
          <br />
          what to do.
        </h1>

        <p>
          Tody helps you turn a pile of tasks into a clear next step.
          No noise. No complicated productivity system.
        </p>

        <div className="hero-actions">
          <a href="#get-started" className="primary-button">
            Get Tody
          </a>

          <a href="#how-it-works" className="secondary-button">
            See how it works
            <span>↓</span>
          </a>
        </div>

        <div className="hero-note">
          <span>✦</span>
          Less planning. More doing.
        </div>
      </div>

      <ProductPreview />
    </section>
  );
}