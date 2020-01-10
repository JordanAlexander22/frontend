import React, { useEffect, useRef } from "react";

export default function Map({ options, onMount, className }) {
  const ref = useRef();

  useEffect(() => {
    const onLoad = () => {
      const map = new window.google.maps.Map(ref.current, options);
      if (typeof onMount === `function`) onMount(map);
    };
    if (!window.google) {
      const script = document.createElement(`script`);
      script.src =
        `https://maps.googleapis.com/maps/api/js?key=` +
        `AIzaSyBRIfcS__U4fn1cgrtvZ8yVPFMgEE5pKJc`;
      document.head.append(script);
      script.addEventListener(`load`, onLoad);
      return () => script.removeEventListener(`load`, onLoad);
    } else onLoad();
  }, [onMount, options]);

  return (
    <div
      style={{
        left: `800px`,
        down: `1200px`,
        height: `60vh`,
        width: `58%`,
        alignContent: `center`,
        borderRadius: `15px`
      }}
      {...{ ref, className }}
    />
  );
}

Map.defaultProps = {
  options: {
    center: { lat: 40.7128, lng: -74.006 },
    zoom: 11
  }
};
