declare global {
  interface Window {
    collectEvent(method: string, config: any): void;
    Slardar(method: string, type: any, options?: any): void;
    getCLodop: any;
  }
}
