import * as React from "react";
import { Helmet } from "react-helmet";
import AboutSubscription from "../components/aboutSubscription";
import Faq from "../components/faq";
import Features from "../components/features";
import Hero from "../components/hero";
import HowItsWorks from "../components/howItWorks";
import Layout from "../components/layout";
import PaymentInfo from "../components/paymentInfo";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
      <title>Movi</title>
        <meta name="description" content="Aplicación para movi" />
      </Helmet>
      <main className="">
        <Hero/>
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
