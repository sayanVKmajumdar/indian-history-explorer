// Tab Switching Logic (Ancient, Medieval, Modern)
function openPeriod(periodName, defaultMap) {
    // Hide all periods
    let contents = document.getElementsByClassName("period-content");
    for (let i = 0; i < contents.length; i++) {
        contents[i].classList.remove("active");
    }
    
    // Remove active class from all tab buttons
    let tabs = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
    }
    
    // Show the selected period and activate the button
    document.getElementById(periodName).classList.add("active");
    event.currentTarget.classList.add("active");

    // Change map to the default map of that period
    updateMap(defaultMap);
}

// Map Updating Logic
function updateMap(imagePath) {
    let mapImage = document.getElementById("history-map");
    // Simple fade effect
    mapImage.style.opacity = 0;
    setTimeout(() => {
        mapImage.src = imagePath;
        mapImage.style.opacity = 1;
    }, 200);
}

// Accordion Logic (Expand/Collapse topics)
let accordions = document.getElementsByClassName("accordion");
for (let i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null; // Close
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px"; // Open
        }
    });
}
