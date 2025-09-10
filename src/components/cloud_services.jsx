import React, { useState } from 'react';
import styled from 'styled-components';

// Contenedor principal
const CloudContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

// Encabezado
const Header = styled.header`
  text-align: center;
  margin-bottom: 40px;
  padding: 30px;
  background: linear-gradient(135deg, #3498db 0%, #2ecc71 100%);
  border-radius: 12px;
  color: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 2.5rem;
    margin-bottom: 15px;
  }

  p {
    font-size: 1.2rem;
    opacity: 0.9;
  }
`;

// Selector de servicios
const Selector = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  flex-wrap: wrap;
  gap: 10px;
`;

const BotonServicio = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 50px;
  background: ${props => props.active ? '#3498db' : '#e0e0e0'};
  color: ${props => props.active ? 'white' : '#666'};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background: ${props => props.active ? '#2980b9' : '#d0d0d0'};
    transform: translateY(-2px);
  }
`;

// Detalles del servicio
const DetalleServicio = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-bottom: 40px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const InfoServicio = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);

  h2 {
    color: #3498db;
    margin-bottom: 20px;
    font-size: 1.8rem;
  }

  p {
    margin-bottom: 25px;
    font-size: 1.1rem;
  }
`;

const Caracteristicas = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 25px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Caracteristica = styled.div`
  h3 {
    color: #3498db;
    margin-bottom: 15px;
    font-size: 1.3rem;
  }

  ul {
    list-style-type: none;
  }

  li {
    padding: 8px 0;
    border-bottom: 1px solid #eee;
    position: relative;
    padding-left: 20px;

    &:before {
      content: "•";
      color: #2ecc71;
      font-weight: bold;
      position: absolute;
      left: 0;
    }
  }
`;

const CasosUso = styled.div`
  h3 {
    color: #3498db;
    margin-bottom: 15px;
    font-size: 1.3rem;
  }

  p {
    background: #f9f9f9;
    padding: 15px;
    border-radius: 8px;
    border-left: 4px solid #2ecc71;
  }
`;

const ImagenServicio = styled.div`
  img {
    width: 100%;
    border-radius: 12px;
    margin-bottom: 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const Diagrama = styled.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);

  h4 {
    color: #3498db;
    margin-bottom: 15px;
    text-align: center;
  }

  .placeholder {
    height: 200px;
    background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #888;
    font-style: italic;
  }
`;

// Tabla comparativa
const Comparacion = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  margin-bottom: 40px;

  h2 {
    text-align: center;
    color: #3498db;
    margin-bottom: 25px;
    font-size: 1.8rem;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th, td {
    padding: 15px;
    text-align: center;
    border-bottom: 1px solid #eee;
  }

  th {
    background: #f9f9f9;
    font-weight: 600;
    color: #555;
  }

  tr.active {
    background: #eaf7ff;
  }

  tr:hover {
    background: #f9f9f9;
  }
`;

// Conclusión
const Conclusión = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: center;

  h2 {
    color: #3498db;
    margin-bottom: 20px;
    font-size: 1.8rem;
  }

  p {
    font-size: 1.1rem;
    max-width: 800px;
    margin: 0 auto;
  }
