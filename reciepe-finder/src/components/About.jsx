import "./styles/About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-card">
        <h2>About Recipe Finder 🍽️</h2>

        <p>
          Recipe Finder is a React-based web application that helps you
          discover delicious recipes from around the world.
        </p>

        <div className="features">
          <div className="feature">
            🔍
            <h4>Easy Search</h4>
            <p>Search recipes instantly by name.</p>
          </div>

          <div className="feature">
            🍗
            <h4>Categories</h4>
            <p>Explore Chicken, Soup and many more recipes.</p>
          </div>

          <div className="feature">
            🌙
            <h4>Dark Mode</h4>
            <p>Switch between Light and Dark themes.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;