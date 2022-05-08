//Base Imports
import React from 'react';

//Style
import BannerStyle from './BannerStyle';

//Components
import BannerSection from './Section/Section';
import BannerImage from './Image/Image'


//Banner
export default function Banner() {

  const style = BannerStyle()

  return(
    <section className={ style.Container }>
      <section id="Banner" className={ style.Banner }>

        <BannerSection />

        <BannerImage />

      </section>
    </section>
  )
} 