import { Heading, HeadingProps } from 'ariakit';
import { Flex } from '../Flex';
import clsx from 'clsx';
import styles from './Title.module.scss';

export type TitleProps = HeadingProps & {
  above?: React.ReactChild;
  below?: React.ReactChild;
  children: string; // Intentionally enforce string
  post?: React.ReactChild;
  pre?: React.ReactChild;
};
// Explicitly type with singular React child nodes for all of the above instead
// of React.ReactNode (React.ReactChild | React.ReactChild[])

export const Title = ({
  above,
  below,
  children,
  post,
  pre,
  ...rest
}: TitleProps): JSX.Element => {
  const titleTag = (
    <Heading {...rest} className={clsx(styles['_'], rest['className'])}>
      {children}
    </Heading>
  );

  const isHorizontal = Boolean(post || pre);
  const isVertical = Boolean(above || below);

  const verticalFlex = (
    <Flex column>
      {above}
      {titleTag}
      {below}
    </Flex>
  );

  const horizontalFlex = (
    <Flex space='start'>
      {pre}
      {isVertical ? verticalFlex : titleTag}
      {post && <Flex.Item push={true}>{post}</Flex.Item>}
    </Flex>
  );

  const isOnlyTitle = !isHorizontal && !isVertical;

  return isOnlyTitle ? titleTag : isHorizontal ? horizontalFlex : verticalFlex;
};
