import React, {useEffect, useState} from "react";
import NextImage from "next/image";
import {buildUrl} from "cloudinary-build-url";
import {TransformerOption} from "@cld-apis/types";

const CLOUDINARY_CLOUD_NAME = "dbfgjzwih";

const buildImageUrl = ({
  imageId,
  transformations = {},
}: {
  imageId: string;
  transformations?: TransformerOption;
}) =>
  buildUrl(imageId, {
    cloud: {cloudName: CLOUDINARY_CLOUD_NAME},
    transformations,
  });

export const Image: React.FC<{
  imageId: string;
  width: number;
  height: number;
  alt: string;
  className?: string;
}> = ({width, height, alt, imageId, className = ""}) => {
  const url = buildImageUrl({imageId});
  const urlBlurred = buildImageUrl({
    imageId,
    transformations: {effect: {name: "blur", value: 750}, quality: 50},
  });

  const [image, setImage] = useState<string>(urlBlurred);
  useEffect(() => {
    setTimeout(() => {
      setImage(url);
    }, 400);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <NextImage
      className={className}
      src={image}
      alt={alt}
      width={width}
      height={height}
    />
  );
};
