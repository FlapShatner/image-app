import { ThemeProvider } from './theme-providers';
import { OptionsStoreProvider } from './options-store-provider';

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
    >
      <OptionsStoreProvider>{children}</OptionsStoreProvider>
    </ThemeProvider>
  );
}

export default Providers;
