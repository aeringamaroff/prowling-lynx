import '../../App.css';
import './Components.css';
import mailIcon from '../eve_mail.png';
import arrowIcon from '../arrow.png';

export const VerticalScrollItem = (props: { item: any; index: number }) => {
  const formatDate = (isoString: string): string => {
    const date = new Date(isoString);
    return date.toLocaleString('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });
  };

  return (
    <view
      style={{
        width: '100%',
        height: 'calc(auto + 200px)', //'calc(auto + 1rem)',
        background:
          'linear-gradient(to top, rgba(121, 204, 206, 0.9), rgba(132, 132, 132, 0.9));',
        marginBottom: '1rem',
        borderRadius: '25px',
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
