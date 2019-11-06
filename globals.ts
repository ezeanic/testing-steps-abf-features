interface HandlerFuncs {
  doClick(): void;
}

declare global {
    interface Window { handlers: HandlerFuncs; }
}

window.handlers = window.handlers || {};

export default function setWindowHandler(theHandler: () => void ): void {
    window.handlers.doClick = theHandler
}
