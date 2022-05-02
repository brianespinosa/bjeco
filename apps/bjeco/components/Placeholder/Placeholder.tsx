export type PlaceholderProps = {
  data?: object;
  children?: React.ReactChild;
};

const Placeholder = ({
  data,
  children,
  ...rest
}: PlaceholderProps): JSX.Element => {
  return (
    <div {...rest}>
      {children}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default Placeholder;
