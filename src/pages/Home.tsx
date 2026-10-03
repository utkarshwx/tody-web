import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="page">
      <div className="content">
        <Navbar />

        <main>
          <Hero />
          <HowItWorks />

          <section id="get-started" className="cta-section">
            <span className="cta-doodle">ready?</span>

            <h2>
              Stop wondering.
              <br />
              Know what to do.
            </h2>

            <a href="#" className="primary-button">
              Get Tody
            </a>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}