import React from "react";

export default function ContactoFooter({ children }) {
  return (
    <div className="grid grid-flow-row justify-items-center md:grid-flow-col md:place-items-center h-4/5 w-[350px] md:w-4/5  lg:w-1/2  mx-auto p-4">
      {/* RANDY! */}
      <div className={`lg:h-[222px] relative`}>
        {children && (
          <div className="relative lg:absolute lg:bottom-[90%] lg:end-[60%] [&>div>div>p]:text-natD [&>div>div>p]:font-ram [&>div>div>p]:text-xs">
            {children}
          </div>
        )}
        <img
          src="/RANDY_08.svg"
          alt="Randy"
          className="mx-auto h-[150px] lg:h-[222px]"
        />
      </div>

      <div>
        {/* TITLE + SUBTITLE */}
        <div className="grid-flow-col p-3">
          <h2 className="font-lucky text-dgreen text-3xl text-center">
            CONTÁCTANOS
          </h2>
          <p className="font-mont pt-2 text-black font-semibold text-center">
            ¡Apóyanos a que siga siendo gratuito!
          </p>
        </div>

        {/* ICONOS SOCIAL MEDIA */}
        <div className="flex grid-flow-col gap-6 justify-center p-3">
          <button className="rounded-full hover:animate-heartbeat">
            <a
              href="https://www.facebook.com/randomlandia.juego/"
              target="_blank"
            >
              <img
                src="/landing/facebook.png"
                alt="FaceBook"
                className="h-[60px] w-[60px]"
              />
            </a>
          </button>
          <button className="rounded-full hover:animate-heartbeat">
            <a href="https://www.tiktok.com/@randyrandomcat" target="_blank">
              <img
                src="/landing/tiktok.png"
                alt="TikTok"
                className="h-[60px] w-[60px]"
              />
            </a>
          </button>
          <button className="rounded-full hover:animate-heartbeat">
            <a
              href="https://open.spotify.com/user/31ux5pywufhwh6gexijksz7r5ztq?si=0e013d965ce148d5"
              target="_blank"
            >
              <img
                src="/landing/spoty.png"
                alt="Spotify"
                className="h-[60px] w-[60px]"
              />
            </a>
          </button>
          {/* ICONO Shopping con modal hover */}
          <div className="relative group">
            <button className="rounded-full bg-orange-400 hover:animate-heartbeat">
              <a href="https://shop.randomlandia.com" target="_blank">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/9308/9308487.png"
                  alt="Shopping"
                  className="h-[60px] w-[60px]"
                />
              </a>
            </button>
            <div className="absolute bottom-[110%] left-1/2 transform -translate-x-1/2 w-64 p-2 bg-green-500  font-lucky text-sm text-white text-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              Apóyanos comprando tu mercancía de Ranndy ♥
            </div>
          </div>
        </div>

        {/* LINKS A AVISOS */}
        <div className="flex grid-flow-col gap-6 justify-center p-3 ">
          <a
            href="/avisoprivacidad"
            target="_blank"
            className="font-mont text-black text-center text-xs hover:font-semibold hover:text-dorange hover:underline"
          >
            Aviso de Privacidad
          </a>
        </div>
      </div>
    </div>
  );
}
