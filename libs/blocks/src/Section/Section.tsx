import { Heading, HeadingLevel } from 'ariakit/heading';
import { Role, RoleProps } from 'ariakit/Role';
import clsx from 'clsx';
import styles from './Section.module.scss';

export interface SectionProps extends RoleProps {
  /**
   * A title can be applied as a string which will follow correct heading level semantics.
   */
  title?: string;
}

export function Section({
  as,
  children,
  className,
  title,
  ...rest
}: SectionProps) {
  // If there is no title defined, we should only render a div
  const SectionTag = title ? 'section' : 'div';

  const sectionContent = (
    <Role
      {...rest}
      as={as || SectionTag}
      className={clsx(styles['_'], className)}
    >
      <>
        {title && <Heading>{title}</Heading>}
        {children}
      </>
    </Role>
  );

  // If there is a title, we need to increment the heading level
  return title ? <HeadingLevel>{sectionContent}</HeadingLevel> : sectionContent;
}

export default Section;
