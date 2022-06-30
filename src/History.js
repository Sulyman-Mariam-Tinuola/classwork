const History = ({allClicks}) => {
 
    return (
      <div>
      { allClicks.length === 0  ?
      <div>
        the app is used by pressing the buttons
      </div>
    
  
  :
    <div>
      button press history: {allClicks.join(' ')}
    </div>}
    </div>)
    
  }

export default History