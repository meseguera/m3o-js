import * as m3o from '@m3o/m3o-node';

export class ImageService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Convert an image from one format (jpeg, png etc.) to an other either on the fly (from base64 to base64),
  // or by uploading the conversion result.
  convert(request: ImageConvertRequest): Promise<ImageConvertResponse> {
    return this.client.call(
      'image',
      'Convert',
      request
    ) as Promise<ImageConvertResponse>;
  }
  // Resize an image on the fly without storing it (by sending and receiving a base64 encoded image), or resize and upload depending on parameters.
  // If one of width or height is 0, the image aspect ratio is preserved.
  // Optional cropping.
  resize(request: ImageResizeRequest): Promise<ImageResizeResponse> {
    return this.client.call(
      'image',
      'Resize',
      request
    ) as Promise<ImageResizeResponse>;
  }
  // Upload an image by either sending a base64 encoded image to this endpoint or a URL.
  // To resize an image before uploading, see the Resize endpoint.
  upload(request: ImageUploadRequest): Promise<ImageUploadResponse> {
    return this.client.call(
      'image',
      'Upload',
      request
    ) as Promise<ImageUploadResponse>;
  }
}

export interface ImageConvertRequest {
  // base64 encoded image to resize,
  // ie. "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="
  base64?: string;
  // output name of the image including extension, ie. "cat.png"
  name?: string;
  // make output a URL and not a base64 response
  outputURL?: boolean;
  // url of the image to resize
  url?: string;
}

export interface ImageConvertResponse {
  base64?: string;
  url?: string;
}

export interface ImageCropOptions {
  // Crop anchor point: "top", "top left", "top right",
  // "left", "center", "right"
  // "bottom left", "bottom", "bottom right".
  // Optional. Defaults to center.
  anchor?: string;
  // height to crop to
  height?: number;
  // width to crop to
  width?: number;
}

export interface ImagePoint {
  x?: number;
  y?: number;
}

export interface ImageRectangle {
  max?: ImagePoint;
  min?: ImagePoint;
}

export interface ImageResizeRequest {
  // base64 encoded image to resize,
  // ie. "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="
  base64?: string;
  // optional crop options
  // if provided, after resize, the image
  // will be cropped
  cropOptions?: ImageCropOptions;
  height?: number;
  // output name of the image including extension, ie. "cat.png"
  name?: string;
  // make output a URL and not a base64 response
  outputURL?: boolean;
  // url of the image to resize
  url?: string;
  width?: number;
}

export interface ImageResizeResponse {
  base64?: string;
  url?: string;
}

export interface ImageUploadRequest {
  // Base64 encoded image to upload,
  // ie. "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="
  base64?: string;
  // Output name of the image including extension, ie. "cat.png"
  name?: string;
  // URL of the image to upload
  url?: string;
}

export interface ImageUploadResponse {
  url?: string;
}
