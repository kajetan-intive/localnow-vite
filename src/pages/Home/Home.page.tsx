import {
  FocusableProps,
  withFocusable,
} from "@noriginmedia/react-spatial-navigation";
import * as React from "react";
import { Button } from "src/components";

type HomePageProps = FocusableProps;

// TODO: when fetching next set of segments overrides current one

const dimmerHeight = "h-2/5";
const dimmerColor = "from-black to-dimmer opacity-80";

const Home: React.FC<HomePageProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center p-12">
      <Button focusKey="button-large" className={"m-8"} size="large">
        Large
      </Button>
      <Button focusKey="button-medium" className={"m-8"} size="medium">
        Medium
      </Button>
      <Button focusKey="button-default" className={"m-8"}>
        Default size
      </Button>
      <Button focusKey="button-small" className={"m-8"} size="small">
        Small
      </Button>
      <div className="h-96" />
      <Button focusKey="button-0" className={"m-8"} size="medium">
        Medium
      </Button>
      <Button focusKey="button-1" className={"m-8"} size="medium">
        Medium
      </Button>
      <Button focusKey="button-2" className={"m-8"} size="medium">
        Medium
      </Button>
    </div>
  );
};

Home.displayName = "HomePage";

export const HomePage = withFocusable()(Home);
