import React from 'react';
import HomeExplanation from "./HomeExplanation";
import BackToTop from "../reuse/BackToTop"
import HomeFeature from './HomeFeature'
import Testimonial from './Testimonial'
import TrustedCompanies from './TrustedCompanies'
import Counter from "../reuse/Counter"

const Home = () => {
  return (
    <div>
      <HomeExplanation />
      <HomeFeature />
      <Testimonial />
      <TrustedCompanies />
      <Counter/>
      <BackToTop />
    </div>
  );
};

export default Home;
