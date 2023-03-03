import { defaultOptions } from "../config";
import { readVideoId } from "../EmbedVideo";

it("works with a shortcode", () => {
  const type = "youtube";
  const id = "2Xc9gXyf2G4";
  const options = defaultOptions;

  const videoId = readVideoId(type, id, options);
  expect(videoId.id).toBe(id);
  expect(videoId.service).toBe(type);
});

it("throws as default for generic url", () => {
  const type = "video";
  const id = "a generic url";
  const options = defaultOptions;

  expect(() => readVideoId(type, id, options)).toThrowError("Id could not be processed");
});

it("does not throw when option allowGenericUrl is enabled", () => {
  const type = "video";
  const id = "a generic url";
  const options = {...defaultOptions, allowGenericUrl: true};

  expect(() => readVideoId(type, id, options)).not.toThrow();
  const videoId = readVideoId(type, id, options);
  expect(videoId.id).toBe(id);
  expect(videoId.service).toBe(type);
});
