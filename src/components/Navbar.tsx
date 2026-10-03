export default function Navbar() {
  return (
    <header className="navbar">
      <a href="/" className="brand">
        Tody
      </a>

      <nav className="nav-links">
        <a href="#how-it-works">How it works</a>
        <a href="/privacy">Privacy</a>
        <a href="#get-started" className="nav-cta">
          Get Tody
        </a>
      </nav>
    </header>
  );
}