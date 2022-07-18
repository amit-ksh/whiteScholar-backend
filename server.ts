import type { Request, Response, NextFunction, Express } from 'express';
import type {
  BaseKeystoneTypeInfo,
  CreateRequestContext,
  ServerConfig,
} from '@keystone-6/core/types';
import express from 'express';
import multer from 'multer';

import { getJobs } from './routes/job';
import { signup } from './routes/signup';
import { signin } from './routes/signin';
import { getResumeTemaplates } from './routes/resumeTemplates';
import { getHelpfulWebsites } from './routes/helpfulWebsites';
const upload = multer();

export const server: ServerConfig<BaseKeystoneTypeInfo> = {
  /*
            This is the main part of this example. Here we include a function that
            takes the express app Keystone created, and does two things:
            - Adds a middleware function that will run on requests matching our REST
              API routes, to get a keystone context on `req`. This means we don't
              need to put our route handlers in a closure and repeat it for each.
            - Adds a GET handler for tasks, which will query for tasks in the
              Keystone schema and return the results as JSON
          */
  extendExpressApp: (
    app: Express,
    createContext: CreateRequestContext<BaseKeystoneTypeInfo>
  ) => {
    app.use(upload.any());
    app.use(express.json());
    app.use(
      express.urlencoded({
        extended: true,
      })
    );
    app.use(
      '/rest',
      async (req: Request, res: Response, next: NextFunction) => {
        (req as any).context = await createContext(req, res);
        next();
      }
    );

    app.post('/rest/signup', signup);
    app.post('/rest/signin', signin);
    app.get('/rest/jobs', getJobs);
    app.get('/rest/resume-templates', getResumeTemaplates);
    app.get('/rest/helpful-websites', getHelpfulWebsites);
  },
  cors: {
    origin: ['http://localhost:3000', 'http://localhost:3001', 'https://white-scholar.vercel.app'],
    credentials: true,
  },
};
