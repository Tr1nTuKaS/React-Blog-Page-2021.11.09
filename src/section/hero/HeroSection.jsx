import css from './HeroSection.module.css'
import heroImage from '../../assets/hero.png'
import Button from './../../component/button/Button';

function HeroSecion() {
  return (
    <section
      style={{ backgroundImage: `url(${heroImage})` }}
      className={css.section}
    >
      <div className={css.center}>
        <h1>Welcome to our Page</h1>
        <p>Read our blog</p>
        <div className={css.ctrl}>
          <Button>btn1</Button>
          <Button>btn2</Button>
        </div>
      </div>
    </section>
  );
}
  
  export default HeroSecion;