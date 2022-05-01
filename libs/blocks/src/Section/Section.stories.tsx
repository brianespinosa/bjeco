import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Section } from './Section';

export default {
  title: 'Section',
  component: Section,
} as ComponentMeta<typeof Section>;

export const _Controls: ComponentStory<typeof Section> = (args) => (
  <Section {...args}>Controls</Section>
);

export const NoTitle: ComponentStory<typeof Section> = () => (
  <Section>Content without a title.</Section>
);

export const WithTitle: ComponentStory<typeof Section> = () => (
  <Section title='Section Title'>Content with a title.</Section>
);

export const WithTitleExtras: ComponentStory<typeof Section> = () => (
  <Section
    title='Section Title'
    titlePre='Pre'
    titlePost='Post'
    titleBelow='Below'
  >
    Content with a title and lots of title extras.
  </Section>
);

export const WithNestedSections: ComponentStory<typeof Section> = () => (
  <Section title='First Tier'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. A!
    <Section title='Second Tier A'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, odio.
    </Section>
    <Section title='Second Tier B'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat iste enim
      consequuntur earum!
      <Section title='Third Tier A'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, odio.
      </Section>
      <Section title='Third Tier B'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat iste
        enim consequuntur earum!
      </Section>
      <Section title='Third Tier C'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus?
      </Section>
    </Section>
    <Section title='Second Tier C'>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus?
    </Section>
  </Section>
);
