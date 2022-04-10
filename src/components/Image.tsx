/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
interface Props {
  src: string;
  width: string;
  height: string;
  alt: string;
  className?: string;
}

const Image = ({
  src, width, height, alt, className,
}: Props): JSX.Element => {
  const webp = require(`../../public/assets/${src}?resize&format=webp`);
  const img = require(`../../public/assets/${src}?resize`);

  return (
    <picture>
      <source srcSet={webp.srcSet} type="image/webp" />
      <img
        src={img.src}
        srcSet={img.srcSet}
        width={width}
        height={height}
        alt={alt}
        className={className}
      />
    </picture>
  );
};

Image.defaultProps = {
  className: '',
};

export default Image;
