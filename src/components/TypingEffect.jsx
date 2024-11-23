import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import './TypingEffect.css';

function TypingEffect({ words, color = '#b74dbb' }) {
    const [ typeEfect ] = useTypewriter({ 
        words,
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 40
     })

  return (
    <span style={{ color }}>{typeEfect}<Cursor /></span>
  );
}

export default TypingEffect;
