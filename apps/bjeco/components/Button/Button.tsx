import { forwardRef } from 'react';
import clsx from 'clsx';
import {
  Button as AriakitButton,
  ButtonProps as AriakitButtonProps,
} from 'ariakit/button';
import styles from './Button.module.scss';

type ButtonVariants = 'primary' | 'secondary' | 'invisible';

export type ButtonProps = AriakitButtonProps & {
  variant?: ButtonVariants;
};

const Button = forwardRef<HTMLInputElement, ButtonProps>(
  ({ children, className, variant = 'primary', ...rest }, ref): JSX.Element => {
    return (
      <AriakitButton
        {...rest}
        ref={ref}
        className={clsx(styles['_'], styles[variant], className)}
      >
        {children}
      </AriakitButton>
    );
  }
);

Button.displayName = 'Button';

export default Button;