`;

// Componente principal
const CloudServices = () => {
  const [servicioActivo, setServicioActivo] = useState('aws');

  const servicios = {
    aws: {
      nombre: 'Amazon Web Services (AWS)',
      descripcion: 'AWS es la plataforma de computación en la nube más amplia y adoptada, que ofrece más de 200 servicios completos de centros de datos a nivel global. Es ideal para aplicaciones móviles que requieren escalabilidad, alta disponibilidad y un ecosistema completo de servicios.',
      beneficios: [
        'Amplia gama de servicios disponibles',
        'Alta escalabilidad y flexibilidad',
        'Infraestructura global con múltiples regiones',
        'Modelo de precios de pago por uso',
        'Amplia documentación y comunidad'
      ],
      serviciosMoviles: [
        'AWS Amplify para desarrollo frontend y backend',
        'Amazon Cognito para autenticación y autorización',
        'AWS AppSync para APIs GraphQL',
        'Amazon S3 para almacenamiento de objetos',
        'AWS Lambda para funciones sin servidor'
      ],
      uso: 'Ideal para startups y empresas que buscan una solución completa en la nube con amplia escalabilidad y un ecosistema maduro de servicios.',
      imagen: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=400&fit=crop'
    },
    azure: {
      nombre: 'Microsoft Azure',
      descripcion: 'Azure es la plataforma de computación en la nube de Microsoft, que ofrece una creciente colección de servicios integrados para computación, análisis, almacenamiento y redes. Se integra perfectamente con herramientas de Microsoft y es popular en entornos empresariales.',
      beneficios: [
        'Integración perfecta con herramientas Microsoft',
        'Excelente para entornos híbridos',
        'Fuertes capacidades de IA y machine learning',
        'Cumplimiento normativo robusto',
        'Opciones de implementación flexibles'
      ],
      serviciosMoviles: [
        'Azure App Service para aplicaciones móviles',
        'Azure Active Directory B2C para identidad',
        'Azure Functions para computación sin servidor',
        'Azure Cosmos DB para bases de datos multimodelo',
        'Azure Notification Hubs para notificaciones push'
      ],
      uso: 'Perfecto para empresas que ya utilizan productos Microsoft y necesitan una solución cloud híbrida con fuertes capacidades empresariales.',
      imagen: 'https://images.unsplash.com/photo-1634084462412-b3c2db0f6c21?w=600&h=400&fit=crop'
    },
    google: {
      nombre: 'Google Cloud Platform (GCP)',
      descripcion: 'GCP es la suite de computación en la nube de Google que funciona sobre la misma infraestructura que utiliza para sus productos como Google Search y YouTube. Destaca en análisis de datos, machine learning y servicios administrados.',
      beneficios: [
        'Fortaleza en análisis de datos y machine learning',
        'Precios competitivos y descuentos por uso sostenido',
        'Red global de fibra de alto rendimiento',
        'Compromiso con la energía renovable',
        'Herramientas modernas de desarrollo'
      ],
      serviciosMoviles: [
        'Firebase para desarrollo de aplicaciones móviles',
        'Google Kubernetes Engine para orquestación de contenedores',
        'Cloud Firestore para bases de datos NoSQL',
        'Cloud Functions para lógica de backend',
        'Google Analytics para seguimiento de usuarios'
      ],
      uso: 'Ideal para aplicaciones que requieren capacidades avanzadas de análisis de datos, machine learning o que utilizan el ecosistema de Firebase.',
      imagen: 'https://images.unsplash.com/photo-1563207153-f403bf289096?w=600&h=400&fit=crop'
    },
    firebase: {
      nombre: 'Firebase (Google)',
      descripcion: 'Firebase es una plataforma desarrollada por Google para crear aplicaciones web y móviles. Ofrece herramientas para el desarrollo de aplicaciones, crecimiento y engagement de usuarios, y monetización.',
      beneficios: [
        'Desarrollo rápido con SDKs fáciles de usar',
        'Backend como servicio (BaaS) sin administración de servidores',
        'Integración perfecta con otros servicios de Google',
        'Enfoque especializado en aplicaciones móviles',
        'Plan gratuito generoso con escalado gradual'
      ],
      serviciosMoviles: [
        'Firebase Authentication para autenticación',
        'Cloud Firestore y Realtime Database para almacenamiento',
        'Firebase Cloud Messaging para notificaciones push',
        'Firebase Hosting para alojamiento web',
        'Firebase Analytics para medición de engagement'
      ],
      uso: 'Perfecto para desarrolladores y startups que necesitan lanzar aplicaciones rápidamente sin preocuparse por la infraestructura de backend.',
      imagen: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop'
    }
  };

  return (
    <CloudContainer>
      <Header>
        <h1>Integración con Servicios en la Nube</h1>
        <p>Descubre cómo los principales proveedores de nube pueden potenciar tus aplicaciones móviles con servicios escalables y seguros</p>
      </Header>

      <Selector>
        {Object.keys(servicios).map(key => (
          <BotonServicio
            key={key}
            active={servicioActivo === key}
            onClick={() => setServicioActivo(key)}
          >
            {servicios[key].nombre.split(' ')[0]}
          </BotonServicio>
        ))}
      </Selector>

      <DetalleServicio>
        <InfoServicio>
          <h2>{servicios[servicioActivo].nombre}</h2>
          <p>{servicios[servicioActivo].descripcion}</p>
          
          <Caracteristicas>
            <Caracteristica>
              <h3>Beneficios Principales</h3>
              <ul>
                {servicios[servicioActivo].beneficios.map((beneficio, index) => (
                  <li key={index}>{beneficio}</li>
                ))}
              </ul>
            </Caracteristica>
            
            <Caracteristica>
              <h3>Servicios para Móviles</h3>
              <ul>
                {servicios[servicioActivo].serviciosMoviles.map((servicio, index) => (
                  <li key={index}>{servicio}</li>
                ))}
              </ul>
            </Caracteristica>
          </Caracteristicas>
          
          <CasosUso>
            <h3>Casos de Uso Recomendados</h3>
            <p>{servicios[servicioActivo].uso}</p>
          </CasosUso>
        </InfoServicio>
        
        <ImagenServicio>
          <img src={servicios[servicioActivo].imagen} alt={servicios[servicioActivo].nombre} />
          <Diagrama>
            <h4>Arquitectura de Integración con {servicios[servicioActivo].nombre.split(' ')[0]}</h4>
            <div className="placeholder">
              Diagrama generado con IA mostrando la integración de una app móvil con {servicios[servicioActivo].nombre}
            </div>
          </Diagrama>
        </ImagenServicio>
      </DetalleServicio>

      <Comparacion>
        <h2>Comparativa entre Proveedores Cloud</h2>
        <table>
          <thead>
            <tr>
              <th>Proveedor</th>
              <th>Enfoque Principal</th>
              <th>Facilidad de Uso</th>
              <th>Precio</th>
              <th>Mejor Para</th>
            </tr>
          </thead>
          <tbody>
            <tr className={servicioActivo === 'aws' ? 'active' : ''}>
              <td>AWS</td>
              <td>Ecosistema completo</td>
              <td>Media (curva de aprendizaje)</td>
              <td>Competitivo (pago por uso)</td>
              <td>Empresas y aplicaciones a gran escala</td>
            </tr>
            <tr className={servicioActivo === 'azure' ? 'active' : ''}>
              <td>Azure</td>
              <td>Integración empresarial</td>
              <td>Media-Alta (familiar para usuarios Microsoft)</td>
              <td>Competitivo</td>
              <td>Entornos empresariales e híbridos</td>
            </tr>
            <tr className={servicioActivo === 'google' ? 'active' : ''}>
              <td>Google Cloud</td>
              <td>Data analytics y ML</td>
              <td>Media</td>
              <td>Competitivo (descuentos por uso)</td>
              <td>Aplicaciones data-intensive</td>
            </tr>
            <tr className={servicioActivo === 'firebase' ? 'active' : ''}>
              <td>Firebase</td>
              <td>Desarrollo rápido de apps</td>
              <td>Alta (muy desarrollador-friendly)</td>
              <td>Accesible (plan gratuito generoso)</td>
              <td>Startups y desarrollo ágil</td>
            </tr>
          </tbody>
        </table>
      </Comparacion>

      <Conclusión>
        <h2>Conclusión</h2>
        <p>
          La integración con servicios en la nube es esencial para aplicaciones móviles modernas que requieren escalabilidad,
          disponibilidad y funcionalidades avanzadas. La elección del proveedor adecuado depende de tus necesidades específicas:
          AWS para un ecosistema completo, Azure para entornos empresariales, Google Cloud para análisis de datos, o Firebase
          para un desarrollo rápido y especializado en móviles. Muchas aplicaciones utilizan una combinación de estos servicios
          para aprovechar lo mejor de cada plataforma.
        </p>
      </Conclusión>
    </CloudContainer>
  );
};

export default CloudServices;