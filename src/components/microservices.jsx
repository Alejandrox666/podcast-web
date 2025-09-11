import React, { useState } from 'react';
import styled from 'styled-components';

// Contenedor principal
const MicroservicesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

// Encabezado
const Header = styled.header`
  text-align: center;
  margin-bottom: 40px;
  padding: 30px;
  background: linear-gradient(135deg, #e67e22 0%, #d35400 100%);
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

// Selector de temas
const Selector = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  flex-wrap: wrap;
  gap: 10px;
`;

const BotonTema = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 50px;
  background: ${props => props.active ? '#e67e22' : '#e0e0e0'};
  color: ${props => props.active ? 'white' : '#666'};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background: ${props => props.active ? '#d35400' : '#d0d0d0'};
    transform: translateY(-2px);
  }
`;

// Detalles del tema
const DetalleTema = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-bottom: 40px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const InfoTema = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);

  h2 {
    color: #e67e22;
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
    color: #e67e22;
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
      color: #d35400;
      font-weight: bold;
      position: absolute;
      left: 0;
    }
  }
`;

const CasosUso = styled.div`
  h3 {
    color: #e67e22;
    margin-bottom: 15px;
    font-size: 1.3rem;
  }

  p {
    background: #f9f9f9;
    padding: 15px;
    border-radius: 8px;
    border-left: 4px solid #d35400;
  }
`;

const ImagenTema = styled.div`
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
    color: #e67e22;
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

// Patrones y estrategias
const Patrones = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  margin-bottom: 40px;

  h2 {
    text-align: center;
    color: #e67e22;
    margin-bottom: 25px;
    font-size: 1.8rem;
  }
`;

const Patron = styled.div`
  margin-bottom: 25px;
  
  h3 {
    color: #e67e22;
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
      color: #d35400;
      font-weight: bold;
      position: absolute;
      left: 0;
    }
  }
`;

// Herramientas y tecnologías
const Herramientas = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  margin-bottom: 40px;

  h2 {
    text-align: center;
    color: #e67e22;
    margin-bottom: 25px;
    font-size: 1.8rem;
  }
