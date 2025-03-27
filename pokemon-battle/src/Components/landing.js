import React from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/selectPokemon');
  };

  return (
    <div className="landing-page">
      <h1>Welcome to Pokémon Battle Arena!</h1>
      <button onClick={handleStart}>Get Started</button>
    </div>
  );
};

export default Landing;
