'use client';
const KakaoLogin = () => {
  const handleKakaoLogin = () => {
    const kakaoAuthUrl = `https://54.180.86.80/api/v1/users/kakao/`;
    window.location.href = kakaoAuthUrl;
  };

  return (
    <div>
      <h1>Kakao Login</h1>
      <button onClick={handleKakaoLogin}>Login with Kakao</button>
    </div>
  );
};

export default KakaoLogin;
