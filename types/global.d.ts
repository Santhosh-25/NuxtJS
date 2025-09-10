export {};

declare global {
  interface Window {
    catalyst?: {
      auth?: {
        isUserAuthenticated: () => boolean;
      };
    };
  }
}
