import React, { useEffect, useState } from "react";
import { termsURL } from "../components/getAPI";
import createDOMPurify from "dompurify";

export default function TermsPage() {
  const [data, setData] = useState([]);
  const DOMPurify = createDOMPurify(window);

  useEffect(() => {
    async function aboutData() {
      const response = await fetch(termsURL);
      const newData = await response.json();
      console.log(newData);
      setData(newData);
    }

    aboutData();
  }, []);

  const rawHTML = data?.content?.paragraph;

  return (
    <main className="pt-36 px-6 md:px-8 lg:px-32">
      <section className="max-w-[700px] ml-auto mr-auto">
        <div className="wrapper terms-list list-disc">
          <h1 className="pb-10 uppercase text-3xl md:text-4xl leading-tight font-spaceMedium">
            {data?.content?.headline}
          </h1>
          <div className="terms-list" dangerouslySetInnerHTML={{ __html: rawHTML }}></div>
        </div>
      </section>
    </main>
  );
}
