import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

export const About_us = () => {
  return (
    <div>
      <div className="mainaboutdiv">
        <h1>ABOUT US</h1>

        <div className="aboutthisweb">
          <p>Lyst is a fashion technology company, and premium shopping app.</p>
          <p>
            For over 160 million annual shoppers, we offer the most
            comprehensive range of products from 17,000 of the world’s leading
            brands and stores.
          </p>
          <p>
            For brands and stores, our goal is to power success online. We drive
            meaningful direct sales within a highly trusted brand environment.
          </p>
        </div>

        <div className="aboutacchive">
          <div className="aboutacchive1"></div>
          <div className="aboutacchive2"></div>
          <div className="aboutacchive3"></div>
        </div>

        <div className="about2">
          <div className="aboutacchivediv1">
            <h2>8,000,000+</h2>
            <p>
              Products can be discovered and bought through the Lyst website and
              app.
            </p>
          </div>
          <div className="aboutacchivediv2">
            <h2>#1</h2>
            <p>
              The <Link to={""}> Lyst app</Link> is the most downloaded premium
              fashion iOS app globally*.
            </p>
            <p className="appannidata">*App Annie data, Sep 2021</p>
          </div>

          <div className="aboutacchivediv3">
            <h2>$2BN</h2>
            <p>Lifetime GMV now exceeds $2bn USD.</p>
          </div>
        </div>
      </div>

      <div className="fashionimg">
        <img
          src="https://cdna.lystit.com/cms/ENG_header_XL_9f9e2af236_615828663f.jpg"
          alt=""
        />
      </div>

      <div className="writing">
        <p>
          Lyst operates an inventory free platform, and uses a proprietary data
          engine to provide each customer with a highly personalised shopping
          experience. Orders are fulfilled by the thousands of brands and stores
          which partner with Lyst.
        </p>

        <p>
          Brands available on Lyst include Balenciaga, Balmain, Bottega Veneta,
          Burberry, Fendi, Gucci, Moncler, Off-White, Prada, Saint Laurent and
          Valentino.
        </p>

        <p>
          We’re a mix of fashion lovers, technologists and data experts. Two
          thirds of Lyst talent are engineers, scientists and product people.
          We’re focused on ways technology can delight both our customers and
          our brand & store partners.
        </p>

        <p>
          Lyst is also a unique source of fashion data insights, and is
          responsible for The Lyst Index, the industry leading report of the
          hottest brands and products worldwide.
        </p>

        <p>
          Lyst was founded in London in 2010, and is backed by investors
          including certain funds managed by Fidelity International, C4
          Ventures, Draper Esprit, Steadfast Financial, Balderton Capital and
          LVMH.
        </p>
      </div>

      <div className="fashiontalent">
        <div className="fash">
          <div className="fashbox1">
            <Link className="fashlink" to={""}>
              Fashion data insights
            </Link>
          </div>
          <div className="fashbox2">→</div>
        </div>

        <div className="fash">
          <div className="fashbox1">
            <Link className="fashlink" to={""}>
              Lyst talent
            </Link>
          </div>
          <div className="fashbox2">→</div>
        </div>
      </div>

      <div className="presscovergaemaindiv">
        <div className="presscovergaeinnerdiv">
          <h2>PRESS COVERAGE</h2>

          <div className="pressthree">
            <div className="techcrunch">
              <div className="tech1">TechCrunch</div>
              <div className="tech2">→</div>
            </div>

            <div className="techcrunch">
              <div className="tech1">New York Times</div>
              <div className="tech2">→</div>
            </div>

            <div className="techcrunch">
              <div className="tech1">WWD</div>
              <div className="tech2">→</div>
            </div>
          </div>

          <div className="uk_vinted_raises">
            <div className="uk">
              <div className="ukfashion">
                <Link className="ukfas" to={""}>
                  UK fashion portal Lyst
                </Link>
              </div>

              <Link className="ukfas" to={""}>
                {" "}
                raises $85M in a 'pre-IP...
              </Link>
            </div>

            <div className="vi">
              <div className="vinted">
                <Link className="vin" to={""}>
                  Vinted and Lyst attract
                </Link>
              </div>

              <Link className="vin" to={""}>
                {" "}
                investors on growing...
              </Link>
            </div>

            <div className="ra">
              <div className="raises">
                <Link className="raise" to={""}>
                  Lyst raises $85 Million
                </Link>
              </div>

              <Link className="raise" to={""}>
                {" "}
                ahead of a potential IPO
              </Link>
            </div>
          </div>

          {/* <div className="business"> */}

          <div className="presstwo">
            <div className="presstwo1">
              <div className="busfas">Business of Fashion</div>
              <div className="busfas1">→</div>
            </div>

            <div className="presstwo1">
              <div className="busfas">Vogue Business</div>
              <div className="busfas1">→</div>
            </div>
          </div>

          <div className="fashionvogue">
            <div className="invest">
              <div className="investors1">
                <Link className="investors" to={""}>
                  Why investors are betting
                </Link>
              </div>
              <Link className="investors1" to={""}>
                on Lyst
              </Link>
            </div>

            <div className="vogue">
              <div className="voguebusiness1">
                <Link className="voguebusiness" to={""}>
                  The fight for fashion app
                </Link>
              </div>
              <Link className="voguebusiness1" to={""}>
                dominance heats up wit...
              </Link>
            </div>
          </div>
        </div>

        <div className="linkdindiv">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv8BJv-i05oUJ6QMB1QLUcg31KJh6DLrt_J5VPcSE&usqp=CAU"
            alt=""
          />

          <Link className="linkdinlink" to={""}>
            Follow us on Linkdin
          </Link>
        </div>
      </div>

      <div className="discovermorediv">
        <h2>DISCOVER MORE</h2>

        <div className="dismoresidiv">
          <div className="dismodiv">
            <div className="brands">
              <Link className="linkbrans" to={""}>
                Lyst for brands & stores
              </Link>
              <div className="arrow1">→</div>
            </div>
            <p>Be part of the future of fashion commerce</p>

          </div>

          <div className="dismodiv">
            <div className="brands">
              <Link className="linkbrans" to={""}>
                Lyst insights
              </Link>
              <div className="arrow2">→</div>
            </div>
            <p>A unique source of global and local fashion intelligence</p>

          </div>

          <div className="dismodiv">
            <div className="brands">
              <Link className="linkbrans" to={""}>
                The Lyst app
              </Link>
              <div className="arrow2">→</div>
            </div>
            <p>All your fashion needs in one app</p>

          </div>
        </div>

        <div className="dismoresidiv1">
          <div className="dismodiv">
          <div className="brands">
              <Link className="linkbrans" to={""}>
                Careers
              </Link>
              <div className="arrow2">→</div>
            </div>
            <p className="detail"> if you can bring something unique to the team, get in touch</p>


          </div>
          <div className="dismodiv">

          <div className="brands">
              <Link className="linkbrans" to={""}>
                The Blog
              </Link>
              <div className="arrow2">→</div>
            </div>
            <p className="detail">A peek into tech and design at Lyst</p>

          </div>
          <div className="dismodiv">

          <div className="brands">
              <Link  className="linkbrans" to={""}>
               Contact us
              </Link>
              <div className="arrow2">→</div>
            </div>
            <p className="detail"> Our team is here to help with any enquiry you might have </p>

          </div>
        </div>
      </div>
    </div>
  );
};
