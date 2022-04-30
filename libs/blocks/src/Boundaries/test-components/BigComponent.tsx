const BigComponent = () => (
  <div>
    I am a lazy loaded component and should show up after the suspense fallback
    shows up. There is a promise that should resolve after 2000ms.
  </div>
);

export default BigComponent;
