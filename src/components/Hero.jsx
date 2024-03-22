const HeroSection = () => {
    return (
      <main className="hero container">
        <div className="hero-content">
          <h1>Feel the Unreal</h1>
          <h2>AIR MAX DX</h2>
          <p>
            
          </p>
  
          <div className="hero-btn">
            <button>Shop Now </button>
            <button className="secondary-btn">Category</button>
          </div>
  
          <div className="shopping">
            <p>Also Available On</p>
  
            <div className="brand-icons">
              <img src="/images/amazon.png" alt="amazon-logo" />
              <img src="/images/flipkart.png" alt="flipkart-logo" />
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src='/images/shoe_image.png' alt="hero-image" />
        </div>
      </main>
    );
  };
  
  export default HeroSection;