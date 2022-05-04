import type { Request, Response, NextFunction, Express } from 'express';
import type {
  BaseKeystoneTypeInfo,
  CreateRequestContext,
  ServerConfig,
} from '@keystone-6/core/types';

import { getJobs } from './routes/job';

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
    app.use(
      '/rest',
      async (req: Request, res: Response, next: NextFunction) => {
        (req as any).context = await createContext(req, res);
        next();
      }
    );
    app.get('/rest/jobs', getJobs);
  },
  cors: {
    origin: ['http://localhost:3000', 'http://localhost:3001'],
    credentials: true,
  },
};
