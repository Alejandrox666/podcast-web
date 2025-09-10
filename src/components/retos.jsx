import React, { useState } from 'react';
import styled from 'styled-components';

// Contenedor principal
const RetosContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

// Encabezado
const Header = styled.header`
  text-align: center;
  margin-bottom: 40px;
  padding: 30px;
  background: linear-gradient(135deg, #1abc9c 0%, #16a085 100%);
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

// Selector de tecnologías
const Selector = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  flex-wrap: wrap;
  gap: 10px;
`;

const BotonTecnologia = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 50px;
  background: ${props => props.active ? '#1abc9c' : '#e0e0e0'};
  color: ${props => props.active ? 'white' : '#666'};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background: ${props => props.active ? '#16a085' : '#d0d0d0'};
    transform: translateY(-2px);
  }
`;

// Detalles de la tecnología
const DetalleTecnologia = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-bottom: 40px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const InfoTecnologia = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);

  h2 {
    color: #1abc9c;
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
    color: #1abc9c;
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
      color: #16a085;
      font-weight: bold;
      position: absolute;
      left: 0;
    }
  }
`;

const CasosUso = styled.div`
  h3 {
    color: #1abc9c;
    margin-bottom: 15px;
    font-size: 1.3rem;
  }

  p {
    background: #f9f9f9;
    padding: 15px;
    border-radius: 8px;
    border-left: 4px solid #16a085;
  }
`;

const ImagenTecnologia = styled.div`
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
    color: #1abc9c;
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

// Soluciones y estrategias
const Soluciones = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  margin-bottom: 40px;

  h2 {
    text-align: center;
    color: #1abc9c;
    margin-bottom: 25px;
    font-size: 1.8rem;
  }
`;

const Solucion = styled.div`
  margin-bottom: 25px;
  
  h3 {
    color: #1abc9c;
    margin-bottom: 15px;
    font-size: 1.3rem;
  }
  
  p {
    margin-bottom: 15px;
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
      color: #16a085;
      font-weight: bold;
      position: absolute;
      left: 0;
    }
  }
`;

// Tendencias futuras
const Tendencias = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  margin-bottom: 40px;

  h2 {
    text-align: center;
    color: #1abc9c;
    margin-bottom: 25px;
    font-size: 1.8rem;
  }
