import React, { useEffect } from "react";
import About from "../../components/About/About";
import Banner_Info from "../../components/Banner_Info/Banner_Info";
import Banner_Video from "../../components/Banner_Video/Banner_Video";
import CardList from "../../components/CardList/CardList";
import Carousel from "../../components/Carousel/Carousel";
import Customers from "../../components/Customers/Customers";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Promises from "../../components/Promise/Promise";
import Services from "../../components/Services/Services";

function HomePage() {
  const initFacebookSDK = async () => {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
    let locale = "vi_VN";
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: process.env.REACT_APP_FACEBOOK_APP_ID,
        cookie: true, // enable cookies to allow the server to access
        // the session
        xfbml: true, // parse social plugins on this page
        version: "v2.5", // use version 2.1
      });
    };
    // Load the SDK asynchronously
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = `//connect.facebook.net/${locale}/sdk.js`;
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
    window.ahachatCustomerPluginData = {
      fb_id: "116941284660054",
      bot_id: 69395117,
      rule_id: 3074445,
      name: "Khanz",
      ref: "customer_chat_NRUwcnvpqb6416746836344",
      invitation: "This is your invitation to chat.",
      theme_color: "#0A7CFF",
      greeting_dialog_display: "hide",
      greeting_dialog_delay: 0,
      growth_tools_id: 1448006,
      fb_app_id: "170005996917513",
      languageCode: "vi_VN",
      CDN_URL: "https://ahachat.com/",
    };
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src =
        "https://ahachat.com//libs/customerchat.v2.js?" +
        Math.round((+new Date() / 1000) * 600);
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "ahachat-livehat-widget");
  };
  useEffect(() => {
    console.log("1");
    initFacebookSDK();
  }, []);
  return (
    <div className="homePage">
      <Navbar />
      <Carousel />
      <About />
      <Promises />
      <CardList />
      <Services />
      <Customers />
      <Banner_Video />
      <Banner_Info />
      <Footer />
    </div>
  );
}

export default HomePage;
