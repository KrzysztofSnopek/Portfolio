export default function generateDelays(
  textLength: number,
  baseDelay: number = 0.1,
  delayIncrement: number = 0.1
): number[] {
  const delays: number[] = [];
  let currentDelay: number = baseDelay;

  for (let i = 0; i < textLength; i++) {
    delays.push(currentDelay);
    currentDelay += delayIncrement;
  }

  return delays;
}
