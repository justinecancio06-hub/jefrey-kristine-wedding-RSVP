const ninongNames = [
  "ENGR. ARIES ARCANGEL",
  "ENGR. EDWIN TANGONAN",
  "ENGR. SHERWIN ARUCAN",
  "ENGR. RAFAEL R. GALICINAO II",
  "DR. ARLENE COLOMA",
  "DR. CESARIA VISITACION",
  "DR. FLORALYN S. AGUINALDO",
  "MR. EDDIE AGUINALDO",
  "MR. EDUARDO BAGA",
  "MR. & MRS. JHUNE LORENZO",
  "MR. & MRS. JOSE ESPEJO JR.",
  "MR. & MRS. MARCIAL CALIPDAN",
  "MR. & MRS. MIGUEL VISAYA",
  "MR. & MRS. ANGELINO AGULLANA",
  "MR. & MRS. BONIFACIO P. TORIBIO JR.",
];

const ninangNames = [
  "MRS. NUERALYN CERIA",
  "MRS. LORNA AGONOY",
  "MRS. WILMA MANEGDEG",
  "MS. CAROLINE DOMINGO",
  "MS. PAMELA D. GARCIA",
  "MS. MIRASOL S. LORENZO",
  "MS. JANICE MAGARRO",
  "MR. JERRY RUIZ",
  "MRS. JANNET M. MARCO",
  "MRS. JESUSA LEANO",
  "MRS. ANNABEL M. AGCAOILI",
  "MRS. JENNIFER B. ANCHETA",
  "MRS. ROSEMARIE CRUZ",
  "MRS. NENA SATURNINO",
  "MRS. EDNA P. ARELLANO",
];

function SectionDivider() {
  return (
    <div
      aria-hidden="true"
      className="mx-auto my-8 h-px w-16 bg-[#c9a961]/40"
    />
  );
}

function SmallHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#5a5a5a] sm:text-xs">
      {children}
    </h3>
  );
}

function ScriptHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-script text-3xl text-[#8a9a7b] sm:text-4xl">
      {children}
    </h3>
  );
}

function NameList({ names }: { names: string[] }) {
  return (
    <ul className="space-y-1">
      {names.map((name, index) => (
        <li
          key={`${name}-${index}`}
          className="font-sans text-xs uppercase leading-relaxed tracking-wide text-[#2b2b2b] sm:text-sm"
        >
          {name}
        </li>
      ))}
    </ul>
  );
}

