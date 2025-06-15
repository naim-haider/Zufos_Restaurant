import { useInView } from "react-intersection-observer";
export default function useScrollFade() {
  const [ref, inView] = useInView({ triggerOnce: true, rootMargin: "-50px" });
  return [ref, inView];
}
