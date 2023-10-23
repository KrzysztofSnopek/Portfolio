import { useSpring, animated as a } from "@react-spring/web";

export default function ProjectAnimation({ children, isVisible }: any) {
  const animatedProps = useSpring({
    opacity: isVisible ? 1 : 0,
    x: isVisible ? 0 : 1200,
    config: { mass: 4, tension: 400, friction: 100 },
  });

  return (
    <a.div className="spring-in" style={{ ...animatedProps }}>
      {children}
    </a.div>
  );
}
