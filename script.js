document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Sticky Header: Adds a solid background to the menu when you scroll down
    const header = document.querySelector("header");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = "#ffffff";
            header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
            header.style.transition = "all 0.3s ease";
        } else {
            header.style.backgroundColor = "transparent";
            header.style.boxShadow = "none";
        }
    });

    // 2. Interactive Links: Shows a message when basic navigation links are clicked
    const navLinks = document.querySelectorAll("nav a");
    
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            const href = link.getAttribute("href");
            
            // Only show the "under construction" alert for standard links, NOT the donate button
            if (href === "#") {
                e.preventDefault(); 
                document.querySelectorAll("nav a").forEach(l => l.classList.remove("active"));
                e.target.classList.add("active");
                alert("This section is under construction! Check back soon.");
            }
        });
    });

    // 3. Modal Logic for BOTH Donate and Volunteer Forms
    const donateBtns = document.querySelectorAll('a[href="#donate"]');
    const volunteerBtns = document.querySelectorAll('a[href="#volunteer"]');
    
    const donateModal = document.getElementById("donateModal");
    const volunteerModal = document.getElementById("volunteerModal");
    
    // Open Donate Modal (works for both the top nav button and the hero button)
    donateBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            donateModal.style.display = "flex";
        });
    });

    // Open Volunteer Modal
    volunteerBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            volunteerModal.style.display = "flex";
        });
    });

    // Close Modals when clicking the "X"
    const closeBtns = document.querySelectorAll(".close-btn");
    closeBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.target.closest(".modal").style.display = "none";
        });
    });

    // Close Modals when clicking outside the white box
    window.addEventListener("click", (e) => {
        if (e.target.classList.contains("modal")) {
            e.target.style.display = "none";
        }
    });

});
// Stamp local IST date and time on form submission
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', () => {
        const timeField = form.querySelector('.local-time-field');
        if (timeField) {
            timeField.value = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) + ' IST';
        }
    });
});