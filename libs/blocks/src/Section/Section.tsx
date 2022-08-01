import { HeadingLevel } from 'ariakit';
import { Role, RoleProps } from 'ariakit';
import { Boundaries } from '../Boundaries';
import { Title } from '../Title';
import clsx from 'clsx';
import styles from './Section.module.scss';

export type SectionProps = RoleProps & {
  /**
   * A title can be applied as a string which will follow correct heading level semantics.
   */
  title?: string;
  /**
   * Content can appear to the left of a title.
   */
  titlePre?: React.ReactChild;
  /**
   * Content can appear to the right of a title.
   */
  titlePost?: React.ReactChild;
  /**
   * Content can appear above a title.
   */
  titleAbove?: React.ReactChild;
  /**
   * Content can appear below a title.
   */
  titleBelow?: React.ReactChild;
  /**
   * A Section can display content without any section padding or styles.
   */
  isBasic?: boolean;
};

/**
 * A component that can display section content following correct HTML5
 * semantics with a `<section>` tag if a `title` prop has also been set. Nesting
 * Section components will semantically increase the depth of heading tags used
 * for Section titles.
 */
export const Section = ({
  as,
  children,
  className,
  isBasic = false,
  title,
  titlePre,
  titlePost,
  titleAbove,
  titleBelow,
  ...rest
}: SectionProps): JSX.Element => {
  // If there is no title defined, we should only render a div
  const SectionTag = title ? 'section' : 'div';

  const classList = clsx(
    clsx(styles['_'], isBasic && styles['basic'], className)
  );

  const sectionContent = (
    <Role {...rest} as={as || SectionTag} className={classList}>
      <>
        {title && (
          <Title
            above={titleAbove}
            below={titleBelow}
            post={titlePost}
            pre={titlePre}
          >
            {title}
          </Title>
        )}
        {children}
      </>
    </Role>
  );

  // If there is a title used, we need to increment the heading level
  return (
    <Boundaries>
      {title ? <HeadingLevel>{sectionContent}</HeadingLevel> : sectionContent}
    </Boundaries>
  );
};
