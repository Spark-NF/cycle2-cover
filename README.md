# Cycle2 cover

## About
Plugin for cycle2 implementing the original cycle's cover and uncover transitions.

## Getting started
```html
<!-- include jQuery -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<!-- include Cycle2 -->
<script src="http://malsup.github.com/jquery.cycle2.js"></script>
<!-- include Cover transition -->
<script src="https://raw.githubusercontent.com/Spark-NF/cycle2-cover/master/jquery.cycle2.cover.js"></script>

...

<!-- declare a slideshow -->
<div class="cycle-slideshow"
    data-cycle-fx="cover"
    data-cycle-cover-enter-animation="cover"
    data-cycle-cover-enter-position="top"
    data-cycle-cover-exit-animation="uncover"
    data-cycle-cover-exit-position="bottom">

    <img src="http://malsup.github.com/images/p1.jpg">
    <img src="http://malsup.github.com/images/p2.jpg">
    <img src="http://malsup.github.com/images/p3.jpg">
</div>
```

## Documentation
Name            | Type   | Default | Description
--------------- | ------ | ------- | -----------
enter-animation | string | cover   | Whether the slide will cover the previous one or if the previous one should leave to show the next one. Can be 'cover' or 'uncover'.
enter-position  | string | left    | Where the slide will enter from. Can be 'top', 'right', 'bottom' or 'left'.
exit-animation  | string | cover   | Whether the slide will cover the previous one or if the previous one should leave to show the next one. Can be 'cover' or 'uncover'.
exit-position   | string | right   | Where the slide will exit to. Can be 'top', 'right', 'bottom' or 'left'.
The 'easing' and 'speed' options are also supported and work the same as in the original Cycle2.
See [Cycle2 API](http://jquery.malsup.com/cycle2/api/).

## Authors
* Nicolas Faure

## License
The script is licensed under the [Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0).