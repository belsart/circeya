import React, { useRef } from 'react';
import getHorizontalScroll from './getHorizontalScroll';
import styles from './Horizontable.module.scss';

const Horizontable = ({ children }) => {
    const ref = useRef(null);

    if (window.innerWidth > 960) {
        getHorizontalScroll(ref);
    }

    return (
        <div
            className={styles.horizontable}
            id="horizontable"
            ref={ref}
            // onTouchStart={onTouchDown}
            // onTouchMove={onTouchMove}
            // onMouseDown={onMouseDown}
            // onMouseMove={onMouseMove}
            // onMouseUp={onDown}
            // onMouseLeave={onDown}
        >
            {children}
        </div>
    );
};

export default Horizontable;
