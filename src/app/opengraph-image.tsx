import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'WBW — Premium Web Development Agency';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#ffffff',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}>
        {/* Blue accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '8px',
            background: '#2563eb',
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '48px',
          }}>
          <div
            style={{
              background: '#2563eb',
              width: '48px',
              height: '48px',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '24px',
              fontWeight: 900,
            }}>
            W
          </div>
          <span style={{ fontSize: '32px', fontWeight: 800, color: '#09090b' }}>
            WBW
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: '64px',
            fontWeight: 800,
            color: '#09090b',
            lineHeight: 1.1,
            marginBottom: '24px',
            maxWidth: '900px',
          }}>
          Premium Web Development Agency
        </div>

        {/* Subline */}
        <div
          style={{
            fontSize: '28px',
            color: '#71717a',
            maxWidth: '800px',
            lineHeight: 1.4,
          }}>
          We build websites that convert — fast, SEO-ready, and built to grow.
        </div>

        {/* URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '48px',
            right: '80px',
            fontSize: '20px',
            color: '#2563eb',
            fontWeight: 600,
          }}>
          webuildsites.net
        </div>
      </div>
    ),
    { ...size }
  );
}
