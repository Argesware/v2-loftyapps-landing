declare module 'react-webpage-thumbnail' {
  export interface ThumbnailProps {
    url: string;
    iframeHeight?: number;
    iframeWidth?: number;
    className?: string;
  }

  const Thumbnail: React.FC<ThumbnailProps>;
  export default Thumbnail;
}

declare module 'react-router-dom';
