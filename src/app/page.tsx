import { Header } from "@/components/all/Header";
import { Footer } from "@/components/all/Footer";
import { Main } from "@/components/home/Main";
import { AboutUs } from "@/components/home/AboutUs";
import { Cell } from "@/components/home/Cell";
import { Event } from "@/components/home/Event";
import { MakeADifference } from "@/components/home/MakeADifference";
import { Ministries } from "@/components/home/Ministries";
import { Programation } from "@/components/home/Programation";
import { Social } from "@/components/home/Social";
import { Visit } from "@/components/home/Visit";

export default function Home() {
  return (
    
    <>
      {/* PRINCIPAL HERO SECTION */}
      <section className="relative h-full w-full overflow-hidden">
        <div className="absolute top-0 left-0 z-50 w-full">
          <Header />
        </div>

        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/assets/video1.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[#050505]/40 z-1" />

        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-b from-transparent to-[#050505] z-2" />

        {/* MAIN SECTION */}
        <Main />
      </section>

    

      {/* ABOUT US SECTION */}
      <section className="mt-40 scroll-mt-32" id="about">
         <h1 className="text-5xl font-manrope font-semibold text-white text-center leading-[1.1]">Quem Somos?</h1>
         <AboutUs />
      </section>



      {/* MINISTRIES SECTION */}
      <section className="mt-40 scroll-mt-32" id="ministries">
         <h1 className="text-5xl font-manrope font-semibold text-white text-center leading-[1.1]">Ministérios de <br /> excelência</h1>
         <Ministries />
      </section>



      {/* MAKE A DIFFERENCE SECTION */}
      <section className="mt-40 h-max scroll-mt-32">
        <MakeADifference />
      </section>



      {/* EVENT SECTION */}
      <section className="mt-40 h-max scroll-mt-32" id="events">
        <h1 className="text-5xl font-manrope font-semibold text-white text-center leading-[1.1]">Nossos Eventos</h1>
        <Event />
      </section>



      {/* PROGRAMATION SECTION */}
      <section className="mt-40 h-max scroll-mt-32" id="programation">
        <Programation />
      </section>



      {/* VISIT SECTION */}
      <section className="mt-40 h-max scroll-mt-32" id="visit">
        <h1 className="text-5xl font-manrope font-semibold text-white text-center leading-[1.1]">Visite-nos!</h1>
        <Visit
        link="https://www.google.com/maps?q=R.+Eng.+João+Fonseca+170+Centro+Caraguatatuba&output=embed"
        />
      </section>



      {/* CELL SECTION */}
      <section className="mt-40 h-max scroll-mt-32" id="cell">
        <h1 className="text-5xl font-manrope font-normal text-white text-center leading-[1.1]">Conheça nossas <br /> <span className="font-extrabold">230 Células</span></h1>
        <Cell />
      </section>


      {/* SOCIAL MEDIA SECTION */}
      <section className="mt-40 h-max scroll-mt-32" id="social">
        <h1 className="text-5xl font-manrope font-bold text-white text-center leading-[1.1]">Acesse nossas <br /> redes sociais</h1>
        <Social />
      </section>


      {/* FOOTER */}
      <section className="mt-40 h-max scroll-mt-32" id="social">
        <Footer />
      </section>
    </>
  );
}