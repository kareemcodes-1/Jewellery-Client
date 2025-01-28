import Layout from "../layout";

const AboutPage = () => {
  return (
    <Layout>
      <section className="about mt-[6rem]">
        <div className="about-container container-1">
          <div className="about-grid lg:grid flex items-center flex-col gap-[2rem] grid-cols-2">
            <div className="overflow-hidden">
              <img
                src={"https://i.pinimg.com/736x/ac/b3/22/acb322876b4673f5d5be8a8d38df799a.jpg"}
                alt="about-img"
                className="w-full h-[500px] object-cover"
                id="about-img"
              />
            </div>

            <div>
              <h2 className="text-[1.5rem] font-semibold tracking-[.2rem] manrope " id="about-text">
                JEWELLRY <span className="font-mono">//</span> CHIOMA
              </h2>
              <p id="about-text" className="uppercase text-[.925rem]">
                Designer + Founder Chioma is based in her studio in Nigeria.
                Chioma received her formal training at the prestigious Central
                Saint Martins College of Art and Design, graduating with a BA in
                Jewellery Design in 2015. Chioma has gained accolades
                recognising her work as a designer. Featuring in magazines such
                as Harper’s Bazaar, British Vogue and the Sunday Telegraph as
                well as exhibiting at the V&A. After graduating she moved to New
                York, working for Tiffany & Co. creating jewellery collections
                within the luxury corporate fashion world. After eight years in
                the industry as a designer, Chioma has launched Phoria with the
                vision to create a quality line of jewellery made up of the
                ultimate staples that can be worn in multiple ways – designed to
                be redesigned. All chi luxury pieces are fully designed by
                Charlotte in her studio, and handmade ethically by craftsman in
                thailand using sustainable materials.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
