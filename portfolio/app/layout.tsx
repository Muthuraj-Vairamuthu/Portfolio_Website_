
import './global/globals.css';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: "Muthuraj Vairamuthu",
  description: 'Portfolio showcasing projects and skills',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-50">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default Layout;