import { default as classNames, default as cn } from "classnames";
import * as React from "react";
import backdrop from "src/assets/cityscape.png";
import LogoIcon from "src/assets/logo.svg?component";

const dimmerHeight = "h-2/5";
const dimmerColor = "from-black to-dimmer opacity-80";

// TODO: add gradient overlay to whole screen
export const SplashScreen: React.FC = () => (
  <div
    style={{
      backgroundImage: `url(${backdrop})`,
    }}
    className={cn(
      "fixed inset-0 h-screen w-screen bg-contain bg-bottom bg-no-repeat"
    )}
  >
    <div
      className={classNames(
        "absolute top-0 w-full",
        "bg-gradient-to-b",
        dimmerColor,
        dimmerHeight
      )}
    />
    <LogoIcon
      className={cn("absolute inset-1/2 -translate-x-1/2 -translate-y-1/2")}
      height={380}
      width={380}
    />
    <div
      className={classNames(
        "absolute bottom-0 w-full",
        "bg-gradient-to-t ",
        dimmerColor,
        dimmerHeight
      )}
    />
  </div>
);

SplashScreen.displayName = "SplashScreen";
