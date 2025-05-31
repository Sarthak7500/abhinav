/*------------------- Theme Toggle JS ---------------------------*/
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Set the toggle switch accordingly
    document.getElementById('theme-toggle').checked = newTheme === 'dark';
  }
  
  window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    document.getElementById('theme-toggle').checked = savedTheme === 'dark';
  });

/*------------------- Text Animation JS ---------------------------*/
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".anime-textbytext-fade").forEach((el) => {
    const animationType = el.dataset.animate || "fade-up";
    const text = el.textContent.trim();
    el.innerHTML = "";

    [...text].forEach((char, i) => {
      const span = document.createElement("span");
      span.textContent = char === " " ? "\u00A0" : char;
      span.style.animationDelay = `${i * 0.05}s`;
      el.appendChild(span);
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".anime-textbytext-fadeup").forEach((el) => {
      const animationType = el.dataset.animate || "fade-up";
      const text = el.textContent.trim();
      el.innerHTML = "";
  
      [...text].forEach((char, i) => {
        const span = document.createElement("span");
        span.textContent = char === " " ? "\u00A0" : char;
        span.style.animationDelay = `${i * 0.05}s`;
        el.appendChild(span);
      });
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".anime-textbytext-fadedown").forEach((el) => {
      const animationType = el.dataset.animate || "fade-up";
      const text = el.textContent.trim();
      el.innerHTML = "";
  
      [...text].forEach((char, i) => {
        const span = document.createElement("span");
        span.textContent = char === " " ? "\u00A0" : char;
        span.style.animationDelay = `${i * 0.05}s`;
        el.appendChild(span);
      });
    });
  });

  


  document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.anime-typewriter');

    elements.forEach(el => {
      const fullText = el.textContent;
      el.textContent = ''; // Clear original text

      let i = 0;
      function type() {
        if (i < fullText.length) {
          el.textContent += fullText.charAt(i);
          i++;
          setTimeout(type, 100);
        }
      }

      type();
    });
  });

  /*----------- JS for collage-------*/
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.img-collage img');
  
    // If the number of images is odd, apply the span rule
    if (images.length % 2 !== 0) {
      images[0].classList.add('first');  // Add the 'first' class to the first image
    }
  });
  

  function createDynamicCollage() {
    const collage = document.querySelector('.img-collage-diamond');
    const images = collage.querySelectorAll('img');
    const totalImages = images.length;
    
    // Calculate grid columns based on the number of images
    let gridTemplateColumns = '';
    if (totalImages <= 3) {
      gridTemplateColumns = '1fr';
    } else if (totalImages <= 6) {
      gridTemplateColumns = '1fr 1fr';
    } else {
      gridTemplateColumns = '1fr 1fr 1fr';
    }
    
    collage.style.gridTemplateColumns = gridTemplateColumns;

    // Dynamically adjust the image positions to create a rhombus shape
    images.forEach((img, index) => {
      let rowStart = Math.ceil((index + 1) / 3);
      let colStart = (index % 3) + 1;

      // Apply grid styles to each image to position them accordingly
      img.style.gridRowStart = rowStart;
      img.style.gridColumnStart = colStart;
    });
  }

  // Create the collage after the page loads
  window.onload = createDynamicCollage;
  
  

/*----------------- Copy Text JS ---------------------*/

function copyText() {
  const text = document.getElementById("copyText").innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert("Text copied to clipboard!");
  }).catch(err => {
    console.error("Failed to copy text: ", err);
  });
}

function lay(value){
    if(value == "1"){
        document.getElementById("menulay").style.display = "inline-block";
        document.getElementById("mobile-menu").style.display = "inline-block";
    }
    else{
        document.getElementById("menulay").style.display = "none";
        document.getElementById("mobile-menu").style.display = "none";
    }
}