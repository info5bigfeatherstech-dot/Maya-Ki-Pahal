const galleryContent = {
  title: "Small acts. Big change.",
  loadingLabel: "Loading community photos",
  error: "Community photos are temporarily unavailable. Please refresh to try again.",
  photos: [
    {
      id: "learning-together",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85",
      imageAlt: "Children learning together in a classroom",
      caption: "Learning, growing, and dreaming together",
    },
    {
      id: "care-and-support",
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=85",
      imageAlt: "A volunteer sharing a supportive moment with children",
      caption: "A little care can make a big difference",
    },
    {
      id: "community-action",
      image:
        "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1200&q=85",
      imageAlt: "A group of people reaching their painted hands together in a circle",
      caption: "Small acts of kindness bring people together",
    },
  ],
};

export function getGalleryContent() {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve(galleryContent), 450);
  });
}
