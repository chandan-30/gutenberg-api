/**
 * WordPress components that create the necessary UI elements for the block
 *
 */
import { TextControl, Placeholder } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @param {Object}   props               Properties passed to the function.
 * @param {Object}   props.attributes    Available block attributes.
 * @param {Function} props.setAttributes Function that updates individual attributes.
 * @param {Boolean}  isSelected          Boolean value to check whether block is being used in editor
 *
 * @return {WPElement} Element to render.
 */
const Edit = ( props ) => {
        
    const { attributes, setAttributes, isSelected } = props;
    const blockProps = useBlockProps();
    const onEdit = ( newContent ) => {
        setAttributes( { content: newContent } )
    }
    return (
        attributes['content'] && !isSelected ? (
            <h3 className='edit_h3'>{ attributes.content }</h3>
        ) : (
            <div {...useBlockProps} >
                <RichText
                    label = 'pls'
                    tagName="div"
                    onChange={ onEdit }
                    value={ !attributes.content.length? '':  attributes.content}
                />
                
                </div>
        )
    );
}

export default Edit;