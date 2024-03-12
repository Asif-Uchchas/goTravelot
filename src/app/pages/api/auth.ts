import { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';

const loginHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    const inputSchema = z.object({ email: z.string().email(), password: z.string() });
    try {
      inputSchema.parse({ email, password });
    } catch (error: any) {
      return res.status(400).json({ error: error.error });
    }

    return res.status(200).json({ message: 'Login successful' });
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
};

export default loginHandler;