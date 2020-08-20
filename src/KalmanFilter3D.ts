export class KalmanFilter3D {
  private q: number; // Process noise
  private r: number; // Measurement noise
  private x: number = 0;
  private p: number = 1;
  private k: number = 0;

  constructor(processNoise = 0.05, measurementNoise = 0.8) {
    this.q = processNoise;
    this.r = measurementNoise;
  }

  public update(measurement: number): number {
    this.p = this.p + this.q;
    this.k = this.p / (this.p + this.r);
    this.x = this.x + this.k * (measurement - this.x);
    this.p = (1 - this.k) * this.p;
    return this.x;
  }
}
