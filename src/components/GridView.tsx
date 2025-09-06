import React from 'react';
import { MapPin, Flag, Flame, Square } from 'lucide-react';
import type { GridWorld } from '../types';

interface GridViewProps {
  world: GridWorld;
  moves?: string[];
}

export const GridView: React.FC<GridViewProps> = ({ world, moves }) => {
  const getTileIcon = (tileType: string) => {
    switch (tileType) {
      case 'start':
        return <MapPin size={16} className="tile-icon start-icon" />;
      case 'goal':
        return <Flag size={16} className="tile-icon goal-icon" />;
      case 'lava':
        return <Flame size={16} className="tile-icon lava-icon" />;
      case 'wall':
        return <Square size={16} className="tile-icon wall-icon" />;
      case 'gem':
        return <span className="tile-icon gem-icon">💎</span>;
      default:
        return null;
    }
  };

  const getTileClass = (x: number, y: number) => {
    let className = 'grid-tile';
    
    if (x === world.start[0] && y === world.start[1]) {
      className += ' start';
    } else if (x === world.goal[0] && y === world.goal[1]) {
      className += ' goal';
    } else {
      const tile = world.tiles.find(t => t.x === x && t.y === y);
      if (tile) {
        className += ` ${tile.type}`;
      }
    }
    
    return className;
  };

  const simulateRobotPath = () => {
    if (!moves) return [];
    
    const path = [];
    let x = world.start[0];
    let y = world.start[1];
    
    path.push([x, y]); // Starting position
    
    for (const move of moves) {
      switch (move) {
        case 'UP':
          y -= 1;
          break;
        case 'DOWN':
          y += 1;
          break;
        case 'LEFT':
          x -= 1;
          break;
        case 'RIGHT':
          x += 1;
          break;
      }
      path.push([x, y]);
    }
    
    return path;
  };

  const robotPath = simulateRobotPath();

  return (
    <div className="grid-view">
      <div className="grid-header">
        <h3>🗺️ World Map</h3>
        <div className="grid-legend">
          <div className="legend-item">
            <MapPin size={12} className="legend-icon start" />
            <span>Start</span>
          </div>
          <div className="legend-item">
            <Flag size={12} className="legend-icon goal" />
            <span>Goal</span>
          </div>
          <div className="legend-item">
            <Flame size={12} className="legend-icon lava" />
            <span>Lava</span>
          </div>
          <div className="legend-item">
            <Square size={12} className="legend-icon wall" />
            <span>Wall</span>
          </div>
        </div>
      </div>

      <div className="grid-container">
        <div 
          className="grid"
          style={{
            gridTemplateColumns: `repeat(${world.width}, 1fr)`,
            gridTemplateRows: `repeat(${world.height}, 1fr)`
          }}
        >
          {Array.from({ length: world.height }, (_, y) =>
            Array.from({ length: world.width }, (_, x) => {
              const tileClass = getTileClass(x, y);
              const isRobotPath = robotPath.some(([px, py]) => px === x && py === y);
              const isRobotCurrent = robotPath.length > 0 && 
                robotPath[robotPath.length - 1][0] === x && 
                robotPath[robotPath.length - 1][1] === y;

              return (
                <div
                  key={`${x}-${y}`}
                  className={`${tileClass} ${isRobotPath ? 'robot-path' : ''} ${isRobotCurrent ? 'robot-current' : ''}`}
                >
                  {getTileIcon(
                    x === world.start[0] && y === world.start[1] ? 'start' :
                    x === world.goal[0] && y === world.goal[1] ? 'goal' :
                    world.tiles.find(t => t.x === x && t.y === y)?.type || 'empty'
                  )}
                  
                  {isRobotCurrent && (
                    <div className="robot">🤖</div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>

      {moves && moves.length > 0 && (
        <div className="moves-display">
          <h4>🤖 Robot Moves</h4>
          <div className="moves-list">
            {moves.map((move, index) => (
              <span key={index} className="move-item">
                {move}
              </span>
            ))}
          </div>
        </div>
      )}

      <style>{`
        .grid-view {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 15px;
          padding: 20px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .grid-header {
          margin-bottom: 15px;
        }

        .grid-header h3 {
          color: #2d3748;
          margin: 0 0 10px 0;
          font-size: 1.2rem;
        }

        .grid-legend {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 0.9rem;
          color: #4a5568;
        }

        .legend-icon {
          color: #667eea;
        }

        .legend-icon.start {
          color: #48bb78;
        }

        .legend-icon.goal {
          color: #ed8936;
        }

        .legend-icon.lava {
          color: #f56565;
        }

        .legend-icon.wall {
          color: #4a5568;
        }

        .grid-container {
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
        }

        .grid {
          display: grid;
          gap: 2px;
          background: #e2e8f0;
          padding: 10px;
          border-radius: 10px;
          max-width: 100%;
        }

        .grid-tile {
          width: 40px;
          height: 40px;
          background: #f7fafc;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          transition: all 0.3s ease;
        }

        .grid-tile.start {
          background: linear-gradient(135deg, #48bb78 0%, #38a169 100%);
          color: white;
        }

        .grid-tile.goal {
          background: linear-gradient(135deg, #ed8936 0%, #dd6b20 100%);
          color: white;
        }

        .grid-tile.lava {
          background: linear-gradient(135deg, #f56565 0%, #e53e3e 100%);
          color: white;
        }

        .grid-tile.wall {
          background: linear-gradient(135deg, #4a5568 0%, #2d3748 100%);
          color: white;
        }

        .grid-tile.gem {
          background: linear-gradient(135deg, #9f7aea 0%, #805ad5 100%);
          color: white;
        }

        .grid-tile.robot-path {
          background: rgba(102, 126, 234, 0.2);
          border: 2px solid #667eea;
        }

        .grid-tile.robot-current {
          animation: robotGlow 1s ease-in-out infinite;
        }

        @keyframes robotGlow {
          0%, 100% { 
            box-shadow: 0 0 0 0 rgba(102, 126, 234, 0.7);
          }
          50% { 
            box-shadow: 0 0 0 10px rgba(102, 126, 234, 0);
          }
        }

        .tile-icon {
          z-index: 1;
        }

        .robot {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 20px;
          z-index: 2;
          animation: robotBounce 0.5s ease-in-out;
        }

        @keyframes robotBounce {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.2); }
        }

        .moves-display {
          background: #f8fafc;
          border-radius: 10px;
          padding: 15px;
          border-left: 4px solid #667eea;
        }

        .moves-display h4 {
          color: #2d3748;
          margin: 0 0 10px 0;
          font-size: 1rem;
        }

        .moves-list {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .move-item {
          background: #667eea;
          color: white;
          padding: 4px 8px;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: bold;
          min-width: 50px;
          text-align: center;
        }

        @media (max-width: 768px) {
          .grid-tile {
            width: 35px;
            height: 35px;
          }

          .legend-item {
            font-size: 0.8rem;
          }

          .moves-list {
            gap: 5px;
          }

          .move-item {
            padding: 3px 6px;
            font-size: 0.7rem;
            min-width: 40px;
          }
        }
      `}</style>
    </div>
  );
};
