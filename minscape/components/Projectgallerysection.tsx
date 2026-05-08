import Masonry from "./Masonry";
import { CormorantGaramond } from "@/public/fonts/fonts";
import AnimatedContent from "./AnimatedContent";

const items = [
  {
    id: "1",
    img: "/images/interior_1.jpg",
    url: "",
    height: 700,
  },
  {
    id: "2",
    img: "/images/interior_2.jpg",
    url: "",
    height: 500,
  },
  {
    id: "3",
    img: "/images/interior_3.jpg",
    url: "",
    height: 600,
  },
];

const Projectgallerysection = () => {
  return (
    <section className="p-5 lg:p-25 w-full h-screen" id="projects">
      <main className="w-full">
        <AnimatedContent
          distance={100}
          direction="vertical"
          reverse={false}
          duration={1.5}
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
            seleceted projects
          </h2>
        </AnimatedContent>
          <Masonry
            items={items}
            ease="power3.out"
            duration={0}
            stagger={0.05}
            animateFrom={undefined}
            scaleOnHover={true}
            hoverScale={0.95}
            blurToFocus={true}
            colorShiftOnHover={true}
          />

        {/* <AnimatedContent
          distance={100}
          direction="vertical"
          reverse={false}
          duration={1.5}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
          delay={0}
        > */}

        {/* </AnimatedContent> */}
      </main>
    </section>
  );
};

export default Projectgallerysection;
