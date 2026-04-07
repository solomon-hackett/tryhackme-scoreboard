import { press_start } from "./fonts";

export default function PageHeading({ heading }: { heading: string }) {
  return (
    <h1
      className={`px-10 py-5 rounded-3xl text-green-300 text-7xl liquid-glass text-center mt-10
    ${press_start.className} `}
    >
      {heading}
    </h1>
  );
}
