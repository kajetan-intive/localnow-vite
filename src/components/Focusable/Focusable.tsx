/* eslint-disable @typescript-eslint/no-unused-vars */
import { FocusableProps, withFocusable } from '@noriginmedia/react-spatial-navigation';
import cn from 'classnames';
import * as React from 'react';

type Props = {
  onFocusScrollToMiddle?: boolean;
  focusedClassName?: string;
};

const getElementMiddlePosition = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect();
  return rect.top + window.scrollY - window.innerHeight / 2 + rect.height / 2;
};

export const FocusableWrapped: React.FC<React.HTMLAttributes<HTMLDivElement> & FocusableProps & Props> = ({
  children,
  focused,
  setFocus,
  focusKey,
  className,
  focusedClassName,
  // remove those props from remaining props
  parentFocusKey,
  updateAllSpatialLayouts,
  onEnterPress,
  realFocusKey,
  navigateByDirection,
  stealFocus,
  hasFocusedChild,
  pauseSpatialNavigation,
  resumeSpatialNavigation,
  ...props
}) => {
  const rootRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (rootRef.current && focused) {
      window.scrollTo({
        behavior: 'smooth',
        top: getElementMiddlePosition(rootRef.current),
      });
    }
  }, [focused]);

  const handleClick = () => {
    focusKey && setFocus(focusKey);
  };

  return (
    <div
      ref={rootRef}
      onClick={handleClick}
      className={cn(className, {
        'bg-[grey]': focused && className?.indexOf('bg-') === -1,
      })}
      {...props}
    >
      {children}
    </div>
  );
};

FocusableWrapped.displayName = 'FocusableWrapped';

export const Focusable = withFocusable()(FocusableWrapped);
