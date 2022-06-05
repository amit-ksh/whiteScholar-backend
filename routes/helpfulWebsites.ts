import type { Request, Response } from 'express';
import type { KeystoneContext } from '@keystone-6/core/types';

export async function getHelpfulWebsites(req: Request, res: Response) {
  // This was added by the context middleware in ../keystone.ts
  const context = (req as any).context as KeystoneContext;
  // Let's map the `complete` query param to a where filter

  // Now we can use it to query the Keystone Schema
  const resumeTemplate = await context.query.ResumeTemplate.findMany({
    query: `
      id
      name
      type
      description
      url
    `,
  });
  // And return the result as JSON
  res.json(resumeTemplate);
}
