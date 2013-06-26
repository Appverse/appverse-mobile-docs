Ext.data.JsonP.Unity_Media_Async({"tagname":"class","name":"Unity.Media.Async","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Unity.Media.Async","members":{"cfg":[],"property":[],"method":[{"name":"GetCurrentMedia","tagname":"method","owner":"Unity.Media.Async","meta":{},"id":"method-GetCurrentMedia"},{"name":"GetMetadata","tagname":"method","owner":"Unity.Media.Async","meta":{},"id":"method-GetMetadata"},{"name":"GetSnapshot","tagname":"method","owner":"Unity.Media.Async","meta":{},"id":"method-GetSnapshot"},{"name":"GetState","tagname":"method","owner":"Unity.Media.Async","meta":{},"id":"method-GetState"},{"name":"Pause","tagname":"method","owner":"Unity.Media.Async","meta":{},"id":"method-Pause"},{"name":"Play","tagname":"method","owner":"Unity.Media.Async","meta":{},"id":"method-Play"},{"name":"PlayStream","tagname":"method","owner":"Unity.Media.Async","meta":{},"id":"method-PlayStream"},{"name":"SeekPosition","tagname":"method","owner":"Unity.Media.Async","meta":{},"id":"method-SeekPosition"},{"name":"Stop","tagname":"method","owner":"Unity.Media.Async","meta":{},"id":"method-Stop"},{"name":"TakeSnapshot","tagname":"method","owner":"Unity.Media.Async","meta":{},"id":"method-TakeSnapshot"}],"event":[],"css_var":[],"css_mixin":[]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":3654,"files":[{"filename":"unity.js","href":"unity.html#Unity-Media-Async"}],"html_meta":{},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/unity.html#Unity-Media-Async' target='_blank'>unity.js</a></div></pre><div class='doc-contents'><p>Invokes all Media API methods asynchronously.</p>\n\n<br>\n\n\n<p>Callback function name and callback identifier are passed to the methods (last arguments) to handle the result object when it is received from unity runtime.</p>\n\n<pre>Usage:\n<br> var myCallbackFn = function(result, id){ <br>  ...//code here your custom functionality to handle the result... <br>}\n<br><a href=\"#!/api/Unity.Media\" rel=\"Unity.Media\" class=\"docClass\">Unity.Media</a>.<b>Async</b>.Stop('myCallbackFn', 'myId').\n<br>or\n<br><a href=\"#!/api/Unity.Media\" rel=\"Unity.Media\" class=\"docClass\">Unity.Media</a>.<b>Async</b>.Play('filePath', 'myCallbackFn', 'myId').\n</pre>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-GetCurrentMedia' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Media.Async'>Unity.Media.Async</span><br/><a href='source/unity.html#Unity-Media-Async-method-GetCurrentMedia' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Media.Async-method-GetCurrentMedia' class='name expandable'>GetCurrentMedia</a>( <span class='pre'>String callbackFunctionName, String callbackId</span> )</div><div class='description'><div class='short'>Gets the currently playing media file metadata, in ASYNC mode. ...</div><div class='long'><p>Gets the currently playing media file metadata, in ASYNC mode.</p>\n\n<br> @version 2.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/information.png\"/> *mock data | windows <img src=\"resources/images/error.png\"/> *mock data</pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n</div></li></ul></div></div></div><div id='method-GetMetadata' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Media.Async'>Unity.Media.Async</span><br/><a href='source/unity.html#Unity-Media-Async-method-GetMetadata' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Media.Async-method-GetMetadata' class='name expandable'>GetMetadata</a>( <span class='pre'>String filePath, String callbackFunctionName, String callbackId</span> )</div><div class='description'><div class='short'>Gets Media metadata, in ASYNC mode. ...</div><div class='long'><p>Gets Media metadata, in ASYNC mode.</p>\n\n<br> @version 2.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/error.png\"/> | windows <img src=\"resources/images/error.png\"/> *mock data</pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>filePath</span> : String<div class='sub-desc'><p>The media file path.</p>\n</div></li><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n</div></li></ul></div></div></div><div id='method-GetSnapshot' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Media.Async'>Unity.Media.Async</span><br/><a href='source/unity.html#Unity-Media-Async-method-GetSnapshot' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Media.Async-method-GetSnapshot' class='name expandable'>GetSnapshot</a>( <span class='pre'>String callbackFunctionName, String callbackId</span> )</div><div class='description'><div class='short'>Opens user interface view to select a picture from the device photos album, in ASYNC mode. ...</div><div class='long'><p>Opens user interface view to select a picture from the device photos album, in ASYNC mode.\nData is provided via the proper event handled by the \"<a href=\"#!/api/Unity.Media-event-onFinishedPickingImage\" rel=\"Unity.Media-event-onFinishedPickingImage\" class=\"docClass\">Unity.Media.onFinishedPickingImage</a>\" method; please, override to handle the event.\nReturned value is \"null\" on synchronous call.</p>\n\n<br> @version 2.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/warning.png\"/> * in progess | windows <img src=\"resources/images/error.png\"/> </pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n</div></li></ul></div></div></div><div id='method-GetState' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Media.Async'>Unity.Media.Async</span><br/><a href='source/unity.html#Unity-Media-Async-method-GetState' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Media.Async-method-GetState' class='name expandable'>GetState</a>( <span class='pre'>String callbackFunctionName, String callbackId</span> )</div><div class='description'><div class='short'>Gets Audio/Movie player state, in ASYNC mode. ...</div><div class='long'><p>Gets Audio/Movie player state, in ASYNC mode.</p>\n\n<br> @version 2.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/> *mock data</pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n</div></li></ul></div></div></div><div id='method-Pause' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Media.Async'>Unity.Media.Async</span><br/><a href='source/unity.html#Unity-Media-Async-method-Pause' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Media.Async-method-Pause' class='name expandable'>Pause</a>( <span class='pre'>String callbackFunctionName, String callbackId</span> )</div><div class='description'><div class='short'>Pauses the current media playing, in ASYNC mode. ...</div><div class='long'><p>Pauses the current media playing, in ASYNC mode.</p>\n\n<br> @version 2.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/> *mock data</pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n</div></li></ul></div></div></div><div id='method-Play' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Media.Async'>Unity.Media.Async</span><br/><a href='source/unity.html#Unity-Media-Async-method-Play' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Media.Async-method-Play' class='name expandable'>Play</a>( <span class='pre'>String filePath, String callbackFunctionName, String callbackId</span> )</div><div class='description'><div class='short'>Starts playing media, in ASYNC mode. ...</div><div class='long'><p>Starts playing media, in ASYNC mode.</p>\n\n<br> @version 2.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/> *mock data</pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>filePath</span> : String<div class='sub-desc'><p>The media file path.</p>\n</div></li><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n</div></li></ul></div></div></div><div id='method-PlayStream' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Media.Async'>Unity.Media.Async</span><br/><a href='source/unity.html#Unity-Media-Async-method-PlayStream' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Media.Async-method-PlayStream' class='name expandable'>PlayStream</a>( <span class='pre'>String url, String callbackFunctionName, String callbackId</span> )</div><div class='description'><div class='short'>Starts playing media, in ASYNC mode. ...</div><div class='long'><p>Starts playing media, in ASYNC mode.</p>\n\n<br> @version 2.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/warning.png\"/> * bug fixing | windows <img src=\"resources/images/error.png\"/> *mock data</pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : String<div class='sub-desc'><p>The media remote URL.</p>\n</div></li><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n</div></li></ul></div></div></div><div id='method-SeekPosition' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Media.Async'>Unity.Media.Async</span><br/><a href='source/unity.html#Unity-Media-Async-method-SeekPosition' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Media.Async-method-SeekPosition' class='name expandable'>SeekPosition</a>( <span class='pre'>long position, String callbackFunctionName, String callbackId</span> )</div><div class='description'><div class='short'>Moves player to the given position in the media, in ASYNC mode. ...</div><div class='long'><p>Moves player to the given position in the media, in ASYNC mode.</p>\n\n<br> @version 2.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/> *mock data</pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>position</span> : long<div class='sub-desc'><p>Index position.</p>\n</div></li><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n</div></li></ul></div></div></div><div id='method-Stop' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Media.Async'>Unity.Media.Async</span><br/><a href='source/unity.html#Unity-Media-Async-method-Stop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Media.Async-method-Stop' class='name expandable'>Stop</a>( <span class='pre'>String callbackFunctionName, String callbackId</span> )</div><div class='description'><div class='short'>Stops the current media playing, in ASYNC mode. ...</div><div class='long'><p>Stops the current media playing, in ASYNC mode.</p>\n\n<br> @version 2.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/> *mock data</pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n</div></li></ul></div></div></div><div id='method-TakeSnapshot' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Media.Async'>Unity.Media.Async</span><br/><a href='source/unity.html#Unity-Media-Async-method-TakeSnapshot' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Media.Async-method-TakeSnapshot' class='name expandable'>TakeSnapshot</a>( <span class='pre'>String callbackFunctionName, String callbackId</span> ) : <a href=\"#!/api/Unity.Media.MediaMetadata\" rel=\"Unity.Media.MediaMetadata\" class=\"docClass\">Unity.Media.MediaMetadata</a></div><div class='description'><div class='short'>Opens user interface view to take a picture using the device camera. ...</div><div class='long'><p>Opens user interface view to take a picture using the device camera.\nData is provided via the proper event handled by the \"<a href=\"#!/api/Unity.Media-event-onFinishedPickingImage\" rel=\"Unity.Media-event-onFinishedPickingImage\" class=\"docClass\">Unity.Media.onFinishedPickingImage</a>\" method; please, override to handle the event.\nReturned value is \"null\" on synchronous call.</p>\n\n<br> @version 2.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/warning.png\"/> * in progess | windows <img src=\"resources/images/error.png\"/> </pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Unity.Media.MediaMetadata\" rel=\"Unity.Media.MediaMetadata\" class=\"docClass\">Unity.Media.MediaMetadata</a></span><div class='sub-desc'><p>Media file metadata taken by the camera.</p>\n</div></li></ul></div></div></div></div></div></div></div>"});