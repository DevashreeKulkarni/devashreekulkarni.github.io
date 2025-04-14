function navigateTo(sectionId) {
  // Hide all sections
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  document.querySelectorAll('.content-box, .reveal-item').forEach(el => el.classList.remove('revealed'));

  // Show the selected section
  const target = document.getElementById(sectionId);
  target.classList.add('active');

  // Reveal all .content-box and .reveal-item elements in order
  const elementsToReveal = target.querySelectorAll('.content-box, .reveal-item');
  elementsToReveal.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('revealed');
    }, index * 300);
  });

  // Special reveal for SKILLS
  if (sectionId === "skills") {
    const basic = document.getElementById("basic-skill");
    const intermediate = document.getElementById("intermediate-skill");
    const advanced = document.getElementById("advanced-skill");

    [basic, intermediate, advanced].forEach(el => {
      el.style.opacity = 0;
      el.style.transform = "translateY(30px)";
    });

    setTimeout(() => {
      basic.style.opacity = 1;
      basic.style.transform = "translateY(0)";
    }, 100);
    setTimeout(() => {
      intermediate.style.opacity = 1;
      intermediate.style.transform = "translateY(0)";
    }, 400);
    setTimeout(() => {
      advanced.style.opacity = 1;
      advanced.style.transform = "translateY(0)";
    }, 700);
  }
  if (sectionId === "text-analyser") {
    // Clear previous input and hide results
    const textarea = document.getElementById("inputText");
    const resultsBox = document.getElementById("analysisResults");
  
    if (textarea) textarea.value = "";
    if (resultsBox) resultsBox.style.display = "none";
  }
  

  // Special reveal for ACHIEVEMENTS bullets
  if (sectionId === "achievements") {
    const items = document.querySelectorAll("#achievements .achievements-list li");

    items.forEach(item => item.classList.remove("revealed"));

    items.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add("revealed");
      }, 300 + index * 300);
    });
  }
}

function analyzeText() {
  const text = document.getElementById("inputText").value.trim();
  if (!text) {
    alert("Please enter some text first!");
    return;
  }

  const letters = text.match(/[a-zA-Z]/g)?.length || 0;
  const words = text.split(/\s+/).filter(Boolean).length;
  const spaces = (text.match(/ /g) || []).length;
  const newlines = (text.match(/\n/g) || []).length;
  const symbols = (text.match(/[^\w\s]/g) || []).length;

  const pronouns = ['i', 'you', 'he', 'she', 'it', 'we', 'they', 'me', 'him', 'her', 'us', 'them', 'my', 'your', 'his', 'their'];
  const prepositions = ['in', 'on', 'at', 'by', 'for', 'to', 'with', 'from', 'about','above','into','until','over','under','around','across','toward','as','below','inside','', 'against', 'between', 'into', 'through', 'during', 'before', 'after'];
  const articles = ['a', 'an'];

  const wordArray = text.toLowerCase().match(/\b\w+\b/g) || [];

  const countOccurrences = (list) => {
    const count = {};
    list.forEach(item => {
      const occurrences = wordArray.filter(word => word === item).length;
      if (occurrences > 0) count[item] = occurrences;
    });
    return count;
  };

  const pronounCount = countOccurrences(pronouns);
  const prepositionCount = countOccurrences(prepositions);
  const articleCount = countOccurrences(articles);

  const showList = (elementId, data) => {
    const ul = document.getElementById(elementId);
    ul.innerHTML = "";
    for (let key in data) {
      const li = document.createElement("li");
      li.textContent = `${key}: ${data[key]}`;
      ul.appendChild(li);
    }
  };

  showList("basicCounts", {
    Letters: letters,
    Words: words,
    Spaces: spaces,
    Newlines: newlines,
    Symbols: symbols
  });

  showList("pronounCounts", pronounCount);
  showList("prepositionCounts", prepositionCount);
  showList("articleCounts", articleCount);

  document.getElementById("analysisResults").style.display = "block";
}

// MAIN: Run only after full DOM load
document.addEventListener('DOMContentLoaded', () => {
  // Scroll-triggered reveal for content-boxes and reveal-items
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  // Observe all non-active elements for scroll animation
  document.querySelectorAll('.section:not(.active) .content-box, .section:not(.active) .reveal-item')
    .forEach(el => observer.observe(el));

  // Profile picture enlarge toggle
  const profilePic = document.getElementById('profile-pic');
  if (profilePic) {
    profilePic.addEventListener('click', function () {
      this.classList.toggle('enlarged');
    });
  }

  // Load the home section initially
  navigateTo('home');
});

// ========== Q2: Global Click & View Logger ==========

// Helper to get element type as readable
function getElementDescription(element) {
  if (element.tagName === 'IMG') return 'image';
  if (element.tagName === 'A') return 'link';
  if (element.tagName === 'BUTTON') return 'button';
  if (element.tagName === 'TEXTAREA') return 'textarea';
  if (element.tagName === 'INPUT') return 'input';
  if (element.tagName === 'H1' || element.tagName === 'H2' || element.tagName === 'P') return 'text';
  if (element.tagName === 'SECTION') return `section#${element.id}`;
  return element.tagName.toLowerCase();
}

// Log to console in required format
function logEvent(type, element) {
  const timestamp = new Date().toISOString();
  const description = getElementDescription(element);
  console.log(`${timestamp} - ${type} - ${description}`);
}

// Global click listener
document.addEventListener('click', function(event) {
  logEvent('click', event.target);
});

// View tracking using IntersectionObserver
const viewObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      logEvent('view', entry.target);
      viewObserver.unobserve(entry.target); // only log first view
    }
  });
}, {
  threshold: 0.3
});

// Apply view tracking to major sections
document.querySelectorAll('.section').forEach(section => {
  viewObserver.observe(section);
});

