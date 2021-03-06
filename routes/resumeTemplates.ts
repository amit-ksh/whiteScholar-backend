import type { Request, Response } from 'express';
import type { KeystoneContext } from '@keystone-6/core/types';

export async function getResumeTemaplates(req: Request, res: Response) {
  const context = (req as any).context as KeystoneContext;

  try {
    const resumeTemplate = await context.query.ResumeTemplate.findMany({
      query: `
      id
      name
      type
      imagePath
      filePath
    `,
    });
    res.json(resumeTemplate);
  } catch (error) {
    res.status(500).json({ error });
  }
}
