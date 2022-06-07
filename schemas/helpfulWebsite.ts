import { list } from '@keystone-6/core';
import { select, text, timestamp } from '@keystone-6/core/fields';

const options = ['online-courses', 'programming', 'deployment'];

export const HelpfulWebsite = list({
  fields: {
    createdAt: timestamp({
      validation: { isRequired: true },
      defaultValue: { kind: 'now' },
    }),
    name: text({ validation: { isRequired: true } }),
    type: select({
      options,
      defaultValue: 'online-courses',
      validation: { isRequired: true },
    }),
    description: text({
      validation: { isRequired: true },
    }),
    url: text({ validation: { isRequired: true } }),
  },
});
