import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";

import "./_styles/globals.css";

export const metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description: "Luxurious cabin hotel"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-colors-primary-950 text-colors-primary-100 min-h-screen"> 
        <header>
          <Logo />
        </header>
        <Navigation />
        <main>{children}</main>
        <footer>Copyright @2024</footer>
      </body>
    </html>
  );
}
