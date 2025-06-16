"use client";

export default function GlobalError({ error }) {
  // Error is logged to the console automatically
  console.error(error);

  return (
    <html>
      <body>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh',
          flexDirection: 'column',
          backgroundColor: '#000',
          color: '#fff'
        }}>
          <h1>Something went wrong</h1>
          <p>Please try again later</p>
        </div>
      </body>
    </html>
  );
}
