# novi-plugin-rd-instafeed
Novi Builder Plugin for visual [RD Instafeed](https://github.com/TemplatemonsterPlugins/rd-instafeed) customization

## How to Install
You should follow several simple steps to intall this plugin:
* Copy the novi-plugin-rd-instafeed.js file to your path/to/novibuilder/plugins folder.
* Launch NoviBuilder

## What you are able to do
* Change account id which feeds are shown
* Or specify a tag for which the publications will be selected

## Developer Settings
* querySelector — containes a css selector which defines the Plugin container.

## How to add RD Instafeed on your page
If your website doesn't contain RD Instafeed follow the instructions below to install it.

### Include RD Instafeed files to Website
Copy the "assets/rd-instafeed.js" and "assets/rd-instafeed.css" to website's JS and CSS folders respectively and include this files to your website.

### Add RD Instafeed HTML Layout
Add basic RD Instafeed HTML Layout:

```html
<section class="instafeed" data-instafeed-get="user" data-instafeed-user="**********">
  <div data-instafeed-item>
    <img src="images/_blank.png" alt="" data-images-low_resolution-url="src" />
  </div>
</section>
```

Markup in given block may be any, including elements of the grid, etc. It is only necessary presence element with the attribute data-instafeed-item.
You can find more detailed information about instagram html markup in the [official documentation](https://github.com/TemplatemonsterPlugins/rd-instafeed)

Example of RD Instafeed markup using [Bootstrap](http://getbootstrap.com/) and [Font Awesome](http://fontawesome.io/):

```html
<section class="section well well-lg instafeed" data-instafeed-user="25025320" data-instafeed-get="user" data-instafeed-sort="least-recent">
  <div class="container">
    <div class="row">
      <div class="col-xs-3" data-instafeed-item="">
        <div class="thumbnail-instafeed">
          <a class="instagram-link" href="#">
            <img class="instagram-image" src="images/_blank.png" alt="" data-images-standard_resolution-url="src">
          </a>
          <div class="instagram-caption">
            <ul class="inline-list">
              <li>
                <span class="icon mdi mdi-heart"></span>
              </li>
              <li>
                <div data-likes-count="text"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-xs-3" data-instafeed-item="">
        <div class="thumbnail-instafeed">
          <a class="instagram-link" href="#">
            <img class="instagram-image" src="images/_blank.png" alt="" data-images-standard_resolution-url="src">
          </a>
          <div class="instagram-caption">
            <ul class="inline-list">
              <li>
                <span class="icon mdi mdi-heart"></span>
              </li>
              <li>
                <div data-likes-count="text"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-xs-3" data-instafeed-item="">
        <div class="thumbnail-instafeed">
          <a class="instagram-link" href="#">
            <img class="instagram-image" src="images/_blank.png" alt="" data-images-standard_resolution-url="src">
          </a>
          <div class="instagram-caption">
            <ul class="inline-list">
              <li>
                <span class="icon mdi mdi-heart"></span>
              </li>
              <li>
                <div data-likes-count="text"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-xs-3" data-instafeed-item="">
        <div class="thumbnail-instafeed">
          <a class="instagram-link" href="#">
            <img class="instagram-image" src="images/_blank.png" alt="" data-images-standard_resolution-url="src">
          </a>
          <div class="instagram-caption">
            <ul class="inline-list">
              <li>
                <span class="icon mdi mdi-heart"></span>
              </li>
              <li>
                <div data-likes-count="text"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

```

### Initialize RD Instafeed
```js
/**
 * Global variables
 */
"use strict";

var plugins = {
  instafeed: $(".instafeed"),
};


/**
 * Initialize All Scripts
 */
$document.ready(function () {

  /**
   * RD Instafeed JS
   * @description Enables Instafeed JS
   */
  if (plugins.instafeed.length > 0) {
    var i;
    for (i = 0; i < plugins.instafeed.length; i++) {
      var instafeedItem = $(plugins.instafeed[i]);
      instafeedItem.RDInstafeed({});
    }
  }
  
});
```