import { FocusableProps, withFocusable } from '@noriginmedia/react-spatial-navigation';
import cn from 'classnames';
import * as React from 'react';
import { Focusable } from '..';

type ButtonProps = {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
};

const buttonClassNames: Record<Required<ButtonProps>['size'], string> = {
  large: 'w-[50px] h-[50px]',
  medium: 'w-[50px] h-[50px]',
  small: 'w-[50px] h-[50px]',
};

const FocusableIconButton: React.FC<ButtonProps & React.ComponentProps<typeof Focusable> & FocusableProps> = ({
  children,
  size = 'medium',
  className,
  ...props
}) => {
  return (
    <Focusable
      className={cn(className, ' text-primary', 'flex items-center justify-center', buttonClassNames[size], {
        'bg-white bg-opacity-10': !props.focused,
        'bg-accentLighter text-white': props.focused,
      })}
      {...props}
    >
      {children}
    </Focusable>
  );
};

FocusableIconButton.displayName = 'IconButton';

export const IconButton = withFocusable()(FocusableIconButton);
