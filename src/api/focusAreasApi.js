const focusAreas = [
  {
    title: "Children",
    description: "Opening doors to learning, care, and brighter possibilities.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=85",
    imageAlt: "School children learning together in a classroom",
    icon: "book",
    href: "#about",
  },
  {
    title: "Elderly People",
    description: "Offering older members of our community care and companionship.",
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=85",
    imageAlt: "An older woman sharing a joyful moment with a companion",
    icon: "heart",
    href: "#about",
  },
  {
    title: "Animals",
    description: "Protecting and caring for animals who need a helping hand.",
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Two dogs enjoying time together outdoors",
    icon: "paw",
    href: "#about",
  },
  {
    title: "Environment",
    description: "Taking small, thoughtful steps toward a greener tomorrow.",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Sunlight filtering through a green forest",
    icon: "leaf",
    href: "#about",
  },
];

export function getFocusAreas() {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve({
      title: "Who We Serve",
      eyebrow: "Our work",
      learnMoreLabel: "Learn more",
      loadingLabel: "Loading focus area",
      error: "Our focus areas are temporarily unavailable. Please refresh to try again.",
      areas: focusAreas,
    }), 500);
  });
}
