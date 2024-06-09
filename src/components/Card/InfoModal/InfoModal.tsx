"use client"

import { PokemonProps } from "@/types"
import { useState } from "react"

interface InfoModalProps {
  pokemon: PokemonProps
  onClose: () => void
}

export function InfoModal({ pokemon, onClose }: InfoModalProps) {
  // const { name, id, type, imgUrl, secondaryImgUrl, secondaryType } = pokemonInfoModal
  // const { favorites, updateFavorites, description, pokemon } = useInfoModal(name, id)
  const [section, setSection] = useState(0)

  return (
    <div className="fixed left-0 top-0 z-50 flex h-screen w-screen flex-col items-center bg-black/90">
      <div
        className={`${pokemon.types[0]}-background relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}
      >
        opA
      </div>
      {/* <Container bg={backgroundColors[type]}>
           <Header>
             <Button onClick={onClose}>
               <ArrowBackIosNewSharp sx={{ fontSize: 30 }} />
             </Button>
             <Button onClick={() => updateFavorites(name)}>
               {favorites.includes(name) ? (
                 <Favorite sx={{ fontSize: 30 }} />
               ) : (
                 <FavoriteBorder sx={{ fontSize: 30 }} />
               )}
             </Button>
           </Header>
           <InfoModal>
             <h1>{formatString(name)}</h1>
             <span style={{ gridColumn: "2/3" }}>{formatId(id)}</span>
             <span style={{ display: "grid", gap: "0.3rem" }}>
               <Type bg={backgroundColors[type]}>{formatString(type)}</Type>
               {secondaryType && (
                 <Type bg={backgroundColors[secondaryType]}>
                   {formatString(secondaryType)}
                 </Type>
               )}
             </span>
           </InfoModal>
           <ImgWrapper>
             <img src={imgUrl || secondaryImgUrl} alt={name} />
           </ImgWrapper>
           <Main>
             <Header style={{ paddingTop: "0.5rem" }}>
               <SectionButton
                 onClick={() => setSection(0)}
                 isactive={section === 0 ? "y" : "n"}
               >
                 About
               </SectionButton>
               <SectionButton
                 onClick={() => setSection(1)}
                 isactive={section === 1 ? "y" : "n"}
               >
                 Stats
               </SectionButton>
             </Header>
             {section === 0 && (
               <Section>
                 <span>{description}</span>
                 {pokemon && (
                   <div
                     style={{
                       background: `${backgroundColors[type]}`,
                       borderRadius: "0.5rem",
                       padding: "1rem",
                       display: "flex",
                       justifyContent: "space-between",
                     }}
                   >
                     <Metrics>
                       <span>Height</span>
                       <span>{pokemon.height / 10}m</span>
                     </Metrics>
                     <Metrics>
                       <span>Weight</span>
                       <span>{pokemon.weight / 10}kg</span>
                     </Metrics>
                   </div>
                 )}
               </Section>
             )}
             {section === 1 && (
               <Section>
                 {pokemon?.stats.map((stat, i) => (
                   <div
                     key={i}
                     style={{
                       display: "flex",
                       justifyContent: "space-between",
                       alignItems: "center",
                     }}
                   >
                     <span>
                       {stat.stat.name.includes("special")
                         ? stat.stat.name
                             .replace("-", " ")
                             .replace("special", "Sp.")
                             .replace("attack", "Atk")
                             .replace("defense", "Def")
                         : formatString(stat.stat.name)}
                     </span>
                     <StatBarWrapper>
                       <StatBar
                         style={{
                           background: `${
                             type !== "dark" ? backgroundColors[type] : "#808080"
                           }`,
                         }}
                         w={`calc(${stat.base_stat}% * 0.5)`}
                         animation={"y"}
                       />
                       <StatBar w="100%" />
                     </StatBarWrapper>
                   </div>
                 ))}
               </Section>
             )}
           </Main>
         </Container> */}

      <div
        id="default-modal"
        tabIndex={-1}
        aria-hidden="true"
        className="fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0"
      >
        <div className="relative max-h-full w-full max-w-2xl p-4">
          <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
            <div className="flex items-center justify-between rounded-t border-b p-4 md:p-5 dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white"></h3>
              <button
                type="button"
                className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="default-modal"
              >
                <svg
                  className="h-3 w-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="space-y-4 p-4 md:p-5">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts
                new consumer privacy laws for its citizens, companies around the
                world are updating their terms of service agreements to comply.
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation
                (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                common set of data rights in the European Union. It requires
                organizations to notify users as soon as possible of high-risk
                data breaches that could personally affect them.
              </p>
            </div>
            <div className="flex items-center rounded-b border-t border-gray-200 p-4 md:p-5 dark:border-gray-600">
              <button
                data-modal-hide="default-modal"
                type="button"
                className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                I accept
              </button>
              <button
                data-modal-hide="default-modal"
                type="button"
                className="ms-3 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
