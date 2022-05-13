import { list } from '@keystone-6/core';
import { text, timestamp } from '@keystone-6/core/fields';

export const Job = list({
  fields: {
    title: text({ validation: { isRequired: true } }),
    companyName: text({
      validation: { isRequired: true },
      isFilterable: true,
    }),
    location: text({ validation: { isRequired: true } }),
    url: text({ validation: { isRequired: true } }),
    postedDate: timestamp({
      validation: { isRequired: true },
      defaultValue: { kind: 'now' },
    }),
  },
});
