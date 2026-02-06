<?php
// Copy this file to config.php (which is gitignored).
//
// To generate a bcrypt hash for your password:
//   1. Upload a temporary file called generate_hash.php containing:
//      <?php echo password_hash($_POST['p'], PASSWORD_DEFAULT);
//   2. Submit your password to it via a form or curl
//   3. Copy the hash output, paste it below
//   4. Delete generate_hash.php immediately
//
// Replace the placeholder below with your actual hash:
define('PASSWORD_HASH', 'YOUR_BCRYPT_HASH_HERE');
