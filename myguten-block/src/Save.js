import { useBlockProps, RichText } from '@wordpress/block-editor';
/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup.
 *
 * @param {Object} props            Properties passed to the function.
 * @param {Object} props.attributes Available block attributes.
 * @return {WPElement} Element to render.
 */
const Save = ( props ) => {
    console.log('saved attributes', props.attributes);
    const blockProps = useBlockProps.save();
    return (
        <div {...blockProps}>
            <RichText.Content 
                tagName='div'
                className='chandan'
                value={props.attributes.content}
            />
        </div>
    );
}

export default Save;