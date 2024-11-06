import { setItems } from "./script.js";

export let initialState = [
    {
      src: "images/sports_interaction_casino@2x.png",
      text: "Sports Interaction Casino Review",
      new: true,
      flag: "images/USA.svg",
      freeSpins: 20,
      firstDeposit: "200% First deposit bonus + 250 FS",
      rate: 4.4,
    },
    {
      src: "images/21_dukes_moons@2x.png",
      text: "21 Dukes Casino Review",
      new: false,
      flag: "images/USA.svg",
      freeSpins: 20,
      firstDeposit: "200% First deposit bonus + 250 FS",
      rate: 4.4,
    },
    {
      src: "images/21_dukes_moons-1@2x.png",
      text: "AC Casino Review",
      new: true,
      flag: "images/USA.svg",
      freeSpins: 50,
      firstDeposit: "200% First deposit bonus",
      rate: 4.4,
    },
    {
      src: "images/21_dukes_moons-2@2x.png",
      text: "All Irish Casino Review",
      new: false,
      flag: "images/USA.svg",
      firstDeposit: "100% First deposit bonus + 70 FS",
      rate: 4.4,
    },
  ];
  
  export const getInitialState = () =>{
    return initialState
  }
  
  export const setInitialState = (state) => {
    initialState = state
    setItems();
  }