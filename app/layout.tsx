import './globals.css';
import styles from './page.module.sass';
import { Inter } from 'next/font/google';
import Sidebar from './components/layout/sidebar/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Pokedex',
  description: 'Pokedex',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
          <main className={styles.container}>
            <aside>
              <Sidebar />
            </aside>
            {children}
          </main>
      </body>
    </html>
  );
}
