"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const EmbedVideo_1 = require("../EmbedVideo");
it("works with a shortcode", () => {
    const type = "youtube";
    const id = "2Xc9gXyf2G4";
    const options = config_1.defaultOptions;
    const videoId = (0, EmbedVideo_1.readVideoId)(type, id, options);
    expect(videoId.id).toBe(id);
    expect(videoId.service).toBe(type);
});
it("throws as default for generic url", () => {
    const type = "video";
    const id = "a generic url";
    const options = config_1.defaultOptions;
    expect(() => (0, EmbedVideo_1.readVideoId)(type, id, options)).toThrowError("Id could not be processed");
});
it("does not throw when option allowGenericUrl is enabled", () => {
    const type = "video";
    const id = "a generic url";
    const options = Object.assign(Object.assign({}, config_1.defaultOptions), { allowGenericUrl: true });
    expect(() => (0, EmbedVideo_1.readVideoId)(type, id, options)).not.toThrow();
    const videoId = (0, EmbedVideo_1.readVideoId)(type, id, options);
    expect(videoId.id).toBe(id);
    expect(videoId.service).toBe(type);
});
