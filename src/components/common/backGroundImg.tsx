
import { assets } from '@/assets/assets'
export const BackGroundImg = () => {
  return (
    <div>
      <div
        className="absolute left-0 top-0 w-[40%] h-full opacity-80 pointer-events-none"
        style={{
          backgroundImage: `url(${assets.HeroDesign})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "6xl",
        }}
      />
      <div
        className="absolute right-0 top-0 w-[40%] h-full opacity-80 pointer-events-none"
        style={{
          backgroundImage: `url(${assets.HeroDesign})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "6xl",
          transform: "scaleX(-1)",
        }}
      />
    </div>
  );
};