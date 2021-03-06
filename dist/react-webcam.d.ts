import * as React from "react";
interface ScreenshotDimensions {
    width: number;
    height: number;
}
export interface WebcamProps extends React.HTMLProps<HTMLVideoElement> {
    audio: boolean;
    audioConstraints?: MediaStreamConstraints["audio"];
    forceScreenshotSourceSize: boolean;
    imageSmoothing: boolean;
    mirrored: boolean;
    minScreenshotHeight?: number;
    minScreenshotWidth?: number;
    onUserMedia: (stream: MediaStream) => void;
    onUserMediaError: (error: string) => void;
    screenshotFormat: "image/webp" | "image/png" | "image/jpeg";
    screenshotQuality: number;
    videoConstraints?: MediaStreamConstraints["video"];
}
interface WebcamState {
    hasUserMedia: boolean;
    src?: string;
}
export default class Webcam extends React.Component<WebcamProps, WebcamState> {
    static defaultProps: {
        audio: boolean;
        forceScreenshotSourceSize: boolean;
        imageSmoothing: boolean;
        mirrored: boolean;
        onUserMedia: () => void;
        onUserMediaError: () => void;
        screenshotFormat: string;
        screenshotQuality: number;
    };
    private canvas;
    private ctx;
    private isUnmounting;
    stream: MediaStream | null;
    video: HTMLVideoElement | null;
    constructor(props: any);
    componentDidMount(): void;
    componentDidUpdate(nextProps: any): void;
    componentWillUnmount(): void;
    private stopStream;
    private stopAndCleanup;
    getScreenshot(screenshotDimensions?: ScreenshotDimensions): string | null;
    getCanvas(screenshotDimensions?: ScreenshotDimensions): HTMLCanvasElement | null;
    private requestUserMedia;
    private handleUserMedia;
    render(): JSX.Element;
}
export {};
