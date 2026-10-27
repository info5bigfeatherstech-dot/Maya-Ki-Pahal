const volunteersContent = {
  title: "Our Volunteers",
  eyebrow: "The people behind every pahal",
  description:
    "Every act of kindness starts with someone who cares. We are grateful to the volunteers who give their time and heart to our community.",
  loadingLabel: "Loading volunteer photos",
  error: "Volunteer photos are temporarily unavailable. Please refresh to try again.",
  volunteers: [
    {
      id: "volunteer-1",
      name: "Maya Mam",
      image: "/volunteers/Volunteers-1.jpeg",
      imageAlt: "Maya Mam, founder of Maya Ki Pahal Foundation",
    },
    {
      id: "volunteer-2",
      name: "Deepa Mam",
      image: "/volunteers/Volunteers-2.jpeg",
      imageAlt: "Deepa Mam supporting the foundation's education work",
    },
    {
      id: "volunteer-3",
      name: "Muskaan Mam",
      image: "/volunteers/Volunteers-3.jpeg",
      imageAlt: "Muskaan Mam, volunteer with Maya Ki Pahal Foundation",
    },
    {
      id: "volunteer-4",
      name: "Sunita Mam",
      image: "/volunteers/Volunteers-4.jpeg",
      imageAlt: "Sunita Mam, volunteer with Maya Ki Pahal Foundation",
    },
  ],
};

export function getVolunteers() {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve(volunteersContent), 400);
  });
}
