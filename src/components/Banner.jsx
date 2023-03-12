import React, { useEffect } from 'react';
import Button from './Button';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Banner( {align, header, btnText, btnLink, btnColor, paragraph, pColor, img, imgAlt, imgOverlay, imgOverlayHeight, imgOverlayWidth, bgColor, bannerHeight} ) {
  // Animations
  useEffect(() => {
    AOS.init({
      duration: 500
    });
  }, [])

  const imgBg = {
        backgroundImage: `url(${img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
    }

  const imgBgCenter = {
      backgroundImage: `url(${img})`,
      backgroundPosition: "right",
      backgroundSize: "160%",
      backgroundRepeat: "no-repeat"
  }
    
    if (align !== "center")
    return (
        <section className='banner' aria-label={header}>
            <div className={`lg:${bannerHeight} flex flex-col lg:flex-row justify-center items-center gap-24 ${bgColor} ` + ((align === 'left' && 'lg:pr-32') || (align === 'right' && 'flex-row-reverse lg:pl-32') || (align === 'center' && 'flex-wrap'))}>
                {align !== 'center' && 
                    <div
                      className={`${bannerHeight} w-full lg:w-[60vw]`}
                      style={imgBg}
                      role="img" aria-label={`[${imgAlt}]`}
                    >
                    </div>
                }

                <div className='w-full lg:w-[50%] flex flex-col gap-10 pb-36 lg:pb-0 px-12 lg:px-0' data-aos="fade-up">
                    <div>          
                        <h3 className='text-4xl uppercase font-spaceMedium mb-3'>{header}</h3>
                        <p className={`${pColor} leading-relaxed`}>{paragraph}</p>
                    </div>  
                    <Button className='mt-10' buttonColor={btnColor} btnText={btnText} link={btnLink}/>
                </div>
            </div>
        </section>
    )

    if (align === "center")
    return (
        <section className='banner md:py-56 lg:px-12' style={imgBgCenter} aria-label={header}>
            <div className={`lg:${bannerHeight} flex flex-col lg:flex-row justify-end gap-24 ${bgColor} lg:bg-transparent`}>
                <div
                  className={`${bannerHeight} w-full lg:hidden`}
                  style={imgBg}
                  role="img" aria-label={`[${imgAlt}]`}
                >
                </div>

                <div className='w-full lg:w-[50%] flex flex-col items-center md:items-start gap-10 pb-36 lg:pb-0 px-12 lg:px-0' data-aos="fade-up">
                    <div className='text-center md:text-start'>          
                        <h3 className='text-4xl uppercase font-spaceMedium mb-3'>{header}</h3>
                        <p className={`${pColor} leading-relaxed max-w-[70ch]`}>{paragraph}</p>
                    </div>  
                    <Button className='mt-10' buttonColor={btnColor} btnText={btnText} link={btnLink}/>
                </div>
            </div>
        </section>
    )
}