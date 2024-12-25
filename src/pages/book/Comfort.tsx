import comfortImg1 from '/src/assets/book/1인트로-100.jpg';
import comfortImg2 from '/src/assets/book/230일 키워드 필사노트 소개-100.jpg';
import comfortImg3 from '/src/assets/book/3위로-100.jpg';
import comfortImg4 from '/src/assets/book/4가격-100.jpg';

const Comfort: React.FC = () => {
  return (
    <div
      style={{
        width: '100%',
        marginTop: '55px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // 수직 중앙 정렬
        justifyContent: 'center', // 수평 중앙 정렬
      }}
    >
      <img
        src={comfortImg1}
        style={{
          width: '100%',
          maxWidth: '700px',
        }}
      />
      <img
        src={comfortImg2}
        style={{
          width: '100%',
          maxWidth: '700px',
        }}
      />
      <img
        src={comfortImg3}
        style={{
          width: '100%',
          maxWidth: '700px',
        }}
      />
      <img
        src={comfortImg4}
        style={{
          width: '100%',
          maxWidth: '700px',
        }}
      />
    </div>
  );
};

export default Comfort;
