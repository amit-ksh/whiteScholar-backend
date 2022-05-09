import type { Request, Response } from 'express';
import type { KeystoneContext } from '@keystone-6/core/types';

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const createNewToken = (data: any) => {
  return jwt.sign({ ...data }, process.env.JWT_SECRET || 'hello', {
    expiresIn: '8h',
  });
};

export async function signin(req: Request, res: Response) {
  // This was added by the context middleware in ../keystone.ts
  const context = (req as any).context as KeystoneContext;

  let { email, password } = req.body;
  email = email.toLowerCase();

  let user = null;
  try {
    user = await context.query.User.findOne({
      where: { email },
      query: ` 
        id
        name
        email
        password
        `,
    });

    if (!user) {
      return res.status(401).json({ error: 'User not exists!' });
    } else {
      const matched = await bcrypt.compare(password, user.password);

      if (matched) {
        const token = createNewToken({ ...user, password: null });
        return res.status(201).json({ token });
      } else {
        return res.status(401).json({
          error: 'Wrong credentials!',
        });
      }
    }
  } catch (e) {
    console.log(e);
    return res.status(500).json('Server Error!');
  }
}
