const Faq = () => {
  return (
    <section
      id="FAQ"
      className="w-full max-container pb-[60px]"
    >
      <div className="flex flex-col justify-center items-start">
        <p className="font-inter font-medium text-base text-primary">
          FAQ
        </p>
        <h2 className="font-DMSans text-4xl font-bold text-center text-white-smoke mt-5">
          Frequently Asked Questions
        </h2>
        <p className="font-Inter text-base text-slate-gray mt-5 max-w-2xl">
          Explore to learn more about how DataWise can
          empower your business with AI-driven solutions.
        </p>
      </div>

      <div className="grid grid-cols-3 grid-rows-2 gap-8 mt-12">
        {/* Question  */}
        <div className="max-w-">
          <h3 className="max-w-[356px] font-DMSans font-medium text-[20px] leading-[142%] text-[#E0E3DD] ">
            Can DataWise's AI solutions be business systems?
          </h3>
          <p className="max-w-[356px] small-paragraph">
            Yes, integration is a key strength of our AI
            solutions. DataWise's AI platform is designed
            for flexibility and can be integrated with a
            wide range of existing business systems.
          </p>
        </div>
        {/* Question  */}
        <div className="max-w-">
          <h3 className="max-w-[356px] font-DMSans font-medium text-[20px] leading-[142%] text-[#E0E3DD] ">
            What types of AI services does DataWise offer?
          </h3>
          <p className="max-w-[356px] small-paragraph">
            Absolutely, our services are scalable and
            designed to accommodate and process large
            amounts of data efficiently.
          </p>
        </div>
        {/* Question  */}
        <div>
          <h3 className="max-w-[356px] font-DMSans font-medium text-[20px] leading-[142%] text-[#E0E3DD] ">
            What customer support do you offer for your AI
            solutions?{" "}
          </h3>
          <p className="max-w-[356px] small-paragraph">
            Our services can benefit various industries,
            including healthcare, finance, retail,
            entertainment, and many more, wherever AI can be
            leveraged.
          </p>
        </div>
        {/* Question  */}
        <div>
          <h3 className="max-w-[356px] font-DMSans font-medium text-[20px] leading-[142%] text-[#E0E3DD] ">
            Can your AI help improve my website's conversion
            rate?{" "}
          </h3>
          <p className="max-w-[356px] small-paragraph">
            We pride ourselves on our service's
            adaptability, user-centric design, and our
            continual commitment to pushing the boundaries
            of AI technology.
          </p>
        </div>
        {/* Question  */}
        <div>
          <h3 className="max-w-[356px] font-DMSans font-medium text-[20px] leading-[142%] text-[#E0E3DD] ">
            Can your AI identify areas for A/B testing and
            personalization?{" "}
          </h3>
          <p className="max-w-[356px] small-paragraph">
            We offer a range of support services from online
            resources, live chat support, to dedicated
            account representatives for enterprise
            customers.
          </p>
        </div>
        {/* Question  */}
        <div>
          <h3 className="max-w-[356px] font-DMSans font-medium text-[20px] leading-[142%] text-[#E0E3DD] ">
            How can your AI help improve my website's SEO
            ranking?{" "}
          </h3>
          <p className="max-w-[356px] small-paragraph">
            Yes, our platform allows for custom model
            training with your proprietary datasets.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Faq;
