<?php
/**
 * Plugin Name: Cards Block
 * Plugin URI: https://github.com/sergeycode/sc-cards
 * Description: Cards Block — Block for Cards Layout.
 * Author: sergeycode
 * Author URI: http://sergeycode.github.io
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
