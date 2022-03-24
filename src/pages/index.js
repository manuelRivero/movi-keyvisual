import * as React from "react";
import { Helmet } from "react-helmet";
import AboutSubscription from "../components/aboutSubscription";
import Faq from "../components/faq";
import Features from "../components/features";
import Hero from "../components/hero";
import HowItsWorks from "../components/howItWorks";
import Layout from "../components/layout";
import PaymentInfo from "../components/paymentInfo";
import logo from "../assets/images/layout/logo-black.png";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Movi</title>
        <meta
          name="description"
          content=" La suscripción automotriz más accesible y flexible del mercado, sin
            pago inicial y con opcíon a compra. Obten tu auto en 5 minutos y
            totalmente en línea."
        />
        <meta name="twitter:card" content="summary_large_image" data-react-helmet="true"/>

        <meta name="og:image" content={logo}/>
      </Helmet>
      <main className="">
        <Hero />
        <PaymentInfo />
        <Features />
        <HowItsWorks />
        <AboutSubscription />
        <Faq />
      </main>
    </Layout>
  );
};

export default IndexPage;
