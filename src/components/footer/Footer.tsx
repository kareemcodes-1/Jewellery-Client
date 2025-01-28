
export default function Footer() {
  return (
    <>
      <footer className="footer pt-[2rem]">
        <div className="footer_container container-1 mx-[1.5rem]">
          <div className="lg:grid lg:grid-cols-2 flex flex-col  mb-[2rem]">
            <div>
              <div className="mb-[3rem]">
                <a
                  href={"/"}
                  className="lg:text-[1.2rem] text-[1rem] font-bold mb-[3rem] tracking-[.3rem] "
                  id="footer-text"
                >
                  CHI LUXURY
                </a>

                <div
                  className="mt-[.5rem] uppercase lg:text-[.9rem] text-[.8rem]"
                  id="footer-text"
                >
                  The best store to find all your unique and quality
                  jewelleries, we're unique in every way.
                </div>
              </div>

              <div className="flex items-start lg:gap-[4rem] flex-row gap-[1.2rem] lg:mb-0 mb-[1.5rem]">
                <div id="footer-text">
                  <div className="flex items-start flex-col lg:text-[1rem] text-[.9rem] tracking-[.2rem] font-semibold lg:gap-[2rem] gap-[1.2rem] manrope">
                    <a href="/">HOME</a>
                    <a href="/about">ABOUT US</a>
                    <a href="/contact">CONTACT US</a>
                    <a href="/products">PRODUCTS</a>
                  </div>
                </div>

                <div id="footer-text">
                  <div className="flex items-start flex-col lg:text-[1rem] text-[.9rem] tracking-[.2rem] font-semibold lg:gap-[2rem] gap-[1.2rem] manrope uppercase">
                    <a href="">Instagram</a>
                    <a href="">Facebook</a>
                    <a href="">Tiktok</a>
                    <a>Delivery & Returns</a>
                    <a>Vip Access</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden">
              <img
                src={"/footer.jpg"}
                alt=""
                className="h-[400px] w-full object-cover"
                id="footer-img"
              />
            </div>
          </div>

          <div className="flex lg:flex-row flex-col lg:items-center gap-[.5rem] justify-between">
            <div className="flex lg:flex-row flex-col lg:items-center lg:gap-[2rem] gap-[.5rem] lg:text-[1rem] text-[.9rem] tracking-[.2rem] font-semibold uppercase manrope">
              <div id="footer-text">© Chi Luxury 2024.</div>

              <div id="footer-text">Terms + Conditions</div>

              <div id="footer-text">Privacy Policy</div>
            </div>

            <div className="lg:mt-0 mt-[2rem]" id="footer-text">
              Website by{" "}
              <span className="font-bold">
                <a href="tel:+2347063535374" target="_blank">
                  Kareem Codes
                </a>{" "}
                ✨
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
