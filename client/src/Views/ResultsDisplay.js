import React from 'react';
import {browserHistory} from 'react-router';

const ResultsDisplay = (props) => {
  console.log(props.resultsInfo);
  var resultsTest = []
  for (var i in props.resultsInfo) {
    for (var j in props.resultsInfo[i].offer) {
      var resultsDiv = props.resultsInfo[i].links[j].link.map(function(item) {
        return <p>{item}</p>
      })
      var link = props.resultsInfo[i].links[j].link[0];
      var detailLink = "/details?link=" + encodeURIComponent(link)
            var state = <div className='resultsFlexbox'>
                          {props.resultsInfo[i].offer[j]}
                          <a href={detailLink}>{resultsDiv}</a>
                        </div>
            resultsTest.push(state)
    }
  var garbage = resultsTest.map(function(item) {
    return <div>{item}</div>
  })
    return (
      <div>
        <h1> RESULTS PAGE </h1>
        <button onClick={browserHistory.goBack}>Go Back</button>
        {garbage}
      </div>
    )
}
}

export default ResultsDisplay;
