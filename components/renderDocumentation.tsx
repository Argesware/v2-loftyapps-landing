interface bulletpointInterface {
  bulletPoint?: string;
  infoBulletPoint?: string;
}

interface contentInterface {
  imagedata?: string;
  descriptionImage?: string;
  textinfo?: string;
  listData?: bulletpointInterface[];
  titlesubsection?: string;
}

interface subsectionInterface {
  title: string;
  id: string;
  content?: contentInterface[];
}

interface sectionInterface {
  title: string;
  id: string;
  subsections: subsectionInterface[];
}
// "Entity Selection (Seleccion de Coleccion):"
interface jsontype {
  sections: sectionInterface[];
}

interface objectDataInterface {
  origin: string;
  jsonInfo: jsontype;
}

export default function RenderDocumentation(jsondata: objectDataInterface) {
  if (!jsondata.jsonInfo) {
    return (<></>);
  }
  return (
    <div className="space-y-8">
      {jsondata.jsonInfo.sections?.map((sectionalpha, index) => (
        <div key={sectionalpha.id} className="neu-flat p-8 rounded-2xl space-y-4">
          <h2 className="text-2xl font-bold text-[#1a202c]">{sectionalpha.title}</h2>
          <div className="prose prose-gray max-w-none">
            {sectionalpha.subsections.map((itemdata) => (
              <div
                key={itemdata.id}
              >
                <h2 className="text-2xl font-bold text-[#1a202c]">{itemdata.title}</h2>
                <div
                  style={{
                    boxShadow: '0px 5px 8px 0px rgba(0, 0, 0, 0.25)',
                    padding: '10px 20px',
                    borderRadius: '15px',
                    margin: '10px 0px',
                  }}
                >
                  {itemdata?.content?.map((mappedcontent) => {
                    <h2 className="text-2xl font-bold text-[#1a202c]">{mappedcontent?.titlesubsection}</h2>
                    if (mappedcontent.imagedata) {
                      return (
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: '30px',
                            marginBottom: '30px',
                          }}
                        >
                          <img
                            src={`/${jsondata.origin}/${mappedcontent.imagedata}.png`}
                            alt={mappedcontent.descriptionImage}
                            style={{
                              maxWidth: '80%',
                              width: 'auto',
                              objectFit: 'contain',
                            }}
                          />
                          <div
                            style={{
                              color: 'rgba(8, 8, 8, 1)',
                              fontWeight: 800,
                              fontSize: '16px',
                              lineHeight: '26px',
                              marginTop: '20px',
                              marginBottom: '20px',
                            }}
                          >
                            {mappedcontent.descriptionImage}
                          </div>
                        </div>

                      )
                    }
                    if (mappedcontent?.listData && mappedcontent?.listData.length > 0) {
                      return (<ul>
                        {mappedcontent.listData.map((itemlist) => (
                          <li
                            style={{
                              color: 'rgba(8, 8, 8, 1)',
                              fontWeight: 400,
                              fontSize: '16px',
                              lineHeight: '26px',
                              marginTop: '20px',
                              marginBottom: '20px',
                            }}
                          >
                            <b>{itemlist.bulletPoint}</b> {itemlist.infoBulletPoint}
                          </li>
                        ))}
                      </ul>)
                    }
                    if (mappedcontent?.titlesubsection) {
                      return (
                      <div
                        style={{
                          color: 'rgba(8, 8, 8, 1)',
                          fontWeight: 700,
                          fontSize: '18px',
                          lineHeight: '26px',
                          marginTop: '30px',
                          marginBottom: '30px',
                          textAlign: 'justify',
                          fontStyle: 'italic'
                        }}
                      >
                        {mappedcontent.titlesubsection}
                      </div>
                    )
                    }
                    return (
                      <div
                        style={{
                          color: 'rgba(8, 8, 8, 1)',
                          fontWeight: 500,
                          fontSize: '15px',
                          lineHeight: '26px',
                          marginTop: '30px',
                          marginBottom: '30px',
                          textAlign: 'justify',
                        }}
                      >
                        {mappedcontent.textinfo}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}