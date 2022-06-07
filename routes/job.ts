import type { Request, Response } from 'express';
import type { KeystoneContext } from '@keystone-6/core/types';

export async function getJobs(req: Request, res: Response) {
  const context = (req as any).context as KeystoneContext;

  const jobs = await context.query.Job.findMany({
    query: `
      id
      title
      companyName
      location
      url
      postedDate
    `,
  });

  res.json(jobs);
}
