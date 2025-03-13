import { useCallback, useEffect, useState } from '@lynx-js/react';

import {} from 'react';

import { useNavigate } from 'react-router';

import '../App.css';
import arrow from '../assets/arrow.png';
import lynxLogo from '../assets/lynx-logo.png';
import reactLynxLogo from '../assets/react-logo.png';
import eveMail from '../assets/eve_mail.png';

import mailData from '../assets/data/eve_mail_response.json';
import { VerticalScrollItem } from '../assets/components/MailItem.jsx';

export function Mail() {
  const [alterLogo, setAlterLogo] = useState(false);

  const nav = useNavigate();

  useEffect(() => {
    console.info('Hello, ReactLynx');
  }, []);

  const onTap = useCallback(() => {
    'background only';
    setAlterLogo(!alterLogo);
  }, [alterLogo]);

  return (
    <view
      style={{
        width: '100%',
        height: '100%',
        padding: 10,
        display: 'linear',
        marginTop: '2rem',
      }}
    >
      <view className="Background" />
      <view className="Banner">
        <view className="Logo" bindtap={onTap}>
          {alterLogo ? (
            <image src={eveMail} className="Logo--react" />
          ) : (
            <image src={lynxLogo} className="Logo--lynx" />
          )}
        </view>
        <text className="Title">EVE</text>
        <text className="Subtitle">mail</text>
      </view>
      <view className="Content">
        <view>
          <text bindtap={() => nav('/')}>Navigate back Home</text>
        </view>
        <text className="Hint">
          Edit<text style={{ fontStyle: 'italic' }}>{' src/Mail.tsx '}</text>
          to see updates!
        </text>
      </view>
      <scroll-view
        scroll-orientation="vertical"
        style={{
          width: '100%',
          height: '70%',
          padding: '1rem',
        }}
      >
        {mailData.map((item, index) => (
          <VerticalScrollItem item={item} index={index} />
        ))}
      </scroll-view>
    </view>
  );
}
