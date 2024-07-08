import { useState } from 'react';
import { sculptureList } from './data.js';

function App()
{
     const [index, setIndex]=useState(0);
     const hasNext = index < sculptureList.length - 1;
     let sculpture = sculptureList[index];
     const [showMore ,setShowMore]=useState(false);
     function handleNextClick() {
      if (hasNext) {
        setIndex(index + 1);
          
      } else {
        setIndex(0);
      }
    }
    function handleMoreClick() {
      setShowMore(!showMore);
    }
     return(
      <>
      <button onClick={handleNextClick}>next</button>
      <h2>
        <i>{sculpture.name}</i>
        <i>{sculpture.artist}</i>
       
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>{showMore ? 'Hide' : 'Show'} details</button>
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
      {showMore && <p>{sculpture.description}</p>}
      </>
     )
}
export default App;