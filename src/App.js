import laptop from "./laptop.png";
import mobile from "./mobile.png";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <div className="container">
          <div className="logo">
            <a href="https://www.wix.com" className="logoWix">
              <span>WIX</span>
            </a>
            <img src={laptop} className="img" alt="laptop" />
            <span>|</span>
            <img src={mobile} className="img" alt="laptop" />
          </div>
          <div className="right">
            <p>Нажмите Редактировать, чтобы создать ваш сайт!</p>
            <a href="htps://www.wix.com" className="more">
              Подробнее
            </a>
            <button className="btn1">Редактировать</button>
          </div>
        </div>
      </header>
      <section>
        <div className="landing">
          <div className="icons">
            <a href="https://www.twitter.com/wix">
              <img
                src="https://static.wixstatic.com/media/c4392d634a0148fda8b7b2b0ad98293b.png/v1/fill/w_38,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c4392d634a0148fda8b7b2b0ad98293b.png"
                alt="twitter"
              ></img>
            </a>
            <a href="https://www.facebook.com/wix">
              <img
                src="https://static.wixstatic.com/media/e0678ef25486466ba65ef6ad47b559e1.png/v1/fill/w_38,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e0678ef25486466ba65ef6ad47b559e1.png"
                alt="facebook"
              ></img>
            </a>
          </div>
          <nav>
            <div className="logotip">
              <h2>K. Griffith</h2>
            </div>
            <div>
              <ul className="lists">
                <li>
                  <a
                    className="alists"
                    href="https://www.wix.com/demone2/k-griffith"
                  >
                    APPEARANCES
                  </a>
                </li>
                <li>
                  <a
                    className="alists"
                    href="https://www.wix.com/demone2/k-griffith/books"
                  >
                    BOOKS
                  </a>
                </li>
                <li>
                  <a
                    className="alists"
                    href="https://www.wix.com/demone2/k-griffith/blog"
                  >
                    NEWS
                  </a>
                </li>
                <li>
                  <a
                    className="alists"
                    href="https://www.wix.com/demone2/k-griffith/about"
                  >
                    ABOUT
                  </a>
                </li>
                <li>
                  <a
                    className="alists"
                    href="https://www.wix.com/demone2/k-griffith/contact"
                  >
                    CONTACT
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div>
            <span className="line"></span>
          </div>
          <div className="author">
            <div>
              <img
                className="author-img"
                src="https://static.wixstatic.com/media/ad420a_ca05081d4ece492fb6589c81baee1091~mv2.jpg/v1/crop/x_1416,y_0,w_3091,h_3414/fill/w_357,h_395,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-11967148821.jpg"
                alt="01"
              />
            </div>
            <div className="kayla-title">
              <span className="kayla-g">Kayla Griffith</span>
              <p>Award Winning Author</p>
            </div>
          </div>
        </div>
        <div className="main">
          <div className="box">
            <span className="lenta">New Release</span>
            <span className="sqr"></span>
            <div className="left-box">
              <h2>The Swan Isle (2023)</h2>
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                It's easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. I'm a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>
              <h3>Order Now</h3>
              <div className="btns">
                <a
                  href="https://www.wix.com/templateslp/links"
                  className="boxBtn"
                >
                  Amazon
                </a>
                <a
                  href="https://www.wix.com/templateslp/links"
                  className="boxBtn"
                >
                  Google
                </a>
                <a
                  href="https://www.wix.com/templateslp/links"
                  className="boxBtn"
                >
                  ibooks
                </a>
              </div>
            </div>
            <div className="right-box">
              <img
                className="boxImg"
                src="https://static.wixstatic.com/media/ad420a_ac6bbfd46dbe4c83a234221d29d67791~mv2.png/v1/fill/w_578,h_815,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Screen%20Shot%202021-02-07%20at%209_24_47.png"
                alt="2"
              />
            </div>
          </div>
        </div>
      </section>
      <main>
        <div className="block">
          <span className="verticalLenta"></span>
          <span className="sqr1"></span>
          <h4>Praise & Reviews</h4>
          <div className="blocks">
            <div>
              <span>
                <img
                  className="quote"
                  src="https://blog.lingo24.com/wp-content/uploads/orange-quotation-marks-png-7-1030x773.png"
                  alt="3"
                ></img>
              </span>
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                It's easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. I'm a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>
              <p className="coralParag">
                'Swan Isle' is Griffith's best writing yet” The Times Book
                Review
              </p>
              <div className="lLine"></div>
            </div>
            <div>
              <span>
                <img
                  className="quote"
                  src="https://blog.lingo24.com/wp-content/uploads/orange-quotation-marks-png-7-1030x773.png"
                  alt="3"
                ></img>
              </span>
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                It's easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. I'm a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>
              <p className="coralParag">
                'Gripping storytelling' The Good Read Blog
              </p>
              <div className="lLine"></div>
            </div>
            <div>
              <span>
                <img
                  className="quote"
                  src="https://blog.lingo24.com/wp-content/uploads/orange-quotation-marks-png-7-1030x773.png"
                  alt="3"
                ></img>
              </span>
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                It's easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. I'm a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>
              <p className="coralParag">
                Grifith's voice tells the story of all women “The Seattle Post
                Review”
              </p>
              <div className="lLine"></div>
            </div>
          </div>
        </div>
      </main>
      <div className="bottom">
        <div className="bottomTitle">
          <h2>See Upcoming Appearances</h2>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It's
            easy.
          </p>
        </div>
        <div className="box1">
          <p>
            January 18th 2023, The Breakfast Club, Virtual Book Reading of Swan
            Isle, 7PM - 8PM EST
          </p>
          <a
            className="boxBtn"
            href="https://www.wix.com/templateslp/links"
            style={{ padding: "10px 70px" }}
          >
            Join
          </a>
        </div>
        <div className="box1">
          <p>
            January 31st 2023, The Good Read Club, Online Conversation with
            Kayla Griffith, 8PM - 9PM EST
          </p>
          <a
            className="boxBtn"
            href="https://www.wix.com/templateslp/links"
            style={{ padding: "10px 70px" }}
          >
            Join
          </a>
        </div>
        <div className="box1">
          <p>
            March 2nd 2023, Otto Cafe, Online Book Reading With Kayla Griffith,
            3PM - 4PM EST
          </p>
          <a
            className="boxBtn"
            href="https://www.wix.com/templateslp/links"
            style={{ padding: "10px 70px" }}
          >
            Join
          </a>
        </div>
        <div className="box2">
          <span className="verticalLenta"></span>
          <span className="sqr2"></span>
          <div>
            <img
              src="https://static.wixstatic.com/media/ad420a_3b0ac18b8f8c44e6968cf137c044b3b4~mv2.jpg/v1/crop/x_1678,y_0,w_3414,h_3414/fill/w_266,h_266,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-11967148791.jpg"
              className="author-img2"
              alt="4"
            />
            <h1>About Kayla Griffith</h1>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
            <a
              className="boxBtn"
              href="https://www.wix.com/demone2/k-griffith/about"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
      <footer>
        © 2023 by K.Griffith. Proudly created with{" "}
        <a href="www.wix.com">Wix.com</a>
      </footer>
    </div>
  );
}

export default App;
