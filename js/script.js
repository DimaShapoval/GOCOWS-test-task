import { initialState as initialStateForHomePage } from "./state.js";

const casinosItemsWrapper = document.getElementById("casinosWrapper");

const createRate = (stars, maxRate = 5) => {
  const starsArray = [];
  for (let i = 0; i < maxRate; i++) {
    if (i < stars) {
      starsArray.push('<img src="images/star_rounded.svg" alt="Full Start">');
    } else {
      starsArray.push('<img src="images/star_rounded-1.svg" alt="Empty Star">');
    }
  }
  return starsArray.join("");
};

export const setItems = () => {
  const initialState = initialStateForHomePage;
  casinosItemsWrapper.innerHTML = initialState
    .map((item, index) => {
      const stars = Math.floor(item.rate);
      const maxRate = 5;
      const starsItemsArray = createRate(stars, maxRate);
      return `<div class="casinoItem container" data-is-new=${item.new}>
                  <div class="casinoImageWrapper">
                      <img src=${item.src} alt="" class="casinoImage">
                  </div>
                  <div class="casinoMainTextWrapper">
                      <p class="textOfNew" >NEW</p>
                      <p class="textOfCasinoItem" >${item.text}</p>
                      <div class="ratingWrapper container">
                          <img src=${
                            item.flag
                          } width="20" height="14" style="border-radius: 4px;" alt="">
                          <div class="rating container" >
                              <p>${item.rate}</p>
                              <div class="stars">
                              ${starsItemsArray}

                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="benefitsWrapper">
                  ${
                    item.freeSpins
                      ? `<div class="spins">
                      <button class="benefit" ${
                        index === 0 ? `id='spins'` : ''
                      } >${item.freeSpins} Free Spins</button>
                        ${
                          index === 0
                            ? `<div class='modalWrapper hide' id='modalWrapper'>
                            <div class="triangle-shadow"></div>
                      <div class='triangle ' ></div>
                      <div class='modalHeaderWrapper' >
                      <p>${item.freeSpins} Free Spins at 21 Ducker Casno</p>
                      <button class="closeModal" id='closeModal'>
                       <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="1" y1="23" x2="23" y2="1" stroke="#9297ac" stroke-width="3"/>
<line x1="1" y1="1" x2="23" y2="23" stroke="#9297ac" stroke-width="3"/>
</svg>
                      </button>
                      </div>
                      <div class='welcomeButtonWrapper container' id='welcomeButtonWrapper' >
                      <button class='welcomeButton' id='welcomeButton' >
                          <div class="left-border"></div>
                          <div class="right-border"></div>
                          WELCOME</button>
                          <div class='copyWrapper hide' id='copyWrapper'>
                          <div class='copyTextWrapper' >
                          <img src='images/check.svg' width="15" alt="check"/>
                            <p>Code copied to clipboard.</p>
                          </div>
                            
                            <div class="triangle-shadow"></div>
                      <div class='triangle ' ></div>
                          </div>
                      </div>
                      <div class='modalValuesWrapper container' >
                          <div class='modalPropertyWrapper '>

                              <p class='modalProperty'>Games allowed:</p>
                              <p class='modalValue'>Slots, Keno, Scratch Cards, Bingo</p>
                          </div>
                          <div class='modalPropertyWrapper '>
                                  <p class='modalProperty'>Max cash out:</p>
                                  <p class='modalValue'>$100</p>
                           </div>
                           <div class='modalPropertyWrapper '>
                               <p class='modalProperty'>Min. deposit:</p>
                               <p class='modalValue' data-modal-value-free='true' >FREE</p>
                           </div>
                      </div>
                      
                      


                  </div>`
                            : ""
                        }
                  </div>
                  `
                      : ""
                  }
                 
                  
                  ${
                    item.firstDeposit
                      ? `<div class="benefit">
                          <p>${item.firstDeposit}</p>
                      </div>`
                      : ""
                  }
                      
                  </div>
                  <div class="visitButtonWrapper" >
                      <button ${
                        index === 0
                          ? `id='visitButton'`
                          : ''
                      } class="visitButton">VISIT</button>
                  </div>
              </div>`;
    })
    .join("");
};


window.addEventListener("DOMContentLoaded", setItems);
