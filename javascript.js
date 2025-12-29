


console.clear();

/*  -------------------------  */
/*  --  The ease function  --  */
/*  -------------------------  */

function ease({
  startValue = 0,
  endValue = 1,
  durationMs = 200,
  onStep,
  onComplete = () => {},
}) {
  const raf = window.requestAnimationFrame || (func => window.setTimeout(func, 16));
  
  const stepCount = durationMs / 16;
  const valueIncrement = (endValue - startValue) / stepCount;
  const sinValueIncrement = Math.PI / stepCount;
  let currentValue = startValue;
  let currentSinValue = 0;
  
  function step() {
    currentSinValue += sinValueIncrement;
    currentValue += valueIncrement * (Math.sin(currentSinValue) ** 2) * 2;
    
    if (currentSinValue < Math.PI) {
      onStep(currentValue);
      raf(step);
    } else {
      onStep(endValue);
      onComplete();
    }
  }

  raf(step);
}


/*  ---------------------------  */
/*  --  Some usage examples  --  */
/*  ---------------------------  */

// This will scroll from the current position down to the element with a particular ID
document.querySelectorAll('.link-to-section').forEach(el => el.addEventListener('click', e => {
  // Side-note: NodeList.forEach() isn't supported everywhere
  // https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach
  const targetId = e.target.getAttribute('href');
  const targetEl = document.querySelector(targetId);
  const targetPos = targetEl.getBoundingClientRect().top + window.scrollY;
  
  ease({
    startValue: window.scrollY,
    endValue: targetPos,
    durationMs: 400,
    onStep: value => window.scroll(0, value),
  });
}));

// This will smoothly scroll from the current window position to the top.
// When at the top, it will focus the search box and remove the hash from the URL
document.querySelectorAll('.back-to-top').forEach(el => el.addEventListener('click', () => {
  ease({
    startValue: window.scrollY,
    endValue: 0,
    onStep: value => window.scroll(0, value),
    onComplete: () => {
      // You wouldn't want to do these things before scrolling was finsihed,
      // they would snap the scroll immediately to the top of the page
      document.querySelector('#search').focus();
      document.location.hash = '';
    }
  });
}));

document.querySelectorAll('.link-to-section').forEach(el => el.addEventListener('click', e => {
    const targetId = e.target.getAttribute('href');
    const targetEl = document.querySelector(targetId);
    const targetPos = targetEl.getBoundingClientRect().top + window.scrollY;
  
    ease({
      startValue: window.scrollY,
      endValue: targetPos,
      durationMs: 400,
      onStep: value => window.scroll(0, value),
    });
  }));

  
  document.querySelectorAll('.back-to-top').forEach(el => el.addEventListener('click', () => {
    ease({
      startValue: window.scrollY,
      endValue: 0,
      onStep: value => window.scroll(0, value),
      onComplete: () => {
        document.querySelector('#search').focus();
        document.location.hash = '';
      }
    });
  }));

  document.querySelector('.back-to-top').addEventListener('click', function () {
    document.activeElement.blur(); // Remove focus from the active element (search bar)
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top smoothly
});



  

  

hat.textContent = '🎓';
hat.innerHTML = '<img src="" alt="hat" />';

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const imagesContainer = document.querySelector('.carousel-images');
const images = imagesContainer.querySelectorAll('img');
let index = 0;

function showImage(i) {
  const width = images[0].clientWidth;  // width of the first image
  imagesContainer.style.transform = `translateX(${-i * width}px)`;
}

// Arrow click events
next.addEventListener('click', () => {
  index = (index + 1) % images.length;
  showImage(index);
});

prev.addEventListener('click', () => {
  index = (index - 1 + images.length) % images.length;
  showImage(index);
});


function updateArrows() {
  prev.style.display = index === 0 ? 'none' : 'block';
  next.style.display = index === images.length - 1 ? 'none' : 'block';
}

function showImage(i) {
  const width = images[0].clientWidth;
  imagesContainer.style.transform = `translateX(${-i * width}px)`;
  updateArrows(); // update arrows whenever image changes
}

// Initial setup
updateArrows();





document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".card-button").forEach(btn => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".card");
      card.classList.toggle("active"); // shows or hides overlay
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  if (window.matchMedia("(hover: none)").matches) { // touch devices only
    document.querySelectorAll(".card-button").forEach(btn => {
      btn.addEventListener("click", () => {
        const card = btn.closest(".card");
        card.classList.toggle("active"); // slide overlay up/down
      });
    });
  }
});


document.querySelectorAll(".card-button").forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".card");
    card.classList.toggle("active"); // toggle overlay
  });
});



btn.addEventListener("click", () => {
  console.log("Button clicked!"); // check console
  const card = btn.closest(".card");
  card.classList.toggle("active");
});


<div class="card" onclick="toggleExpand(this)">
</div>

function toggleExpand(cardElement) {
  cardElement.classList.toggle('expanded');
  // You would add corresponding CSS for the .expanded class
  console.log("Card clicked! Toggled expanded state.");
}

// Alternatively, use an event listener
document.querySelectorAll('.card-button').forEach(button => {
  button.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent the parent card's click event from firing
    alert('Button was clicked!');
  });
});














