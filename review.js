const items = [...document.querySelectorAll('.number')];

const updateCount = (el) => {
  const value = parseInt(el.dataset.value);
  const increment = Math.ceil(value / 1000);
  
  let initialValue = 0;

  const increaseCount = setInterval(() => {
    initialValue += increment;

    if (initialValue > value) {
      el.textContent = `${value}+`;
      clearInterval(increaseCount);
      return;
    }

    el.textContent = `${initialValue}+`;
  }, 1);
  // console.log(increaseCount);
};

items.forEach((item) => {
  updateCount(item);
});

// People words SEction


// People data
const reviews = [
  {
    id: 1,
    name: 'George Mefondin',
    job: 'Cyclist',
    img: './assets/images/cyclist.jpg',
    text: "I have been using this fitness app for the past few months, and I must say it has transformed my fitness routine. The app offers a wide range of workout programs tailored to different fitness levels and goals. The exercises are well-explained with clear instructions and demonstration videos, making it easy to follow along. The app also tracks my progress, allowing me to see my improvement over time. Additionally, the integration with wearable devices provides accurate data on my heart rate and calorie burn. Overall, this app has become an indispensable tool in my fitness journey.",
  },
  {
    id: 2,
    name: 'Stony johnson',
    job: 'Trainer',
    img: './assets/images/trainerR.jpg',
    text: 'This fitness app is incredibly user-friendly, making it suitable for beginners and experienced fitness enthusiasts alike. The interface is intuitive, and navigating through the app is a breeze. The app offers a variety of workout options, from bodyweight exercises to gym workouts,',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'Fitness Trainer',
    img: './assets/images/trainer.jpg',
    text: 'What sets this fitness app apart from others is its comprehensive nutrition tracking feature. Not only does it provide a vast database of food items with accurate nutritional information, but it also allows me to log my meals and monitor my calorie intake effortlessly. ',
  },
  {
    id: 4,
    name: 'Christina Rose',
    job: 'the boss lady (Soldier)',
    img: './assets/images/Soldier.jpg',
    text: 'One of the standout features of this fitness app is its vibrant and supportive community. The app provides a platform where users can connect, share their progress, and motivate each other. The community feature includes discussion boards, challenges, and even the ability to join virtual workout groups. It"s inspiring to see others" journeys and receive encouragement from like-minded individuals.',
  },
];
// End of people data

//here you  select all items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// sets the legit Item or review to display first
let currentItem = 0;

// loads the initial review
window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// shows the previews person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// shows the next persons review
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person (crazy things are happening)
randomBtn.addEventListener('click', function () {

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
