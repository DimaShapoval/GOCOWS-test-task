import { setItems } from "./script.js";
import { getInitialState, setInitialState } from "./state.js";

window.addEventListener('DOMContentLoaded', () => {
    const initialStateForLoadMore = getInitialState();
    const loadMoreButton = document.getElementById('loadMoreButton');
    const hoverButtonMobile = document.getElementById('hoverButtonMobile');
    const hoverButton = document.getElementById('hoverButton');
    loadMoreButton.addEventListener('click', () => {
        let oneItem = initialStateForLoadMore[0]
        let newArray = initialStateForLoadMore.concat(initialStateForLoadMore);
        newArray.push(oneItem);
        loadMoreButton.classList.add('hide');
        hoverButton.classList.add('active');
        hoverButton.textContent = 'DEFAULT';
        hoverButtonMobile.classList.add('active');
        hoverButtonMobile.textContent = 'DEFAULT';
        setInitialState(newArray);
    })
})