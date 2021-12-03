import Content from "./Content";

export default function Contex({ theme }) {
  return (
    <div>
      <p>This is Contex Component</p>
      <Content theme={theme} />
    </div>
  );
}
