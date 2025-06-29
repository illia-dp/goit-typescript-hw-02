export type Image = {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
};

export type OpenModalType = ({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) => void;
