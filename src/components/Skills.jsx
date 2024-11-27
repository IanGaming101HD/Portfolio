import './Skills.css';

function Skills() {
  return (
    <div id='skills-container' className='skills-container section-container'>
      <h2 id='skills' class='section-header'>
        My Skills
      </h2>
      <div>
        <div className='language-boxes left'>
          <div className='language-box'>
            <span className='language'>HTML</span>
            <span className='percentage'>90%</span>
          </div>
          <div className='language-box'>
            <span className='language'>CSS</span>
            <span className='percentage'>80%</span>
          </div>
          <div className='language-box'>
            <span className='language'>JavaScript</span>
            <span className='percentage'>70%</span>
          </div>
          <div className='language-box'>
            <span className='language'>Python</span>
            <span className='percentage'>60%</span>
          </div>
        </div>
        <div className='right'>
          <h3>Coding With Passion, Precision, and Purpose</h3>
          <p>I have a strong foundation in programming, with experience in creating web applications and games using technologies like JavaScript, Python, Node.js, and MongoDB. My frontend skills include crafting responsive interfaces with HTML, CSS, and frameworks like React. I’m also familiar with backend development, managing APIs, and databases. Beyond coding, my problem-solving mindset and attention to detail allow me to tackle challenges efficiently, whether it's debugging, designing algorithms, or optimizing performance. I thrive in both individual projects and collaborative team environments.</p>
          <div class='experience-box'>
            <span className='years'>9</span>
            <span>Years Of Experience</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
