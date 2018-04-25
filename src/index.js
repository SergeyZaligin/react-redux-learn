import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import './index.css';

const initialState = [
  'Like',
  'Item'
];

function playlist(state = initialState, action) {
  if (action.type === 'ADD_TRACK') {
    return [
      ...state,
      action.payload
    ];
  }
  return state;
}

const store = createStore(playlist);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);




















// import { createStore } from 'redux';

// /**
//  * Funct return new state
//  * @param {array} state 
//  */
// function playlist(state = [], action){
//     if(action.type === 'ADD_TRACK'){
//         return [
//             ...state,
//             action.payload
//         ]
//     }
// }

// /**
//  * Store all data at project
//  */
// const store = createStore(playlist);

// const addTrackBtn = document.querySelectorAll('.addTrack')[0];
// const trackInput = document.querySelectorAll('.trackInput')[0];
// const trackList = document.querySelectorAll('.list')[0];

// /**
//  * Watch for change store 
//  */
// store.subscribe(()=>{

//     trackList.innerHTML = '';
//     trackInput.value = '';

//     store.getState().forEach(track => {
//         const li = document.createElement('li');
//         li.textContent = track;
//         trackList.appendChild(li);
//     });

// });

// addTrackBtn.addEventListener('click', () => {

//     const trackName = trackInput.value;
//     store.dispatch({ type: 'ADD_TRACK', payload: trackName });
    
// });