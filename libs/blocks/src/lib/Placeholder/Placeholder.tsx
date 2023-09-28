export type PlaceholderProps = {
  data?: object;
  children?: React.ReactChild;
};

export const Placeholder = ({
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
