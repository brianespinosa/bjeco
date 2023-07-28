import { forwardRef } from 'react';
import clsx from 'clsx';
import {
  Button as AriakitButton,
  ButtonProps as AriakitButtonProps,
} from 'ariakit';
import styles from './Button.module.scss';

type ButtonVariants = 'primary' | 'secondary' | 'invisible';

export type ButtonProps = AriakitButtonProps & {
  variant?: ButtonVariants;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', ...rest }, ref) => {
    return (
      <AriakitButton
        {...rest}
        ref={ref}
        className={clsx(styles['_'], styles[variant], className)}
      />
    );
  }
);

Button.displayName = 'Button';
