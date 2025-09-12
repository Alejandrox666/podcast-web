import React, { useState, useRef } from 'react';
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
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 2rem;
    }
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

// Estilos para el reproductor de audio
const AudioPlayerContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  margin-top: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const PlayerHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const PlayerThumbnail = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #6e8efb 0%, #a777e3 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  
  svg {
    width: 40px;
    height: 40px;
    fill: white;
  }
`;

const PlayerInfo = styled.div`
  flex: 1;
`;

const PlayerTitle = styled.h3`
  color: #6e8efb;
  margin-bottom: 0.25rem;
`;

const PlayerDescription = styled.p`
  color: #666;
  font-size: 0.9rem;
`;

const PlayerControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const ControlButton = styled.button`
  background: ${props => props.primary ? 'linear-gradient(135deg, #6e8efb 0%, #a777e3 100%)' : 'transparent'};
  color: ${props => props.primary ? 'white' : '#6e8efb'};
  border: ${props => props.primary ? 'none' : '1px solid #6e8efb'};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 3px 10px rgba(110, 142, 251, 0.3);
  }
`;

const ProgressContainer = styled.div`
  flex: 1;
  margin: 0 1rem;
  min-width: 200px;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 6px;
  background: #e0e0e0;
  border-radius: 3px;
  overflow: hidden;
  cursor: pointer;
`;

const Progress = styled.div`
  width: ${props => props.progress}%;
  height: 100%;
  background: linear-gradient(135deg, #6e8efb 0%, #a777e3 100%);
  border-radius: 3px;
  transition: width 0.2s ease;
`;

const TimeDisplay = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  color: #666;
  font-size: 0.8rem;
`;

// Nuevos componentes para el control de volumen
const VolumeControl = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  gap: 0.5rem;

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    justify-content: center;
    margin-top: 1rem;
  }
`;

const VolumeButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: background-color 0.3s ease;
  
  &:hover {
    background: rgba(110, 142, 251, 0.1);
  }
`;

const VolumeSlider = styled.input`
  width: 80px;
  height: 4px;
  -webkit-appearance: none;
  background: #e0e0e0;
  border-radius: 2px;
  outline: none;
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #6e8efb;
    cursor: pointer;
  }
  
  &::-moz-range-thumb {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #6e8efb;
    cursor: pointer;
    border: none;
  }
`;

// Componente para el icono de volumen que cambia según el nivel
const VolumeIcon = ({ volume }) => {
  if (volume === 0) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#6e8efb">
        <path d="M3.63 3.63a.996.996 0 000 1.41L7.29 8.7 7 9H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71v-4.17l4.18 4.18c-.49.37-1.02.68-1.6.91-.36.15-.58.53-.58.92 0 .72.73 1.18 1.39.91.8-.33 1.55-.77 2.22-1.31l1.34 1.34a.996.996 0 101.41-1.41L5.05 3.63c-.39-.39-1.02-.39-1.42 0zM18.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C22.18 14.68 22.5 13.39 22.5 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71z"/>
      </svg>
    );
  } else if (volume < 0.5) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#6e8efb">
        <path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"/>
      </svg>
    );
  } else {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#6e8efb">
        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
      </svg>
    );
  }
};

// Componente del reproductor de audio
const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1); // Volumen por defecto al 100%
  const [error, setError] = useState(null);
  const audioRef = useRef(null);

  // Usar una URL de audio de ejemplo (puedes reemplazar con tu propia URL)
  const audioUrl = process.env.PUBLIC_URL + "/podcast/Arquitectura_de_Apps__El_Esqueleto_Invisible_que_Impulsa_tu_Móv.mp3";

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => {
          setError("Error al reproducir el audio: " + err.message);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration || 0);
    }
  };

  const handleProgressClick = (e) => {
    if (audioRef.current && duration > 0) {
      const progressBar = e.currentTarget;
      const rect = progressBar.getBoundingClientRect();
      const clickPosition = e.clientX - rect.left;
      const newTime = (clickPosition / progressBar.offsetWidth) * duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration || 0);
      // Establecer el volumen inicial
      audioRef.current.volume = volume;
    }
  };

  const handleError = () => {
    setError("Error al cargar el audio. Asegúrate de que la URL sea válida.");
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const toggleMute = () => {
    if (volume > 0) {
      setVolume(0);
      if (audioRef.current) audioRef.current.volume = 0;
    } else {
      setVolume(1);
      if (audioRef.current) audioRef.current.volume = 1;
    }
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <AudioPlayerContainer>
      <PlayerHeader>
        <PlayerThumbnail>
          <svg viewBox="0 0 24 24">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
          </svg>
        </PlayerThumbnail>
        <PlayerInfo>
          <PlayerTitle>Arquitecturas Móviles Modernas</PlayerTitle>
          <PlayerDescription>Episodio 1: Patrones y mejores prácticas</PlayerDescription>
        </PlayerInfo>
      </PlayerHeader>
      
      {error && (
        <div style={{color: 'red', marginBottom: '1rem'}}>
          {error}
        </div>
      )}
      
      <audio
        ref={audioRef}
        src={audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
        onLoadedMetadata={handleLoadedMetadata}
        onError={handleError}
        preload="metadata"
      />
      
      <ProgressContainer>
        <ProgressBar onClick={handleProgressClick}>
          <Progress progress={progress} />
        </ProgressBar>
        <TimeDisplay>
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </TimeDisplay>
      </ProgressContainer>
      
      <PlayerControls>
        <ControlButton onClick={() => { 
          if (audioRef.current) audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - 15); 
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#6e8efb">
            <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
          </svg>
        </ControlButton>
        
        <ControlButton primary onClick={togglePlayPause}>
          {isPlaying ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
        </ControlButton>
        
        <ControlButton onClick={() => { 
          if (audioRef.current) audioRef.current.currentTime = Math.min(duration, audioRef.current.currentTime + 15); 
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#6e8efb">
            <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
          </svg>
        </ControlButton>
        
        <VolumeControl>
          <VolumeButton onClick={toggleMute}>
            <VolumeIcon volume={volume} />
          </VolumeButton>
          <VolumeSlider
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
          />
        </VolumeControl>
      </PlayerControls>
    </AudioPlayerContainer>
  );
};

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
        <AudioPlayer />
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