import { forwardRef } from 'react';
import clsx from 'clsx';
import {
  FormField as AKFormField,
  FormLabel,
  FormError,
  FormInput,
  FormInputProps,
} from 'ariakit/form';

export type FormFieldProps = FormInputProps & {
  inputmode?: string;
  label: string;
};

const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ children, className, name, label, ...rest }, ref): JSX.Element => {
    return (
      <div className={clsx('field', className)}>
        <FormLabel name={name}>{label}</FormLabel>
        <AKFormField as={FormInput} {...rest} ref={ref} name={name} />
        <FormError name={name} className='error' />
      </div>
    );
  }
);

FormField.displayName = 'FormField';

export default FormField;
