import React from 'react';
import {browserHistory} from 'react-router';

const ResultsDisplay = (props) => {
  var resultsTest = []
  for (var i in props.resultsInfo) {
    for (var j in props.resultsInfo[i].offers) {
      var resultsDiv = props.resultsInfo[i].links[j].link.map(function(item) {
        return <p>{item}</p>
      })
      var offersDiv = props.resultsInfo[i].offers[j].offer.map(function(item) {
        return <h1>{item}</h1>
      })
      var link = props.resultsInfo[i].links[j].link[0];
      var detailLink = "/details?link=" + encodeURIComponent(link);
      var state = <div className='resultsFlexbox'>
                    <a href={detailLink}>{offersDiv}</a>
                  </div>
      resultsTest.push(state)
    }
  }
  var garbage = resultsTest.map(function(item) {
    return <div>{item}</div>
  })
  console.log(props.resultsInfo[i]);
    return (
      <div>
        <button onClick={browserHistory.goBack}>◀️Go Back</button>
        <h1 className='Heading'> RESULTS PAGE </h1>
          {garbage}
      </div>
    )
}

export default ResultsDisplay;
