
import ReactDOM from 'react-dom';
import App from './App';

import cards from "./data/shoes"
import './index.css'; // Import Tailwind CSS

ReactDOM.createRoot(document.getElementById('root')).render(
  // src/main.jsx
  
  <div className="h-full flex justify-evenly gap-4 gap-y-5 flex-wrap">
  {cards.map((card, index) => (
    <App key={index} image={card.image} name={card.name} price={card.price} />
  ))}
</div>

)
