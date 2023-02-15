import { __ } from '@wordpress/i18n';
/**
 * Internal dependencies
 */

import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @param {Object}   props               Properties passed to the function.
 *
 * @return {WPElement} Element to render.
 */
const Edit = ( props ) => {
        
        
    const { attributes, setAttributes, isSelected } = props;
    
    const blockProps = useBlockProps( {
        style: { backgroundColor: props.attributes.backgroundColor },
      } );

    const onEdit = ( newContent ) => {
        setAttributes( { content: newContent });
    }

    const onDescChange = ( newDesc ) => {
        setAttributes( { description: newDesc } );
    }

    const onSupChange = ( newSup ) => {
        setAttributes( { support: newSup } );
    }

    const onEmailChange = ( newEmail ) => {
        setAttributes( { email: newEmail } );
    }

    const onPriceChange = ( newPrice ) => {
        setAttributes( { price: newPrice } );
    }
    
    return (
        (
            <div className='container-box'>
                <div className='box'>

                    <RichText
                        style={ { textAlign: attributes.alignment } }
                        tagName="h3"
                        onChange={ onEdit }
                        value={ attributes.content}
                        placeholder= {__('PERSONAL EDITION','my-guten-block-plugin')}
                        
                    />

                        <RichText
                        tagName="p"
                        onChange={ onDescChange }
                        value={ attributes.description}
                        placeholder = {__('Auctor condimentum vero, solutauld hilvil similique, nisl proin augue? Accumsan interdum etiam', 'my-guten-block-plugin')}
                    />
                    <ul>
                        <RichText
                            
                            tagName="li"
                            className='first'
                            onChange={ onSupChange }
                            value={ attributes.support}
                            placeholder = {__('> Free Support 24/7','my-guten-block-plugin')}
                        />
                    <RichText
                            
                            tagName="li"
                            className='second'
                            onChange={ onEmailChange }
                            value={ attributes.email}
                            placeholder= {__('> Maintenance Email','my-guten-block-plugin')}
                        />
                    </ul>
                    <section className='price'>
                        <span> <s> $59.99 </s> </span>
                        <RichText
                                
                                tagName="h2"
                                onChange={ onPriceChange }
                                value={ attributes.price}
                                placeholder= {__('$19.99','my-guten-block-plugin')}
                            />
                    </section>
                    <InnerBlocks />
                    
                </div>
            </div>
        )
    );
}

export default Edit;