import React from 'react';
import { MdSearch, MdMic, MdCameraAlt } from 'react-icons/md'; // react-iconsからアイコンをインポート

export default function SearchBar() {
  return (
    <div style={styles.container}>
      <MdSearch size={24} color="gray" />
      <input
        type="text"
        style={styles.input}
        placeholder="Googleで検索またはURLを入力"
      />
      <MdMic size={24} color="gray" />
      <MdCameraAlt size={24} color="gray" />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: '30px',
    padding: '0 10px',
    boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.3)',
  },
  input: {
    flex: 1,
    fontSize: '16px',
    marginLeft: '10px',
    marginRight: '10px',
    border: 'none',
    outline: 'none', // フォーカス時の枠線を消す
  },
};
