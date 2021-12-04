import {
  BackgroundLayer,
  FirstLayer,
  SecondLayer,
  RootWrapper,
  ThirdLayer,
} from "./Styles";

const App = () => {
  return (
    <RootWrapper>
      <BackgroundLayer />
      <FirstLayer>
        <div style={{ border: "2px solid red" }}>Saturday is for the boys.</div>
      </FirstLayer>
      <SecondLayer />
      <ThirdLayer />
    </RootWrapper>
  );
};

export default App;
