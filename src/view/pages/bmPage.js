import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function BookMarkPage() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.scrollContainer}>
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} style={styles.item}>
            <p>BookMarkTitle</p>
            <button style={styles.button} >
              Button
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: '70px',
    backgroundColor: '#fff',
    height: '100vh', // Viewport高さを100%に
  },
  scrollContainer: {
    width: '100%',
    overflowY: 'scroll', // スクロール可能に
  },
  item: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '10px',
    marginBottom: '10px',
    backgroundColor: '#f9f9f9',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '5px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
};
