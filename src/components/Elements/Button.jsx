const Button = (props) => {
  const { text = '....', bgColor = 'bg-red-500', event } = props;
  return (
    <button
      onClick={event}
      className={`${bgColor} rounded-[0.25rem] w-full p-1 text-white`}
    >
      {text}
    </button>
  );
};

export default Button;
