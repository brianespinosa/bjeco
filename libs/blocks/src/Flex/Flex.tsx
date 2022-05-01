import { FlexItem } from './FlexItem';
import styles from './Flex.module.scss';
import clsx from 'clsx';
import { Role, RoleProps } from 'ariakit/role';

type SpaceOptions = 'around' | 'between' | 'end' | 'evenly' | 'start';

type VAlignOptions = 'end' | 'stretch' | 'center' | 'start';

export type FlexProps = RoleProps & {
  /**
   * Items in the container can align in a vertical column.
   */
  column?: boolean;
  /**
   * The Flex container can take up the full width of the parent container.
   */
  fluid?: boolean;
  /**
   * Items can be configured to distribute the remaining space in the Flex container.
   * {@link SpaceOptions}
   */
  space?: SpaceOptions;
  /**
   * Item vertical alignment within the flex container can be configured
   * {@link VAlignOptions}
   */
  vAlign?: VAlignOptions;
};

export const Flex = ({
  children,
  className,
  column = false,
  fluid = true,
  space = 'between',
  vAlign = 'start',
  ...rest
}: FlexProps): JSX.Element | null => {
  // Bail out of rendering any of our markup if children is null or undefined
  if (children == null) {
    return null;
  }

  const classList = clsx(
    styles['_'],
    column && [styles['column']],
    fluid && [styles['fluid']],
    styles['space-' + space],
    styles['vAlign-' + vAlign],
    className
  );

  return (
    <Role {...rest} className={classList}>
      {children}
    </Role>
  );
};

Flex.Item = FlexItem;
