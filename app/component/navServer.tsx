import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { Nav } from './nav';

export default async function NavServer() {
  const session = await getServerSession(authOptions);

  return <Nav session={session} />;
}
