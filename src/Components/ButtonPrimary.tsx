import {AriaButtonOptions, ButtonAria, useButton} from 'react-aria'
import {RefObject, useRef} from 'react'

function ButtonPrimary(props: AriaButtonOptions<ElementType>): ButtonAria<HTMLAttributes<any>> {
    let ref = useRef(null);
    let {buttonProps} = useButton(props,ref);
    let {children} = props;

    return (
        <button {...buttonProps} ref={ref}>

            {children}

        </button>
    );

}

export default ButtonPrimary;