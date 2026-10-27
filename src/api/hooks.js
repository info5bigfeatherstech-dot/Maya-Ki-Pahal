import { useQuery } from "@tanstack/react-query";
import { getAboutContent } from "./aboutApi";
import { getFocusAreas } from "./focusAreasApi";
import { getGalleryContent } from "./galleryApi";
import { getHeroSlides } from "./heroApi";
import { getPageContent } from "./pagesApi";
import { getVolunteers } from "./volunteersApi";

export function useHeroSlides() {
  return useQuery({
    queryKey: ["hero-slides"],
    queryFn: getHeroSlides,
    staleTime: 5 * 60 * 1000,
  });
}

export function useAboutContent() {
  return useQuery({
    queryKey: ["about-content"],
    queryFn: getAboutContent,
    staleTime: 5 * 60 * 1000,
  });
}

export function useFocusAreas() {
  return useQuery({
    queryKey: ["focus-areas"],
    queryFn: getFocusAreas,
    staleTime: 5 * 60 * 1000,
  });
}

export function useGalleryContent() {
  return useQuery({
    queryKey: ["community-gallery"],
    queryFn: getGalleryContent,
    staleTime: 5 * 60 * 1000,
  });
}

export function useVolunteers() {
  return useQuery({
    queryKey: ["volunteers"],
    queryFn: getVolunteers,
    staleTime: 5 * 60 * 1000,
  });
}

export function usePageContent(slug) {
  return useQuery({
    queryKey: ["page-content", slug],
    queryFn: () => getPageContent(slug),
    staleTime: 5 * 60 * 1000,
  });
}
