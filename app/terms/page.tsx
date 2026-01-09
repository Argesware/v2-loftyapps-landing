import data from '../textdata/tc.json'
import './terms.css' // <-- Add this import

const SafeHTML = ({ html }: { html?: string }) => {
  if (!html) return null;
  return (
    <div
      className="textP"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default function TermsConditions() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="terms-container mx-auto">
        <article className="prose prose-lg max-w-none">
          <h1
            className="textTitle mb-8 font-serif"
          >
            Terminos y Condiciones
          </h1>

          {/* Info Relevante */}
          <section className="mb-8">
            <h2 className="textTitle2 mb-4 font-serif">{data.titleInfoRelevante}</h2>
            <div className="space-y-4 text-justify">
              <SafeHTML html={data.textInfoRelevante} />
              <SafeHTML html={data.text2InfoRelevante} />
              <SafeHTML html={data.text3InfoRelevante} />
              <SafeHTML html={data.text4InfoRelevante} />
              <SafeHTML html={data.text5InfoRelevante} />
              <SafeHTML html={data.text6InfoRelevante} />
            </div>
          </section>

          {/* Terminologia */}
          <section className="mb-8">
            <h2 className="textTitle2 mb-4 font-serif">{data.titleTerminologia}</h2>
            <ul
              className="space-y-2 text-justify list-disc pl-6"
              dangerouslySetInnerHTML={{
                __html: `
                  ${data.list1Terminologia || ''}
                  ${data.list2Terminologia || ''}
                  ${data.list3Terminologia || ''}
                  ${data.list4Terminologia || ''}
                  ${data.list5Terminologia || ''}
                  ${data.list6Terminologia || ''}
                `
              }}
            />
          </section>

          {/* Content User */}
          <section className="mb-8">
            <h2 className="textTitle2 mb-4 font-serif">{data.title3Main}</h2>
            <div className="text-justify">
              <SafeHTML html={data.textContentMain} />
            </div>
          </section>

          {/* Servicios */}
          <section className="mb-8">
            <h2 className="textTitle2 mb-4 font-serif">{data.titleServices}</h2>
            <div className="text-justify">
              <SafeHTML html={data.textServices} />
            </div>
          </section>

          {/* Licencia */}
          <section className="mb-8">
            <h2 className="textTitle2 mb-4 font-serif">{data.titleLicense}</h2>
            <div className="space-y-4 text-justify">
              <SafeHTML html={data.text1License} />
              <SafeHTML html={data.text2License} />
              <SafeHTML html={data.text3License} />
              <SafeHTML html={data.text4License} />
            </div>
          </section>

          {/* Restricciones */}
          <section className="mb-8">
            <h2 className="textTitle2 mb-4 font-serif">{data.titleRestrictions}</h2>
            <div className="space-y-4 text-justify">
              <SafeHTML html={data.text1Restrictions} />
              <SafeHTML html={data.text2Restrictions} />
            </div>
          </section>

          {/* Prestaciones */}
          <section className="mb-8">
            <h2 className="textTitle2 mb-4 font-serif">{data.titlePrestac}</h2>
            <div className="text-justify">
              <SafeHTML html={data.textPrestac} />
            </div>
          </section>

          {/* Use Services */}
          {data.titleUseServices && (
            <section className="mb-8">
              <h2 className="textTitle2 mb-4 font-serif">{data.titleUseServices}</h2>
            </section>
          )}

          {/* User Use */}
          <section className="mb-8">
            <h2 className="textTitle2 mb-4 font-serif">{data.titleUseUser}</h2>
            <div className="space-y-4 text-justify">
              <SafeHTML html={data.text1UseUser} />
              <SafeHTML html={data.text2UseUser} />
            </div>
          </section>

          {/* User Req */}
          <section className="mb-8">
            <h2 className="textTitle2 mb-4 font-serif">{data.titleReq}</h2>
            <div className="text-justify">
              <SafeHTML html={data.text1Req} />
            </div>
          </section>

          {/* User Content */}
          <section className="mb-8">
            <h2 className="textTitle2 mb-4 font-serif">{data.titleUserContent}</h2>
            <div className="space-y-4 text-justify">
              <SafeHTML html={data.text1UserContent} />
              <SafeHTML html={data.text2UserContent} />
              <SafeHTML html={data.text3UserContent} />
              <SafeHTML html={data.text4UserContent} />
            </div>
          </section>

          {/* Network Access */}
          <section className="mb-8">
            <h2 className="textTitle2 mb-4 font-serif">{data.titleNetAccess}</h2>
            <div className="text-justify">
              <SafeHTML html={data.text1NetAccess} />
            </div>
          </section>

          {/* Subscription */}
          <section className="mb-8">
            <h2 className="textTitle2 mb-4 font-serif">{data.titleSubscription}</h2>
            <div className="text-justify">
              <SafeHTML html={data.text1Subscription} />
              <ul
                className="space-y-2 mt-4 list-disc pl-6"
                dangerouslySetInnerHTML={{
                  __html: `
                    ${data.list1Subscription || ''}
                    ${data.list2Subscription || ''}
                    ${data.list3Subscription || ''}
                  `
                }}
              />
            </div>
          </section>

          {/* Export Code */}
          <section className="mb-8">
            <h2 className="textTitle2 mb-4 font-serif">{data.titleExportCode}</h2>
            <div className="text-justify">
              <SafeHTML html={data.text1ExportCode} />
              <ul
                className="space-y-2 mt-4 list-disc pl-6"
                dangerouslySetInnerHTML={{
                  __html: `
                    ${data.list1ExportCode || ''}
                    ${data.list2ExportCode || ''}
                    ${data.list3ExportCode || ''}
                    ${data.list4ExportCode || ''}
                  `
                }}
              />
            </div>
          </section>

          {/* Deployment */}
          <section className="mb-8">
            <h2 className="textTitle2 mb-4 font-serif">{data.titleDeploySubscription}</h2>
            <div className="text-justify">
              <SafeHTML html={data.text1DeploySubscription} />
              <ul className="space-y-2 mt-4 list-disc pl-6">
                {data.list1Deploy && <li><SafeHTML html={data.list1Deploy} /></li>}
                {data.list2Deploy && <li><SafeHTML html={data.list2Deploy} /></li>}
                {data.list3Deploy && <li><SafeHTML html={data.list3Deploy} /></li>}
              </ul>
            </div>
          </section>

          {/* Pasarela */}
          <section className="mb-8">
            <h2 className="textTitle2 mb-4 font-serif">{data.titlePasarela}</h2>
            <div className="text-justify">
              <SafeHTML html={data.text1Pasarela} />
            </div>
          </section>

          {/* Pago */}
          <section className="mb-8">
            <h2 className="textTitle2 mb-4 font-serif">{data.titlePago}</h2>
            <div className="space-y-4 text-justify">
              <SafeHTML html={data.text1Pago} />
              <SafeHTML html={data.text2Pago} />
              <SafeHTML html={data.text3Pago} />
            </div>
          </section>

          {/* Gestion */}
          <section className="mb-8">
            <h2 className="textTitle2 mb-4 font-serif">{data.titleGestion}</h2>
            <div className="text-justify">
              <SafeHTML html={data.text1Gestion} />
            </div>
          </section>

          {/* RENUNCIAS */}
          <section className="mb-8">
            <h2 className="textTitle2 mb-4 font-serif">{data.mainRenuncias}</h2>
            <h3 className="textTitle2 text-xl font-bold mb-3 font-serif">{data.titleRenuncias}</h3>
            <div className="text-justify textP">
              <SafeHTML html={data.text1Renuncias} />
            </div>
          </section>

          {/* Limitaciones */}
          <section className="mb-8">
            <h2 className="textTitle2 mb-4 font-serif">{data.titleLimitations}</h2>
            <div className="space-y-4 text-justify textP">
              <SafeHTML html={data.text1Limitations} />
              <SafeHTML html={data.text2Limitations} />
            </div>
          </section>

          {/* Indemnidad */}
          <section className="mb-8">
            <h2 className="textTitle2 mb-4 font-serif">{data.titleIndemnidad}</h2>
            <div className="text-justify">
              <SafeHTML html={data.text1Indemnidad} />
            </div>
          </section>

          {/* Legislacion */}
          <section className="mb-8">
            <h2 className="textTitle2 mb-4 font-serif">{data.titleLegislacion}</h2>
            <div className="space-y-4 text-justify">
              <SafeHTML html={data.text1Legislacion} />
              <SafeHTML html={data.text2Legislacion} />
            </div>
          </section>

          {/* Notificaciones */}
          <section className="mb-8">
            <h2 className="textTitle2 mb-4 font-serif">{data.titleNotifications}</h2>
            <div className="text-justify">
              <SafeHTML html={data.text1Notifications} />
            </div>
          </section>

          {/* Disposiciones */}
          <section className="mb-8">
            <h2 className="textTitle2 mb-4 font-serif">{data.titleDisposiciones}</h2>
            <div className="space-y-4 text-justify">
              <SafeHTML html={data.text1Disposiciones} />
              <SafeHTML html={data.text2Disposiciones} />
            </div>
          </section>

          {/* Warning */}
          <section className="mb-8 text-justify">
            <SafeHTML html={data.warningTextTERMS} />
          </section>
        </article>
      </div>
    </div>
  )
}