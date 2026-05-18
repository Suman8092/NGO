"use client";

import {
  type CSSProperties,
  type ElementType,
  type ReactNode,
  type RefObject,
  useRef,
} from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface TimelineContentProps {
  as?: ElementType;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  animationNum?: number;
  customVariants?: Variants;
  timelineRef?: RefObject<Element>;
}

const defaultVariants: Variants = {
  hidden: { y: 24, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.16,
      duration: 0.55,
      ease: "easeOut",
    },
  }),
};

export function TimelineContent({
  as = "div",
  children,
  className,
  style,
  animationNum = 0,
  customVariants,
  timelineRef,
}: TimelineContentProps) {
  const localRef = useRef<Element>(null);
  const ref = timelineRef ?? localRef;
  const isInView = useInView(ref, { once: true, margin: "-12% 0px" });
  const MotionComponent = (motion as unknown as Record<string, ElementType>)[
    typeof as === "string" ? as : "div"
  ] ?? motion.div;

  return (
    <MotionComponent
      ref={timelineRef ? undefined : localRef}
      className={cn(className)}
      style={style}
      custom={animationNum}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={customVariants ?? defaultVariants}
    >
      {children}
    </MotionComponent>
  );
}
