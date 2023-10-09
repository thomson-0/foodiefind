import React, { useEffect } from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/dist/css/themes/splide-default.min.css"; // Import the correct CSS

function Hero() {
  useEffect(() => {
    new Splide('#splide', {
      perPage: 1,
      rewind: true,
      gap: '1rem',
    }).mount();
  }, []);

  return (
    <div className='container'>
      <div className="grid gap-4 grid-cols-2">
        <div>
          <div id="splide" className="splide">
            <div className="splide__track">
              <ul className="splide__list">
                <SplideSlide>
                  <div className="insightSliderItem">
                    <span className="smallText">Podcasts</span>
                    <h2>
                      Living <span className="blueText"><br />Beyond Borders</span>
                    </h2>
                    <p>
                      GZERO Media and Citi Global Wealth Investments are pleased to present “Living Beyond
                      Borders,” a special-edition podcast series, as well as articles and graphics that examine
                      how our lives change as the world changes
                    </p>
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="insightSliderItem">
                    <span className="smallText">Podcasts</span>
                    <h2>
                      The economic <span className="blueText"><br />power of women</span>
                    </h2>
                    <p>
                      In the latest episode of "Living Beyond Borders," we indulge in a candid conversation
                      about the reasons why increased participation of women in the workforce and in leadership
                      creates greater growth for companies and economies
                    </p>
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="insightSliderItem">
                    <span className="smallText">Podcasts</span>
                    <h2>
                      Should I <span className="blueText"><br />​STILL be worried?</span>
                    </h2>
                    <p>
                      In this episode of “Living Beyond Borders,” we’re asking once again just how worried
                      investors and citizens need to be in the face of an ongoing conflict in Europe, rising
                      interest rates and inflation, and more global shifts
                    </p>
                  </div>
                </SplideSlide>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <img src="https://www.citibank.co.uk/gwm/images/podcast-banner.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
