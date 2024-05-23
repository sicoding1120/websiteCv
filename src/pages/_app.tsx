import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import AppShell from "@/components/elements/appShell";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <AnimatePresence>
        <AppShell>
          <Component {...pageProps} />
        </AppShell>
      </AnimatePresence>
    </ChakraProvider>
  );
}
