// Music Service for Background Music
// Handles background music playback with toggle functionality

class MusicService {
  private audioContext: AudioContext | null = null;
  private musicEnabled: boolean = false;
  private currentMusic: AudioBufferSourceNode | null = null;
  private isPlaying: boolean = false;

  constructor() {
    this.initializeAudioContext();
  }

  private async initializeAudioContext() {
    try {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    } catch (error) {
      console.warn('Web Audio API not supported:', error);
    }
  }

  setMusicEnabled(enabled: boolean) {
    this.musicEnabled = enabled;
    if (enabled && !this.isPlaying) {
      this.playBackgroundMusic();
    } else if (!enabled && this.isPlaying) {
      this.stopBackgroundMusic();
    }
  }

  isMusicEnabled(): boolean {
    return this.musicEnabled;
  }

  private async playBackgroundMusic() {
    if (!this.audioContext || !this.musicEnabled) return;

    try {
      // Resume audio context if suspended
      if (this.audioContext.state === 'suspended') {
        await this.audioContext.resume();
      }

      this.stopBackgroundMusic(); // Stop any existing music

      // Create a simple background melody using Web Audio API
      const melody = this.createBackgroundMelody();
      this.currentMusic = melody;
      this.isPlaying = true;

      // Loop the music
      melody.onended = () => {
        if (this.musicEnabled) {
          this.playBackgroundMusic();
        }
      };

      melody.start();
    } catch (error) {
      console.warn('Could not play background music:', error);
    }
  }

  private stopBackgroundMusic() {
    if (this.currentMusic) {
      this.currentMusic.stop();
      this.currentMusic = null;
      this.isPlaying = false;
    }
  }

  private createBackgroundMelody(): AudioBufferSourceNode {
    if (!this.audioContext) throw new Error('Audio context not available');

    const source = this.audioContext.createBufferSource();
    const buffer = this.audioContext.createBuffer(1, this.audioContext.sampleRate * 8, this.audioContext.sampleRate);
    const data = buffer.getChannelData(0);

    // Create a pleasant background melody
    const melody = [
      { freq: 261.63, duration: 0.5 }, // C4
      { freq: 329.63, duration: 0.5 }, // E4
      { freq: 392.00, duration: 0.5 }, // G4
      { freq: 523.25, duration: 0.5 }, // C5
      { freq: 392.00, duration: 0.5 }, // G4
      { freq: 329.63, duration: 0.5 }, // E4
      { freq: 261.63, duration: 1.0 }, // C4
      { freq: 0, duration: 0.5 }, // Rest
    ];

    let sample = 0;
    for (const note of melody) {
      const duration = note.duration * this.audioContext.sampleRate;
      const frequency = note.freq;

      for (let i = 0; i < duration; i++) {
        if (frequency > 0) {
          // Create a gentle sine wave with some harmonics
          const t = sample / this.audioContext.sampleRate;
          const wave = Math.sin(2 * Math.PI * frequency * t) * 0.1; // Low volume
          data[sample] = wave;
        } else {
          data[sample] = 0; // Rest
        }
        sample++;
      }
    }

    source.buffer = buffer;
    source.loop = false;
    return source;
  }

  // Play a short success jingle
  playSuccessJingle() {
    if (!this.audioContext || !this.musicEnabled) return;

    try {
      const source = this.audioContext.createBufferSource();
      const buffer = this.audioContext.createBuffer(1, this.audioContext.sampleRate * 2, this.audioContext.sampleRate);
      const data = buffer.getChannelData(0);

      // Success melody: C-E-G-C (ascending)
      const notes = [261.63, 329.63, 392.00, 523.25];
      let sample = 0;

      for (const freq of notes) {
        const duration = 0.4 * this.audioContext.sampleRate;
        for (let i = 0; i < duration; i++) {
          const t = sample / this.audioContext.sampleRate;
          const wave = Math.sin(2 * Math.PI * freq * t) * 0.2;
          data[sample] = wave;
          sample++;
        }
      }

      source.buffer = buffer;
      source.connect(this.audioContext.destination);
      source.start();
    } catch (error) {
      console.warn('Could not play success jingle:', error);
    }
  }

  // Play a gentle notification sound
  playNotification() {
    if (!this.audioContext || !this.musicEnabled) return;

    try {
      const source = this.audioContext.createBufferSource();
      const buffer = this.audioContext.createBuffer(1, this.audioContext.sampleRate * 0.5, this.audioContext.sampleRate);
      const data = buffer.getChannelData(0);

      // Simple notification tone
      const frequency = 800;
      for (let i = 0; i < data.length; i++) {
        const t = i / this.audioContext.sampleRate;
        const wave = Math.sin(2 * Math.PI * frequency * t) * 0.15;
        data[i] = wave;
      }

      source.buffer = buffer;
      source.connect(this.audioContext.destination);
      source.start();
    } catch (error) {
      console.warn('Could not play notification:', error);
    }
  }
}

// Export singleton instance
export const musicService = new MusicService();
