import React from 'react';

export default function WalkCoursePage() {
  return (
    <div style={styles.container}>
      <p>WalkCoursePage</p>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    height: '100vh', // ビューポートの高さを100%に
  },
};
