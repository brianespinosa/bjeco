import { ReactChild, ReactChildren, ReactElement, cloneElement } from 'react';
import styles from './Flex.module.scss';
import clsx from 'clsx';

export interface FlexItemProps extends ReactElement {
  children: ReactChild | ReactChildren;
  className?: string;
  grow?: boolean;
  push?: boolean;
  shrink?: boolean;
}

export function FlexItem({
  grow = false,
  push = false,
  shrink = false,
  children,
  ...rest
}: FlexItemProps) {
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
}

FlexItem.displayName = 'Flex.Item';

export default FlexItem;
