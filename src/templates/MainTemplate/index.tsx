import { Heading } from '../../components/Heading';
import { Footer } from '../../components/Footer';

type MainTemplateProps = {
  children: React.ReactNode;
};

export function MainTemplate({ children }: MainTemplateProps) {
  return (
    <>
      <Heading />
      <main className='main container'>{children}</main>
      <Footer />
    </>
  );
}
