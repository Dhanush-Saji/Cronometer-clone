import styles from "./Home.css";
function Home() {
  return (
    <div className="home">
      <div className="eatSmarter">
        <div className="eatSmarterText">
          <div className="eatSmarterTextH2">
            <h2>Eat smarter.</h2>
            <h2>Live better.</h2>
          </div>
          <h4>Track your calories, exercise, biometrics and health data.</h4>
          <button className="eatSmarterSignup">Sign Up - It's Free!</button>
          <p>
            Already have an account?<span>Log in.</span>
          </p>
        </div>
        <img
          className="eatSmarterImage"
          src="https://cdn1.cronometer.com/2021/landing/cronometer-hero-graphic.svg"
          alt="error"
        />
      </div>
      <img
        className="eatSmarterImage2"
        src="https://cdn1.cronometer.com/2021/landing/cronometer-mobile-hero-graphic.svg"
        alt="error"
      />
      <div className="asSeenOn">
        <p>As Seen On</p>
        <div className="asSeenOnImage">
          <img
            src="https://cdn1.cronometer.com/2021/landing/media-mention-2.svg"
            alt="error"
          />
          <img
            src="https://cdn1.cronometer.com/2021/landing/media-mention-1.svg"
            alt="error"
          />
          <img
            src="https://cdn1.cronometer.com/2021/landing/media-mention-3.svg"
            alt="error"
          />
        </div>
        <p>Available on Web, iOS and Android</p>
        <div className="asSeenOnPlay">
          <img
            src="https://cdn1.cronometer.com/2021/landing/ios-icon.svg"
            alt="error"
          />
          <img
            src="https://cdn1.cronometer.com/2021/landing/android-icon.svg"
            alt="error"
          />
        </div>
      </div>
      <div className="discover">
        <h3>Discover your nutrition</h3>
        <h5>
          Cronometer encourages you to not just count your calories but to focus
          on your nutrition as a whole.
        </h5>
        <div className="discoverGrid">
          <div>
            <img
              src="https://cdn1.cronometer.com/2021/landing/community-icon.svg"
              alt="error"
            />
            <h5>Over 5 million users</h5>
            <p>
              Join the community to get tips and inspiration from other users on
              our forums and Facebook group.
            </p>
          </div>
          <div>
            <img
              src="https://cdn1.cronometer.com/2021/landing/nutrition-icon.svg"
              alt="error"
            />
            <h5>Accurate nutrition data</h5>
            <p>
              Be confident that the food you log has the correct nutrition data.
              We verify every food submission for accuracy.
            </p>
          </div>
          <div>
            <img
              src="https://cdn1.cronometer.com/2021/landing/security-icon.svg"
              alt="error"
            />
            <h5>Data privacy & security</h5>
            <p>
              We take the security of our users' accounts seriously - we will
              never sell your account data to third parties.
            </p>
          </div>
        </div>
      </div>
      <div className="develop">
        <h3>Develop healthy habits</h3>
        <h5>
          Count your calories, ensure you're meeting nutrient targets, and see
          your progress over time.
        </h5>
        <div className="developGrid">
          <div>
            <img
              src="https://cdn1.cronometer.com/2021/landing/micronutrients-icon.svg"
              alt="error"
            />
            <h5>Track up to 82 micronutrients</h5>
            <p>Log your meals and track all your macro and micronutrients.</p>
          </div>
          <div>
            <img
              src="https://cdn1.cronometer.com/2021/landing/diary-icon.svg"
              alt="error"
            />
            <h5>Log meals, exercise and biometrics</h5>
            <p>
              Plus, you can create custom foods, recipes, exercises and
              biometrics!
            </p>
          </div>
          <div>
            <img
              src="https://cdn1.cronometer.com/2021/landing/reports-icon.svg"
              alt="error"
            />
            <h5>Valuable reports and charts</h5>
            <p>Learn how nutrients and biometrics correlate over time.</p>
          </div>
          <div>
            <img
              src="https://cdn1.cronometer.com/2021/landing/scale-icon.svg"
              alt="error"
            />
            <h5>Custom diet settings</h5>
            <p>Set weight, macro & nutrient targets to meet your goals.</p>
          </div>
          <div>
            <img
              src="https://cdn1.cronometer.com/2021/landing/fasting-icon.svg"
              alt="error"
            />
            <h5>Fasting timer</h5>
            <p>Track your intermittent fasts and see their effect over time.</p>
          </div>
          <div>
            <img
              src="https://cdn1.cronometer.com/2021/landing/food-icon.svg"
              alt="error"
            />
            <h5>Diet support</h5>
            <p>
              Whether you’re Keto, Vegan, or on one recommended by your doctor.
            </p>
          </div>
        </div>
      </div>
      <div className="signupBanner">
        <h4>
          Find out if you're getting the vitamins and minerals you need with our
          food diary app.
        </h4>
        <button className="eatSmarterSignup">Sign Up - It's Free!</button>
      </div>
      <div className="syncApp">
        <h3>Sync with Apps and Devices</h3>
        <h5>
          Sync Cronometer with these activity trackers, Apple Health, Google Fit
          and Samsung Health.
        </h5>
        <img
          className="syncAppImage"
          src="https://cdn1.cronometer.com/2021/landing/devices-p-1080.png"
          alt="error"
        />
        <div className="syncAppImage2">
          <img
            src="https://cdn1.cronometer.com/2021/landing/mob-device-integrations-3.png"
            alt="error"
          />
          <img
            src="https://cdn1.cronometer.com/2021/landing/mob-device-integrations-1.png"
            alt="error"
          />
          <img
            src="https://cdn1.cronometer.com/2021/landing/mob-device-integrations-2.png"
            alt="error"
          />
        </div>
      </div>
      <hr />
      <div className="cronometer">
        <h3>Cronometer Reviews</h3>
        <h5>Check us out in your app store.</h5>
        <div className="cronometerGrid">
          <div>
            <div className="gridImage">
              <img
                src="https://cdn1.cronometer.com/2021/landing/quote-icon.svg"
                alt="error"
              />
              <h4>
                I wasn't the only one concerned about the unreliability of the
                macros in both MyFitnessPal and Carb Manager.
              </h4>
              <a
                className="cronometerGridAppleGooglelink"
                href="https://apps.apple.com/app/cronometer-nutrition-tracker/id1145935738"
              >
                <img
                  className="cronometerGridAppleGoogle"
                  src="https://cdn1.cronometer.com/2021/landing/ios-icon.svg"
                  alt="error"
                />
              </a>
            </div>
            <div className="gridText">
              <p>
                I started Keto in July. MyFitnessPal seemed pretty cool. Spent
                hours setting it up and entering recipes only to discover the
                macros were not reliable due to all the contributions by the
                community. I was so frustrated. Then I found a review of several
                apps (on the Keto Mojo website) and discovered I wasn't the only
                one concerned about unreliability of the macros on both MFP and
                CarbManager (tried that too). Behold Cronometer! I love this
                app. It draws from nutrition databases with minimal community
                contributions so much, much more reliability. There are many
                more free features. The user interface is easy to navigate. I'm
                very happy with Cronometer.
              </p>
              <p>
                iOS Review <br />
                September 23, 2019
              </p>
            </div>
            <a
              className="cronometerGridAppleGooglelinkHide"
              href="https://apps.apple.com/app/cronometer-nutrition-tracker/id1145935738"
            >
              <img
                className="cronometerGridAppleGoogle"
                src="https://cdn1.cronometer.com/2021/landing/ios-icon.svg"
                alt="error"
              />
            </a>
          </div>
          <div>
            <img
              className="crmImg"
              src="https://cdn1.cronometer.com/2021/landing/quote-icon.svg"
              alt="error"
            />
            <h4 className="crmText crmTexthide">
              Cronometer tracks EVERYTHING! ... It's easy to use and links with
              my FitBit.
            </h4>
            <div className="gridText">
              <p>
                This app is my dream! I've been on the hunt for something that
                can track my daily nutritional needs and the majority of apps
                seem to think that only means macros. This tracks EVERYTHING!
                Getting my daily vitamins through food is so important to me and
                this has taken a HUGE load off of my plate. I bought gold within
                minutes. This is set up great, easy to use, links with my
                FitBit. I could go on and on.
              </p>
              <p>
                Android Review <br />
                November 23, 2020
              </p>
            </div>
            <div className="gridImage">
              <img
                className="crmHide"
                src="https://cdn1.cronometer.com/2021/landing/quote-icon.svg"
                alt="error"
              />
              <h4 className="crmHide">
                Cronometer tracks EVERYTHING! ... It's easy to use and links
                with my FitBit.
              </h4>
              <a href="https://play.google.com/store/apps/details?id=com.cronometer.android.gold&hl=en_CA">
                <img
                  className="cronometerGridAppleGoogle"
                  src="https://cdn1.cronometer.com/2021/landing/android-icon.svg"
                  alt="error"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="cronoBanner">
        <div>
          <img
            className="cronoMan"
            src="https://cdn1.cronometer.com/2021/landing/crono-pro-graphic.svg"
            alt="error"
          />
        </div>
        <div>
          <img
            src="https://cdn1.cronometer.com/2021/landing/cronometer-pro-logo.svg"
            alt="error"
          />
        </div>
        <div>
          <strong>Are you a healthcare professional?</strong>
          <h5>
            Check out our software designed for nutritionists, dietitians,
            research teams, schools, and hospitals.
          </h5>
          <button className="learnButton">Learn About Pro</button>
        </div>
      </div>
      <div className="canadian">
        <h3>We are Canadian</h3>
        <h5>
          Independently owned and operated by people who care about their users'
          nutrition.
        </h5>
        <img
          src="https://cdn1.cronometer.com/2021/landing/cronometer-staff-2-p-1080.jpeg"
          alt="error"
        />
        <p>
          Our headquarters are based in the idyllic mountain town of Revelstoke,
          BC, Canada. We are a team of over 25 professionals brought together by
          a love of nutrition, skiing, biking and the great outdoors.
        </p>
        <button className="learnButton">About Us</button>
        <hr />
        <h5>
          Help us spread the good word about nutrition and become an affiliate.
        </h5>
        <button className="learnButton">Become an Affiliate</button>
      </div>
      <div className="homefooter">
        <div className="social">
          <img
            src="https://cdn1.cronometer.com/2021/landing/social_instagram-icon.png"
            alt="error"
          />
          <img
            src="https://cdn1.cronometer.com/2021/landing/social_facebook-icon.png"
            alt="error"
          />
          <img
            src="https://cdn1.cronometer.com/2021/landing/social_twitter-icon.png"
            alt="error"
          />
          <img
            src="https://cdn1.cronometer.com/2021/landing/social_youtube-icon.png"
            alt="error"
          />
        </div>
        <div className="playstore">
            <a
              className="cronometerGridAppleGooglelink"
              href="https://apps.apple.com/app/cronometer-nutrition-tracker/id1145935738"
            >
              <img
                className="cronometerGridAppleGoogle"
                src="https://cdn1.cronometer.com/2021/landing/ios-icon.svg"
                alt="error"
              />
            </a>
            <a
              className="cronometerGridAppleGooglelink"
              href="https://apps.apple.com/app/cronometer-nutrition-tracker/id1145935738"
            >
              <img
                className="cronometerGridAppleGoogle"
                src="https://cdn1.cronometer.com/2021/landing/android-icon.svg"
                alt="error"
              />
            </a>
          </div>
          <hr />
          <div className="footerLink">
            <img src="https://cdn1.cronometer.com/2021/landing/crono-logo-white.svg" alt="error" />
            <div>
                <p>Cronometer</p>
                <a href="/">For Individuals</a>
                <a href="/">For Professionals</a>
                <a href="/">Privacy</a>
                <a href="/">Terms</a>
            </div>
            <div>
                <p>Cronometer</p>
                <a href="/">For Individuals</a>
                <a href="/">For Professionals</a>
                <a href="/">Privacy</a>
                <a href="/">Terms</a>
            </div>
            <div>
                <p>Cronometer</p>
                <a href="/">For Individuals</a>
                <a href="/">For Professionals</a>
                <a href="/">Privacy</a>
                <a href="/">Terms</a>
            </div>
          </div>
          <div className="copyright">

          <p>Copyright © 2011-2022</p>
          <p>All rights reserved</p>
          </div>
      </div>
    </div>
  );
}
export default Home;
