import '../App.css';
import './Components.css';
import mailIcon from '../assets/eve_mail.png';
import arrowIcon from '../assets/arrow.png';
import { formatDate } from '../services/date.service.js';

export const VerticalScrollItem = (props: { item: any; index: number }) => {
  return (
    <view
      style={{
        width: '100%',
        height: 'auto',
        background:
          'linear-gradient(to top, rgba(121, 204, 206, 0.9), rgba(132, 132, 132, 0.9));',
        marginBottom: '1rem',
        borderRadius: '25px',
        paddingBottom: '15px',
      }}
    >
      <view className="container">
        <view className="item">
          <text className="Hint">{formatDate(props.item.timestamp)}</text>
        </view>
        <view className="item">
          <image
            style={{ width: '3rem', height: '3rem' }}
            src={props.item.is_read ? mailIcon : arrowIcon}
          />
        </view>
      </view>

      <text className="Description">{props.item.subject}</text>
    </view>
  );
};
