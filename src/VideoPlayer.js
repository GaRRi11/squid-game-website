import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const videoSource = "/assets/videos/output.m3u8";

  useEffect(() => {
    console.log("VideoPlayer mounted");

    if (Hls.isSupported()) {
      console.log("HLS.js is supported in this browser");

      const hls = new Hls();
      console.log("Attempting to load source:", videoSource);

      hls.loadSource(videoSource);
      hls.attachMedia(videoRef.current);

      hls.on(Hls.Events.MANIFEST_LOADED, () => {
        console.log("HLS Manifest Loaded Successfully");
      });

      hls.on(Hls.Events.ERROR, (event, data) => {
        console.error("HLS Error:", data);
      });

    } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
      console.log("Native HLS support detected (Safari)");
      videoRef.current.src = videoSource;
    } else {
      console.error("HLS is not supported in this browser");
    }
  }, []);

  return (
    <video ref={videoRef} controls width="100%" />
  );
};

export default VideoPlayer;
