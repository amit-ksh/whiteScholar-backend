import { list } from '@keystone-6/core';
import { text, password, timestamp } from '@keystone-6/core/fields';

export const User: any = list({
  // Here are the fields that `User` will have. We want an email and password so they can log in
  // a name so we can refer to them, and a way to connect users to posts.
  fields: {
    createdAt: timestamp({
      validation: { isRequired: true },
      defaultValue: { kind: 'now' },
    }),
    name: text({ validation: { isRequired: true } }),
    email: text({
      validation: { isRequired: true },
      isIndexed: 'unique',
      isFilterable: true,
    }),
    // The password field takes care of hiding details and hashing values
    password: text({ validation: { isRequired: true } }),
  },
});
