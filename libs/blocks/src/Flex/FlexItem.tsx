import { ReactElement, cloneElement } from 'react';
import styles from './Flex.module.scss';
import clsx from 'clsx';

export type FlexItemProps = {
  children: React.ReactNode;
  className?: string;
  grow?: boolean;
  push?: boolean;
  shrink?: boolean;
};

export const FlexItem = ({
  grow = false,
  push = false,
  shrink = false,
  children,
  ...rest
}: FlexItemProps): JSX.Element => {
  const isChildString = typeof children === 'string';

  const reactElement = isChildString ? <div>{children}</div> : children;

  const classList = clsx(
    styles['Item'],
    {
      [styles['grow']]: grow,
      [styles['push']]: push,
    },
    rest.className
  );

  return cloneElement(reactElement as ReactElement, {
    ...rest,
    className: classList,
  });
};

FlexItem.displayName = 'Flex.Item';
