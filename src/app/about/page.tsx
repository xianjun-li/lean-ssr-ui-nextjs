import Image from "next/image";
import { AboutButton } from "./components/button";

export const metadata = {
  title: "About",
  description: "About",
};

export default async function About() {
  const name = await ((): string => {
    return "my blog";
  })();

  return (
    <div>
      about {name}
      <div>
        <AboutButton name={name} />
      </div>

      <div style={{ width: "30vw", height: "30vh" }}>
      </div>
    </div>
  );
}
