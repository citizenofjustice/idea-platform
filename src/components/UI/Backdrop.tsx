import { useBodyScrollLock } from "../../hooks/useBodyScrollLock";

/**
 * Backdrop component
 */
const Backdrop = () => {
  useBodyScrollLock(); // locking ablilty to scroll while backdrop is shown

  return (
    <>
      <div
        id="dialog-background"
        className="fixed top-0 z-30 min-h-full w-full bg-background-900 opacity-40"
      />
    </>
  );
};

export default Backdrop;
