import { press_start } from "./fonts";

export default function PageHeading({ heading }: { heading: string }) {
  return (
    <h1
      className={`px-10 py-5 rounded-3xl text-green-300 text-8xl liquid-glass text-center
    ${press_start.className} `}
    >
      {heading}
    </h1>
  );
}
