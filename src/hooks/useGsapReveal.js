import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGsapReveal(scopeRef, selector = ".gsap-reveal") {
  useEffect(() => {
    if (!scopeRef.current) return undefined;

    const ctx = gsap.context(() => {
      gsap.utils.toArray(selector).forEach((element, index) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 24 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.58,
            delay: (index % 4) * 0.035,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 86%",
              once: true
            }
          }
        );
      });
    }, scopeRef);

    return () => ctx.revert();
  }, [scopeRef, selector]);
}
