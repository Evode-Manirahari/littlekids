// Enhanced Particle Service for Visual Effects
// Creates and manages advanced particle effects for celebrations and animations

interface Particle {
  id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
  type: 'star' | 'sparkle' | 'confetti' | 'heart' | 'firework' | 'rainbow' | 'code' | 'magic';
  rotation: number;
  rotationSpeed: number;
  scale: number;
  trail: { x: number; y: number; life: number }[];
}

interface ParticleEffect {
  id: string;
  particles: Particle[];
  duration: number;
  startTime: number;
  type: 'celebration' | 'success' | 'levelup' | 'achievement' | 'error' | 'typing';
}

class ParticleService {
  private effects: ParticleEffect[] = [];
  private canvas: HTMLCanvasElement | null = null;
  private ctx: CanvasRenderingContext2D | null = null;
  private animationId: number | null = null;
  private isRunning: boolean = false;

  init(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.resizeCanvas();
    window.addEventListener('resize', () => this.resizeCanvas());
  }

  private resizeCanvas() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  // Enhanced particle creation methods
  createCelebrationParticles(x: number, y: number, count: number = 30) {
    this.createEffect('celebration', x, y, count, [
      { type: 'star', weight: 0.3 },
      { type: 'sparkle', weight: 0.3 },
      { type: 'confetti', weight: 0.2 },
      { type: 'rainbow', weight: 0.2 }
    ]);
  }

  createSuccessParticles(x: number, y: number, count: number = 20) {
    this.createEffect('success', x, y, count, [
      { type: 'sparkle', weight: 0.4 },
      { type: 'star', weight: 0.3 },
      { type: 'magic', weight: 0.3 }
    ]);
  }

  createLevelUpParticles(x: number, y: number, count: number = 40) {
    this.createEffect('levelup', x, y, count, [
      { type: 'firework', weight: 0.4 },
      { type: 'rainbow', weight: 0.3 },
      { type: 'star', weight: 0.3 }
    ]);
  }

  createAchievementParticles(x: number, y: number, count: number = 25) {
    this.createEffect('achievement', x, y, count, [
      { type: 'heart', weight: 0.3 },
      { type: 'magic', weight: 0.3 },
      { type: 'sparkle', weight: 0.4 }
    ]);
  }

  createCodeTypingParticles(x: number, y: number, count: number = 15) {
    this.createEffect('typing', x, y, count, [
      { type: 'code', weight: 0.6 },
      { type: 'sparkle', weight: 0.4 }
    ]);
  }

  createErrorParticles(x: number, y: number, count: number = 10) {
    this.createEffect('error', x, y, count, [
      { type: 'sparkle', weight: 1.0 }
    ]);
  }

  private createEffect(
    effectType: ParticleEffect['type'],
    x: number,
    y: number,
    count: number,
    particleTypes: { type: Particle['type']; weight: number }[]
  ) {
    const effect: ParticleEffect = {
      id: Math.random().toString(36).substr(2, 9),
      particles: [],
      duration: 3000, // 3 seconds
      startTime: Date.now(),
      type: effectType
    };

    for (let i = 0; i < count; i++) {
      const particleType = this.selectParticleType(particleTypes);
      const particle = this.createParticle(x, y, particleType, effectType);
      effect.particles.push(particle);
    }

    this.effects.push(effect);
    this.start();
  }

  private selectParticleType(types: { type: Particle['type']; weight: number }[]): Particle['type'] {
    const random = Math.random();
    let cumulative = 0;
    
    for (const type of types) {
      cumulative += type.weight;
      if (random <= cumulative) {
        return type.type;
      }
    }
    
    return types[0].type;
  }

  private createParticle(x: number, y: number, type: Particle['type'], effectType: ParticleEffect['type']): Particle {
    const baseVelocity = this.getBaseVelocity(effectType);
    
    return {
      id: Math.random().toString(36).substr(2, 9),
      x,
      y,
      vx: (Math.random() - 0.5) * baseVelocity.x,
      vy: (Math.random() - 0.5) * baseVelocity.y - 2,
      life: 1,
      maxLife: 1,
      size: Math.random() * 6 + 2,
      color: this.getRandomColor(type),
      type,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.2,
      scale: Math.random() * 0.5 + 0.5,
      trail: []
    };
  }

