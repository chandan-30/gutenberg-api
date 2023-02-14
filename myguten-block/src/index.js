import { __ } from '@wordpress/i18n';
/**
 * Internal dependencies
 */
import Edit from './edit';
import { TextControl, Placeholder } from '@wordpress/components';
import { useBlockProps, RichText, AlignmentToolbar, BlockControls, } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 */
const {registerBlockType} = wp.blocks;

/**
 * 
 * Every block starts by registering a new block type definition.
 *
 */
registerBlockType('myguten-block/test-block', {
    /**
	 * Used to construct a preview for the block to be shown in the block inserter.
	 */
    title: __('Myguten Custom Block', 'my-guten-block-plugin'), //title of block
    icon: __('smiley', 'my-guten-block-plugin'), //block description
    category: __('text', 'my-guten-block-plugin'), //category of block
    attributes: {
        content: {
            type: 'string',
            source: 'children',
            selector: 'h3',
        },
        description: {
            type: 'string',
            source: 'children',
            selector: 'p',
        },
        support: {
            type: 'string',
            source: 'children',
            selector: 'li.first',
        },
        email: {
            type: 'string',
            source: 'children',
            selector: 'li.second',
        },
        price: {
            type: 'string',
            source: 'children',
            selector: 'h2',
        },
        alignment: {
            type: 'string',
            default: 'none',
        },

    },
    "supports": {
        "color": {
            "text": true,
            "background": true,
            "link": true
        }
    },
    /**
     * The edit function describes the structure of your block in the context of the
     * editor. This represents what the editor will render when the block is used.
     *
	 */ 
    edit: ( props ) => {
        
        const { attributes, setAttributes, isSelected } = props;
        const { description } = props.attributes.description;
        const onEdit = ( newContent ) => {
            setAttributes( { content: newContent } ); 
        }

        const onChangeAlignment = ( newAlignment ) => {
            setAttributes( {
                alignment: newAlignment === undefined ? 'none' : newAlignment,
            } );
        };

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
        const title = __('PERSONAL EDITION','my-guten-block-plugin');
        const support = __('> Free Support 24/7','my-guten-block-plugin');
        const email = __('> Maintenance Email','my-guten-block-plugin');
        const price = __('$19.99','my-guten-block-plugin');
        const desc = __('Auctor condimentum vero, solutauld hilvil similique, nisl proin augue? Accumsan interdum etiam', 'my-guten-block-plugin');
        return (
            attributes['content'] && !isSelected ? (
                <div  className='container-box'>
                    <div className='box'>
                        <h3> { !attributes.content.length? title : attributes.content }</h3>
                        
                    </div>
                </div>
            ) : (
                <div  className='container-box'>
                    <div className='box'>

                        <BlockControls>
                            <AlignmentToolbar
                                value={ attributes.alignment }
                                onChange={ onChangeAlignment }
                            />
                        </BlockControls>

                        <RichText
                            style={ { textAlign: attributes.alignment } }
                            tagName="h3"
                            onChange={ onEdit }
                            value={ !attributes.content.length? title:  attributes.content}
                        />

                        
                    </div>
                </div>
            )
        );
    },
    /**
     * The save function defines the way in which the different attributes should
     * be combined into the final markup.
	 */
    save: ( props ) => {
        console.log('saved attributes herer', props.attributes);
        const blockProps = useBlockProps.save();
        const { attributes } = props;
        const title = __('PERSONAL EDITION','my-guten-block-plugin');
        return (
            <div  {...blockProps} className='container-box'>
                <div className='box'>
                        <RichText.Content
                            
                            tagName="h3"
                            
                            value={ !attributes.content.length? title : attributes.content }
                        />
                </div>
        </div>
        );
    }
});