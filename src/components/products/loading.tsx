import BlurText from "../../animations/blur-text";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <BlurText
        text="Sparké"
        animateBy="letters"
        delay={100}
        className="text-5xl font-bold text-gray-900 uppercase"
      />
    </div>
  );
};

export default Loading;