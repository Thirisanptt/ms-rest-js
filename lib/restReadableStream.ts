const isNode = require("detect-node");

export class RestReadableStream {

  constructor(readonly response: Response) {
    this.response = response;
    if (isNode) {
      const { Readable } = require("stream");
      Readable.bind(this, response.body);
    } else {
      ReadableStream.bind(this, response.body);
    }
  }

  json(): Promise<any> {
    return this.response.json();
  }

  text(): Promise<string> {
    return this.response.text();
  }

  clone(): Response {
    return this.response.clone();
  }
}