`;

const CategoriaHerramientas = styled.div`
  margin-bottom: 25px;
  
  h3 {
    color: #e67e22;
    margin-bottom: 15px;
    font-size: 1.3rem;
  }
  
  ul {
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 15px;
  }

  li {
    padding: 12px;
    background: #f9f9f9;
    border-radius: 8px;
    border-left: 4px solid #e67e22;
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
    color: #e67e22;
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
const Microservices = () => {
  const [temaActivo, setTemaActivo] = useState('microservices');

  // Mapear el tema activo a la imagen local correspondiente
  const imagenesLocales = {
    microservices: '/arquitectura_microservicios.png',
    escalabilidad: '/estrategias_escalabilidad.png',
    patrones: '/patrones_comunicacion.png',
    devops: '/devops_contenedores.png'
  };

  const temas = {
    microservices: {
      nombre: 'Arquitectura de Microservicios',
      descripcion: 'La arquitectura de microservicios es un enfoque para desarrollar una aplicación única como un conjunto de servicios pequeños, cada uno ejecutándose en su propio proceso y comunicándose con mecanismos ligeros. Estos servicios están altamente desacoplados y se centran en una única capacidad de negocio.',
      principios: [
        'Servicios centrados en capacidades de negocio específicas',
        'Despliegue independiente de cada servicio',
        'Descentralización de la gestión de datos',
        'Diseño para fallos y resiliencia',
        'Infraestructura automatizada'
      ],
      beneficios: [
        'Escalabilidad granular: escalar solo los servicios necesarios',
        'Libertad tecnológica: cada servicio puede usar diferentes tecnologías',
        'Desarrollo paralelo: equipos pueden trabajar independientemente',
        'Mayor resiliencia: fallos en un servicio no afectan toda la aplicación',
        'Despliegue continuo más fácil'
      ],
      desafios: [
        'Mayor complejidad operativa',
        'Comunicación entre servicios puede ser compleja',
        'Consistencia de datos distribuidos',
        'Pruebas más complejas',
        'Mayor overhead de red'
      ],
      uso: 'Ideal para aplicaciones complejas con múltiples equipos de desarrollo, que requieren alta escalabilidad y disponibilidad, o que necesitan adoptar múltiples tecnologías.',
      imagen: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop'
    },
    escalabilidad: {
      nombre: 'Estrategias de Escalabilidad',
      descripcion: 'La escalabilidad en aplicaciones móviles modernas requiere enfoques tanto en el frontend como en el backend. Las estrategias efectivas permiten manejar crecimiento de usuarios, datos y tráfico sin degradar el rendimiento.',
      estrategiasBackend: [
        'Escalado horizontal: añadir más instancias de servidores',
        'Escalado vertical: mejorar recursos de servidores existentes',
        'Balanceo de carga: distribuir tráfico entre múltiples servidores',
        'Caching: reducir carga con almacenamiento en caché',
        'Base de datos distribuidas: sharding y replicación'
      ],
      estrategiasFrontend: [
        'Lazy loading: cargar recursos solo cuando se necesitan',
        'Optimización de assets: comprimir imágenes y código',
        'CDN: usar redes de distribución de contenido',
        'Code splitting: dividir código en chunks más pequeños',
        'Optimización de rendimiento: reducir cálculos pesados en el dispositivo'
      ],
      metricas: [
        'Throughput: número de solicitudes por segundo',
        'Latencia: tiempo de respuesta de las solicitudes',
        'Concurrencia: número de usuarios simultáneos',
        'Tiempo de actividad: disponibilidad del sistema',
        'Uso de recursos: CPU, memoria, ancho de banda'
      ],
      uso: 'Aplicable a cualquier aplicación que espera crecimiento en usuarios o tráfico. Las estrategias específicas dependen del patrón de uso, tipo de aplicación y recursos disponibles.',
      imagen: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop'
    },
    patrones: {
      nombre: 'Patrones de Comunicación',
      descripcion: 'En arquitecturas distribuidas y microservicios, los patrones de comunicación determinan cómo interactúan los diferentes componentes. La elección del patrón adecuado afecta el rendimiento, la resiliencia y la complejidad del sistema.',
      patronesSincronos: [
        'REST: estilo arquitectónico basado en HTTP',
        'gRPC: framework RPC de alto rendimiento de Google',
        'GraphQL: lenguaje de consulta para APIs',
        'WebSocket: comunicación bidireccional en tiempo real'
      ],
      patronesAsincronos: [
        'Message Queue: colas de mensajes (RabbitMQ, Kafka)',
        'Event Sourcing: almacenar eventos en lugar de estado',
        'Pub/Sub: patrón publicador-suscriptor',
        'CQRS: separación de lecturas y escrituras'
      ],
      consideraciones: [
        'Acoplamiento: servicios estrecha o débilmente acoplados',
        'Latencia: requisitos de tiempo de respuesta',
        'Consistencia: consistencia fuerte vs. eventual',
        'Tolerancia a fallos: manejo de servicios no disponibles',
        'Mantenibilidad: facilidad de comprensión y modificación'
      ],
      uso: 'La elección depende de los requisitos de consistencia, latencia y acoplamiento. APIs REST para operaciones CRUD simples, gRPC para alto rendimiento, y mensajería asíncrona para operaciones background.',
      imagen: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop'
    },
    devops: {
      nombre: 'DevOps y Contenedores',
      descripcion: 'La adopción de microservicios va de la mano con prácticas DevOps y el uso de contenedores. Estas tecnologías permiten implementar, escalar y gestionar microservicios de manera eficiente.',
      contenedores: [
        'Docker: plataforma para crear y ejecutar contenedores',
        'Kubernetes: orquestador de contenedores para producción',
        'Docker Compose: para desarrollo local con múltiples contenedores',
        'Container Registry: almacenamiento de imágenes de contenedores'
      ],
      practicasDevOps: [
        'CI/CD: integración y despliegue continuos',
        'Infraestructura como código: gestionar infraestructura mediante código',
        'Monitoring y logging: supervisión del rendimiento y registros',
        'Auto-escalado: escalado automático basado en métricas',
        'Blue-green deployments: implementaciones con cero tiempo de inactividad'
      ],
      herramientas: [
        'Jenkins, GitLab CI, GitHub Actions: para pipelines CI/CD',
        'Prometheus, Grafana: para monitoreo y alertas',
        'ELK Stack: para logging y análisis',
        'Terraform, Ansible: para infraestructura como código',
        'Service Mesh: para gestionar comunicación entre servicios'
      ],
      uso: 'Esencial para cualquier implementación seria de microservicios. Permite gestionar la complejidad operativa y aprovechar al máximo los beneficios de la arquitectura de microservicios.',
      imagen: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop'
    }
  };

  return (
    <MicroservicesContainer>
      <Header>
        <h1>Escalabilidad y Microservicios en Aplicaciones Móviles</h1>
        <p>Estrategias y arquitecturas para construir aplicaciones móviles escalables y mantenibles usando microservicios</p>
      </Header>

      <Selector>
        {Object.keys(temas).map(key => (
          <BotonTema
            key={key}
            active={temaActivo === key}
            onClick={() => setTemaActivo(key)}
          >
            {temas[key].nombre.split(' ')[0]}
          </BotonTema>
        ))}
      </Selector>

      <DetalleTema>
        <InfoTema>
          <h2>{temas[temaActivo].nombre}</h2>
          <p>{temas[temaActivo].descripcion}</p>
          
          <Caracteristicas>
            {temas[temaActivo].principios && (
              <Caracteristica>
                <h3>Principios Fundamentales</h3>
                <ul>
                  {temas[temaActivo].principios.map((principio, index) => (
                    <li key={index}>{principio}</li>
                  ))}
                </ul>
              </Caracteristica>
            )}
            
            {temas[temaActivo].beneficios && (
              <Caracteristica>
                <h3>Beneficios</h3>
                <ul>
                  {temas[temaActivo].beneficios.map((beneficio, index) => (
                    <li key={index}>{beneficio}</li>
                  ))}
                </ul>
              </Caracteristica>
            )}
            
            {temas[temaActivo].desafios && (
              <Caracteristica>
                <h3>Desafíos</h3>
                <ul>
                  {temas[temaActivo].desafios.map((desafio, index) => (
                    <li key={index}>{desafio}</li>
                  ))}
                </ul>
              </Caracteristica>
            )}
            
            {temas[temaActivo].estrategiasBackend && (
              <Caracteristica>
                <h3>Estrategias Backend</h3>
                <ul>
                  {temas[temaActivo].estrategiasBackend.map((estrategia, index) => (
                    <li key={index}>{estrategia}</li>
                  ))}
                </ul>
              </Caracteristica>
            )}
            
            {temas[temaActivo].estrategiasFrontend && (
              <Caracteristica>
                <h3>Estrategias Frontend</h3>
                <ul>
                  {temas[temaActivo].estrategiasFrontend.map((estrategia, index) => (
                    <li key={index}>{estrategia}</li>
                  ))}
                </ul>
              </Caracteristica>
            )}
            
            {temas[temaActivo].metricas && (
              <Caracteristica>
                <h3>Métricas Clave</h3>
                <ul>
                  {temas[temaActivo].metricas.map((metrica, index) => (
                    <li key={index}>{metrica}</li>
                  ))}
                </ul>
              </Caracteristica>
            )}
            
            {temas[temaActivo].patronesSincronos && (
              <Caracteristica>
                <h3>Patrones Síncronos</h3>
                <ul>
                  {temas[temaActivo].patronesSincronos.map((patron, index) => (
                    <li key={index}>{patron}</li>
                  ))}
                </ul>
              </Caracteristica>
            )}
            
            {temas[temaActivo].patronesAsincronos && (
              <Caracteristica>
                <h3>Patrones Asíncronos</h3>
                <ul>
                  {temas[temaActivo].patronesAsincronos.map((patron, index) => (
                    <li key={index}>{patron}</li>
                  ))}
                </ul>
              </Caracteristica>
            )}
            
            {temas[temaActivo].consideraciones && (
              <Caracteristica>
                <h3>Consideraciones</h3>
                <ul>
                  {temas[temaActivo].consideraciones.map((consideracion, index) => (
                    <li key={index}>{consideracion}</li>
                  ))}
                </ul>
              </Caracteristica>
            )}
            
            {temas[temaActivo].contenedores && (
              <Caracteristica>
                <h3>Contenedores</h3>
                <ul>
                  {temas[temaActivo].contenedores.map((contenedor, index) => (
                    <li key={index}>{contenedor}</li>
                  ))}
                </ul>
              </Caracteristica>
            )}
            
            {temas[temaActivo].practicasDevOps && (
              <Caracteristica>
                <h3>Prácticas DevOps</h3>
                <ul>
                  {temas[temaActivo].practicasDevOps.map((practica, index) => (
                    <li key={index}>{practica}</li>
                  ))}
                </ul>
              </Caracteristica>
            )}
            
            {temas[temaActivo].herramientas && (
              <Caracteristica>
                <h3>Herramientas</h3>
                <ul>
                  {temas[temaActivo].herramientas.map((herramienta, index) => (
                    <li key={index}>{herramienta}</li>
                  ))}
                </ul>
              </Caracteristica>
            )}
          </Caracteristicas>
          
          <CasosUso>
            <h3>Casos de Uso Recomendados</h3>
            <p>{temas[temaActivo].uso}</p>
          </CasosUso>
        </InfoTema>
        
        <ImagenTema>
          <img src={temas[temaActivo].imagen} alt={temas[temaActivo].nombre} />
          <Diagrama>
            <h4>Arquitectura de {temas[temaActivo].nombre.split(' ')[0]}</h4>
            <div className="placeholder">
              <img src={imagenesLocales[temaActivo]} alt={`Diagrama ${temas[temaActivo].nombre.split(' ')[0]}`} style={{maxHeight: '180px', maxWidth: '100%'}} />
            </div>
          </Diagrama>
        </ImagenTema>
      </DetalleTema>

      <Patrones>
        <h2>Patrones de Diseño para Microservicios</h2>
        
        <Patron>
          <h3>API Gateway</h3>
          <p>Un punto único de entrada que enruta solicitudes a los microservicios apropiados, proporcionando cross-cutting concerns como autenticación, logging y limitación de tasa.</p>
          <ul>
            <li>Ventaja: Simplifica el cliente al ocultar la complejidad backend</li>
            <li>Desventaja: Puede convertirse en un cuello de botella</li>
            <li>Implementaciones: Netflix Zuul, Kong, AWS API Gateway</li>
          </ul>
        </Patron>
        
        <Patron>
          <h3>Service Discovery</h3>
          <p>Mecanismo automático para detectar la ubicación de instancias de servicio en un entorno dinámico donde las direcciones IP cambian frecuentemente.</p>
          <ul>
            <li>Ventaja: Permite escalado dinámico y tolerancia a fallos</li>
            <li>Desventaja: Añade complejidad de configuración</li>
            <li>Implementaciones: Netflix Eureka, Consul, etcd, Zookeeper</li>
          </ul>
        </Patron>
        
        <Patron>
          <h3>Circuit Breaker</h3>
          <p>Patrón que detecta fallos y evita que se propaguen, proporcionando respuestas de fallback cuando un servicio no está disponible.</p>
          <ul>
            <li>Ventaja: Mejora la resiliencia del sistema</li>
            <li>Desventaja: Requiere lógica adicional para manejar fallos</li>
            <li>Implementaciones: Netflix Hystrix, Resilience4j, Istio</li>
          </ul>
        </Patron>
      </Patrones>

      <Herramientas>
        <h2>Herramientas y Tecnologías para Microservicios</h2>
        
        <CategoriaHerramientas>
          <h3>Orquestación de Contenedores</h3>
          <ul>
            <li>Kubernetes</li>
            <li>Docker Swarm</li>
            <li>Amazon ECS</li>
            <li>OpenShift</li>
            <li>Nomad</li>
          </ul>
        </CategoriaHerramientas>
        
        <CategoriaHerramientas>
          <h3>Mensajería y Eventos</h3>
          <ul>
            <li>Apache Kafka</li>
            <li>RabbitMQ</li>
            <li>Amazon SQS/SNS</li>
            <li>Redis Pub/Sub</li>
            <li>Google Pub/Sub</li>
          </ul>
        </CategoriaHerramientas>
        
        <CategoriaHerramientas>
          <h3>Monitoreo y Observabilidad</h3>
          <ul>
            <li>Prometheus + Grafana</li>
            <li>ELK Stack (Elasticsearch, Logstash, Kibana)</li>
            <li>Jaeger para tracing distribuido</li>
            <li>Datadog</li>
            <li>New Relic</li>
          </ul>
        </CategoriaHerramientas>
        
        <CategoriaHerramientas>
          <h3>Seguridad</h3>
          <ul>
            <li>OAuth2/OpenID Connect</li>
            <li>JWT para tokens de autenticación</li>
            <li>Istio Service Mesh</li>
            <li>Vault para gestión de secretos</li>
            <li>API Gateways con WAF</li>
          </ul>
        </CategoriaHerramientas>
      </Herramientas>

      <Conclusión>
        <h2>Conclusión</h2>
        <p>
          La arquitectura de microservicios y las estrategias de escalabilidad modernas permiten construir aplicaciones móviles
          que pueden crecer de manera orgánica, adaptarse a cambios en la demanda y mantenerse resilientes ante fallos. Si bien
          introducen complejidad operativa, los beneficios en términos de escalabilidad, mantenibilidad y velocidad de desarrollo
          justifican esta inversión para aplicaciones de mediana y gran escala. La clave del éxito está en elegir los patrones
          adecuados para el contexto específico, adoptar prácticas DevOps sólidas y utilizar las herramientas que mejor se
          alineen con los requisitos técnicos y de negocio.
        </p>
      </Conclusión>
    </MicroservicesContainer>
  );
};

export default Microservices;