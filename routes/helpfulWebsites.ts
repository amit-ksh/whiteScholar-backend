import type { Request, Response } from 'express';
import type { KeystoneContext } from '@keystone-6/core/types';

export async function getHelpfulWebsites(req: Request, res: Response) {
  // This was added by the context middleware in ../keystone.ts
  const context = (req as any).context as KeystoneContext;

  const helpfulWebsite = await context.query.HelpfulWebsite.findMany({
    query: `
      id
      name
      type
      description
      url
    `,
  });
  // And return the result as JSON
  res.json(helpfulWebsite);
}
