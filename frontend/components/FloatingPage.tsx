import { ReactNode } from "react";
import { ParagraphsWrapper } from "../ParagraphsWrapper";

export const FloatingPage = ({
  children,
  onClose,
}: {
  children: ReactNode;
  onClose: () => void;
}) => (
  <div className="fixed w-screen h-screen bg-white top-0 left-0 z-10">
    <div className="max-w-lg mx-auto relative p-2 text-stone-500">
      <button
        className="absolute text-stone-500 right-0 top-0 p-2"
        onClick={onClose}
      >
        <svg
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24px"
          height="24px"
        >
          <path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z" />
        </svg>
      </button>
      <div className="mt-8">
        <ParagraphsWrapper>{children}</ParagraphsWrapper>
      </div>
    </div>
  </div>
);
