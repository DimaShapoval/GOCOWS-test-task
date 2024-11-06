window.onload = () => {

  document.body.addEventListener("click", (event) => {
    const { target } = event
    const spins = document.getElementById("spins");
    const closeModal = document.getElementById("closeModal");
    const modalWrapper = document.getElementById("modalWrapper");
    const welcomeButton = document.getElementById("welcomeButton");

    if(target.id === 'spins'){
      modalWrapper.classList.remove("hide");
      spins.classList.add("active");
      
    }
    
    closeModal.onclick = () => {
      modalWrapper.classList.add("hide");
      spins.classList.remove("active");
      document.getElementById("copyWrapper").classList.add("hide");
    };

    welcomeButton.addEventListener("click", async () => {
      await navigator.clipboard.writeText("Your code");
      document.getElementById("copyWrapper").classList.remove("hide");
    });
  });
};
