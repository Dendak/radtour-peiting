import { useMemo, useRef, useCallback } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import type { TrackPoint } from '../data/types';
import { downsample } from '../utils/gpxParser';

interface Props {
  points: TrackPoint[];
  color: string;
  onHover: (point: TrackPoint | null) => void;
}

export function ElevationChart({ points, color, onHover }: Props) {
  const chartData = useMemo(() => downsample(points, 500), [points]);
  const containerRef = useRef<HTMLDivElement>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMouseMove = useCallback((state: any) => {
    if (state?.activePayload?.[0]?.payload) {
      const pt = state.activePayload[0].payload as TrackPoint;
      if (pt.lat !== undefined && pt.lng !== undefined) {
        onHover(pt);
        return;
      }
    }
    if (state?.activeTooltipIndex != null && chartData[state.activeTooltipIndex]) {
      onHover(chartData[state.activeTooltipIndex]);
      return;
    }
  }, [onHover, chartData]);

  const handleMouseLeave = useCallback(() => {
    onHover(null);
  }, [onHover]);

  // Touch handler: find nearest data point from touch X position
  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!containerRef.current || chartData.length === 0) return;
    e.preventDefault(); // prevent scrolling while interacting with chart

    const touch = e.touches[0];
    const rect = containerRef.current.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const chartLeft = 55; // YAxis width
    const chartRight = rect.width - 10; // right margin
    const chartWidth = chartRight - chartLeft;

    if (x < chartLeft || x > chartRight) return;

    const ratio = (x - chartLeft) / chartWidth;
    const index = Math.min(Math.max(Math.round(ratio * (chartData.length - 1)), 0), chartData.length - 1);
    onHover(chartData[index]);
  }, [chartData, onHover]);

  const handleTouchEnd = useCallback(() => {
    onHover(null);
  }, [onHover]);

  const minEle = Math.floor(Math.min(...chartData.map((p) => p.ele)) / 10) * 10 - 10;
  const maxEle = Math.ceil(Math.max(...chartData.map((p) => p.ele)) / 10) * 10 + 10;

  return (
    <div
      className="elevation-chart"
      ref={containerRef}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ touchAction: 'none' }}
    >
      <h3>Höhenprofil</h3>
      <ResponsiveContainer width="100%" height={180}>
        <AreaChart
          data={chartData}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
        >
          <defs>
            <linearGradient id={`gradient-${color.replace('#', '')}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={color} stopOpacity={0.4} />
              <stop offset="95%" stopColor={color} stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="dist"
            tickFormatter={(v) => `${Math.round(Number(v))} km`}
            tick={{ fontSize: 11 }}
            interval="preserveStartEnd"
          />
          <YAxis
            domain={[minEle, maxEle]}
            tickFormatter={(v) => `${v} m`}
            tick={{ fontSize: 11 }}
            width={55}
          />
          <Tooltip
            formatter={(value) => [`${Math.round(Number(value))} m`, 'Höhe']}
            labelFormatter={(label) => `${Number(label).toFixed(1)} km`}
            contentStyle={{ fontSize: 12, borderRadius: 8 }}
          />
          <Area
            type="monotone"
            dataKey="ele"
            stroke={color}
            strokeWidth={2}
            fill={`url(#gradient-${color.replace('#', '')})`}
            dot={false}
            activeDot={{ r: 5, fill: color, stroke: '#fff', strokeWidth: 2 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
