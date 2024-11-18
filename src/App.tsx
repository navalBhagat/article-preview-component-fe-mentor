import { useState } from "react";
import "./App.css";
import { ShareIcon } from "./icons";

function App() {
  const [showSocials, setShowSocials] = useState<boolean>(false);
  return (
    <main className="card">
      <img src="/images/drawers.jpg" />
      <article className="content">
        <h1>
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h1>
        <p>
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I've got some simple tips to help
          you make any room feel complete.
        </p>
        <div className="author-socials">
          <div className="author">
            <img alt="author avatar" src="images/avatar-michelle.jpg" />
            <div className="name-date">
              <span className="name">Michelle Appleton</span>
              <span className="date">28 Jun 2020</span>
            </div>
          </div>
          <button
            className={`show-socials ${showSocials ? "opened" : ""}`}
            onClick={() => setShowSocials((prev) => !prev)}
          >
            <ShareIcon />
          </button>
        </div>
        {showSocials && (
          <div className="social-shares">
            <span className="share">SHARE</span>
            <img alt="facebook" src="/images/icon-facebook.svg" />
            <img alt="twitter" src="/images/icon-twitter.svg" />
            <img alt="pinterest" src="/images/icon-pinterest.svg" />
          </div>
        )}
      </article>
    </main>
  );
}

export default App;
