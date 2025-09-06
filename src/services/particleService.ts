interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
  type: 'sparkle' | 'confetti' | 'star';
}

class ParticleService {
  private particles: Particle[] = [];
  private canvas: HTMLCanvasElement | null = null;
  private ctx: CanvasRenderingContext2D | null = null;
  private animationId: number | null = null;

  initialize(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.startAnimation();
  }

  private startAnimation() {
    const animate = () => {
      this.update();
      this.render();
      this.animationId = requestAnimationFrame(animate);
    };
    animate();
  }

  private update() {
    this.particles = this.particles.filter(particle => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.vy += 0.1; // gravity
      particle.life--;
      
      return particle.life > 0;
    });
  }

  private render() {
    if (!this.ctx || !this.canvas) return;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.particles.forEach(particle => {
      const alpha = particle.life / particle.maxLife;
      this.ctx!.globalAlpha = alpha;
      
      this.ctx!.fillStyle = particle.color;
      this.ctx!.beginPath();
      
      if (particle.type === 'sparkle') {
        this.drawSparkle(particle.x, particle.y, particle.size);
      } else if (particle.type === 'confetti') {
        this.drawConfetti(particle.x, particle.y, particle.size);
      } else if (particle.type === 'star') {
        this.drawStar(particle.x, particle.y, particle.size);
      }
      
      this.ctx!.fill();
    });

    this.ctx.globalAlpha = 1;
  }

  private drawSparkle(x: number, y: number, size: number) {
    if (!this.ctx) return;
    
    this.ctx.save();
    this.ctx.translate(x, y);
    this.ctx.rotate(Date.now() * 0.01);
    
    // Draw a 4-pointed star
    this.ctx.beginPath();
    for (let i = 0; i < 4; i++) {
      const angle = (i * Math.PI) / 2;
      const x1 = Math.cos(angle) * size;
      const y1 = Math.sin(angle) * size;
      const x2 = Math.cos(angle + Math.PI / 4) * size * 0.5;
      const y2 = Math.sin(angle + Math.PI / 4) * size * 0.5;
      
      if (i === 0) {
        this.ctx.moveTo(x1, y1);
      } else {
        this.ctx.lineTo(x1, y1);
      }
      this.ctx.lineTo(x2, y2);
    }
    this.ctx.closePath();
    this.ctx.restore();
  }

  private drawConfetti(x: number, y: number, size: number) {
    if (!this.ctx) return;
    
    this.ctx.fillRect(x - size/2, y - size/2, size, size);
  }

  private drawStar(x: number, y: number, size: number) {
    if (!this.ctx) return;
    
    this.ctx.save();
    this.ctx.translate(x, y);
    this.ctx.rotate(Date.now() * 0.005);
    
    // Draw a 5-pointed star
    this.ctx.beginPath();
    for (let i = 0; i < 5; i++) {
      const angle = (i * 4 * Math.PI) / 5;
      const radius = i % 2 === 0 ? size : size * 0.5;
      const x1 = Math.cos(angle) * radius;
      const y1 = Math.sin(angle) * radius;
      
      if (i === 0) {
        this.ctx.moveTo(x1, y1);
      } else {
        this.ctx.lineTo(x1, y1);
      }
    }
    this.ctx.closePath();
    this.ctx.restore();
  }

  createSuccessEffect(x: number, y: number) {
    const colors = ['#06ffa5', '#feca57', '#48cae4', '#ff6b6b'];
    
    for (let i = 0; i < 15; i++) {
      this.particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 8,
        vy: (Math.random() - 0.5) * 8 - 2,
        life: 60,
        maxLife: 60,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        type: 'sparkle'
      });
    }
  }

  createConfettiEffect(x: number, y: number) {
    const colors = ['#ff6b6b', '#feca57', '#48cae4', '#06ffa5', '#764ba2'];
    
    for (let i = 0; i < 25; i++) {
      this.particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 12,
        vy: (Math.random() - 0.5) * 12 - 3,
        life: 90,
        maxLife: 90,
        size: Math.random() * 6 + 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        type: 'confetti'
      });
    }
  }

  createStarEffect(x: number, y: number) {
    const colors = ['#feca57', '#ff6b6b', '#48cae4'];
    
    for (let i = 0; i < 10; i++) {
      this.particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 6,
        vy: (Math.random() - 0.5) * 6 - 1,
        life: 80,
        maxLife: 80,
        size: Math.random() * 10 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        type: 'star'
      });
    }
  }

  createAchievementEffect(x: number, y: number) {
    // Create a burst of different particle types
    this.createSuccessEffect(x, y);
    setTimeout(() => this.createConfettiEffect(x, y), 100);
    setTimeout(() => this.createStarEffect(x, y), 200);
  }

  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    this.particles = [];
  }
}

export const particleService = new ParticleService();
