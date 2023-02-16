
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup.
 *
 * @param {Object} props            Properties passed to the function.
 * 
 * @return {WPElement} Element to render.
 */
const Save = ( props ) => {
    console.log(props.attributes);
    const blockProps = useBlockProps.save();
    return( <div>
            <InnerBlocks.Content {...blockProps}/>
            </div>
    );
}

export default Save;