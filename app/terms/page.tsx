import data from '../textdata/tc.json'

const titleStyle: React.CSSProperties = {
  fontFamily: 'TimesNewRomanPS-BoldMT, Times New Roman, Times, serif',
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '3em',
  lineHeight: '75px',
  letterSpacing: '0em',
  paddingRight: '1rem',
};
const title2Style: React.CSSProperties = {
  fontFamily: 'TimesNewRomanPS-BoldMT, Times New Roman, Times, serif',
  fontStyle: 'normal',
  fontWeight: 900,
  fontSize: '1.1em',
  lineHeight: '55px',
  letterSpacing: '0em',
};
const pStyle: React.CSSProperties = {
  fontFamily: 'TimesNewRomanPSMT, Times New Roman, Times, serif',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '18px',
  lineHeight: '21px',
  letterSpacing: '0em',
  padding: '1rem',
};

// Responsive adjustments (simple example)
const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
if (isMobile) {
  titleStyle.fontSize = '1.5em';
  titleStyle.paddingRight = '0.5rem';
  title2Style.fontSize = '1em';
  pStyle.fontSize = '0.9em';
  pStyle.padding = '0rem';
  pStyle.margin = '0rem';
  pStyle.paddingLeft = '0.5rem';
}

const SafeHTML = ({ html }: { html?: string }) => {
  if (!html) return null;
  return (
    <div
      className="safe-html"
      style={pStyle}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default function TermsConditions() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <article className="prose prose-lg max-w-none">
          <h1
            className="text-4xl md:text-5xl font-bold mb-8 font-serif"
            style={titleStyle}
          >
            Terminos y Condiciones
          </h1>

          {/* Info Relevante */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 font-serif" style={title2Style}>{data.titleInfoRelevante}</h2>
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
            <h2 className="text-2xl font-bold mb-4 font-serif" style={title2Style}>{data.titleTerminologia}</h2>
            <ul className="space-y-2 text-justify">
              <SafeHTML html={data.list1Terminologia} />
              <SafeHTML html={data.list2Terminologia} />
              <SafeHTML html={data.list3Terminologia} />
              <SafeHTML html={data.list4Terminologia} />
              <SafeHTML html={data.list5Terminologia} />
              <SafeHTML html={data.list6Terminologia} />
            </ul>
          </section>

          {/* Content User */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 font-serif" style={title2Style}>{data.title3Main}</h2>
            <div className="text-justify">
              <SafeHTML html={data.textContentMain} />
            </div>
          </section>

          {/* Servicios */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 font-serif" style={title2Style}>{data.titleServices}</h2>
            <div className="text-justify">
              <SafeHTML html={data.textServices} />
            </div>
          </section>

          {/* Licencia */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 font-serif" style={title2Style}>{data.titleLicense}</h2>
            <div className="space-y-4 text-justify">
              <SafeHTML html={data.text1License} />
              <SafeHTML html={data.text2License} />
              <SafeHTML html={data.text3License} />
              <SafeHTML html={data.text4License} />
            </div>
          </section>

          {/* Restricciones */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 font-serif" style={title2Style}>{data.titleRestrictions}</h2>
            <div className="space-y-4 text-justify">
              <SafeHTML html={data.text1Restrictions} />
              <SafeHTML html={data.text2Restrictions} />
            </div>
          </section>

          {/* Prestaciones */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 font-serif" style={title2Style}>{data.titlePrestac}</h2>
            <div className="text-justify">
              <SafeHTML html={data.textPrestac} />
            </div>
          </section>

          {/* Use Services */}
          {data.titleUseServices && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 font-serif" style={title2Style}>{data.titleUseServices}</h2>
            </section>
          )}

          {/* User Use */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 font-serif" style={title2Style}>{data.titleUseUser}</h2>
            <div className="space-y-4 text-justify">
              <SafeHTML html={data.text1UseUser} />
              <SafeHTML html={data.text2UseUser} />
            </div>
          </section>

          {/* User Req */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 font-serif" style={title2Style}>{data.titleReq}</h2>
            <div className="text-justify">
              <SafeHTML html={data.text1Req} />
            </div>
          </section>

          {/* User Content */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 font-serif" style={title2Style}>{data.titleUserContent}</h2>
            <div className="space-y-4 text-justify">
              <SafeHTML html={data.text1UserContent} />
              <SafeHTML html={data.text2UserContent} />
              <SafeHTML html={data.text3UserContent} />
              <SafeHTML html={data.text4UserContent} />
            </div>
          </section>

          {/* Network Access */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 font-serif" style={title2Style}>{data.titleNetAccess}</h2>
            <div className="text-justify">
              <SafeHTML html={data.text1NetAccess} />
            </div>
          </section>

          {/* Subscription */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 font-serif" style={title2Style}>{data.titleSubscription}</h2>
            <div className="text-justify">
              <SafeHTML html={data.text1Subscription} />
              <ul className="space-y-2 mt-4">
                <SafeHTML html={data.list1Subscription} />
                <SafeHTML html={data.list2Subscription} />
                <SafeHTML html={data.list3Subscription} />
              </ul>
            </div>
          </section>

          {/* Export Code */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 font-serif" style={title2Style}>{data.titleExportCode}</h2>
            <div className="text-justify">
              <SafeHTML html={data.text1ExportCode} />
              <ul className="space-y-2 mt-4">
                <SafeHTML html={data.list1ExportCode} />
                <SafeHTML html={data.list2ExportCode} />
                <SafeHTML html={data.list3ExportCode} />
                <SafeHTML html={data.list4ExportCode} />
              </ul>
            </div>
          </section>

          {/* Deployment */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 font-serif" style={title2Style}>{data.titleDeploySubscription}</h2>
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
            <h2 className="text-2xl font-bold mb-4 font-serif" style={title2Style}>{data.titlePasarela}</h2>
            <div className="text-justify">
              <SafeHTML html={data.text1Pasarela} />
            </div>
          </section>

          {/* Pago */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 font-serif" style={title2Style}>{data.titlePago}</h2>
            <div className="space-y-4 text-justify">
              <SafeHTML html={data.text1Pago} />
              <SafeHTML html={data.text2Pago} />
              <SafeHTML html={data.text3Pago} />
            </div>
          </section>

          {/* Gestion */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 font-serif" style={title2Style}>{data.titleGestion}</h2>
            <div className="text-justify">
              <SafeHTML html={data.text1Gestion} />
            </div>
          </section>

          {/* RENUNCIAS */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 font-serif" style={title2Style}>{data.mainRenuncias}</h2>
            <h3 className="text-xl font-bold mb-3 font-serif" style={title2Style}>{data.titleRenuncias}</h3>
            <div className="text-justify" style={pStyle}>
              <SafeHTML html={data.text1Renuncias} />
            </div>
          </section>

          {/* Limitaciones */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 font-serif" style={title2Style}>{data.titleLimitations}</h2>
            <div className="space-y-4 text-justify" style={pStyle}>
              <SafeHTML html={data.text1Limitations} />
              <SafeHTML html={data.text2Limitations} />
            </div>
          </section>

          {/* Indemnidad */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 font-serif" style={title2Style}>{data.titleIndemnidad}</h2>
            <div className="text-justify">
              <SafeHTML html={data.text1Indemnidad} />
            </div>
          </section>

          {/* Legislacion */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 font-serif" style={title2Style}>{data.titleLegislacion}</h2>
            <div className="space-y-4 text-justify">
              <SafeHTML html={data.text1Legislacion} />
              <SafeHTML html={data.text2Legislacion} />
            </div>
          </section>

          {/* Notificaciones */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 font-serif" style={title2Style}>{data.titleNotifications}</h2>
            <div className="text-justify">
              <SafeHTML html={data.text1Notifications} />
            </div>
          </section>

          {/* Disposiciones */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 font-serif" style={title2Style}>{data.titleDisposiciones}</h2>
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