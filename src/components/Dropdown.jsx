import { useState, useEffect, useRef, useCallback } from "react";
import style from "./Dropdown.module.css";

const Dropdown = ({ value, setValue, items, placeholder }) => {
  const [open, setOpen] = useState(false);
  const elem = useRef(null);

  const docClickHandler = useCallback(
    (e) => {
      !elem.current.contains(e.target) && setOpen(false);
    },
    [elem, setOpen]
  );

  useEffect(() => {
    document.body.addEventListener("click", docClickHandler);

    return () => document.body.removeEventListener("click", docClickHandler);
  }, []);

  return (
    <div
      ref={elem}
      onClick={() => setOpen((prev) => !prev)}
      className={open ? `${style.wrapper} ${style.wrapper__active}` : style.wrapper}
    >
      <div className={style.input}>
        {value || placeholder}
        <div className={open ? style.input__open : ""}>^</div>
      </div>
      {open && (
        <div className={style.list}>
          {items.map((item) => (
            <span onClick={() => setValue(item)} key={item}>
              {item}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
