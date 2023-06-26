"use client";

export function AboutButton({ name }: { name: string }) {
  return <button onClick={(): void => alert(name)}>click</button>;
}
