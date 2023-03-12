import getAPI from "./getAPI";
import React, { useEffect, useState } from "react";
import Section from "./Section";
import "../style/PitchSection.css";

export default function PitchSection() {
  return (
    <section className="my-24 lg:my-44 flex flex-col items-center">
      <div className="px-6 md:px-8 xl:px-32 text-center xl:max-w-[100ch]">
        <h2 className="text-2xl font-spaceBold uppercase sm:text-5xl leading-10">
          Sure, here is a fictional sales pitch for why throwing waste into
          space is <span className="outlineText mix-blend-screen">good</span> and{" "}
          <span className="outlineText mix-blend-screen">healthy</span> for the
          Earth
        </h2>
        <p className="pt-8 sm:text-2xl sm:leading-10">
            Are you tired of worrying about waste management on Earth? Look no
            further, because we have the solution! By throwing your waste into
            space, you can not only protect the Earth's precious resources, but
            also contribute to the advancement of humanity.
        </p>

        <p className="pt-8 text-xl sm:text-2xl sm:leading-10">
            Our state-of-the-art technology ensures that your waste is safely
            sent into carefully chosen orbits, where it is monitored and managed
            to minimize any risk to the planet.
          

            And the best part? The waste is then processed and used to support
            the growth of new space colonies and stations. Not only will you be
            doing your part to protect the environment, but you'll also be
            investing in the future of humanity.

        </p>
      </div>
    </section>
  );
}
