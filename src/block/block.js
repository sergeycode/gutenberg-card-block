/**
 * BLOCK: sc-cards
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { MediaUpload, RichText, InspectorControls, ColorPalette } = wp.editor;

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType('cgb/block-sc-cards', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __('Cards'), // Block title.
	icon: 'palmtree', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'layout', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [__('Cards'), __('sergeycode'), __('create-guten-block')],
	attributes: {
		image: {
			type: 'string',
			default: null // no image by default
		},
		lineColor: {
			type: 'string',
			default: '#5bb988'
		},
		text: {
			type: 'string'
		},
		textColor: {
			type: 'string',
			default: '#231f20'
		},
		textBackgroundColor: {
			type: 'string',
			default: '#eff2f7'
		}
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: function(props) {
		function onImageSelect(image) {
			props.setAttributes({
				image: image.sizes.full.url
			});
		}

		function onLineColorChange(color) {
			props.setAttributes({
				lineColor: color
			});
		}

		function onTextChange(event) {
			props.setAttributes({
				text: event.target.value
			});
		}

		function onTextColorChange(color) {
			props.setAttributes({
				textColor: color
			});
		}

		function onTextBackgroundColorChange(color) {
			props.setAttributes({
				textBackgroundColor: color
			});
		}

		// Creates a <p class='wp-block-cgb-block-sc-cards'></p>.
		return [
			<InspectorControls>
				<div className="controls-section">
					<strong>Select image: </strong>
					<MediaUpload
						onSelect={onImageSelect}
						type="image"
						value={props.attributes.image}
						render={({ open }) => <button onClick={open}>Upload</button>}
					/>
				</div>
				<div className="controls-section">
					<strong>Select line color:</strong>
					<ColorPalette
						value={props.attributes.lineColor}
						onChange={onLineColorChange}
					/>
				</div>
				<div className="controls-section">
					<strong>Select text color:</strong>
					<ColorPalette
						value={props.attributes.textColor}
						onChange={onTextColorChange}
					/>
				</div>
				<div className="controls-section">
					<strong>Select text background color:</strong>
					<ColorPalette
						value={props.attributes.textBackgroundColor}
						onChange={onTextBackgroundColorChange}
					/>
				</div>
			</InspectorControls>,
			<div className={props.className}>
				<div class="card-link">
					<img
						class="card-link-image"
						src={props.attributes.image}
						alt={props.attributes.alt}
					/>
					<div
						class="card-link-line"
						style={{ backgroundColor: props.attributes.lineColor }}
					/>
					<div
						class="card-link-caption"
						style={{ backgroundColor: props.attributes.textBackgroundColor }}
					>
						<input
							type="text"
							value={props.attributes.text}
							onChange={onTextChange}
							placeholder="Enter your text here!"
							style={{ color: props.attributes.textColor }}
						/>
					</div>
				</div>
			</div>
		];
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save: function(props) {
		return (
			<div>
				<a class="card-link" href="#">
					<img
						class="card-link-image"
						src={props.attributes.image}
						alt={props.attributes.alt}
					/>
					<div
						class="card-link-line"
						style={{ backgroundColor: props.attributes.lineColor }}
					/>
					<div
						class="card-link-caption"
						style={{ backgroundColor: props.attributes.textBackgroundColor }}
					>
						<span style={{ color: props.attributes.textColor }}>
							{props.attributes.text}
						</span>
					</div>
				</a>
			</div>
		);
	}
});
