const siteContent = {
	nav: {
		'nav-item-1': 'Services',
		'nav-item-2': 'Product',
		'nav-item-3': 'Vision',
		'nav-item-4': 'Features',
		'nav-item-5': 'About',
		'nav-item-6': 'Contact',
		'img-src': 'img/logo.png',
	},
	cta: {
		h1: 'DOM Is Awesome',
		button: 'Get Started',
		'img-src': 'img/header-img.png',
	},
	'main-content': {
		'features-h4': 'Features',
		'features-content':
			'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'about-h4': 'About',
		'about-content':
			'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'middle-img-src': 'img/mid-page-accent.jpg',
		'services-h4': 'Services',
		'services-content':
			'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'product-h4': 'Product',
		'product-content':
			'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'vision-h4': 'Vision',
		'vision-content':
			'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
	},
	contact: {
		'contact-h4': 'Contact',
		address: '123 Way 456 Street Somewhere, USA',
		phone: '1 (888) 888-8888',
		email: 'sales@greatidea.io',
	},
	footer: {
		copyright: 'Copyright Great Idea! 2018',
	},
};

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

// header
let header = document.querySelector('header');
let nav = header.querySelector('nav');
let navLinks = nav.querySelectorAll('a');

// cta
let cta = document.querySelector('.cta');
let h1 = cta.querySelector('h1');
let ctaButton = cta.querySelector('button');
let ctaImg = cta.querySelector('#cta-img');

// main content
let mainContent = document.querySelector('.main-content');
let topContent = mainContent.querySelector('.top-content');
let topContentHeading = topContent.querySelectorAll('h4');
let topContentDescription = topContent.querySelectorAll('p');

let mainContentImg = mainContent.querySelector('.middle-img');

let bottomContent = mainContent.querySelector('.bottom-content');
let bottomContentHeading = bottomContent.querySelectorAll('h4');
let bottomContentDescription = bottomContent.querySelectorAll('p');

// contact
let contact = document.querySelector('.contact');
let contactHeading = contact.querySelector('h4');
let contactContent = contact.querySelectorAll('p');

// footer
let footer = document.querySelector('footer');
let footerContent = footer.querySelector('p');

// --- updating HTML
// header
navLinks[0].textContent = siteContent.nav['nav-item-1'];
navLinks[1].textContent = siteContent.nav['nav-item-2'];
navLinks[2].textContent = siteContent.nav['nav-item-3'];
navLinks[3].textContent = siteContent.nav['nav-item-4'];
navLinks[4].textContent = siteContent.nav['nav-item-5'];
navLinks[5].textContent = siteContent.nav['nav-item-6'];

// cta
h1.textContent = siteContent.cta.h1.split(' ').join('\n');
ctaButton.textContent = siteContent.cta.button;
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

// main content
topContentHeading[0].textContent = siteContent['main-content']['features-h4'];
topContentDescription[0].textContent =
	siteContent['main-content']['features-content'];

topContentHeading[1].textContent = siteContent['main-content']['about-h4'];
topContentDescription[1].textContent =
	siteContent['main-content']['features-content'];

mainContentImg.setAttribute(
	'src',
	siteContent['main-content']['middle-img-src']
);

bottomContentHeading[0].textContent =
	siteContent['main-content']['services-h4'];
bottomContentDescription[0].textContent =
	siteContent['main-content']['services-content'];

bottomContentHeading[1].textContent = siteContent['main-content']['product-h4'];
bottomContentDescription[1].textContent =
	siteContent['main-content']['product-content'];

bottomContentHeading[2].textContent = siteContent['main-content']['vision-h4'];
bottomContentDescription[2].textContent =
	siteContent['main-content']['vision-content'];

// contact
contactHeading.textContent = siteContent.contact['contact-h4'];
contactContent[0].textContent = siteContent.contact.address;
contactContent[1].textContent = siteContent.contact.phone;
contactContent[2].textContent = siteContent.contact.email;

// footer
footerContent.textContent = siteContent.footer.copyright;

// change color of navigation text to green
for (let i = 0; i < navLinks.length; i++) {
	navLinks[i].style.color = 'green';
}

// add two new items to nav
let ideas = document.createElement('a');
ideas.textContent = 'Ideas';
ideas.href = '#';
ideas.id = 'IdeasLink';
ideas.style.color = 'red';
nav.prepend(ideas);

let donate = document.createElement('a');
donate.textContent = 'Donate';
donate.href = '#';
donate.id = 'DonateLink';
donate.style.color = 'blue';
nav.appendChild(donate);
