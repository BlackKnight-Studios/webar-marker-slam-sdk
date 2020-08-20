# webar-marker-slam-sdk

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](#)
[![WebXR](https://img.shields.io/badge/WebXR-Compliant-emerald.svg)](#)

Zero-download in-browser WebXR and optical marker pose estimation SDK. Delivers sub-millimeter 6DoF tracking on iOS Safari and Android Chrome without app store installation.

```mermaid
graph TD
    A[WebRTC Camera Feed] --> B[ArMarkerTracker PnP]
    B --> C[KalmanFilter3D Smoothing]
    C --> D[6DoF Extrinsic Matrix]
    D --> E[Three.js Hologram Projection]
```

## Features

- **Sub-5ms Pose Estimation**: High-speed corner detection and homography matrix solver running in client WebAssembly / WebGL.
- **3D Kalman Smoothing**: Eliminates high-frequency optical marker jitter in low-light environments.
- **Universal Mobile Support**: Compatible across Safari WebKit and Chromium WebXR.

## License

MIT License (c) 2020-2026 Gaurav Bhardwaj / OmegaGaze Lab.
