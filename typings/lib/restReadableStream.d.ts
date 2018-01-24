export declare class RestReadableStream {
    readonly response: Response;
    constructor(response: Response);
    json(): Promise<any>;
    text(): Promise<string>;
    clone(): Response;
}
