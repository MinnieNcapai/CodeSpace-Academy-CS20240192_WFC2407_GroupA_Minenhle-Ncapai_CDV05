// Select DOM elements
const hamBtn = document.querySelector(".ham-btn"); // Hamburger menu button
const nav = document.querySelector(".nav"); // Navigation menu
const day = document.querySelector(".day"); // Day mode button
const night = document.querySelector(".night");  // Night mode button
const preloader = document.querySelector(".pre-loader"); // Preloader element

const conbtn = document.querySelector(".conbtn"); // Contact button
const navBtn1 = document.querySelector(".nav-btn1"); // Navigation button 1 (About)
const navBtn2 = document.querySelector(".nav-btn2"); // Navigation button 2 (Portfolio)
const navBtn3 = document.querySelector(".nav-btn3"); // Navigation button 3 (Services)
const navBtn4 = document.querySelector(".nav-btn4"); // Navigation button 4 (Contact)
const navBtn5 = document.querySelector(".nav-btn5"); // Navigation button 5 (Skills)

const about = document.querySelector(".row");  // About section
const skills = document.querySelector(".skills");  // Skills section
const portfolio = document.querySelector(".portfolios");  // Portfolio section
const services = document.querySelector(".services"); // Services section
const contact = document.querySelector(".contact"); // Contact section

// Toggle the navigation menu when the hamburger button is clicked
hamBtn.addEventListener("click", () => {
  nav.classList.toggle("dis"); // Toggle the visibility of the navigation menu
  document.body.classList.toggle("overflow"); // Disable/enable body scroll
});

// Toggle dark mode when day or night button is clicked
day.addEventListener("click", () => {
  document.body.classList.toggle("dark"); // Toggle dark mode
  day.style.display = "none"; // Hide the day button
  night.style.display = "block"; // Show the night button
});


night.addEventListener("click", () => {
  document.body.classList.toggle("dark"); // Toggle dark mode
  night.style.display = "none"; // Hide the night button
  day.style.display = "block"; // Show the day button
});

// Hide the preloader once the page is loaded
window.addEventListener("load", () => (preloader.style.display = "none"));

// Section navigation event listeners for each button
navBtn2.addEventListener('click',() =>{
 // Show and hide appropriate sections for Portfolio button
	portfolio.classList.remove("sec-dis")
	about.classList.remove("sec-dis")
	services.classList.remove("sec-dis")
	contact.classList.remove("sec-dis")

 // Remove active class from all buttons and add to navBtn2 (Portfolio)	
	navBtn5.classList.remove("active")
	navBtn1.classList.remove("active")
	navBtn3.classList.remove("active")
	navBtn4.classList.remove("active")
	navBtn2.classList.add("active")

  // Hide skills section and display it later	
	skills.classList.add("sec-dis")
	nav.classList.toggle("dis");  // Toggle menu visibility
	document.body.classList.toggle("overflow"); // Disable/enable body scroll
	});
	
	navBtn1.addEventListener('click',() =>{
  // Show and hide appropriate sections for About button		
		portfolio.classList.remove("sec-dis")
		about.classList.add("sec-dis")
		navBtn1.classList.add("active")
		navBtn3.classList.remove("active")
		navBtn4.classList.remove("active")
		contact.classList.remove("sec-dis")
	
  // Hide other sections	
		navBtn5.classList.remove("active")
		services.classList.remove("sec-dis")
		navBtn2.classList.remove("active")
		skills.classList.remove("sec-dis")
		nav.classList.toggle("dis");
		document.body.classList.toggle("overflow");
	});

		navBtn3.addEventListener('click',() =>{
   // Show and hide appropriate sections for Services button
		   portfolio.classList.add("sec-dis")
			about.classList.remove("sec-dis")
			navBtn1.classList.remove("active")
			navBtn3.classList.add("active")
			navBtn4.classList.remove("active")
			contact.classList.remove("sec-dis")
	
   // Hide other sections
			navBtn5.classList.remove("active")
			services.classList.remove("sec-dis")
			navBtn2.classList.remove("active")
			skills.classList.remove("sec-dis")
			nav.classList.toggle("dis");
			document.body.classList.toggle("overflow");
			
			});

		navBtn4.addEventListener('click',() =>{
	 // Show and hide appropriate sections for Contact button
				portfolio.classList.remove("sec-dis")
				about.classList.remove("sec-dis")
				navBtn1.classList.remove("active")
				navBtn3.classList.remove("active")
				navBtn4.classList.add("active")
				contact.classList.remove("sec-dis")
	
	    // Hide other sections
				navBtn5.classList.remove("active")
				services.classList.add("sec-dis")
				navBtn2.classList.remove("active")
				skills.classList.remove("sec-dis")
				nav.classList.toggle("dis");
				document.body.classList.toggle("overflow");
			});	
				
				navBtn5.addEventListener('click',() =>{
         // Show and hide appropriate sections for Skills button
					portfolio.classList.remove("sec-dis")
					about.classList.remove("sec-dis")
					navBtn1.classList.remove("active")
					navBtn3.classList.remove("active")
					navBtn4.classList.remove("active")
					contact.classList.add("sec-dis")
					
			// Show Skills section
					navBtn5.classList.add("active")
					services.classList.remove("sec-dis")
					navBtn2.classList.remove("active")
					skills.classList.remove("sec-dis")
					nav.classList.toggle("dis");
					document.body.classList.toggle("overflow");
					
					});	

			// Contact button click event to display the contact section
	 			conbtn.addEventListener('click',() =>{
				about.classList.remove("sec-dis")
				navBtn1.classList.remove("active")
				contact.classList.add("sec-dis")
				navBtn5.classList.add("active")
				  });

