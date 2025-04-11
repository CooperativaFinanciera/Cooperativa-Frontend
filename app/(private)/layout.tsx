import PrivateLayoutClient from './PrivateLayoutClient';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PrivateLayoutClient>{children}</PrivateLayoutClient>;
}
