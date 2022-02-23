import {
  FocusableProps,
  withFocusable,
} from "@noriginmedia/react-spatial-navigation";
import * as React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "src/components";

type NotFoundPageProps = FocusableProps & {};

const NotFoundPage: React.FC<NotFoundPageProps> = ({ setFocus }) => {
  const history = useHistory();

  const goBackToHome = () => {
    history.replace("/");
  };

  React.useEffect(() => {
    setFocus("go-back");
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-background">
      <p className="my-8 text-4xl">There is nothing here</p>
      <Button focusKey="go-back" onEnterPress={goBackToHome}>
        Go back to home
      </Button>
    </div>
  );
};

NotFoundPage.displayName = "NotFoundPage";

export default withFocusable()(NotFoundPage);
