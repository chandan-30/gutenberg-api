import { __ } from '@wordpress/i18n';
/**
 * Internal dependencies
 */
import Edit from './edit';
import Save from './save';

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
            selector: 'p',
        }
    },
    "supports": {
        "color": {
            "text": true,
            "background": true,
            "link": true
        }
    },
    /**
	 * @see ./edit.js
	 */ 
    edit: Edit,
    /**
	 * @see ./save.js
	 */
    save: Save
});