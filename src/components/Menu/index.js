import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Frankflix.png';
import './Menu.css';
import { LogoImage, MenuWrapper } from './style';
import Button from '../Button';

function Menu() {
  return (
    <MenuWrapper className="Menu">
      <Link to="/">
        <LogoImage src={Logo} alt="FrankFlix Logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </MenuWrapper>
  );
}

export default Menu;
