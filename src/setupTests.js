import '@testing-library/jest-dom';

// Mock for TensorFlow.js to avoid Node.js compatibility issues in tests
jest.mock('@tensorflow/tfjs', () => ({
  loadLayersModel: jest.fn(),
  tensor: jest.fn(),
  ready: jest.fn().mockResolvedValue(),
  setBackend: jest.fn(),
  browser: {
    fromPixels: jest.fn()
  }
}));

// Mock for Three.js and React Three Fiber
jest.mock('three', () => ({
  WebGLRenderer: jest.fn().mockImplementation(() => ({
    setSize: jest.fn(),
    render: jest.fn(),
    dispose: jest.fn()
  })),
  Scene: jest.fn(),
  PerspectiveCamera: jest.fn(),
  Mesh: jest.fn(),
  BoxGeometry: jest.fn(),
  MeshBasicMaterial: jest.fn()
}));

// Mock for Leaflet to avoid DOM issues
jest.mock('leaflet', () => ({
  map: jest.fn(),
  tileLayer: jest.fn()
}));
