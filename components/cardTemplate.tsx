import React from 'react';
import Thumbnail from 'react-webpage-thumbnail';
import { useNavigate } from 'react-router-dom';

type CardTemplateProps = {
  url: string;
  price: number;
  name: string;
  description: string;
  idTemplate: string;
};

interface TemplateDetails {
  id: string;
  name: string;
  description: string;
  price: number;
  url: string;
}

const styles: Record<string, React.CSSProperties> = {
  boxContainer: {
    minHeight: '350px',
    borderRadius: '10px',
    backgroundColor: '#fff',
    padding: '20px',
    width: '320px',
    margin: '0px',
    boxSizing: 'border-box',
  },
  sectionContainer: {
    display: 'flex',
    flexDirection: 'row' as const,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '20px',
    marginBottom: '20px',
  },
  textStyle: {
    fontSize: '25px',
    fontWeight: 700,
  },
  descriptionStyle: {
    fontSize: '16px',
    fontWeight: 400,
    marginTop: '15px',
    marginBottom: '15px',
    textOverflow: 'ellipsis',
    height: 114,
    overflow: 'hidden',
  },
  buttonPrevStyle: {
    border: '1px solid rgba(20, 86, 158, 1)',
    padding: '10px 15px',
    color: 'rgba(20, 86, 158, 1)',
    backgroundColor: '#fff',
    borderRadius: '5px',
    fontSize: '12px',
    width: '45%',
    cursor: 'pointer',
  },
  buttonBuyStyle: {
    border: '1px solid rgba(32, 21, 73, 1)',
    padding: '10px 15px',
    color: '#fff',
    backgroundColor: 'rgba(32, 21, 73, 1)',
    borderRadius: '5px',
    fontSize: '12px',
    width: '45%',
    cursor: 'pointer',
  },
};

const CardTemplate: React.FC<CardTemplateProps> = ({
  url,
  price,
  name,
  description,
  idTemplate,
}) => {
  const navigate = useNavigate();

  const handlePreview = (): void => {
    navigate(`/previewtemplate/${idTemplate}`, {
      state: {
        templateDetails: {
          id: idTemplate,
          name,
          description,
          price,
          url,
        } as TemplateDetails,
      },
    });
  };

  return (
    <div style={styles.boxContainer}>
      <div style={{ display: 'flex', justifyContent: 'center', background: "#e9e8e5", borderRadius: '20px', padding: '20px 0' }}>
        <div style={{ display: 'flex', overflow: 'hidden', width: 240, height: 320, borderRadius: '10px' }}>
          <Thumbnail
            url={`https://${url}.loftyapps.website`}
            iframeHeight={4000}
            iframeWidth={1080}
            className='templateContainer'
          />
        </div>
      </div>
      <div style={{marginTop: 20, marginBottom: 20}}>
        <div style={{height: 60, overflowY: 'hidden', ...styles.textStyle}}>
          {
            name.length > 100 ? `${name.substring(0, 100)} ...` : name
          }
        </div>
        <div style={{color: '#29B2EF', ...styles.textStyle}}>
          {
            price > 0 ? `HNL ${price.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`
              : 'Gratis'
          }
        </div>
      </div>
      <div style={styles.descriptionStyle}>
        {
          description.length > 255 ? `${description.substring(0, 255)} ...` : description
        }
      </div>
      <div style={styles.sectionContainer}>
        <button
          style={styles.buttonPrevStyle}
          onClick={handlePreview}
        >
          Previsualizar
        </button>
        <button
          style={styles.buttonBuyStyle}
          onClick={() => {
            if (price === 0) {
              window.location.href = `https://platform.loftyapps.com?createproject=true&idtemplate=${idTemplate}`;
            } else {
              window.location.href = `https://platform.loftyapps.com/dashboard/templates/${idTemplate}`;
            }
          }}
        >
          Obtener plantilla
        </button>
      </div>
    </div>
  );
};

export default CardTemplate;
