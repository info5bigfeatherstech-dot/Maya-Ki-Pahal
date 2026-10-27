const heroSlides = [
  {
    id: "education",
    eyebrow: "Be the pahal. Be the change.",
    tagline: "Be the pahal. Be the change.",
    title: "Supporting Children with Education & Care",
    subtitle:
      "Every child deserves a classroom, a book, and someone who believes in them.",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=2200&q=85",
    imageAlt: "Children learning together in a bright classroom",
  },
  {
    id: "elderly",
    eyebrow: "Be the pahal. Be the change.",
    tagline: "Be the pahal. Be the change.",
    title: "Helping the Elderly with Dignity",
    subtitle:
      "Because the ones who cared for us deserve comfort, respect and companionship.",
    image:
      "https://images.unsplash.com/photo-1587556930799-8dca6fad6d41?auto=format&fit=crop&w=2200&q=85",
    imageAlt: "A caregiver spending time with an elderly woman",
  },
  {
    id: "animals",
    eyebrow: "Be the pahal. Be the change.",
    tagline: "Be the pahal. Be the change.",
    title: "Animal Welfare & Rescue",
    subtitle: "Giving a voice to the voiceless, one rescue at a time.",
    image:
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=2200&q=85",
    imageAlt: "A rescued dog looking hopefully toward the camera",
  },
];

export function getHeroSlides() {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve({
      slides: heroSlides,
      donateLabel: "Donate Now",
      learnLabel: "Learn More",
      previousLabel: "Previous slide",
      nextLabel: "Next slide",
      chooseSlideLabel: "Show slide",
      scrollLabel: "Scroll to learn about the foundation",
      loadingLabel: "Loading foundation highlights",
      error: "The highlights are temporarily unavailable. Please refresh the page to try again.",
      imageError: "One or more highlight images could not be loaded.",
    }), 350);
  });
}
