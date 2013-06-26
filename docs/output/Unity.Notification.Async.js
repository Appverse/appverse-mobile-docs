Ext.data.JsonP.Unity_Notification_Async({"tagname":"class","name":"Unity.Notification.Async","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Unity.Notification.Async","members":{"cfg":[],"property":[],"method":[{"name":"IsNotifyActivityRunning","tagname":"method","owner":"Unity.Notification.Async","meta":{},"id":"method-IsNotifyActivityRunning"},{"name":"IsNotifyLoadingRunning","tagname":"method","owner":"Unity.Notification.Async","meta":{},"id":"method-IsNotifyLoadingRunning"},{"name":"StartNotifyActionSheet","tagname":"method","owner":"Unity.Notification.Async","meta":{},"id":"method-StartNotifyActionSheet"},{"name":"StartNotifyActivity","tagname":"method","owner":"Unity.Notification.Async","meta":{},"id":"method-StartNotifyActivity"},{"name":"StartNotifyAlert","tagname":"method","owner":"Unity.Notification.Async","meta":{},"id":"method-StartNotifyAlert"},{"name":"StartNotifyBeep","tagname":"method","owner":"Unity.Notification.Async","meta":{},"id":"method-StartNotifyBeep"},{"name":"StartNotifyBlink","tagname":"method","owner":"Unity.Notification.Async","meta":{},"id":"method-StartNotifyBlink"},{"name":"StartNotifyLoading","tagname":"method","owner":"Unity.Notification.Async","meta":{},"id":"method-StartNotifyLoading"},{"name":"StartNotifyVibrate","tagname":"method","owner":"Unity.Notification.Async","meta":{},"id":"method-StartNotifyVibrate"},{"name":"StopNotifyActivity","tagname":"method","owner":"Unity.Notification.Async","meta":{},"id":"method-StopNotifyActivity"},{"name":"StopNotifyAlert","tagname":"method","owner":"Unity.Notification.Async","meta":{},"id":"method-StopNotifyAlert"},{"name":"StopNotifyBeep","tagname":"method","owner":"Unity.Notification.Async","meta":{},"id":"method-StopNotifyBeep"},{"name":"StopNotifyBlink","tagname":"method","owner":"Unity.Notification.Async","meta":{},"id":"method-StopNotifyBlink"},{"name":"StopNotifyLoading","tagname":"method","owner":"Unity.Notification.Async","meta":{},"id":"method-StopNotifyLoading"},{"name":"StopNotifyVibrate","tagname":"method","owner":"Unity.Notification.Async","meta":{},"id":"method-StopNotifyVibrate"},{"name":"UpdateNotifyLoading","tagname":"method","owner":"Unity.Notification.Async","meta":{},"id":"method-UpdateNotifyLoading"}],"event":[],"css_var":[],"css_mixin":[]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":2487,"files":[{"filename":"unity.js","href":"unity.html#Unity-Notification-Async"}],"html_meta":{},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/unity.html#Unity-Notification-Async' target='_blank'>unity.js</a></div></pre><div class='doc-contents'><p>Invokes all Notification API methods asynchronously.</p>\n\n<br>\n\n\n<p>Callback function name and callback identifier are passed to the methods (last arguments) to handle the result object when it is received from unity runtime.</p>\n\n<pre>Usage:\n<br> var myCallbackFn = function(result, id){ <br>  ...//code here your custom functionality to handle the result... <br>}\n<br><a href=\"#!/api/Unity.Notification\" rel=\"Unity.Notification\" class=\"docClass\">Unity.Notification</a>.<b>Async</b>.StartNotifyActivity('myCallbackFn', 'myId').\n<br>or\n<br><a href=\"#!/api/Unity.Notification\" rel=\"Unity.Notification\" class=\"docClass\">Unity.Notification</a>.<b>Async</b>.StartNotifyLoading('loading text', 'myCallbackFn', 'myId').\n</pre>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-IsNotifyActivityRunning' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Notification.Async'>Unity.Notification.Async</span><br/><a href='source/unity.html#Unity-Notification-Async-method-IsNotifyActivityRunning' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Notification.Async-method-IsNotifyActivityRunning' class='name expandable'>IsNotifyActivityRunning</a>( <span class='pre'>String callbackFunctionName, String callbackId</span> )</div><div class='description'><div class='short'>Checks if activity indicator animation is started, in ASYNC mode. ...</div><div class='long'><p>Checks if activity indicator animation is started, in ASYNC mode.</p>\n\n<br> @version 2.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/check.png\"/> </pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n</div></li></ul></div></div></div><div id='method-IsNotifyLoadingRunning' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Notification.Async'>Unity.Notification.Async</span><br/><a href='source/unity.html#Unity-Notification-Async-method-IsNotifyLoadingRunning' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Notification.Async-method-IsNotifyLoadingRunning' class='name expandable'>IsNotifyLoadingRunning</a>( <span class='pre'>String callbackFunctionName, String callbackId</span> )</div><div class='description'><div class='short'>Checks if progress indicator animation is started, in ASYNC mode. ...</div><div class='long'><p>Checks if progress indicator animation is started, in ASYNC mode.</p>\n\n<br> @version 2.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/check.png\"/> </pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n</div></li></ul></div></div></div><div id='method-StartNotifyActionSheet' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Notification.Async'>Unity.Notification.Async</span><br/><a href='source/unity.html#Unity-Notification-Async-method-StartNotifyActionSheet' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Notification.Async-method-StartNotifyActionSheet' class='name expandable'>StartNotifyActionSheet</a>( <span class='pre'>String title, String[] buttons, String[] jsCallbackFunctions, String callbackFunctionName, String callbackId</span> )</div><div class='description'><div class='short'>Shows an action sheet, in ASYNC mode. ...</div><div class='long'><p>Shows an action sheet, in ASYNC mode.</p>\n\n<br> @version 2.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/> </pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>title</span> : String<div class='sub-desc'><p>The title to be displayed on the action sheet.</p>\n</div></li><li><span class='pre'>buttons</span> : String[]<div class='sub-desc'><p>Array of button texts to be displayed. First index button is the \"cancel\" button, default button.</p>\n</div></li><li><span class='pre'>jsCallbackFunctions</span> : String[]<div class='sub-desc'><p>The callback javascript functions as string texts for each of the given buttons. Empty string if no action is required for a button.</p>\n</div></li><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n</div></li></ul></div></div></div><div id='method-StartNotifyActivity' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Notification.Async'>Unity.Notification.Async</span><br/><a href='source/unity.html#Unity-Notification-Async-method-StartNotifyActivity' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Notification.Async-method-StartNotifyActivity' class='name expandable'>StartNotifyActivity</a>( <span class='pre'>String callbackFunctionName, String callbackId</span> )</div><div class='description'><div class='short'>Shows and starts the activity indicator animation, in ASYNC mode. ...</div><div class='long'><p>Shows and starts the activity indicator animation, in ASYNC mode.</p>\n\n<br> @version 2.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/check.png\"/> </pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n</div></li></ul></div></div></div><div id='method-StartNotifyAlert' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Notification.Async'>Unity.Notification.Async</span><br/><a href='source/unity.html#Unity-Notification-Async-method-StartNotifyAlert' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Notification.Async-method-StartNotifyAlert' class='name expandable'>StartNotifyAlert</a>( <span class='pre'>String message, String title, String buttonText, String callbackFunctionName, String callbackId</span> )</div><div class='description'><div class='short'>Starts an alert notification, in ASYNC mode. ...</div><div class='long'><p>Starts an alert notification, in ASYNC mode.</p>\n\n<br> @version 2.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/check.png\"/> </pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>message</span> : String<div class='sub-desc'><p>The alert message to be displayed.</p>\n</div></li><li><span class='pre'>title</span> : String<div class='sub-desc'><p>The alert title to be displayed.</p>\n</div></li><li><span class='pre'>buttonText</span> : String<div class='sub-desc'><p>The accept button text to be displayed.</p>\n</div></li><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n</div></li></ul></div></div></div><div id='method-StartNotifyBeep' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Notification.Async'>Unity.Notification.Async</span><br/><a href='source/unity.html#Unity-Notification-Async-method-StartNotifyBeep' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Notification.Async-method-StartNotifyBeep' class='name expandable'>StartNotifyBeep</a>( <span class='pre'>String callbackFunctionName, String callbackId</span> )</div><div class='description'><div class='short'>Starts a beep notification, in ASYNC mode. ...</div><div class='long'><p>Starts a beep notification, in ASYNC mode.</p>\n\n<br> @version 2.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/check.png\"/> </pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n</div></li></ul></div></div></div><div id='method-StartNotifyBlink' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Notification.Async'>Unity.Notification.Async</span><br/><a href='source/unity.html#Unity-Notification-Async-method-StartNotifyBlink' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Notification.Async-method-StartNotifyBlink' class='name expandable'>StartNotifyBlink</a>( <span class='pre'>String callbackFunctionName, String callbackId</span> )</div><div class='description'><div class='short'>Starts a blink notification, in ASYNC mode. ...</div><div class='long'><p>Starts a blink notification, in ASYNC mode.</p>\n\n<br> @version 2.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/error.png\"/> | android <img src=\"resources/images/error.png\"/> | windows <img src=\"resources/images/error.png\"/> </pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n</div></li></ul></div></div></div><div id='method-StartNotifyLoading' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Notification.Async'>Unity.Notification.Async</span><br/><a href='source/unity.html#Unity-Notification-Async-method-StartNotifyLoading' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Notification.Async-method-StartNotifyLoading' class='name expandable'>StartNotifyLoading</a>( <span class='pre'>String callbackFunctionName, String callbackId</span> )</div><div class='description'><div class='short'>Shows and starts the progress indicator animation, in ASYNC mode. ...</div><div class='long'><p>Shows and starts the progress indicator animation, in ASYNC mode.</p>\n\n<br> @version 2.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/warning.png\"/> | windows <img src=\"resources/images/check.png\"/> \n<br><br><img src=\"resources/images/warning.png\"/> Showing the native loading window in <b>Android</b> is currently sending the application to background.\n<br>This means that the platform server (Unity) is no available till application comes to foreground again.\n<br>But application could not wake up itself to foreground from javascript code.\n<br>So, we strongly recommend you to do not use this function till we solve this problem from platform side.\n<br>Use HTML5/JS/CSS3 loading overlays instead.\n</pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n</div></li></ul></div></div></div><div id='method-StartNotifyVibrate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Notification.Async'>Unity.Notification.Async</span><br/><a href='source/unity.html#Unity-Notification-Async-method-StartNotifyVibrate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Notification.Async-method-StartNotifyVibrate' class='name expandable'>StartNotifyVibrate</a>( <span class='pre'>String callbackFunctionName, String callbackId</span> )</div><div class='description'><div class='short'>Starts a vibration notification, in ASYNC mode. ...</div><div class='long'><p>Starts a vibration notification, in ASYNC mode.</p>\n\n<br> @version 2.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/check.png\"/> *mock data</pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n</div></li></ul></div></div></div><div id='method-StopNotifyActivity' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Notification.Async'>Unity.Notification.Async</span><br/><a href='source/unity.html#Unity-Notification-Async-method-StopNotifyActivity' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Notification.Async-method-StopNotifyActivity' class='name expandable'>StopNotifyActivity</a>( <span class='pre'>String callbackFunctionName, String callbackId</span> )</div><div class='description'><div class='short'>Stops and hides the activity indicator animation, in ASYNC mode. ...</div><div class='long'><p>Stops and hides the activity indicator animation, in ASYNC mode.</p>\n\n<br> @version 2.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/check.png\"/> </pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n</div></li></ul></div></div></div><div id='method-StopNotifyAlert' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Notification.Async'>Unity.Notification.Async</span><br/><a href='source/unity.html#Unity-Notification-Async-method-StopNotifyAlert' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Notification.Async-method-StopNotifyAlert' class='name expandable'>StopNotifyAlert</a>( <span class='pre'>String callbackFunctionName, String callbackId</span> )</div><div class='description'><div class='short'>Stops an alert notification, in ASYNC mode. ...</div><div class='long'><p>Stops an alert notification, in ASYNC mode.</p>\n\n<br> @version 2.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/check.png\"/> </pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n</div></li></ul></div></div></div><div id='method-StopNotifyBeep' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Notification.Async'>Unity.Notification.Async</span><br/><a href='source/unity.html#Unity-Notification-Async-method-StopNotifyBeep' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Notification.Async-method-StopNotifyBeep' class='name expandable'>StopNotifyBeep</a>( <span class='pre'>String callbackFunctionName, String callbackId</span> )</div><div class='description'><div class='short'>Stops the current beep notification, in ASYNC mode. ...</div><div class='long'><p>Stops the current beep notification, in ASYNC mode.</p>\n\n<br> @version 2.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/check.png\"/> </pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n</div></li></ul></div></div></div><div id='method-StopNotifyBlink' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Notification.Async'>Unity.Notification.Async</span><br/><a href='source/unity.html#Unity-Notification-Async-method-StopNotifyBlink' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Notification.Async-method-StopNotifyBlink' class='name expandable'>StopNotifyBlink</a>( <span class='pre'>String callbackFunctionName, String callbackId</span> )</div><div class='description'><div class='short'>Stops the current blink notification, in ASYNC mode. ...</div><div class='long'><p>Stops the current blink notification, in ASYNC mode.</p>\n\n<br> @version 2.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/error.png\"/> | android <img src=\"resources/images/error.png\"/> | windows <img src=\"resources/images/error.png\"/> </pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n</div></li></ul></div></div></div><div id='method-StopNotifyLoading' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Notification.Async'>Unity.Notification.Async</span><br/><a href='source/unity.html#Unity-Notification-Async-method-StopNotifyLoading' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Notification.Async-method-StopNotifyLoading' class='name expandable'>StopNotifyLoading</a>( <span class='pre'>String callbackFunctionName, String callbackId</span> )</div><div class='description'><div class='short'>Stops the current progress indicator animation, in ASYNC mode. ...</div><div class='long'><p>Stops the current progress indicator animation, in ASYNC mode.</p>\n\n<br> @version 2.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/check.png\"/> </pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n</div></li></ul></div></div></div><div id='method-StopNotifyVibrate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Notification.Async'>Unity.Notification.Async</span><br/><a href='source/unity.html#Unity-Notification-Async-method-StopNotifyVibrate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Notification.Async-method-StopNotifyVibrate' class='name expandable'>StopNotifyVibrate</a>( <span class='pre'>String callbackFunctionName, String callbackId</span> )</div><div class='description'><div class='short'>Stops the current vibration notification, in ASYNC mode. ...</div><div class='long'><p>Stops the current vibration notification, in ASYNC mode.</p>\n\n<br> @version 2.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/check.png\"/> *mock data</pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n</div></li></ul></div></div></div><div id='method-UpdateNotifyLoading' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Notification.Async'>Unity.Notification.Async</span><br/><a href='source/unity.html#Unity-Notification-Async-method-UpdateNotifyLoading' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Notification.Async-method-UpdateNotifyLoading' class='name expandable'>UpdateNotifyLoading</a>( <span class='pre'>float progress, String callbackFunctionName, String callbackId</span> )</div><div class='description'><div class='short'>Updates the progress indicator animation, in ASYNC mode. ...</div><div class='long'><p>Updates the progress indicator animation, in ASYNC mode.</p>\n\n<br> @version 2.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/check.png\"/> </pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>progress</span> : float<div class='sub-desc'><p>The current progress; values between 0.0 and 1.0 (completed).</p>\n</div></li><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n</div></li></ul></div></div></div></div></div></div></div>"});