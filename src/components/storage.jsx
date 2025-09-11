import React, { useState } from 'react';
import styled from 'styled-components';

// Contenedor principal
const StorageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

// Encabezado
const Header = styled.header`
  text-align: center;
  margin-bottom: 40px;
  padding: 30px;
  background: linear-gradient(135deg, #9b59b6 0%, #e74c3c 100%);
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
  background: ${props => props.active ? '#9b59b6' : '#e0e0e0'};
  color: ${props => props.active ? 'white' : '#666'};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background: ${props => props.active ? '#8e44ad' : '#d0d0d0'};
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
    color: #9b59b6;
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
    color: #9b59b6;
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
      color: #e74c3c;
      font-weight: bold;
      position: absolute;
      left: 0;
    }
  }
`;

const CasosUso = styled.div`
  h3 {
    color: #9b59b6;
    margin-bottom: 15px;
    font-size: 1.3rem;
  }

  p {
    background: #f9f9f9;
    padding: 15px;
    border-radius: 8px;
    border-left: 4px solid #e74c3c;
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

// Estrategias de sincronización
const Estrategias = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  margin-bottom: 40px;

  h2 {
    text-align: center;
    color: #9b59b6;
    margin-bottom: 25px;
    font-size: 1.8rem;
  }
`;

const Estrategia = styled.div`
  margin-bottom: 25px;
  
  h3 {
    color: #9b59b6;
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
      color: #e74c3c;
      font-weight: bold;
      position: absolute;
      left: 0;
    }
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
    color: #9b59b6;
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
const Storage = () => {
  const [tecnologiaActiva, setTecnologiaActiva] = useState('async');

  const tecnologias = {
    async: {
      nombre: 'Almacenamiento Asíncrono',
      descripcion: 'Las estrategias de almacenamiento asíncrono permiten que las aplicaciones móviles funcionen sin conexión y sincronicen datos cuando la conexión esté disponible. Esto mejora la experiencia del usuario y la resiliencia de la aplicación.',
      ventajas: [
        'Funcionamiento offline completo',
        'Mejor experiencia de usuario',
        'Menor consumo de datos',
        'Reducción de la latencia percibida',
        'Sincronización en segundo plano'
      ],
      desventajas: [
        'Mayor complejidad de implementación',
        'Posibles conflictos de sincronización',
        'Necesidad de estrategias de resolución de conflictos',
        'Mayor uso de almacenamiento local'
      ],
      uso: 'Ideal para aplicaciones que necesitan funcionar sin conexión, como aplicaciones de productividad, lectores de noticias, o aplicaciones de campo donde la conectividad es irregular.',
      imagen: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop'
    },
    local: {
      nombre: 'Almacenamiento Local',
      descripcion: 'El almacenamiento local en dispositivos móviles permite guardar datos directamente en el dispositivo, proporcionando acceso rápido y funcionamiento offline. Existen varias opciones con diferentes características.',
      opciones: [
        'SharedPreferences (Android) y UserDefaults (iOS): Para datos simples',
        'SQLite: Base de datos relacional embebida',
        'Realm: Base de datos orientada a objetos',
        'Archivos: Almacenamiento en sistema de archivos',
        'Keychain (iOS) y Keystore (Android): Almacenamiento seguro'
      ],
      consideraciones: [
        'Persistencia limitada por espacio en dispositivo',
        'Datos accesibles solo para la aplicación',
        'Datos eliminados al desinstalar la aplicación',
        'Rendimiento variable según la opción elegida'
      ],
      uso: 'Perfecto para guardar preferencias de usuario, caché de datos, contenido offline y cualquier información que necesite persistencia local.',
      imagen: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop'
    },
    sincronizacion: {
      nombre: 'Estrategias de Sincronización',
      descripcion: 'La sincronización efectiva entre el almacenamiento local y la nube es crucial para aplicaciones modernas. Diferentes estrategias ofrecen compensaciones entre consistencia, rendimiento y complejidad.',
      estrategias: [
        'Sincronización manual: El usuario controla cuándo sincronizar',
        'Sincronización automática: La app sincroniza en intervalos regulares',
        'Sincronización en tiempo real: Usando WebSockets o similares',
        'Sincronización basada en eventos: Se activa por cambios específicos'
      ],
      patrones: [
        'Optimistic UI: Mostrar cambios inmediatamente y luego sincronizar',
        'Pesimistic UI: Esperar confirmación del servidor antes de mostrar cambios',
        'Conflict-free Replicated Data Types (CRDTs): Para resolución automática de conflictos',
        'Operational Transformations: Para colaboración en tiempo real'
      ],
      uso: 'La elección de estrategia depende de los requisitos de consistencia, la frecuencia de actualización y la tolerancia a conflictos de la aplicación.',
      imagen: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop'
    },
    firebase: {
      nombre: 'Firebase para Sincronización',
      descripcion: 'Firebase ofrece soluciones integradas para almacenamiento y sincronización que simplifican enormemente el desarrollo de aplicaciones con funcionalidad offline y sincronización en tiempo real.',
      servicios: [
        'Firebase Realtime Database: Base de datos NoSQL en tiempo real',
        'Cloud Firestore: Base de datos documental más avanzada',
        'Firebase Storage: Almacenamiento de archivos',
        'Firebase Auth: Autenticación con estado de conexión'
      ],
      características: [
        'Sincronización en tiempo real entre dispositivos',
        'Soporte offline integrado',
        'Escalabilidad automática',
        'Reglas de seguridad flexibles',
        'Indexación y consultas potentes'
      ],
      uso: 'Ideal para aplicaciones que requieren colaboración en tiempo real, actualizaciones instantáneas y funcionalidad offline robusta con mínima configuración.',
      imagen: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop'
    }
  };

  return (
    <StorageContainer>
      <Header>
        <h1>Almacenamiento Local y Sincronización con la Nube</h1>
        <p>Estrategias y tecnologías para gestionar datos localmente y mantenerlos sincronizados con servicios en la nube</p>
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
            {tecnologias[tecnologiaActiva].ventajas && (
              <Caracteristica>
                <h3>Ventajas</h3>
                <ul>
                  {tecnologias[tecnologiaActiva].ventajas.map((ventaja, index) => (
                    <li key={index}>{ventaja}</li>
                  ))}
                </ul>
              </Caracteristica>
            )}
            
            {tecnologias[tecnologiaActiva].desventajas && (
              <Caracteristica>
                <h3>Desventajas</h3>
                <ul>
                  {tecnologias[tecnologiaActiva].desventajas.map((desventaja, index) => (
                    <li key={index}>{desventaja}</li>
                  ))}
                </ul>
              </Caracteristica>
            )}
            
            {tecnologias[tecnologiaActiva].opciones && (
              <Caracteristica>
                <h3>Opciones de Almacenamiento</h3>
                <ul>
                  {tecnologias[tecnologiaActiva].opciones.map((opcion, index) => (
                    <li key={index}>{opcion}</li>
                  ))}
                </ul>
              </Caracteristica>
            )}
            
            {tecnologias[tecnologiaActiva].consideraciones && (
              <Caracteristica>
                <h3>Consideraciones</h3>
                <ul>
                  {tecnologias[tecnologiaActiva].consideraciones.map((consideracion, index) => (
                    <li key={index}>{consideracion}</li>
                  ))}
                </ul>
              </Caracteristica>
            )}
            
            {tecnologias[tecnologiaActiva].estrategias && (
              <Caracteristica>
                <h3>Estrategias</h3>
                <ul>
                  {tecnologias[tecnologiaActiva].estrategias.map((estrategia, index) => (
                    <li key={index}>{estrategia}</li>
                  ))}
                </ul>
              </Caracteristica>
            )}
            
            {tecnologias[tecnologiaActiva].patrones && (
              <Caracteristica>
                <h3>Patrones Comunes</h3>
                <ul>
                  {tecnologias[tecnologiaActiva].patrones.map((patron, index) => (
                    <li key={index}>{patron}</li>
                  ))}
                </ul>
              </Caracteristica>
            )}
            
            {tecnologias[tecnologiaActiva].servicios && (
              <Caracteristica>
                <h3>Servicios Principales</h3>
                <ul>
                  {tecnologias[tecnologiaActiva].servicios.map((servicio, index) => (
                    <li key={index}>{servicio}</li>
                  ))}
                </ul>
              </Caracteristica>
            )}
            
            {tecnologias[tecnologiaActiva].características && (
              <Caracteristica>
                <h3>Características</h3>
                <ul>
                  {tecnologias[tecnologiaActiva].características.map((caracteristica, index) => (
                    <li key={index}>{caracteristica}</li>
                  ))}
                </ul>
              </Caracteristica>
            )}
          </Caracteristicas>
          
          <CasosUso>
            <h3>Casos de Uso Recomendados</h3>
            <p>{tecnologias[tecnologiaActiva].uso}</p>
          </CasosUso>
        </InfoTecnologia>
        
        <ImagenTecnologia>
          <img src={tecnologias[tecnologiaActiva].imagen} alt={tecnologias[tecnologiaActiva].nombre} />
        </ImagenTecnologia>
      </DetalleTecnologia>

      <Estrategias>
        <h2>Estrategias de Resolución de Conflictos</h2>
        
        <Estrategia>
          <h3>Última Escritura Gana (LWW)</h3>
          <p>La última modificación sobrescribe cualquier cambio anterior. Simple pero puede causar pérdida de datos.</p>
          <ul>
            <li>Ventaja: Muy simple de implementar</li>
            <li>Desventaja: Puede perder cambios importantes</li>
            <li>Recomendado: Para datos no críticos o con baja probabilidad de conflictos</li>
          </ul>
        </Estrategia>
        
        <Estrategia>
          <h3>Fusión Manual</h3>
          <p>Se detectan conflictos y se requiere intervención del usuario para resolverlos.</p>
          <ul>
            <li>Ventaja: Máximo control sobre la resolución</li>
            <li>Desventaja: Mala experiencia de usuario si ocurre frecuentemente</li>
            <li>Recomendado: Para aplicaciones con datos muy sensibles o críticos</li>
          </ul>
        </Estrategia>
        
        <Estrategia>
          <h3>Fusión Automática</h3>
          <p>Algoritmos automáticos resuelven conflictos basados en reglas predefinidas.</p>
          <ul>
            <li>Ventaja: Buena experiencia de usuario sin intervención manual</li>
            <li>Desventaja: Complejidad de implementación</li>
            <li>Recomendado: Para la mayoría de aplicaciones con datos moderadamente importantes</li>
          </ul>
        </Estrategia>
      </Estrategias>

      <Conclusión>
        <h2>Conclusión</h2>
        <p>
          El almacenamiento local y la sincronización con la nube son componentes esenciales de las aplicaciones móviles modernas.
          Una estrategia efectiva debe equilibrar la experiencia del usuario offline, la eficiencia en el uso de recursos y la
          consistencia de datos. La elección de tecnologías y estrategias depende de factores como la criticidad de los datos,
          la frecuencia de actualización, los patrones de conectividad de los usuarios y los recursos de desarrollo disponibles.
          Las soluciones como Firebase pueden simplificar significativamente la implementación, pero es importante comprender
          los principios subyacentes para diseñar sistemas robustos y eficientes.
        </p>
      </Conclusión>
    </StorageContainer>
  );
};

export default Storage;