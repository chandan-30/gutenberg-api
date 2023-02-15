<?php
/** 
 * Plugin Name: My Guten Block Plugin
 * Plugin Description: Gutenberg Custom Block Plugin
 * Plugin URI: ''
 * Author: Chandan
 * Author URI: ''
 * Version: 0.0.1
 * Description: A new Plugin
 * Text Domain: 'my-guten-block-plugin'
 * 
 */

 function custom_block_render_callback( $attributes, $content ) {
	// Code to process attributes and generate output goes here
	
	ob_start();
	// Render the block markup
	include dirname(__FILE__) . '/markup.php';
	$output = ob_get_contents();
	ob_end_clean();
	return $output;
  } 


 /**
  * Handles the registration of script, stylesheets and bloc
  *
  * @since 0.0.1
  *
  * @return void
  */
function my_custom_block_register_block() {

	// Register JavasScript File build/index.js
	wp_register_script(
		'my-custom-block',
		plugins_url( 'build/index.js', __FILE__ ),
		array( 'wp-blocks', 'wp-element', 'wp-editor' )
	);

	// Register editor style src/editor.css
	wp_register_style(
		'my-custom-block-editor-style',
		plugins_url( 'src/styles/editor.css', __FILE__ ),
		array( 'wp-edit-blocks' )
	);

	// Register front end block style src/style.css
	wp_register_style(
		'my-custom-block-frontend-style',
		plugins_url( 'src/styles/style.css', __FILE__ ),
		array( )
	);

	// Registers the block
	register_block_type( 'myguten-block/test-block', array(
		'editor_script' => 'my-custom-block',
		'editor_style' => 'my-custom-block-editor-style',
		'style' => 'my-custom-block-frontend-style',
		'render_callback' => 'custom_block_render_callback',
	) );

}

add_action( 'init', 'my_custom_block_register_block' );

