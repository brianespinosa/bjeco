import { forwardRef } from 'react';
import clsx from 'clsx';
import {
  FormLabel,
  FormError,
  FormInput,
  FormInputProps,
} from '@ariakit/react';

export type FormFieldProps = FormInputProps & {
  inputMode?: string;
  label: string;
};

export const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ children, className, name, label, ...rest }, ref): JSX.Element => {
    return (
      <div className={clsx('field', className)}>
        <FormLabel name={name}>{label}</FormLabel>

        {/* Note that FormInput automatically passes the value and onChange
        props directly to the underlying input in the DOM, which is how this
        is working without us controlling the input value changing. */}
        <FormInput {...rest} ref={ref} name={name} />
        <FormError name={name} className='error' />
      </div>
    );
  },
);

FormField.displayName = 'FormField';
