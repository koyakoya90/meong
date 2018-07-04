<?php

function tinyurl($url) {
   return file_get_contents('http://tinyurl.com/api-create.php?url='.$url);
}
echo tinyurl($_GET['url']);
?>
