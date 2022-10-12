import * as React from 'react';

export const useIsOverflow = (ref, ref2) => {
  const [isOverflow, setIsOverflow] = React.useState(undefined);

  React.useLayoutEffect(() => {
    const { current } = ref;

    const trigger = () => {
      const hasOverflow = current.scrollWidth >= ref2.current.scrollWidth;
      console.log(`primero: ${current.scrollWidth} y segundo ${ref2.current.scrollWidth}`);
      setIsOverflow(hasOverflow);
    };

    if (ref2.current || ref.current) {
      if ('ResizeObserver' in window) {
        new ResizeObserver(trigger).observe(ref2.current);
      }
      trigger();
    }
  }, [ref, ref2]);

  return isOverflow;
};
