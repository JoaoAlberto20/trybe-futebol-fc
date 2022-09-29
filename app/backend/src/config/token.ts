import { JwtPayload, sign, verify } from 'jsonwebtoken';

interface IPayload extends JwtPayload{
  sub: string,
}

const KEY_SECRET = process.env.JWT_SECRET as string;

export default function signUser(email: string, id: number): string {
  const token = sign({ email, id }, KEY_SECRET, { expiresIn: '1d' });
  return token;
}

export function verifyToken(token: string): IPayload {
  const sub = verify(token, KEY_SECRET);
  return sub as IPayload;
}
