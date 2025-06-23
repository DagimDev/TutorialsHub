// MediaStream and Related
// Definition:
// Represents streams of media content.

// Types:
// From getUserMedia
const stream = await navigator.mediaDevices.getUserMedia({ video: true });

// Constructor
const mediaStream = new MediaStream();

// From canvas
const canvasStream = canvas.captureStream();
// Related Constructors:

// MediaStreamTrack - Individual audio/video track

// MediaRecorder - Records media streams

// Use Cases:

// WebRTC applications

// Video/audio processing

// Screen recording