class SoundService {
  private soundEnabled: boolean = true;
  private audioContext: AudioContext | null = null;

  constructor() {
    this.initializeAudioContext();
  }

  private async initializeAudioContext() {
    try {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    } catch (error) {
      console.log('Audio not supported:', error);
    }
  }

  setSoundEnabled(enabled: boolean) {
    this.soundEnabled = enabled;
  }

  isSoundEnabled(): boolean {
    return this.soundEnabled;
  }


  private async playTone(frequency: number, duration: number, _type: OscillatorType = 'sine') {
    if (!this.soundEnabled || !this.audioContext) return;

    try {
      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(this.audioContext.destination);

      oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime);
      oscillator.type = _type;

      gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration);

      oscillator.start(this.audioContext.currentTime);
      oscillator.stop(this.audioContext.currentTime + duration);
    } catch (error) {
      console.log('Error playing sound:', error);
    }
  }

  async playSuccess() {
    if (!this.soundEnabled) return;
    
    // Play a cheerful ascending melody
    await this.playTone(523, 0.1, 'sine'); // C5
    setTimeout(() => this.playTone(659, 0.1, 'sine'), 100); // E5
    setTimeout(() => this.playTone(784, 0.2, 'sine'), 200); // G5
  }

  async playError() {
    if (!this.soundEnabled) return;
    
    // Play a descending tone for errors
    await this.playTone(400, 0.3, 'sawtooth');
    setTimeout(() => this.playTone(300, 0.3, 'sawtooth'), 150);
  }

  async playClick() {
    if (!this.soundEnabled) return;
    
    // Play a short click sound
    await this.playTone(800, 0.05, 'square');
  }

  async playAchievement() {
    if (!this.soundEnabled) return;
    
    // Play a celebratory melody
    await this.playTone(523, 0.15, 'sine'); // C5
    setTimeout(() => this.playTone(659, 0.15, 'sine'), 150); // E5
    setTimeout(() => this.playTone(784, 0.15, 'sine'), 300); // G5
    setTimeout(() => this.playTone(1047, 0.3, 'sine'), 450); // C6
  }

  async playLevelComplete() {
    if (!this.soundEnabled) return;
    
    // Play a victory fanfare
    await this.playTone(523, 0.2, 'sine'); // C5
    setTimeout(() => this.playTone(659, 0.2, 'sine'), 200); // E5
    setTimeout(() => this.playTone(784, 0.2, 'sine'), 400); // G5
    setTimeout(() => this.playTone(1047, 0.2, 'sine'), 600); // C6
    setTimeout(() => this.playTone(1319, 0.4, 'sine'), 800); // E6
  }

  async playHint() {
    if (!this.soundEnabled) return;
    
    // Play a gentle hint sound
    await this.playTone(600, 0.1, 'triangle');
    setTimeout(() => this.playTone(700, 0.1, 'triangle'), 100);
  }

  async playCodeRun() {
    if (!this.soundEnabled) return;
    
    // Play a brief execution sound
    await this.playTone(1000, 0.05, 'square');
  }
}

export const soundService = new SoundService();
