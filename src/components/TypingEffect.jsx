import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import './TypingEffect.css';

function TypingEffect({ words }) {
    const [ typeEfect ] = useTypewriter({ 
        words,
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 40
     })

  return (
    <span className='typing-text'>{typeEfect}<Cursor /></span>
  );
}

export default TypingEffect;
