const rateBtns = document.querySelectorAll('.rate-button');
const submitBtn = document.querySelector('#submit-button');
const mainElement = document.querySelector('main');
let rating = 5;

rateBtns.forEach((rateBtn) => {
  rateBtn.addEventListener('click', (e) => {
    const id = e.target.id;
    rateBtns.forEach((rateBtn) => {
      rateBtn.classList.remove('selected-button');
    })

    if(id === rateBtn.id){
      rateBtn.classList.add('selected-button');
      rating = id;
    }
  })
})

submitBtn.addEventListener('click', () => {
  mainElement.classList.add('center-items');

  mainElement.innerHTML = `
    <img src="./images/illustration-thank-you.svg" alt="thank-you-img">
    <p class="selected-count">
      You selected ${rating} out of 5
    </p>
    <p class="thanks-header">
      Thank you!
    </p>
    <p class="paragraph">
      We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch! 
    </p>
  `
})