import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

// Estilos globales
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  
  body {
    background-color: #f5f7fa;
    color: #333;
    line-height: 1.6;
  }
`;

// Contenedor principal
const ModelosContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

// Encabezado
const Header = styled.header`
  text-align: center;
  margin-bottom: 40px;
  padding: 30px;
  background: linear-gradient(135deg, #6e8efb 0%, #a777e3 100%);
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

// Selector de modelos
const Selector = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  flex-wrap: wrap;
  gap: 10px;
`;

const BotonModelo = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 50px;
  background: ${props => props.active ? '#6e8efb' : '#e0e0e0'};
  color: ${props => props.active ? 'white' : '#666'};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background: ${props => props.active ? '#5d7ce0' : '#d0d0d0'};
    transform: translateY(-2px);
  }
`;

// Detalles del modelo
const DetalleModelo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-bottom: 40px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const InfoModelo = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);

  h2 {
    color: #6e8efb;
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
    color: #6e8efb;
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
      color: #a777e3;
      font-weight: bold;
      position: absolute;
      left: 0;
    }
  }
`;

const UsoModelo = styled.div`
  h3 {
    color: #6e8efb;
    margin-bottom: 15px;
    font-size: 1.3rem;
  }

  p {
    background: #f9f9f9;
    padding: 15px;
    border-radius: 8px;
    border-left: 4px solid #a777e3;
  }
