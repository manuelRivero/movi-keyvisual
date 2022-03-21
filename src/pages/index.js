import * as React from "react";
import Features from "../components/features";
import Hero from "../components/hero";
import HowItsWorks from "../components/howItWorks";
import Layout from "../components/layout";
import PaymentInfo from "../components/paymentInfo";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <main className="">
        <Hero/>
        <PaymentInfo />
        <Features />
        <HowItsWorks />
      </main>
    </Layout>
  );
};

export default IndexPage;
