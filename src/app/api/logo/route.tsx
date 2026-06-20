import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '20px 32px',
          background: 'white',
        }}>
        <span
          style={{
            fontSize: '48px',
            fontWeight: 900,
            color: '#2563eb',
            fontFamily: 'sans-serif',
            letterSpacing: '-2px',
            lineHeight: 1,
          }}>
          WBW
        </span>
        <div
          style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            background: '#2563eb',
            marginTop: '4px',
          }}
        />
      </div>
    ),
    {
      width: 240,
      height: 80,
    }
  );
}