`;

const ImagenModelo = styled.div`
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
    color: #6e8efb;
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
    color: #6e8efb;
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
    background: #f0f4ff;
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
    color: #6e8efb;
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
const ModArquitecto = () => {
  const [modeloActivo, setModeloActivo] = useState('mvc');

  const modelos = {
    mvc: {
      nombre: 'MVC (Model-View-Controller)',
      descripcion: 'Patrón arquitectónico que separa una aplicación en tres componentes principales: Modelo (datos), Vista (interfaz) y Controlador (lógica de negocio). El modelo gestiona los datos, la vista muestra la información y el controlador maneja las entradas del usuario.',
      ventajas: [
        'Separación clara de responsabilidades',
        'Fácil mantenimiento y escalabilidad',
        'Reutilización de componentes',
        'Desarrollo paralelo entre desarrolladores'
      ],
      desventajas: [
        'Puede resultar complejo para aplicaciones pequeñas',
        'Comunicación entre componentes puede volverse complicada',
        'El controlador puede convertirse en un "god object"'
      ],
      uso: 'Ampliamente utilizado en frameworks web como Ruby on Rails, Angular y Django.',
      imagen: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop'
    },
    mvp: {
      nombre: 'MVP (Model-View-Presenter)',
      descripcion: 'Derivado del MVC, donde el Presenter actúa como intermediario entre la Vista y el Modelo, manejando toda la lógica de presentación. La vista es más pasiva que en MVC.',
      ventajas: [
        'Mejor separación entre vista y lógica',
        'Más fácil de testear que MVC',
        'Vista más delgada y reusable',
        'Menos acoplado que MVC'
      ],
      desventajas: [
        'Mayor cantidad de código en comparación con MVC',
        'Presenter puede volverse demasiado complejo',
        'Comunicación bidireccional puede ser complicada'
      ],
      uso: 'Popular en desarrollo Android y aplicaciones empresariales.',
      imagen: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop'
    },
    mvvm: {
      nombre: 'MVVM (Model-View-ViewModel)',
      descripcion: 'Patrón que facilita la separación entre la interfaz de usuario y la lógica de negocio mediante el ViewModel, que expone datos y comandos. Ideal para binding de datos.',
      ventajas: [
        'Separación clara entre interfaz y lógica',
        'Fácil testabilidad',
        'Bindings de datos automáticos',
        'Vista completamente independiente'
      ],
      desventajas: [
        'Curva de aprendizaje más pronunciada',
        'Puede ser excesivo para proyectos pequeños',
        'Debugging más complejo con bindings'
      ],
      uso: 'Utilizado ampliamente en Xamarin, Android Jetpack y frameworks como Knockout.js.',
      imagen: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop'
    },
    clean: {
      nombre: 'Clean Architecture',
      descripcion: 'Enfoque arquitectónico propuesto por Robert C. Martin que organiza el código en capas concéntricas, con dependencias que apuntan hacia el centro (Entities).',
      ventajas: [
        'Independencia de frameworks',
        'Testabilidad mejorada',
        'Código mantenible y escalable',
        'Desacoplamiento máximo'
      ],
      desventajas: [
        'Mayor complejidad inicial',
        'Requiere más planificación y diseño',
        'Puede ser excesivo para aplicaciones simples'
      ],
      uso: 'Ideal para aplicaciones complejas que requieren mantenimiento a largo plazo y alta testabilidad.',
      imagen: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&h=400&fit=crop'
    }
  };

  return (
    <>
      <GlobalStyle />
      <ModelosContainer>
        <Header>
          <h1>Modelos Arquitectónicos para Aplicaciones Móviles</h1>
          <p>Explora los principales patrones de arquitectura utilizados en el desarrollo de aplicaciones móviles modernas</p>
        </Header>

        <Selector>
          {Object.keys(modelos).map(key => (
            <BotonModelo
              key={key}
              active={modeloActivo === key}
              onClick={() => setModeloActivo(key)}
            >
              {modelos[key].nombre.split(' ')[0]}
            </BotonModelo>
          ))}
        </Selector>

        <DetalleModelo>
          <InfoModelo>
            <h2>{modelos[modeloActivo].nombre}</h2>
            <p>{modelos[modeloActivo].descripcion}</p>
            
            <Caracteristicas>
              <Caracteristica>
                <h3>Ventajas</h3>
                <ul>
                  {modelos[modeloActivo].ventajas.map((ventaja, index) => (
                    <li key={index}>{ventaja}</li>
                  ))}
                </ul>
              </Caracteristica>
              
              <Caracteristica>
                <h3>Desventajas</h3>
                <ul>
                  {modelos[modeloActivo].desventajas.map((desventaja, index) => (
                    <li key={index}>{desventaja}</li>
                  ))}
                </ul>
              </Caracteristica>
            </Caracteristicas>
            
            <UsoModelo>
              <h3>Casos de Uso</h3>
              <p>{modelos[modeloActivo].uso}</p>
            </UsoModelo>
          </InfoModelo>
          
          <ImagenModelo>
            <img src={modelos[modeloActivo].imagen} alt={modelos[modeloActivo].nombre} />
            <Diagrama>
              <h4>Diagrama de {modelos[modeloActivo].nombre.split(' ')[0]}</h4>
              <div className="placeholder">
                Diagrama generado con IA mostrando la estructura de {modelos[modeloActivo].nombre}
              </div>
            </Diagrama>
          </ImagenModelo>
        </DetalleModelo>

        <Comparacion>
          <h2>Comparativa entre Modelos</h2>
          <table>
            <thead>
              <tr>
                <th>Modelo</th>
                <th>Complejidad</th>
                <th>Testabilidad</th>
                <th>Flexibilidad</th>
                <th>Curva de Aprendizaje</th>
              </tr>
            </thead>
            <tbody>
              <tr className={modeloActivo === 'mvc' ? 'active' : ''}>
                <td>MVC</td>
                <td>Media</td>
                <td>Media</td>
                <td>Media</td>
                <td>Baja</td>
              </tr>
              <tr className={modeloActivo === 'mvp' ? 'active' : ''}>
                <td>MVP</td>
                <td>Media-Alta</td>
                <td>Alta</td>
                <td>Alta</td>
                <td>Media</td>
              </tr>
              <tr className={modeloActivo === 'mvvm' ? 'active' : ''}>
                <td>MVVM</td>
                <td>Alta</td>
                <td>Alta</td>
                <td>Alta</td>
                <td>Media-Alta</td>
              </tr>
              <tr className={modeloActivo === 'clean' ? 'active' : ''}>
                <td>Clean Architecture</td>
                <td>Muy Alta</td>
                <td>Muy Alta</td>
                <td>Muy Alta</td>
                <td>Alta</td>
              </tr>
            </tbody>
          </table>
        </Comparacion>

        <Conclusión>
          <h2>Conclusión</h2>
          <p>
            La elección del modelo arquitectónico adecuado depende del tamaño y complejidad de tu aplicación, 
            el equipo de desarrollo, los requisitos de mantenimiento y escalabilidad. MVC es excelente para 
            aplicaciones pequeñas, mientras que Clean Architecture es ideal para proyectos complejos que 
            requieren alta mantenibilidad y testabilidad.
          </p>
        </Conclusión>
      </ModelosContainer>
    </>
  );
};

export default ModArquitecto;