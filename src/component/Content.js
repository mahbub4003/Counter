import Counter from "./Counter";
import HoverCounter from "./HoverCounter";
import ThemeContext from "../context/Context";

export default function Content({ theme }) {
  return (
    <div>
      <p>This Content Component</p>
      <Counter
        render={(count, incrimentCount) => {
          return (
            <ThemeContext.Consumer>
              {(value) => {
                <HoverCounter
                  count={count}
                  incrimentCount={incrimentCount}
                  theme={theme}
                />;
              }}
            </ThemeContext.Consumer>
          );
        }}
      />
    </div>
  );
}
