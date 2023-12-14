// For services Section boss

// This array of objects is so that our services can be sorted out
const serviceMenu = [
    {
      id: 1,
      title: "Kids' Fitness Fun:",
      category: "kids",
      price: `25000xaf`,
      img: "./assets/images/kid1.jpg",
      desc: `This course is designed to make fitness enjoyable and engaging for children. 
      Through a combination of games, activities, and age-appropriate exercises, kids 
      will develop their motor skills, coordination, and overall fitness level. <strong>6 months program</strong>`,
    },
    {
      id: 2,
      title: "HIIT (High-Intensity Interval Training)",
      category: "adults",
      price: 10000,
      img: "./assets/images/Adult1.jpg",
      desc: `
      This course is designed for adults looking to maximize their workout efficiency and burn calories effectively. HIIT involves short bursts of intense exercise followed by brief recovery periods. Participants will engage in a variety of full-body exercises, including cardio and strength training, to improve cardiovascular fitness, build lean muscle, and boost metabolism. H`,
    },
    {
      id: 3,
      title: "Gentle Fitness and Mobility",
      category: "aged",
      price: `20,000xaf`,
      img: "./assets/images/ager3.jpeg",
      desc: `
      This course is designed specifically for seniors looking to improve overall mobility, flexibility, and joint health. Participants will engage in low-impact exercises, stretching routines, and gentle movements that promote joint mobility and increase range of motion. The classes will also focus on improving posture, balance, `,
    },
    {
      id: 4,
      title: "Youth Strength and Conditioning:",
      category: "kids",
      price: `20,000xaf`,
      img: "./assets/images/kid2.jpg",
      desc: `This course is specifically designed for older children and teenagers who 
      are interested in enhancing their athletic performance and building strength. 
      Under the guidance of qualified trainers, participants will learn proper form and 
      technique for exercises such as weightlifting, bodyweight movements, and agility drills.`,
    },
    {
      id: 5,
      title: "Functional Fitness",
      category: "adults",
      price: `20,000xaf`,
      img: "./assets/images/Adult2.jpg",
      desc: `
      Functional fitness focuses on improving everyday movements and activities. This course aims to enhance strength, flexibility, balance, and coordination to better perform tasks in daily life. Participants will engage in exercises that mimic real-life movements, such as squatting, lifting, pushing, and pulling, to improve overall functionality and reduce the risk of injuries.`,
    },
    {
      id: 6,
      title: "Chair-Based Exercise",
      category: "aged",
      price: `20,000xaf`,
      img: "./assets/images/Ager1.jpeg",
      desc: `
      This course is tailored for seniors with limited mobility or those who prefer seated workouts. Chair-based exercises focus on improving strength, flexibility, and cardiovascular fitness while utilizing a chair for support. Participants will engage in a variety of seated exercises, including gentle aerobics, resistance training,`,
    },
    {
      id: 7,
      title: "Martial Arts for Kids",
      category: "kids",
      price: `20,000xaf`,
      img: "./assets/images/Kid3.jpg",
      desc: `
      This course introduces children to the exciting 
      world of martial arts, focusing on discipline, 
      self-defense skills, and overall physical fitness. 
      Kids will learn basic techniques from disciplines such as karate, taekwondo, or judo, while also developing important values like respect, focus, and perseverance. `,
    },
    {
      id: 8,
      title: "Mind-Body Wellness",
      category: "adults",
      price: `10,000xaf`,
      img: "./assets/images/adult3.jpg",
      desc: `:
      This course combines the benefits of yoga and meditation to promote physical, mental, and emotional well-being. Participants will practice various yoga poses, breathing exercises, and mindfulness techniques to improve flexibility, balance, and stress management.`,
    },
    {
      id: 9,
      title: "Aqua Aerobics",
      category: "aged",
      price: `12,000xaf`,
      img: "./assets/images/Ager2.jpg",
      desc: `
      Aqua aerobics is a low-impact exercise course conducted in a pool, making it ideal for seniors who want to improve cardiovascular fitness without putting stress on their joints. Participants will perform a series of aerobic exercises, such as water walking, leg kicks, and arm movements, in the buoyancy of the water.`,
    },
    {
      id: 10,
      title: "Sports Conditioning for Young Athletes",
      category: "kids",
      price: `20,000xaf`,
      img: "./assets/images/child.jpg",
      desc: `
      This course is designed for young athletes who 
      participate in specific sports or have a keen 
      interest in sports performance. With a focus on 
      improving strength, speed, agility, and endurance, 
      participants will engage in sport-specific drills, functional exercises, and conditioning workouts. `,
    },
  ];

  

//   The proper code to dynamically populate our services

const sectionCenter = document.querySelector('.section-center');

const filterBtn = document.querySelectorAll(".filter-btn"); 

// Here the function is called with the window.addeventListenner to load all items
window.addEventListener('DOMContentLoaded', function(){
    displayServiceMenuItems(serviceMenu);
});

// Here I'm working with the buttons to make them sort things out

filterBtn.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const category = e.currentTarget.dataset.id;
    const menuCatergory = serviceMenu.filter(function(menuItem) {
      
      if(menuItem.category === category) {

        return menuItem;
      }
      // console.log(menuItem.category);

      
      
    })

    if(category === 'all') {
      displayServiceMenuItems(serviceMenu);
    } else {
      displayServiceMenuItems(menuCatergory);
    }

    console.log(menuCatergory);
    

   
  });
});

// Function to iterate throught the object and display the menu legitly
function displayServiceMenuItems(serviceMenuItems) {
    let displayServiceMenu = serviceMenuItems.map(function(item){
        

        return `<article class="service-item">
        <img src=${item.img} alt=${item.title} class="photo">
    
        <div class="service-info">
            <header>
                <h4>${item.title}</h4>
                <h4>${item.price}</h4>
            </header>
    
            <p class="service-text">
                ${item.desc}
            </p>
    
            <button class="btn">Join Program</button>
        </div>
    
    </article>
    `
        });
        displayServiceMenu = displayServiceMenu.join('');
        sectionCenter.innerHTML = displayServiceMenu;
}


