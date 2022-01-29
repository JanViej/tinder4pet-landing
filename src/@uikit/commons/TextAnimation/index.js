import React, { useEffect, useMemo, useRef } from 'react';
import { formatMoney } from 'utils/tools';
import { TextAnimationStyle } from './style';

const TextAnimation = ({ value, loading, prefix = '' }) => {
  const staticParams = useMemo(
    () => ({
      old: 0,
    }),
    [],
  );
  const ref = useRef();

  useEffect(() => {
    const animateValue = (start, end, duration) => {
      if (start === end) return;
      const exponentEnd = String(end).split('.')[1]?.length || 0;
      const exponentStart = String(start).split('.')[1]?.length || 0;

      const convertEnd = end * Math.pow(10, exponentEnd);
      const convertStart = start * Math.pow(10, exponentStart);
      const range = convertEnd - convertStart;
      let current = convertStart;
      const increment = range / 20;
      const stepTime = 50;
      const obj = ref.current;
      var timer = setInterval(() => {
        current += increment;
        const labelValue = Math.abs(
          current / Math.pow(10, exponentStart),
        ).toFixed(0);
        obj.innerHTML =
          prefix + formatMoney(Number.isNaN(labelValue) ? 0 : labelValue);

        if (current == convertEnd) {
          clearInterval(timer);
        }
      }, stepTime);

      setTimeout(() => {
        obj.innerHTML = prefix + (Number.isNaN(end) ? 0 : formatMoney(end));
        clearInterval(timer);
      }, duration);
      return timer;
    };

    const interval =
      ref.current &&
      !Number.isNaN(value) &&
      animateValue(staticParams.old, value, 1000);
    staticParams.old = Number.isNaN(value) ? 0 : value;
    return () => {
      interval && clearInterval(interval);
    };
  }, [loading, value, ref.current]);

  return <TextAnimationStyle ref={ref}>{`${prefix}0`}</TextAnimationStyle>;
};

TextAnimation.propTypes = {};

export default TextAnimation;
