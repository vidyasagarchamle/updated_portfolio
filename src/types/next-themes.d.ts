declare module 'next-themes' {
  import { ReactNode } from 'react';

  export interface ThemeProviderProps {
    children: ReactNode;
    defaultTheme?: string;
    enableSystem?: boolean;
    disableTransitionOnChange?: boolean;
    storageKey?: string;
    themes?: string[];
    attribute?: string | 'class' | 'data-theme' | 'data-mode' | Array<string | 'class' | 'data-theme' | 'data-mode'>;
    value?: Record<string, string>;
    enableColorScheme?: boolean;
    forcedTheme?: string;
  }
  
  export interface UseThemeProps {
    themes?: string[];
    forcedTheme?: string;
    enableSystem?: boolean;
    defaultTheme?: string;
    attribute?: string;
    value?: Record<string, string>;
    enableColorScheme?: boolean;
    storageKey?: string;
    disableTransitionOnChange?: boolean;
  }

  export type Theme = string | undefined;

  export function useTheme(): {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    forcedTheme: Theme;
    resolvedTheme: Theme;
    themes: string[];
    systemTheme: 'dark' | 'light' | undefined;
  };

  export function ThemeProvider(props: ThemeProviderProps): JSX.Element;
} 