import '../../App.css';

export const VerticalScrollItem = (props: { item: any; index: number }) => {
  const date = new Date(props.item.timestamp);

  const formattedDate = date.toLocaleString('en-GB');

  return (
    <view
      style={{
        width: 'calc(100% - 10px)',
        height: 'auto',
        background: 'linear-gradient(to top, #d3d3d3, #808080);',
        marginBottom: '1rem',
      }}
    >
      <text className="Hint">{formattedDate}</text>
      <text className="Description">{props.item.subject}</text>

      {/* <image
          style={{ width: "calc(100% - 10px)", height: "160px" }}
          src={props.index % 3 == 0 ? image_0 : (props.index % 3 == 1 ? image_1 : image_2)}
        /> */}
    </view>
  );
};
