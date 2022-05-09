import type { Request, Response } from 'express';
import type { KeystoneContext } from '@keystone-6/core/types';
const bcrypt = require('bcrypt');

export async function createUser(req: Request, res: Response) {
  // This was added by the context middleware in ../keystone.ts
  const context = (req as any).context as KeystoneContext;

  let { name, email, password } = req.body;
  email = email.toLowerCase();

  let user = null;
  try {
    user = await context.query.User.findOne({
      where: { email },
      query: ` id `,
    });

    if (user) {
      return res.status(200).json({ error: 'User already exists!' });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);

      user = await context.query.User.createOne({
        data: {
          name,
          email,
          password: hashedPassword,
        },
      });

      if (user) {
        return res.status(201).json({
          id: user.id,
          msg: 'User created!',
        });
      } else {
        return res.status(200).json({
          error: 'User not created. Try Again!',
        });
      }
    }
  } catch (e) {
    console.log(e);
    return res.status(500).json('Server Error!');
  }
}
