export default function ConfidencePage() {
  return (
    <div style={{ width: '100%', height: '100vh', margin: 0, padding: 0, overflow: 'hidden' }}>
      <iframe
        src="https://confidence-web-kohl.vercel.app/"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          display: 'block'
        }}
        title="Mother Vegetable Confidence"
        allowFullScreen
      />
    </div>
  );
}