import { Children, cloneElement, isValidElement, type ReactNode } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms for child sequencing (applied via style). */
  delay?: number;
  /** Render as a specific element. Defaults to div. */
  as?: "div" | "section" | "span" | "li";
}

/**
 * Reveal — wraps content with a scroll-triggered fade + slide up animation.
 * Animation runs once when element enters the viewport.
 */
export function Reveal({ children, className, delay = 0, as: Tag = "div" }: RevealProps) {
  const { ref, revealed } = useScrollReveal<HTMLDivElement>();

  return (
    <Tag
      ref={ref as never}
      style={{ transitionDelay: revealed ? `${delay}ms` : "0ms" }}
      className={cn(
        "transition-all duration-700 ease-out will-change-transform",
        revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

interface RevealGroupProps {
  children: ReactNode;
  className?: string;
  /** Delay between each child in ms. */
  stagger?: number;
  /** Initial delay before first child in ms. */
  initialDelay?: number;
}

/**
 * RevealGroup — applies a staggered Reveal to each direct child.
 */
export function RevealGroup({ children, className, stagger = 100, initialDelay = 0 }: RevealGroupProps) {
  const items = Children.toArray(children).filter(isValidElement);
  return (
    <div className={className}>
      {items.map((child, i) => (
        <Reveal key={(child as { key?: string }).key ?? i} delay={initialDelay + i * stagger}>
          {cloneElement(child)}
        </Reveal>
      ))}
    </div>
  );
}
