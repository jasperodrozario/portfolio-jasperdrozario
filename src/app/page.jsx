import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center mx-40 my-15">
      <section id="hero" className="flex gap-30 max-w-300">
        <div className="max-w-150">
          <h4 className="text-lg font-thin text-[#63FFD9]">
            Hello, my name is
          </h4>
          <h1 className="mt-2 font-extrabold text-[60px]">Jasper Oliver</h1>
          <h1 className="mb-5 font-extrabold text-[60px]">D Rozario.</h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            dolor, ducimus saepe voluptatum laboriosam assumenda molestias
            voluptatem culpa. Qui, reprehenderit iste quo debitis unde officia
            culpa quibusdam voluptates voluptatibus necessitatibus? Quae ea
            blanditiis nesciunt, eos autem nisi modi hic voluptas numquam
            laudantium, iusto earum maiores aut quidem dignissimos repudiandae
            odit et accusantium nam magni quis! Quibusdam illum magnam dolorum
            officiis.
          </p>
        </div>
        <div className="flex items-center">
          <div
            className="
              relative
              after:content-['']
              after:absolute
              after:w-full
              after:h-full
              after:top-4
              after:left-4
              after:rounded-sm
              after:border-2
              after:border-[#63FFD9]
              after:-z-10
              after:transition-all
              hover:after:translate-[0.20em]
            "
          >
            <Image
              src={"/images/jasper_pfp.jpg"}
              alt="A nice photo of me :)"
              width={300}
              height={300}
              className="rounded-sm object-cover transition-all overlay-[#63FFD9] hover:-translate-[0.20em]"
            />
          </div>
        </div>
      </section>
      <section id="about" className="flex gap-30 max-w-300">
        <div className=""></div>
      </section>
      <section id="skills">
        <h1></h1>
      </section>
      <section id="projects">
        <h1></h1>
      </section>
    </div>
  );
}