export default function EntourageList() {
  return (
    <section
      aria-labelledby="entourage-heading"
      className="card-bg w-full rounded-3xl p-8 text-center shadow-[0_30px_60px_-15px_rgba(43,43,43,0.4)] sm:p-12"
    >
      <div className="mx-auto w-full max-w-[720px]">
        <h2
          id="entourage-heading"
          className="font-script text-4xl text-[#8a9a7b] sm:text-5xl"
        >
          Entourage
        </h2>

        <p className="mt-3 font-sans text-xs uppercase tracking-[0.3em] text-[#5a5a5a]">
          Jefrey &amp; Kristine &middot; Nuptials
        </p>

        {/* 1. Parents */}
        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-1 sm:mt-16 sm:grid-cols-2">
          <div className="text-center">
            <SmallHeading>Parents of the Groom</SmallHeading>
            <div className="mt-3">
              <NameList
                names={["FLENIE A. GALICINAO", "ARSENIO R. GALICINAO JR."]}
              />
            </div>
          </div>
          <div className="mt-6 text-center sm:mt-0">
            <SmallHeading>Parents of the Bride</SmallHeading>
            <div className="mt-3">
              <NameList
                names={["SALVACION M. OLORAZA", "JONATHAN S. OLORAZA (+)"]}
              />
            </div>
          </div>
        </div>

        <SectionDivider />

        {/* 2. Principal Sponsors */}
        <div className="mt-12 sm:mt-16">
          <ScriptHeading>Principal Sponsors</ScriptHeading>

          <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-1 sm:grid-cols-2">
            <div className="text-center">
              <NameList names={ninongNames} />
            </div>
            <div className="mt-4 text-center sm:mt-0">
              <NameList names={ninangNames} />
            </div>
          </div>
        </div>

        <SectionDivider />

        {/* 3. Secondary Sponsors */}
        <div className="mt-12 sm:mt-16">
          <ScriptHeading>Secondary Sponsors</ScriptHeading>

          {/* 3a. Bestman / Maid of Honor */}
          <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-1 sm:mt-10 sm:grid-cols-2">
            <div className="text-center">
              <SmallHeading>Bestman</SmallHeading>
              <div className="mt-3">
                <NameList names={["JERMEINE I KAIKA G. BUDOL"]} />
              </div>
            </div>
            <div className="mt-6 text-center sm:mt-0">
              <SmallHeading>Maid of Honor</SmallHeading>
              <div className="mt-3">
                <NameList names={["SHEENA KEITH RIOPERIO"]} />
              </div>
            </div>
          </div>

          {/* 3b. Veil */}
          <div className="mt-8 sm:mt-10">
            <SmallHeading>Veil</SmallHeading>
            <div className="mt-3">
              <NameList
                names={["APRIL FAYLOGNA", "ELY JONES BALLESTEROS"]}
              />
            </div>
          </div>

          {/* 3c. Cord / Candle */}
          <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-1 sm:mt-10 sm:grid-cols-2">
            <div className="text-center">
              <SmallHeading>Cord</SmallHeading>
              <div className="mt-3">
                <NameList
                  names={[
                    "RAVEN JOIE GALICINAO",
                    "JANRIC EMIR C. DULDULAO",
                  ]}
                />
              </div>
            </div>
            <div className="mt-6 text-center sm:mt-0">
              <SmallHeading>Candle</SmallHeading>
              <div className="mt-3">
                <NameList
                  names={["QUEENIE CHARLENE RAFOL", "KHRYZEN DOLOROSO"]}
                />
              </div>
            </div>
          </div>

          {/* 3d. Groomsmen / Bridesmaids */}
          <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-1 sm:mt-10 sm:grid-cols-2">
            <div className="text-center">
              <SmallHeading>Groomsmen</SmallHeading>
              <div className="mt-3">
                <NameList
                  names={[
                    "MARLON TANGO",
                    "TROY R. JOVELLANOS",
                    "FRANCIS CHRISTIAN G. CASTRO",
                    "FRANCOISE JULIUS G. CASTRO",
                  ]}
                />
              </div>
            </div>
            <div className="mt-6 text-center sm:mt-0">
              <SmallHeading>Bridesmaids</SmallHeading>
              <div className="mt-3">
                <NameList
                  names={[
                    "STEPHANIE MANAGAD",
                    "MICHELLE AGONOY",
                    "SHEILA MANEGDEG",
                    "YANNIS CLAIRE ABUBO",
                  ]}
                />
              </div>
            </div>
          </div>

          {/* 3e. Bible / Coin / Ring */}
          <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 sm:grid-cols-3">
            <div className="text-center">
              <SmallHeading>Bible</SmallHeading>
              <div className="mt-3">
                <NameList names={["ADAM CHRISTDEN A. BUDOL"]} />
              </div>
            </div>
            <div className="text-center">
              <SmallHeading>Coin</SmallHeading>
              <div className="mt-3">
                <NameList names={["KHYLE JHAKE ANCHETA"]} />
              </div>
            </div>
            <div className="text-center">
              <SmallHeading>Ring</SmallHeading>
              <div className="mt-3">
                <NameList names={["TRAVIS JOHN JOSE"]} />
              </div>
            </div>
          </div>

          {/* 3f. Flower Girls */}
          <div className="mt-8 sm:mt-10">
            <SmallHeading>Flower Girls</SmallHeading>
            <div className="mt-3">
              <NameList
                names={[
                  "JOHANA MIEL OLORAZA",
                  "AVERY ALLEIAH PARADO",
                  "XAMIRA MYSTHE MANAGAD",
                  "MAIAH ALERIA P. BANSEN",
                  "MERLIA KAIJEM OLORAZA",
                  "MAERI ISABEL JOSE",
                  "SAABRIA CHRISTDEN A. BUDOL",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}