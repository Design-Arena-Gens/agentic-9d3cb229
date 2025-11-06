import './globals.css';

export const metadata = {
  title: 'Spin Ghar Media X-Banner',
  description: 'Tall X-banner concept for Spin Ghar Media',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
