import { FocusableProps, withFocusable } from '@noriginmedia/react-spatial-navigation';
import cn from 'classnames';
import * as React from 'react';
import { FocusableWrapped } from '..';

type ButtonProps = {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
};

const buttonClassNames: Record<Required<ButtonProps>['size'], string> = {
  large: 'px-[46px] py-[18px] text-3xl',
  medium: 'px-[30px] py-[10px] text-2xl',
  small: 'px-[18px] py-[8px] text-xl',
};

const FocusableButton: React.FC<ButtonProps & React.ComponentProps<typeof FocusableWrapped> & FocusableProps> = ({
  children,
  size = 'medium',
  className,
  ...props
}) => {
  return (
    <FocusableWrapped
      className={cn(className, ' text-white', 'flex items-center', buttonClassNames[size], {
        'bg-white bg-opacity-10': !props.focused,
        'bg-accentLighter text-white': props.focused,
      })}
      {...props}
    >
      {children}
    </FocusableWrapped>
  );
};

FocusableButton.displayName = 'Button';

export const Button = withFocusable()(FocusableButton);
