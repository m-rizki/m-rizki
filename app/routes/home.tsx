import type { Route } from "./+types/home";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Muhamad Rizki - Software engineer" },
    {
      name: "description",
      content: "Software engineer",
    },
  ];
}

export default function Home() {
  return (
    <ul>
      {Array(40)
        .fill("scroll")
        .map((item, _index) => (
          <li key={_index}>
            {item} {_index + 1}
          </li>
        ))}
    </ul>
  );
}
