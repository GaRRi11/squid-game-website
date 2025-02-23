# Dynamic Streaming Website with Built-in Video Player and CMS

Developed a fully responsive, single-page streaming platform using React with a built-in HLS video player for smooth playback. The website features a flexible content management system that dynamically loads seasons and episodes from a structured JSON file, allowing for easy content updates without modifying the frontend code.

## Tech Stack & Optimization:

Utilized AWS S3 for scalable and cost-efficient video storage, ensuring high availability.

Integrated AWS CloudFront for CDN caching, reducing latency and optimizing video streaming performance globally.

Implemented HLS.js to support adaptive streaming, ensuring seamless playback across different network conditions and devices.

## Features:

Dynamic Episode & Season Selection: Built a user-friendly UI with dropdown selectors, allowing users to switch between seasons and episodes instantly.

Google Analytics Integration: Configured ReactGA to track user interactions and monitor engagement metrics.

Performance-Focused UI: Designed a fully responsive video player using CSS Flexbox to maintain a clean, centered layout.

Optimized Loading Experience: Implemented lazy state management to handle asynchronous data fetching and improve initial page load times.
