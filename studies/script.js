const buttons = document.querySelectorAll('.accordion-button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    const content = document.getElementById(targetId);
    const isActive = button.classList.contains('active');

    // Close all
    buttons.forEach(btn => {
      btn.classList.remove('active');
      const content = document.getElementById(btn.getAttribute('data-target'));
      content.classList.remove('open');
    });

    // Open clicked
    if (!isActive) {
      button.classList.add('active');
      content.classList.add('open');
    }
  });
});


// collapse of javascript

// scripts.js
document.addEventListener('DOMContentLoaded', function() {
  const linkCollapseToggle = document.getElementById('linkCollapseToggle');
  const buttonCollapseToggle = document.getElementById('buttonCollapseToggle');
  const collapseContent = document.getElementById('collapseContent');

  // Function to toggle collapse visibility
  function toggleCollapse() {
    if (collapseContent.style.display === "none" || collapseContent.style.display === "") {
      collapseContent.style.display = "block"; // Show the content
    } else {
      collapseContent.style.display = "none"; // Hide the content
    }
  }

  // Attach event listeners
  linkCollapseToggle.addEventListener('click', toggleCollapse);
  buttonCollapseToggle.addEventListener('click', toggleCollapse);
});


// scripts.js
document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('toggleCollapse');
  const collapseContent = document.getElementById('collapseWidthExample');

  toggleButton.addEventListener('click', function() {
    if (collapseContent.style.display === "none" || collapseContent.style.display === "") {
      collapseContent.style.display = "block"; // Show the content
      setTimeout(() => {
        collapseContent.style.width = "300px"; // Expand to 300px width
      }, 10);
    } else {
      collapseContent.style.width = "0"; // Collapse to 0 width
      setTimeout(() => {
        collapseContent.style.display = "none"; // Hide the content after collapse
      }, 300); // Matches the transition duration
    }
  });
});

// dropdown 

function toggleDropdown() {
      document.getElementById("dropdownMenu").classList.toggle("show");
    }

    // Optional: Close dropdown if clicked outside
    window.onclick = function(event) {
      if (!event.target.matches('.dropdown-button')) {
        const dropdowns = document.getElementsByClassName("dropdown-menu");
        for (let i = 0; i < dropdowns.length; i++) {
          const openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }




