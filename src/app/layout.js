import '@/styles/global.scss';
import Navigation from '@components/Navigation.js';



export const metadata = {
  title: "Leester - Next.js",
  description: "This is my first Next-js practice",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link  
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Geist:wght@400;700&family=Geist+Mono:wght@400;700&display=swap"
        />
      </head>
      <body>
        <Navigation />
        {children}

      </body>
    </html>
  );
}
