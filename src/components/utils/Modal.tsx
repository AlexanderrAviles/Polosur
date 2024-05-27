const Modal = ({ children, close     }) => {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden flex justify-center items-center">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative  w-full max-w-4xl m-auto flex-col flex rounded-lg ">
        <span className="absolute top-4 right-5 cursor-pointer" onClick={close}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
