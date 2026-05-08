import { CormorantGaramond } from "@/public/fonts/fonts";
import { FaAngleDown } from "react-icons/fa6";
import AnimatedContent from "./AnimatedContent";
import { PoppinsFont } from "@/public/fonts/fonts";

const faqs = [
  {
    question: "Do you charge a flat fee, hourly, or per square foot?",
    answer: "The costing is Based on square foot and 10% of total cost.",
  },
  {
    question: "Do you work within a fixed budget, or is it flexible?",
    answer:
      "We can work with flexible budgets, but we will provide you with a detailed estimate before starting any work.",
  },
  {
    question: "Are there any hidden costs?",
    answer: "There are no hidden costs.",
  },
  {
    question: "Do you offer payment in installments?",
    answer:
      "No it’s in three step payment. 50% advance, 40% after first draft, 10% after final delivery.",
  },
  {
    question:
      "Do you provide 3D visualization or mood boards before execution?",
    answer:
      "Yes, we provide 3D visualization and mood boards to help you visualize the final outcome before we start the execution.",
  },
];

const Faqs = () => {
  return (
    <section className="w-full p-5 lg:p-25">
      <main className="h-full w-full">
        <AnimatedContent
          distance={100}
          direction="vertical"
          reverse={false}
          duration={0.8}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
          delay={0}
        >
          <h2
            className={`${CormorantGaramond.className} text-5xl lg:text-6xl text-center lg:text-left uppercase mb-10`}
          >
            frequently asked questions
          </h2>
        </AnimatedContent>

        <div className={`w-full flex flex-col gap-5 ${PoppinsFont.className}`}>
          {/* <details className="w-full shadow-lg rounded-xl p-8 ">
            <summary className="text-xl font-bold list-none [&::-webkit-details-marker]:hidden cursor-pointer">
              What is Minscape?
            </summary>
            <p className="mt-4 text-lg">
              Minscape is a cutting-edge architectural visualization company that
              specializes in creating stunning 3D renderings and animations for
              architects, developers, and real estate professionals. We use the
              latest technology and software to bring your architectural designs
              to life, allowing you to showcase your projects in the best
              possible light.
            </p>
          </details> */}
          {faqs.map((faq, index) => (
            <AnimatedContent
              distance={100}
              direction="vertical"
              reverse={false}
              duration={0.8}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.1}
              delay={0}
              key={index}
            >
              <details className="w-full shadow-xl rounded-xl px-5 py-8 md:p-8 transition-all duration-300 ease-in-out">
                <summary className="text-xl font-bold list-none [&::-webkit-details-marker]:hidden flex items-center justify-between">
                  {faq.question}
                  <FaAngleDown className="cursor-pointer" />
                </summary>
                <p className="mt-4 text-lg">{faq.answer}</p>
              </details>
            </AnimatedContent>
          ))}
        </div>
      </main>
    </section>
  );
};

export default Faqs;
