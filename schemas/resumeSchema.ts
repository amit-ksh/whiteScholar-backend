import { list } from '@keystone-6/core';
import { select, text, timestamp } from '@keystone-6/core/fields';

export const ResumeTemplate = list({
  fields: {
    createdAt: timestamp({
      validation: { isRequired: true },
      defaultValue: { kind: 'now' },
    }),
    name: text({ validation: { isRequired: true } }),
    type: select({
      options: ['simple', 'professional', 'modern'],
      defaultValue: 'simple',
      validation: { isRequired: true },
    }),
    imagePath: text({ validation: { isRequired: true } }),
    pdfPath: text({ validation: { isRequired: true } }),
  },
});
