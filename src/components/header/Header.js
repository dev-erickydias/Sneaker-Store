import "./header.css";
import logo from "../../image/logo.png";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <p className="navParagraph">Frete grátis para todo o Brasil</p>
      </nav>
      <section className="hero">
        <img src={logo} className="heroLogo" alt="jogador jhordan fazendo uma sexta"/>
        <div className="heroTexts">
          <h2 className="HeroTitle">A melhor loja de Jordan</h2>
          <p className="HeroParagraph">
            O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e
            o jogador Michael Jordan.
          </p>
        </div>
      </section>
    </header>
  );
}

export default Header;
