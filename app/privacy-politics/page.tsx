import data from '../textdata/tc.json'
import './privacy-politics.css'

const SafeHTML = ({ html }: { html?: string }) => {
  if (!html) return null;
  return (
    <div
      className="textP"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default function PrivacyPolitics() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="terms-container mx-auto">
        <article className="prose prose-lg max-w-none">
          <h1 className="textTitle mb-8 font-serif">
            {data.titlesPrivacyPolitics}
          </h1>

          {/* Privacy Introduction */}
          <section className="mb-8">
            <div className="text-justify">
              <SafeHTML html={data.text1Privacy} />
            </div>
          </section>

          {/* Información que es recogida */}
          <section className="mb-8">
            <h2 className="textTitle2 mb-4 font-serif">{data.titleNotChosen}</h2>
            <div className="space-y-4 text-justify">
              <SafeHTML html={data.text1NotChosen} />
              <SafeHTML html={data.text2NotChosen} />
            </div>
          </section>

          {/* Uso de la información recogida */}
          <section className="mb-8">
            <h2 className="textTitle2 mb-4 font-serif">{data.titleInfoUse}</h2>
            <div className="space-y-4 text-justify">
              <SafeHTML html={data.text1InfoUse} />
              <SafeHTML html={data.text2InfoUse} />
              <SafeHTML html={data.text3InfoUse} />
              <SafeHTML html={data.text4InfoUse} />
              <SafeHTML html={data.text5InfoUse} />
              <SafeHTML html={data.text6InfoUse} />
              <SafeHTML html={data.text7InfoUse} />
              <SafeHTML html={data.text8InfoUse} />
              <SafeHTML html={data.text9InfoUse} />
            </div>
          </section>

          {/* Enlaces a Terceros */}
          <section className="mb-8">
            <h2 className="textTitle2 mb-4 font-serif">{data.titleThirdParty}</h2>
            <div className="text-justify">
              <SafeHTML html={data.text1ThirdParty} />
            </div>
          </section>

          {/* Control de su información personal */}
          <section className="mb-8">
            <h2 className="textTitle2 mb-4 font-serif">{data.titleControlInfo}</h2>
            <div className="space-y-4 text-justify">
              <SafeHTML html={data.text1ControlInfo} />
              <SafeHTML html={data.text2ControlerInfo} />
            </div>
          </section>

          {/* Legislación */}
          <section className="mb-8">
            <h2 className="textTitle2 mb-4 font-serif">{data.titleLegisl}</h2>
            <div className="text-justify">
              <SafeHTML html={data.text1Legisl} />
            </div>
          </section>

          {/* Disposiciones Finales */}
          <section className="mb-8">
            <h2 className="textTitle2 mb-4 font-serif">{data.titleFinal}</h2>
            <div className="text-justify">
              <SafeHTML html={data.textFinal} />
            </div>
          </section>

          {/* Warning Final */}
          <section className="mb-8 text-justify">
            <SafeHTML html={data.warningFinal} />
          </section>
        </article>
      </div>
    </div>
  )
}