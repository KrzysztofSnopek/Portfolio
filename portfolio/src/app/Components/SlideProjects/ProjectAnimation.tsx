import { useSpring, animated as a } from "@react-spring/web";

export default function ProjectAnimation({ children, isVisible }: any) {
  const animatedProps = useSpring({
    opacity: isVisible ? 1 : 0,
    x: isVisible ? 0 : 1200,
    width: isVisible ? `15%` : `0%`,
    config: { mass: 4, tension: 400, friction: 100 },
  });

  return (
    <a.div
      className="spring-in absolute top-0 z-40"
      style={{ ...animatedProps }}
    >
      {children}
    </a.div>
  );
}
