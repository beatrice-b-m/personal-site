import { useScramble } from "use-scramble";

const NameHeader = () => {
  const { ref, replay } = useScramble({
    text: "Beatrice Brown-Mulry",
    overflow: true,
    speed: 0.35,
  });

  return <h1 
    className="font-mono text-3xl font-semibold tracking-widest" 
    ref={ref}
    onMouseOver={replay}
  />;
}

const TitleHeader = () => {
  const { ref, replay } = useScramble({
    text: "data scientist",
    overflow: true,
    speed: 0.35,
  });

  return <h2 
    className="font-mono text-lg tracking-widest" 
    ref={ref}
    onMouseOver={replay}
  />;
}



function MainSection() {
  return (
    <div className="h-auto p-10 w-full">
      <div className="w-max m-auto">
        <NameHeader />
      </div>
      <div className="w-max m-auto">
        <TitleHeader />
      </div>
    </div>
  );
}

export default MainSection;
