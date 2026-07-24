import "./styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h2>🍽️ Recipe Finder</h2>

      <p>
        Discover delicious recipes from around the world.
      </p>

      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#recipes">Recipes</a>
        <a href="#about">About</a>
      </div>

      <hr />

      <p className="copyright">
        Made with ❤️ by <strong>Geethika</strong>
      </p>

      <p>© 2026 Recipe Finder. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
