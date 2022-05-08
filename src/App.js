import imageInSrc from './imageInSrc.png';
import myVidio from './myVidio.mp4';
import './Style.css';

function App() {
  return (
    
    <div>
  <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
    <h1 className="title red">Your name here</h1>
    <br />
    <img src={imageInSrc}  alt='imgSrc'/>
    <br />
    <img src="imageInPublic.jpeg" alt='imgPub' />
  </div>
  <video width={320} height={240} controls>
    <source src={myVidio} type="video/mp4" />
  </video>
</div>
 );
}

export default App;
