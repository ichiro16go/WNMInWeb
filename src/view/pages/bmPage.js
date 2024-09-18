import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function BookMarkPage() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      {/* <div style={styles.bookmark}>
        <p>bookmark</p>
      </div> */}
      <div style={styles.scrollContainer}>
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} style={styles.item}>
            <div key={index} style={styles.item}>
            <img src="src/assets/icon.png" alt="" />
            <p  style={styles.title}>BookMarkTitle</p>
            <p style={styles.detail}>千代田線の「綾瀬駅」（もしくは東武伊勢崎線「竹ノ塚駅」）から、東武バスに乗り約20分ほど「花畑4丁目」というバス停で降りると、ちょうど目の前に見える建物が「Dog Cafe Florence」です</p>
            <div key={index} style={styles.buttons}> 
            <button style={styles.button} >
              button
            </button>
            </div>
          </div>
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
  bookmark:{
    width:'30%',
    height:'10%',
    color:'white',
    padding:'10px 20px',
    backgroundColor:'#A484A4',

  },
  item: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '10px',
    marginBottom: '10px',
    backgroundColor: '#f9f9f9',
  },
  title:{
    padding:'10px 67px',
  },
  detail:{
    fontSize:'8px',
    padding:'0px 67px',
  },
  buttons:{
    padding:'0px 64px',
  },
  button: {
    fontSize:'7px',
    padding: '4px 15px',
    borderRadius: '5px',
    color: 'black',
    border: 'none',
    cursor: 'pointer',
    backgroundColor:'#c0c0c0',
  },
};
