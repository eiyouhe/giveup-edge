import {BrowserKernelType, getBrowserKernel} from './kernel.js';

export function main() {
    if (getMetaRender()) {
        switch (getBrowserKernel()) {
            case BrowserKernelType.APP_WEB_KIT:
            case BrowserKernelType.PRESTO:
            case BrowserKernelType.GECKO:
                console.log(1);
                break;
            case BrowserKernelType.TRIDENT:
                console.log(2);
                break;
        }
    }
}

export function getMetaRender() {
    return document.head.children.namedItem("renderer");
}
