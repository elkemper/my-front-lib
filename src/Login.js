import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import config from './config';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const [showError, setShowError] = useState(false);

  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${config.apiUrl}/auth`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        const { token } = await response.json();
        localStorage.setItem('token', token);
        window.dispatchEvent(new Event('storage'));
        navigate('/');
      } else {
        setError('Неверный логин или пароль');
        setShowError(true);
        setTimeout(() => {
          setShowError(false);
        }, 3000);
        console.log('Unsuccessful auth');
      }
    } catch (error) {
      console.error('Auth error', error);
    }
  };
  return (
    <div className="login-page">
      <h2 className="title">Авторизация</h2>
      <form className="form login-form" onSubmit={handleLogin}>
        <div>
          <label htmlFor="username" className="label">
            Логин:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            style={{ display: 'block' }} // Добавляем стиль для блочного отображения
          />
        </div>
        <div>
          <label htmlFor="password" className="label">
            Пароль:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            style={{ display: 'block' }} // Добавляем стиль для блочного отображения
          />
        </div>
        <button type="submit" className="button">
          Войти
        </button>
      </form>
      {showError && <div className="error-message">{error}</div>}
    </div>
  );
}
