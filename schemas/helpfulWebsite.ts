import { list } from '@keystone-6/core';
import { text, timestamp } from '@keystone-6/core/fields';

export const HelpfulWebsite = list({
  fields: {
    createdAt: timestamp({
      validation: { isRequired: true },
      defaultValue: { kind: 'now' },
    }),
    name: text({ validation: { isRequired: true } }),
    type: text({ validation: { isRequired: true } }),
    description: text({
      validation: { isRequired: true },
    }),
    url: text({ validation: { isRequired: true } }),
  },
});
