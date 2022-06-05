import type { Request, Response } from 'express';
import type { KeystoneContext } from '@keystone-6/core/types';

export async function getResumeTemaplates(req: Request, res: Response) {
  // This was added by the context middleware in ../keystone.ts
  const context = (req as any).context as KeystoneContext;
  // Let's map the `complete` query param to a where filter

  // Now we can use it to query the Keystone Schema
  const helpfulWebsite = await context.query.HelpfulWebsite.findMany({
    query: `
      id
      name
      description
      image
      pdf
    `,
  });
  // And return the result as JSON
  res.json(helpfulWebsite);
}