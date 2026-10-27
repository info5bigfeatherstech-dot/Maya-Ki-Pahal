const aboutContent = {
  navigation: {
    logo: "Maya Ki Pahal",
    logoAlt: "Maya Ki Pahal Foundation logo",
    links: [
      { label: "Home", href: "/" },
      { label: "Our Work", href: "/our-work" },
      { label: "About Us", href: "/about-us" },
      { label: "Events", href: "/events" },
      { label: "Contact Us", href: "/contact-us" },
    ],
    donateLabel: "Donate",
    menuLabel: "Open navigation menu",
    closeMenuLabel: "Close navigation menu",
  },
  welcome: {
    title: "Welcome to Maya Ki Pahal Foundation",
    quote: "“An Initiative Toward Education, Life and Welfare”",
    highlight: "Be the pahal. Be the change.",
    paragraphs: [
      "Maya Ki Pahal Foundation was founded in November 2020 by Mrs. Maya, compassionate woman driven by the desire to serve society from the grassroots level.",
      "With no external funding or institutional backing, what began as a personal act of kindness soon evolved into a movement of purpose.",
      "Mrs. Maya observed the struggles of underprivileged children, neglected elderly individuals, and voiceless animals in her community. Instead of waiting for change, she became the change. With unwavering dedication, she began helping families by providing educational support, daily essentials, and emotional care — all from her own resources.",
    ],
    sinceBadge: "Since Nov 2020",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "A volunteer supporting children during a learning activity",
  },
  why: {
    title: "Why We Exist",
    paragraph:
      "At Maya Ki Pahal, we know that even a small step can bring light into someone’s darkness. Our work is not backed by profit or popularity, but by purpose and people. With every child we educate, every elder we comfort, every animal we save, and every tree we plant — we take one step closer to building the kind of world we wish to live in.",
    quote: "“Let our pahal (initiative) be your reason to hope, to heal, and to help.”",
    intro:
      "Maya Ki Pahal is dedicated to bringing hope and opportunities to underprivileged communities. We believe in empowering lives through education, awareness, and collective action. Every small step counts together, we can create meaningful change.",
  },
  mission: {
    eyebrow: "Who we are",
    title: "“An Initiative Toward Education, Life and Welfare”",
    paragraphs: [
      "Maya Ki Pahal is a heartfelt initiative born out of a deep sense of compassion and responsibility toward society. Established in November 2020 by Mrs. Maya, the foundation was built on a simple yet powerful belief: that every individual deserves dignity, support, and a fair opportunity to thrive.",
      "What started as a personal mission to help underprivileged children and the elderly soon expanded into a registered NGO with a clear purpose — to serve Children, Elderly People, Animals, and the Environment with equal care and commitment.",
    ],
    image:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1800&q=85",
    imageAlt: "Volunteers joining hands to support their community",
  },
  journey: {
    eyebrow: "Be part of something meaningful",
    title: "Join Our Journey",
    paragraphs: [
      "Maya Ki Pahal welcomes volunteers, donors, and supporters who believe that everyone deserves care, dignity, and a chance to thrive.",
      "A book, a warm blanket, a bowl of food, or simply your time and attention can become a meaningful first step. Every contribution, given with care, helps bring hope closer to someone in our community.",
      "What began as Mrs. Maya’s personal effort has grown into a wider initiative for children, elderly people, animals, and the environment. We invite you to be part of this journey and help nurture a more compassionate future.",
    ],
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Children and community members gathered together at a local event",
    imageBadge: "Every pahal matters",
    action: "Contribute",
    contactAction: "Talk to us",
    contactHref: "/contact-us",
  },
  involvement: {
    title: "Be the pahal. Be the change.",
    donateLabel: "Donate",
    volunteerLabel: "Volunteer",
    contactLabel: "Contact Us",
    contactHref: "/contact-us",
    volunteerHref: "mailto:mayakipahal@gmail.com?subject=Volunteer%20with%20Maya%20Ki%20Pahal",
  },
  errors: {
    about: "We couldn’t load the foundation information. Please refresh the page to try again.",
    hero: "The highlights are temporarily unavailable. Please refresh the page to try again.",
    focusAreas:
      "Our focus areas are temporarily unavailable. Please refresh to try again.",
  },
  donation: {
    title: "Be a part of someone’s pahal.",
    message:
      "Your kindness can help provide education, care, and a little more hope. Get in touch with us to learn how you can support Maya Ki Pahal Foundation.",
    closeLabel: "Close donation information",
    contactLabel: "Contact us to donate",
    email: "mayakipahal@gmail.com",
  },
  footer: {
    logoAlt: "Maya Ki Pahal Foundation logo",
    tagline: "An Initiative Toward Education, Life and Welfare",
    quickLinksTitle: "Quick Links",
    contactTitle: "Get in touch",
    addressLabel: "Address",
    address:
      "11 A, Friends Colony, Near Ram Mandir, Vaishali Nagar, Ajmer, Rajasthan, India. PIN: 305001",
    phoneLabel: "Phone",
    phone: "+91-7297960397",
    emailLabel: "Email",
    email: "mayakipahal@gmail.com",
    socialLabel: "Visit us on",
  },
};

export function getAboutContent() {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve(aboutContent), 300);
  });
}
