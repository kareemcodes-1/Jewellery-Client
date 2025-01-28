const About = () => {
  return (
    <section className="random pt-[2rem] pb-[2rem]">
      <div className="random_container container-1 flex items-center lg:flex-row flex-col gap-[2rem]">
        <div className="lg:w-[50%] w-auto overflow-hidden">
          <img
            src={"https://i.pinimg.com/736x/cb/91/0f/cb910fcc13499f79ed771cc31fe81fb5.jpg"}
            className="w-full object-cover lg:h-[700px] h-[500px]"
          />
        </div>

        <div className="lg:w-[500px] w-auto">
          <h2 className="text-[2rem] font-medium mb-[.5rem]">
            Designed to be Redesigned
          </h2>
          <p className="my-[.5rem] uppercase text-black text-[.925rem] leading-[1.4rem]">
            The range is made up of the ultimate staples – designed to be
            redesigned, with a simple yet powerful aesthetic, and an
            urban-industrial edge{" "}
          </p>
          <p className="my-[2rem] uppercase text-black text-[.925rem] leading-[1.4rem]">
            Our pieces are sustainable in more ways than one. It’s not just down
            to the materials we use, but they’re transformable, meaning there’s
            never just one way to wear them. Their modular and versatile nature
            allows you to reimagine them over and over, encouraging you to adapt
            and redefine.
          </p>
          <a
            href={"/about"}
            className="bg-black mt-[1rem] h-[3.5rem] text-[.8rem] font-bold text-white w-[10rem] p-[.8rem] text-center tracking-[.5rem] items-center justify-center"
          >
            SEE MORE
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
