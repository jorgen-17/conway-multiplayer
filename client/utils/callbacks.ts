import { IWebGLRenderer } from "webgl-renderer";
import { settings } from "./settings";

export class Callbacks
{
    public static resizeCanvas (window: Window, renderer: IWebGLRenderer, canvas: HTMLCanvasElement): void
    {
        renderer.setViewPortDimensions(window.innerWidth, window.innerHeight);
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight - settings.buttonBarHeight;
    }

    public static renderLoop (renderer: IWebGLRenderer, window: Window): void
    {
        renderer.draw();
        window.requestAnimationFrame(() => { Callbacks.renderLoop(renderer, window); });
    };
}