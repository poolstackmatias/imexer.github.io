'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import axios from 'axios';

interface User {
  email: string;
  id: number;
}

const Profile = () => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get('auth_token');
    if (!token) {
      router.push('/login');
      return;
    }

    axios
      .get<User>('http://54.180.86.80/api/v1/users/myinfo', {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then(response => {
        setUser(response.data);
        console.log(user);
      })
      .catch(error => {
        console.error('Failed to fetch user:', error);
        router.push('/login');
      });
  }, [router]);

  const handleLogout = () => {
    Cookies.remove('auth_token');
    router.push('/login');
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>안녕하세요, {user.id}님</h2>
      <button onClick={handleLogout}>로그아웃</button>
    </div>
  );
};

export default Profile;