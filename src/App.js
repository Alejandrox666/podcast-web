import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import ModArquitecto from './components/mod_arquitectonicos';
import CloudServices from './components/cloud_services';
import Storage from './components/storage';
import Microservices from './components/microservices';
import Retos from './components/retos';
import './App.css';

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
const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

// Barra de navegación
const Navbar = styled.nav`
  background: linear-gradient(135deg, #6e8efb 0%, #a777e3 100%);
  padding: 1rem 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Logo = styled.h1`
  color: white;
  font-size: 1.8rem;
  margin: 0;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
`;

const NavLink = styled.button`
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  transition: all 0.3s ease;
  background: ${props => props.active ? 'rgba(255, 255, 255, 0.2)' : 'transparent'};
  border: none;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
  }
`;

// Contenido principal
const MainContent = styled.main`
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

// Hero Section
const HeroSection = styled.section`
  text-align: center;
  padding: 3rem 1rem;
  background: linear-gradient(135deg, rgba(110, 142, 251, 0.1) 0%, rgba(167, 119, 227, 0.1) 100%);
  border-radius: 15px;
  margin-bottom: 3rem;

  h2 {
    color: #6e8efb;
    font-size: 2.5rem;
    margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroText = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// Tarjetas de temas
const TopicsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const TopicCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

const TopicTitle = styled.h3`
  color: #6e8efb;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const TopicDescription = styled.p`
  color: #666;
  margin-bottom: 1.5rem;
`;

const ExploreButton = styled.button`
  display: inline-block;
  padding: 0.7rem 1.5rem;
  background: linear-gradient(135deg, #6e8efb 0%, #a777e3 100%);
  color: white;
  border: none;
  border-radius: 25px;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(110, 142, 251, 0.3);
  }
`;

// Footer
const Footer = styled.footer`
  background: linear-gradient(135deg, #6e8efb 0%, #a777e3 100%);
  color: white;
  text-align: center;
  padding: 2rem;
  margin-top: auto;
`;

const FooterText = styled.p`
  margin: 0.5rem 0;
`;

// Componente de Navegación
const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const navigateTo = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <Navbar>
      <NavContent>
        <Logo onClick={() => navigateTo('/')}>Arquitectura Móvil</Logo>
        <NavLinks>
          <NavLink 
            onClick={() => navigateTo('/')}
            active={currentPath === '/'}
          >
            Inicio
          </NavLink>
          <NavLink 
            onClick={() => navigateTo('/modelos')}
            active={currentPath === '/modelos'}
          >
            Modelos
          </NavLink>
          <NavLink 
            onClick={() => navigateTo('/cloud')}
            active={currentPath === '/cloud'}
          >
            Cloud
          </NavLink>
          <NavLink 
            onClick={() => navigateTo('/almacenamiento')}
            active={currentPath === '/almacenamiento'}
          >
            Almacenamiento
          </NavLink>
          <NavLink 
            onClick={() => navigateTo('/microservicios')}
            active={currentPath === '/microservicios'}
          >
            Microservicios
          </NavLink>
          <NavLink 
            onClick={() => navigateTo('/retos')}
            active={currentPath === '/retos'}
          >
            Retos
          </NavLink>
        </NavLinks>
      </NavContent>
    </Navbar>
  );
};

// Componente de Inicio
const HomePage = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const topics = [
    {
      id: 'modelos',
      title: 'Modelos Arquitectónicos',
      description: 'Explora los principales patrones de arquitectura como MVC, MVP, MVVM y Clean Architecture para aplicaciones móviles.',
      path: '/modelos'
    },
    {
      id: 'cloud',
      title: 'Servicios en la Nube',
      description: 'Descubre cómo integrar tu aplicación móvil con servicios cloud como AWS, Azure, Google Cloud y Firebase.',
      path: '/cloud'
    },
    {
      id: 'almacenamiento',
      title: 'Almacenamiento y Sincronización',
      description: 'Aprende sobre estrategias de almacenamiento local y sincronización eficiente con la nube.',
      path: '/almacenamiento'
    },
    {
      id: 'microservicios',
      title: 'Microservicios y Escalabilidad',
      description: 'Comprende cómo diseñar arquitecturas escalables usando microservicios para aplicaciones móviles.',
      path: '/microservicios'
    },
    {
      id: 'retos',
      title: 'Retos con Tecnologías Emergentes',
      description: 'Enfrenta los desafíos de integrar IA, IoT, AR/VR y Blockchain en tus aplicaciones móviles.',
      path: '/retos'
    }
  ];

  return (
    <>
      <HeroSection>
        <h2>Arquitectura de Aplicaciones Móviles</h2>
        <HeroText>
          Descubre los principios, patrones y mejores prácticas para diseñar aplicaciones móviles 
          escalables, mantenibles y de alto rendimiento. Explora cómo las arquitecturas modernas 
          integran servicios en la nube, manejan el almacenamiento de datos y se adaptan a las 
          tecnologías emergentes.
        </HeroText>
      </HeroSection>

      <TopicsGrid>
        {topics.map(topic => (
          <TopicCard key={topic.id}>
            <TopicTitle>{topic.title}</TopicTitle>
            <TopicDescription>{topic.description}</TopicDescription>
            <ExploreButton onClick={() => navigateTo(topic.path)}>
              Explorar
            </ExploreButton>
          </TopicCard>
        ))}
      </TopicsGrid>

      <HeroSection>
        <h2>Podcast con IA</h2>
        <HeroText>
          Escucha nuestro podcast generado con inteligencia artificial donde exploramos en profundidad 
          cada uno de estos temas arquitectónicos. Aprende de forma dinámica y entretenida sobre las 
          mejores prácticas en el desarrollo de aplicaciones móviles modernas.
        </HeroText>
        <div style={{ 
          background: '#f9f9f9', 
          padding: '2rem', 
          borderRadius: '10px', 
          marginTop: '2rem',
          fontStyle: 'italic',
          color: '#666'
        }}>
          [Aquí se integrará el reproductor de podcast generado con IA]
        </div>
      </HeroSection>
    </>
  );
};

// Componente principal de la App
function AppContent() {
  return (
    <AppContainer>
      <Navigation />
      <MainContent>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/modelos" element={<ModArquitecto />} />
          <Route path="/cloud" element={<CloudServices />} />
          <Route path="/almacenamiento" element={<Storage />} />
          <Route path="/microservicios" element={<Microservices />} />
          <Route path="/retos" element={<Retos />} />
        </Routes>
      </MainContent>
      <Footer>
        <FooterText>© 2025 Arquitectura de Aplicaciones Móviles</FooterText>
        <FooterText>Proyecto académico con integración de inteligencia artificial</FooterText>
      </Footer>
    </AppContainer>
  );
}

// Wrapper principal con Router
function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <AppContent />
      </Router>
    </>
  );
}

export default App;