import { useCallback, useEffect } from "react";

export const useClickOutside = (
  isOpen: boolean,
  dropdownRef: React.RefObject<HTMLDivElement>,
  callBack: () => void
) => {
  const closeDropdown = useCallback((event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      callBack();
    }
  }, []);

  // const hideOverFlow = (event: MouseEvent) => {
  //   if (
  //     dropdownRef.current &&
  //     dropdownRef.current.contains(event.target as Node)
  //   ) {
  //     const scrollbarWidth =
  //       window.innerWidth - document.documentElement.clientWidth;

  //     document.body.style.overflow = "hidden";
  //     document.body.style.paddingRight = `${scrollbarWidth}px`;
  //   }
  // };

  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "";
    }

    document.addEventListener("click", (e) => {
      closeDropdown(e);
      // hideOverFlow(e);
    });

    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, [dropdownRef, isOpen]);
};