`;

const Tendencia = styled.div`
  margin-bottom: 25px;
  
  h3 {
    color: #1abc9c;
    margin-bottom: 15px;
    font-size: 1.3rem;
  }
  
  p {
    margin-bottom: 15px;
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
    color: #1abc9c;
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
const Retos = () => {
  const [tecnologiaActiva, setTecnologiaActiva] = useState('ia');

  const tecnologias = {
    ia: {
      nombre: 'Inteligencia Artificial',
      descripcion: 'La integración de IA en aplicaciones móviles presenta desafíos únicos relacionados con el procesamiento en el dispositivo, la privacidad de datos, la latencia y el consumo de recursos. Estos retos requieren arquitecturas especializadas que equilibren capacidades avanzadas con limitaciones prácticas.',
      retos: [
        'Procesamiento en dispositivo vs. cloud: equilibrio entre privacidad y capacidad',
        'Consumo de batería y recursos computacionales',
        'Tamaño de modelos y actualizaciones over-the-air',
        'Latencia en inferencias en tiempo real',
        'Privacidad y ética en el procesamiento de datos'
      ],
      soluciones: [
        'Modelos optimizados para móviles (TensorFlow Lite, Core ML)',
        'Arquitecturas híbridas: inferencia local con entrenamiento en cloud',
        'Caching inteligente de modelos y resultados',
        'Federated Learning: entrenamiento descentralizado',
        'Edge computing: procesamiento cerca del usuario'
      ],
      casos: [
        'Asistentes virtuales y chatbots inteligentes',
        'Reconocimiento de imágenes y visión por computadora',
        'Procesamiento de lenguaje natural',
        'Sistemas de recomendación personalizados',
        'Detección de fraudes y seguridad'
      ],
      uso: 'Ideal para aplicaciones que requieren capacidades cognitivas, personalización avanzada o procesamiento inteligente de datos del usuario.',
      imagen: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop'
    },
    iot: {
      nombre: 'Internet de las Cosas (IoT)',
      descripcion: 'La conexión de aplicaciones móviles con ecosistemas IoT introduce desafíos de conectividad heterogénea, gestión de dispositivos, seguridad y escalabilidad masiva. Las arquitecturas deben ser resilientes ante conexiones intermitentes y diversos protocolos.',
      retos: [
        'Diversidad de protocolos de comunicación (BLE, WiFi, LoRaWAN, etc.)',
        'Gestión de conexiones simultáneas masivas',
        'Seguridad en dispositivos con recursos limitados',
        'Sincronización de datos en entornos con conectividad intermitente',
        'Interoperabilidad entre fabricantes y estándares'
      ],
      soluciones: [
        'Arquitecturas basadas en gateways y hubs intermedios',
        'Protocolos ligeros como MQTT para comunicación eficiente',
        'Edge computing para procesamiento cerca de los dispositivos',
        'Gestión centralizada de identidad y acceso',
        'Patrones de diseño para tolerancia a fallos de conexión'
      ],
      casos: [
        'Hogares inteligentes y domótica',
        'Wearables y dispositivos de salud conectados',
        'Ciudades inteligentes e infraestructura',
        'Industrial IoT y mantenimiento predictivo',
        'Agricultura de precisión y monitorización ambiental'
      ],
      uso: 'Aplicaciones que interactúan con sensores, actuadores y dispositivos inteligentes, requiriendo gestión de estado distribuido y comunicación bidireccional confiable.',
      imagen: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=600&h=400&fit=crop'
    },
    realidad: {
      nombre: 'Realidad Aumentada y Virtual',
      descripcion: 'AR y VR demandan arquitecturas que soporten procesamiento gráfico intensivo, tracking de movimiento preciso, baja latencia y integración con sensores hardware. Los retos incluyen sincronización multimodal y gestión de recursos en tiempo real.',
      retos: [
        'Baja latencia para evitar motion sickness en VR',
        'Procesamiento de sensores en tiempo real (cámaras, giroscopios, acelerómetros)',
        'Integración con hardware específico y sensores',
        'Renderizado 3D eficiente en dispositivos móviles',
        'Sincronización precisa entre mundo real y virtual'
      ],
      soluciones: [
        'Arquitecturas de renderizado híbrido (cloud + dispositivo)',
        'Optimizaciones específicas por hardware (Metal, Vulkan)',
        'Streaming de contenidos 3D con niveles de detalle adaptativos',
        'Precaching agresivo de assets críticos',
        'Técnicas de reproyección y timewarp para mantener framerates'
      ],
      casos: [
        'Juegos y entretenimiento inmersivo',
        'Visualización de productos y comercio electrónico',
        'Educación y formación mediante simulaciones',
        'Navegación y wayfinding aumentado',
        'Herramientas de diseño y prototipado'
      ],
      uso: 'Aplicaciones que superponen información digital sobre el mundo real o crean entornos completamente virtuales, requiriendo alto rendimiento gráfico y precisión en tracking.',
      imagen: 'https://images.unsplash.com/photo-1591115765373-5207764f72e2?w=600&h=400&fit=crop'
    },
    blockchain: {
      nombre: 'Blockchain y Web3',
      descripcion: 'La integración de tecnologías blockchain y conceptos Web3 introduce desafíos de descentralización, gestión de identidad auto-soberana, interacción con smart contracts y reconciliación entre sistemas centralizados y descentralizados.',
      retos: [
        'Latencia en confirmaciones de transacciones blockchain',
        'Gestión segura de claves privadas en dispositivos móviles',
        'Interoperabilidad entre diferentes blockchains y Layer 2',
        'Costo de transacciones (gas fees) y experiencia de usuario',
        'Reconciliación entre datos on-chain y off-chain'
      ],
      soluciones: [
        'Wallet connectors y proveedores de infraestructura (WalletConnect, Magic)',
        'Capas de abstracción para simplificar interacción con blockchain',
        'Indexing services para consultas eficientes (The Graph)',
        'Soluciones Layer 2 para reducir costos y latencia',
        'Patrones híbridos que combinan centralized y decentralized systems'
      ],
      casos: [
        'Aplicaciones DeFi (Finanzas Descentralizadas)',
        'NFT marketplaces y colecciones digitales',
        'Identidad digital auto-soberana y reputación',
        'Sistemas de votación y gobernanza descentralizada',
        'Aplicaciones de logística y trazabilidad'
      ],
      uso: 'Aplicaciones que requieren verificación descentralizada, propiedad digital verificable o sistemas resistentes a la censura, donde la confianza distribuida es un requisito fundamental.',
      imagen: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?w=600&h=400&fit=crop'
    }
  };

  return (
    <RetosContainer>
      <Header>
        <h1>Retos Arquitectónicos con Tecnologías Emergentes</h1>
        <p>Desafíos y soluciones para integrar IA, IoT, Realidad Aumentada y Blockchain en aplicaciones móviles modernas</p>
      </Header>

      <Selector>
        {Object.keys(tecnologias).map(key => (
          <BotonTecnologia
            key={key}
            active={tecnologiaActiva === key}
            onClick={() => setTecnologiaActiva(key)}
          >
            {tecnologias[key].nombre.split(' ')[0]}
          </BotonTecnologia>
        ))}
      </Selector>

      <DetalleTecnologia>
        <InfoTecnologia>
          <h2>{tecnologias[tecnologiaActiva].nombre}</h2>
          <p>{tecnologias[tecnologiaActiva].descripcion}</p>
          
          <Caracteristicas>
            <Caracteristica>
              <h3>Principales Retos</h3>
              <ul>
                {tecnologias[tecnologiaActiva].retos.map((reto, index) => (
                  <li key={index}>{reto}</li>
                ))}
              </ul>
            </Caracteristica>
            
            <Caracteristica>
              <h3>Soluciones Arquitectónicas</h3>
              <ul>
                {tecnologias[tecnologiaActiva].soluciones.map((solucion, index) => (
                  <li key={index}>{solucion}</li>
                ))}
              </ul>
            </Caracteristica>
          </Caracteristicas>
          
          <CasosUso>
            <h3>Casos de Uso Comunes</h3>
            <ul>
              {tecnologias[tecnologiaActiva].casos.map((caso, index) => (
                <li key={index}>{caso}</li>
              ))}
            </ul>
          </CasosUso>
        </InfoTecnologia>
        
        <ImagenTecnologia>
          <img src={tecnologias[tecnologiaActiva].imagen} alt={tecnologias[tecnologiaActiva].nombre} />
          <Diagrama>
            <h4>Arquitectura para {tecnologias[tecnologiaActiva].nombre}</h4>
            <div className="placeholder">
              Diagrama generado con IA mostrando la integración de {tecnologias[tecnologiaActiva].nombre.toLowerCase()} en aplicaciones móviles
            </div>
          </Diagrama>
        </ImagenTecnologia>
      </DetalleTecnologia>

      <Soluciones>
        <h2>Patrones Comunes para Tecnologías Emergentes</h2>
        
        <Solucion>
          <h3>Arquitectura Híbrida Edge-Cloud</h3>
          <p>Distribución inteligente de procesamiento entre dispositivo, edge y cloud para optimizar latencia, privacidad y eficiencia energética.</p>
          <ul>
            <li>Ventaja: Balance óptimo entre rendimiento y eficiencia</li>
            <li>Desafío: Mayor complejidad de implementación y coordinación</li>
            <li>Aplicación: Ideal para IA, IoT y procesamiento de sensores</li>
          </ul>
        </Solucion>
        
        <Solucion>
          <h3>Adaptive Quality of Service</h3>
          <p>Sistemas que ajustan dinámicamente la calidad del servicio basándose en condiciones de red, capacidad del dispositivo y prioridades del usuario.</p>
          <ul>
            <li>Ventaja: Experiencia consistente en condiciones variables</li>
            <li>Desafío: Lógica compleja de adaptación y toma de decisiones</li>
            <li>Aplicación: Esencial para AR/VR y aplicaciones en tiempo real</li>
          </ul>
        </Solucion>
        
        <Solucion>
          <h3>Data Federation y Sincronización Multinube</h3>
          <p>Integración de datos entre sistemas centralizados, descentralizados y diferentes proveedores cloud con consistencia eventual.</p>
          <ul>
            <li>Ventaja: Flexibilidad para utilizar múltiples proveedores y tecnologías</li>
            <li>Desafío: Complejidad en la gestión de consistencia y resolución de conflictos</li>
            <li>Aplicación: Crucial para blockchain y sistemas híbridos Web2-Web3</li>
          </ul>
        </Solucion>
      </Soluciones>

      <Tendencias>
        <h2>Tendencias Futuras y Consideraciones</h2>
        
        <Tendencia>
          <h3>Computación Cuántica y Seguridad Post-Cuántica</h3>
          <p>Preparación para la era cuántica con algoritmos resistentes a ataques cuánticos y arquitecturas que puedan aprovechar la computación cuántica cuando esté disponible.</p>
        </Tendencia>
        
        <Tendencia>
          <h3>Ambient Computing e Inteligencia Ambiental</h3>
          <p>Sistemas que desaparecen en el fondo, anticipando necesidades del usuario y proporcionando experiencias continuas entre múltiples dispositivos y contextos.</p>
        </Tendencia>
        
        <Tendencia>
          <h3>Ethical by Design y Privacidad Incorporada</h3>
          <p>Arquitecturas que incorporan principios éticos y de privacidad desde su diseño fundamental, no como añadidos posteriores.</p>
        </Tendencia>
        
        <Tendencia>
          <h3>Sostenibilidad y Eficiencia Energética</h3>
          <p>Enfoque en arquitecturas que minimicen el consumo energético y el impacto ambiental, tanto en dispositivos como en infraestructura cloud.</p>
        </Tendencia>
      </Tendencias>

      <Conclusión>
        <h2>Conclusión</h2>
        <p>
          La integración de tecnologías emergentes en aplicaciones móviles presenta desafíos arquitectónicos significativos que
          requieren soluciones innovadoras y especializadas. La clave del éxito está en adoptar arquitecturas flexibles y
          adaptativas que puedan evolucionar con el rápido ritmo de cambio tecnológico. Los patrones híbridos, que combinan
          procesamiento local con capacidades cloud, y las arquitecturas descentralizadas, que distribuyen inteligencia y control,
          serán cada vez más importantes. Independientemente de la tecnología específica, los principios fundamentales de
          diseño—modularidad, resiliencia, escalabilidad y seguridad—siguen siendo cruciales para construir aplicaciones
          móviles que puedan aprovechar todo el potencial de estas tecnologías emergentes mientras proporcionan experiencias
          de usuario excepcionales.
        </p>
      </Conclusión>
    </RetosContainer>
  );
};

export default Retos;