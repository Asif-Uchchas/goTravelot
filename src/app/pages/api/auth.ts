import { SignJWT } from 'jose';
import { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';
import { nanoid } from 'nanoid';
import { getJwtSecretKey } from '@/lib/auth';
import cookie from 'cookie';

const loginHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    const inputSchema = z.object({ email: z.string().email(), password: z.string() });
    // try {
    //   inputSchema.parse({ email, password });
    // } catch (error: any) {
    //   return res.status(400).json({ error: error.error });
    // }
    if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
      const token = await new SignJWT({})
      .setProtectedHeader({alg: 'HS256'})
      .setJti(nanoid())
      .setIssuedAt()
      .setExpirationTime('1m')
      .sign(new TextEncoder().encode(getJwtSecretKey()))

      res.setHeader('Set-Cookie', cookie.serialize('token',token,{
        httpOnly: true,
        path: '/',
        secure: process.env.NODE_ENV === 'production',
      }))

      console.log("logged in successfully")
    return res.status(200).json({ message: 'Login successful' });
  } else {
    return res.status(405).json({ error: 'Hobena,Not Allowed' });
  }
}
};

export default loginHandler;