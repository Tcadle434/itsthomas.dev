import { useState, useEffect } from "react";
import Image from "next/image";
import cn from "classnames";

type FlipCoinProps = {
  frontImageUrl: string;
  backImageUrl: string;
};

const IdentityFlip = ({ frontImageUrl, backImageUrl }: FlipCoinProps) => {
  const [isFront, setIsFront] = useState(true);
  const [text, setText] = useState("Thomas");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFront((prevIsFront) => {
        if (prevIsFront) {
          setText("Blockchief");
        } else {
          setText("Thomas");
        }
        return !prevIsFront;
      });
    }, 2500);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative">
      <div
        className={cn(
          "h-48 w-48 transition-transform duration-500 md:h-64 md:w-64",
          {
            "-rotate-y-180": !isFront,
          }
        )}
      >
        <Image
          src={frontImageUrl}
          alt="front image"
          priority
          layout="fill"
          objectFit="contain"
          className={cn(
            "absolute top-0 left-0 rounded-full transition-opacity duration-500",
            {
              "opacity-100": isFront,
              "opacity-0": !isFront,
            }
          )}
        />
        <Image
          src={backImageUrl}
          alt="back image"
          layout="fill"
          objectFit="contain"
          className={cn(
            "absolute top-0 left-0 rounded-full transition-opacity duration-500",
            {
              "opacity-0": isFront,
              "opacity-100": !isFront,
            }
          )}
        />
      </div>
      <h1 className="pointer-events-none absolute top-48 left-0 right-0 mt-6 text-center text-4xl font-extrabold text-zinc-200 md:top-64">
        <span className="text-sm font-medium md:text-lg ">Hi, it's</span>
        <br /> {text}
      </h1>
    </div>
  );
};

export default IdentityFlip;
