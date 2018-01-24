"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isNode = require("detect-node");
class RestReadableStream {
    constructor(response) {
        this.response = response;
        this.response = response;
        if (isNode) {
            const { Readable } = require("stream");
            Readable.bind(this, response.body);
        }
        else {
            ReadableStream.bind(this, response.body);
        }
    }
    json() {
        return this.response.json();
    }
    text() {
        return this.response.text();
    }
    clone() {
        return this.response.clone();
    }
}
exports.RestReadableStream = RestReadableStream;
//# sourceMappingURL=restReadableStream.js.map