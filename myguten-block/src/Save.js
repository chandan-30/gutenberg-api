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
    return (
        <h3>{props.attributes.content} </h3>
    );
}

export default Save;