  private getBaseVelocity(effectType: ParticleEffect['type']): { x: number; y: number } {
    const velocities = {
      celebration: { x: 12, y: 12 },
      success: { x: 8, y: 8 },
      levelup: { x: 15, y: 15 },
      achievement: { x: 10, y: 10 },
      typing: { x: 4, y: 4 },
      error: { x: 6, y: 6 }
    };
    return velocities[effectType] || { x: 8, y: 8 };
  }

  // Removed unused getBaseLife method

  private getRandomColor(type: Particle['type']): string {
    const colors = {
      star: ['#FFD700', '#FFA500', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'],
      sparkle: ['#FFFFFF', '#FFD700', '#FF69B4', '#00CED1', '#FFEAA7'],
      confetti: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#FF9FF3'],
      heart: ['#FF69B4', '#FF1493', '#FFB6C1', '#FFC0CB', '#FF6B9D'],
      firework: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD'],
      rainbow: ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3'],
      code: ['#00FF00', '#00FFFF', '#0080FF', '#8000FF', '#FF00FF'],
      magic: ['#FFD700', '#FF69B4', '#00CED1', '#FF6B6B', '#4ECDC4']
    };

    const typeColors = colors[type];
    return typeColors[Math.floor(Math.random() * typeColors.length)];
  }

  update() {
    if (!this.ctx || !this.canvas) return;

    // Clear canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Update effects
    this.effects = this.effects.filter(effect => {
      const elapsed = Date.now() - effect.startTime;
      if (elapsed > effect.duration) {
        return false; // Remove expired effect
      }

      // Update particles in this effect
      effect.particles = effect.particles.filter(particle => {
        this.updateParticle(particle);
        this.drawParticle(particle);
        return particle.life > 0;
      });

      return effect.particles.length > 0;
    });

    // Continue animation if there are effects
    if (this.effects.length > 0) {
      this.animationId = requestAnimationFrame(() => this.update());
    } else {
      this.isRunning = false;
      this.animationId = null;
    }
  }

  private updateParticle(particle: Particle) {
    // Update position
    particle.x += particle.vx;
    particle.y += particle.vy;
    particle.vy += 0.1; // Gravity
    particle.life -= 0.015;
    particle.rotation += particle.rotationSpeed;
    particle.scale = Math.max(0, particle.scale - 0.01);

    // Add to trail
    particle.trail.push({ x: particle.x, y: particle.y, life: particle.life });
    if (particle.trail.length > 10) {
      particle.trail.shift();
    }

    // Update trail life
    particle.trail.forEach(point => {
      point.life -= 0.05;
    });
    particle.trail = particle.trail.filter(point => point.life > 0);
  }

  private drawParticle(particle: Particle) {
    if (!this.ctx) return;

    this.ctx.save();
    this.ctx.globalAlpha = particle.life;
    this.ctx.translate(particle.x, particle.y);
    this.ctx.rotate(particle.rotation);
    this.ctx.scale(particle.scale, particle.scale);

    // Draw trail
    if (particle.trail.length > 1) {
      this.drawTrail(particle);
    }

    // Draw main particle
    this.ctx.fillStyle = particle.color;
    this.drawParticleShape(particle);

    this.ctx.restore();
  }

  private drawTrail(particle: Particle) {
    if (!this.ctx || particle.trail.length < 2) return;

    this.ctx.strokeStyle = particle.color;
    this.ctx.lineWidth = 2;
    this.ctx.globalAlpha = particle.life * 0.5;

    this.ctx.beginPath();
    this.ctx.moveTo(particle.trail[0].x - particle.x, particle.trail[0].y - particle.y);
    
    for (let i = 1; i < particle.trail.length; i++) {
      this.ctx.lineTo(particle.trail[i].x - particle.x, particle.trail[i].y - particle.y);
    }
    
    this.ctx.stroke();
    this.ctx.globalAlpha = particle.life;
  }

  private drawParticleShape(particle: Particle) {
    if (!this.ctx) return;

    switch (particle.type) {
      case 'star':
        this.drawStar(0, 0, particle.size);
        break;
      case 'sparkle':
        this.drawSparkle(0, 0, particle.size);
        break;
      case 'confetti':
        this.drawConfetti(0, 0, particle.size);
        break;
      case 'heart':
        this.drawHeart(0, 0, particle.size);
        break;
      case 'firework':
        this.drawFirework(0, 0, particle.size);
        break;
      case 'rainbow':
        this.drawRainbow(0, 0, particle.size);
        break;
      case 'code':
        this.drawCode(0, 0, particle.size);
        break;
      case 'magic':
        this.drawMagic(0, 0, particle.size);
        break;
    }
  }

  private drawStar(x: number, y: number, size: number) {
    if (!this.ctx) return;
    
    this.ctx.beginPath();
    for (let i = 0; i < 5; i++) {
      const angle = (i * 4 * Math.PI) / 5;
      const radius = size;
      const innerRadius = size * 0.4;
      const outerX = x + Math.cos(angle) * radius;
      const outerY = y + Math.sin(angle) * radius;
      const innerX = x + Math.cos(angle + Math.PI / 5) * innerRadius;
      const innerY = y + Math.sin(angle + Math.PI / 5) * innerRadius;
      
      if (i === 0) {
        this.ctx.moveTo(outerX, outerY);
      } else {
        this.ctx.lineTo(outerX, outerY);
      }
      this.ctx.lineTo(innerX, innerY);
    }
    this.ctx.closePath();
    this.ctx.fill();
  }

  private drawSparkle(x: number, y: number, size: number) {
    if (!this.ctx) return;
    
    this.ctx.beginPath();
    this.ctx.arc(x, y, size, 0, Math.PI * 2);
    this.ctx.fill();
    
    // Add cross lines for sparkle effect
    this.ctx.strokeStyle = '#FFD700';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.moveTo(x - size * 2, y);
    this.ctx.lineTo(x + size * 2, y);
    this.ctx.moveTo(x, y - size * 2);
    this.ctx.lineTo(x, y + size * 2);
    this.ctx.stroke();
  }

  private drawConfetti(x: number, y: number, size: number) {
    if (!this.ctx) return;
    
    this.ctx.fillRect(x - size/2, y - size/2, size, size);
  }

  private drawHeart(x: number, y: number, size: number) {
    if (!this.ctx) return;
    
    this.ctx.beginPath();
    this.ctx.moveTo(x, y + size/4);
    this.ctx.bezierCurveTo(x, y, x - size/2, y, x - size/2, y + size/4);
    this.ctx.bezierCurveTo(x - size/2, y + size/2, x, y + size/2, x, y + size);
    this.ctx.bezierCurveTo(x, y + size/2, x + size/2, y + size/2, x + size/2, y + size/4);
    this.ctx.bezierCurveTo(x + size/2, y, x, y, x, y + size/4);
    this.ctx.fill();
  }

  private drawFirework(x: number, y: number, size: number) {
    if (!this.ctx) return;
    
    // Draw multiple lines radiating outward
    for (let i = 0; i < 8; i++) {
      const angle = (i * Math.PI * 2) / 8;
      const endX = x + Math.cos(angle) * size * 2;
      const endY = y + Math.sin(angle) * size * 2;
      
      this.ctx.beginPath();
      this.ctx.moveTo(x, y);
      this.ctx.lineTo(endX, endY);
      this.ctx.stroke();
    }
  }

  private drawRainbow(x: number, y: number, size: number) {
    if (!this.ctx) return;
    
    const colors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3'];
    const segmentSize = size / colors.length;
    
    for (let i = 0; i < colors.length; i++) {
      this.ctx.fillStyle = colors[i];
      this.ctx.beginPath();
      this.ctx.arc(x, y, size - (i * segmentSize), 0, Math.PI * 2);
      this.ctx.fill();
    }
  }

  private drawCode(x: number, y: number, size: number) {
    if (!this.ctx) return;
    
    // Draw a simple code symbol
    this.ctx.font = `${size}px monospace`;
    this.ctx.textAlign = 'center';
    this.ctx.fillText('</>', x, y + size/3);
  }

  private drawMagic(x: number, y: number, size: number) {
    if (!this.ctx) return;
    
    // Draw a magic sparkle with multiple points
    this.ctx.beginPath();
    this.ctx.arc(x, y, size, 0, Math.PI * 2);
    this.ctx.fill();
    
    // Add magical aura
    this.ctx.strokeStyle = '#9F7AEA';
    this.ctx.lineWidth = 1;
    this.ctx.beginPath();
    this.ctx.arc(x, y, size * 1.5, 0, Math.PI * 2);
    this.ctx.stroke();
  }

  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.update();
  }

  stop() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
    this.isRunning = false;
  }

  clear() {
    this.effects = [];
    if (this.ctx && this.canvas) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }

  // Public method to get current effect count
  getEffectCount(): number {
    return this.effects.length;
  }

  // Public method to check if any effects are running
  isActive(): boolean {
    return this.effects.length > 0;
  }
}

// Export singleton instance
export const particleService = new ParticleService();