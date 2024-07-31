import { useCallback, useState } from 'react';

export const useKeanuForm = () => {
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [grayScale, setGrayScale] = useState(false);
  const [youngKeanu, setYoungKeanu] = useState(false);
  const [keanuLoading, setKeanuLoading] = useState(false);
  const [keanuImg, setKeanuImg] = useState('');

  const handleHeightChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(event.target.value);
  }, []);

  const handleWidthChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setWidth(event.target.value);
  }, []);

  const handleGrayScaleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setGrayScale(event.target.checked);
  }, []);

  const handleYoungKeanuChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setYoungKeanu(event.target.checked);
  }, []);


  return {
    height,
    handleHeightChange,
    width,
    handleWidthChange,
    grayScale,
    handleGrayScaleChange,
    youngKeanu,
    handleYoungKeanuChange,
    keanuLoading,
    setKeanuLoading,
    keanuImg,
    setKeanuImg,
  };
};