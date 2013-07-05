Ext.data.JsonP.Unity({"tagname":"class","name":"Unity","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":true,"requires":[],"uses":[],"enum":null,"inheritable":null,"inheritdoc":null,"meta":{"author":["Marga Parets maps@gft.com"]},"private":null,"id":"class-Unity","members":{"cfg":[],"property":[{"name":"DOCUMENTS_RESOURCE_URI","tagname":"property","owner":"Unity","meta":{},"id":"property-DOCUMENTS_RESOURCE_URI"},{"name":"REMOTE_RESOURCE_URI","tagname":"property","owner":"Unity","meta":{},"id":"property-REMOTE_RESOURCE_URI"},{"name":"SERVICE_ASYNC_URI","tagname":"property","owner":"Unity","meta":{},"id":"property-SERVICE_ASYNC_URI"},{"name":"SERVICE_URI","tagname":"property","owner":"Unity","meta":{},"id":"property-SERVICE_URI"},{"name":"unescapeNextRequestData","tagname":"property","owner":"Unity","meta":{},"id":"property-unescapeNextRequestData"}],"method":[{"name":"constructor","tagname":"method","owner":"Unity","meta":{},"id":"method-constructor"},{"name":"OnLocalNotificationReceived","tagname":"method","owner":"Unity","meta":{},"id":"method-OnLocalNotificationReceived"},{"name":"OnRegisterForRemoteNotificationsFailure","tagname":"method","owner":"Unity","meta":{},"id":"method-OnRegisterForRemoteNotificationsFailure"},{"name":"OnRegisterForRemoteNotificationsSuccess","tagname":"method","owner":"Unity","meta":{},"id":"method-OnRegisterForRemoteNotificationsSuccess"},{"name":"OnRemoteNotificationReceived","tagname":"method","owner":"Unity","meta":{},"id":"method-OnRemoteNotificationReceived"},{"name":"OnUnRegisterForRemoteNotificationsSuccess","tagname":"method","owner":"Unity","meta":{},"id":"method-OnUnRegisterForRemoteNotificationsSuccess"},{"name":"backButtonListener","tagname":"method","owner":"Unity","meta":{},"id":"method-backButtonListener"},{"name":"backgroundApplicationListener","tagname":"method","owner":"Unity","meta":{},"id":"method-backgroundApplicationListener"},{"name":"foregroundApplicationListener","tagname":"method","owner":"Unity","meta":{},"id":"method-foregroundApplicationListener"},{"name":"getCurrentOrientation","tagname":"method","owner":"Unity","meta":{},"id":"method-getCurrentOrientation"},{"name":"init","tagname":"method","owner":"Unity","meta":{},"id":"method-init"},{"name":"isBackground","tagname":"method","owner":"Unity","meta":{},"id":"method-isBackground"},{"name":"setOrientationChange","tagname":"method","owner":"Unity","meta":{},"id":"method-setOrientationChange"}],"event":[],"css_var":[],"css_mixin":[]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":5,"files":[{"filename":"unity.js","href":"unity.html#Unity"}],"html_meta":{"author":null},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/unity.html#Unity' target='_blank'>unity.js</a></div></pre><div class='doc-contents'><p>This is the global UNITY interface class.</p>\n\n<br>This interface gives singleton access to all Unity Javascript Interfaces (quick access to already instantiated Unity classes).\n\n\n<br> @version 1.0\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-DOCUMENTS_RESOURCE_URI' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity'>Unity</span><br/><a href='source/unity.html#Unity-property-DOCUMENTS_RESOURCE_URI' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity-property-DOCUMENTS_RESOURCE_URI' class='name expandable'>DOCUMENTS_RESOURCE_URI</a><span> : String</span></div><div class='description'><div class='short'>Relative URI to access Unity Resources from Application Documents. ...</div><div class='long'><p>Relative URI to access Unity Resources from Application Documents.</p>\n\n<pre>Default value: '/documents/'.</pre>\n\n\n<br> @version 2.1\n\n</div></div></div><div id='property-REMOTE_RESOURCE_URI' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity'>Unity</span><br/><a href='source/unity.html#Unity-property-REMOTE_RESOURCE_URI' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity-property-REMOTE_RESOURCE_URI' class='name expandable'>REMOTE_RESOURCE_URI</a><span> : String</span></div><div class='description'><div class='short'>Relative URI to access Unity Remote Resources. ...</div><div class='long'><p>Relative URI to access Unity Remote Resources.</p>\n\n<pre>Default value: '/proxy/'.</pre>\n\n\n<br> @version 1.0\n\n</div></div></div><div id='property-SERVICE_ASYNC_URI' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity'>Unity</span><br/><a href='source/unity.html#Unity-property-SERVICE_ASYNC_URI' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity-property-SERVICE_ASYNC_URI' class='name expandable'>SERVICE_ASYNC_URI</a><span> : String</span></div><div class='description'><div class='short'>Relative URI to access Unity Local Services in Asynchronous mode. ...</div><div class='long'><p>Relative URI to access Unity Local Services in Asynchronous mode.</p>\n\n<pre>Default value: '/service-async/'.</pre>\n\n\n<br> @version 3.8\n\n</div></div></div><div id='property-SERVICE_URI' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity'>Unity</span><br/><a href='source/unity.html#Unity-property-SERVICE_URI' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity-property-SERVICE_URI' class='name expandable'>SERVICE_URI</a><span> : String</span></div><div class='description'><div class='short'>Relative URI to access Unity Local Services. ...</div><div class='long'><p>Relative URI to access Unity Local Services.</p>\n\n<pre>Default value: '/service/'.</pre>\n\n\n<br> @version 1.0\n\n</div></div></div><div id='property-unescapeNextRequestData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity'>Unity</span><br/><a href='source/unity.html#Unity-property-unescapeNextRequestData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity-property-unescapeNextRequestData' class='name expandable'>unescapeNextRequestData</a><span> : Boolean</span></div><div class='description'><div class='short'>Boolean to indicate if the next request send to the platform (using any Unity..() call) should unscape or not the dat...</div><div class='long'><p>Boolean to indicate if the next request send to the platform (using any Unity.<API_serviceName>.<API_serviceMethod>() call) should unscape or not the data send.</p>\n\n<br>By default platform will unscape any data send. In some cases, scaped characters (for example, the %20 encoded characters in a URL) need to arrive to the service without being unscaped.\n\n\n<br>Setting this value to false, will send the next platform without replacing escaped characters; you should change value to false if time needed, because the parameter will change to true after making the call.\n\n\n<pre>Default value: true.</pre>\n\n\n<br> @version 4.0\n\n<p>Defaults to: <code>true</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity'>Unity</span><br/><a href='source/unity.html#Unity-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Unity-method-constructor' class='name expandable'>Unity</a>( <span class='pre'></span> ) : <a href=\"#!/api/Unity\" rel=\"Unity\" class=\"docClass\">Unity</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Unity\" rel=\"Unity\" class=\"docClass\">Unity</a></span><div class='sub-desc'><p>A new Unity interface.</p>\n</div></li></ul></div></div></div><div id='method-OnLocalNotificationReceived' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity'>Unity</span><br/><a href='source/unity.html#Unity-method-OnLocalNotificationReceived' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity-method-OnLocalNotificationReceived' class='name expandable'>OnLocalNotificationReceived</a>( <span class='pre'><a href=\"#!/api/Unity.Notification.NotificationData\" rel=\"Unity.Notification.NotificationData\" class=\"docClass\">Unity.Notification.NotificationData</a> notificationData</span> )</div><div class='description'><div class='short'>Applications should override/implement this method to be aware of local notification reception, and should perform th...</div><div class='long'><p>Applications should override/implement this method to be aware of local notification reception, and should perform the desired javascript code on this case.</p>\n\n<br> For further information see, <a href=\"#!/api/Unity.Notification.NotificationData\" rel=\"Unity.Notification.NotificationData\" class=\"docClass\">NotificationData</a>.\n\n\n<br> @version 3.9\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>notificationData</span> : <a href=\"#!/api/Unity.Notification.NotificationData\" rel=\"Unity.Notification.NotificationData\" class=\"docClass\">Unity.Notification.NotificationData</a><div class='sub-desc'><p>The notification data received (visual data and custom provider data)</p>\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> N/A | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/> </pre>\n\n</div></li></ul></div></div></div><div id='method-OnRegisterForRemoteNotificationsFailure' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity'>Unity</span><br/><a href='source/unity.html#Unity-method-OnRegisterForRemoteNotificationsFailure' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity-method-OnRegisterForRemoteNotificationsFailure' class='name expandable'>OnRegisterForRemoteNotificationsFailure</a>( <span class='pre'><a href=\"#!/api/Unity.Notification.RegistrationError\" rel=\"Unity.Notification.RegistrationError\" class=\"docClass\">Unity.Notification.RegistrationError</a> registrationError</span> )</div><div class='description'><div class='short'>Applications should override/implement this method to be aware of a successfully registration for remote notification...</div><div class='long'><p>Applications should override/implement this method to be aware of a successfully registration for remote notifications, and should perform the desired javascript code on this case.</p>\n\n<br> For further information see, <a href=\"#!/api/Unity.Notification.RegistrationError\" rel=\"Unity.Notification.RegistrationError\" class=\"docClass\">RegistrationError</a>.\n\n\n<br> @version 3.9\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>registrationError</span> : <a href=\"#!/api/Unity.Notification.RegistrationError\" rel=\"Unity.Notification.RegistrationError\" class=\"docClass\">Unity.Notification.RegistrationError</a><div class='sub-desc'><p>The registration error data received from the Notifications Service (APNs for iOS or GMC for Android).</p>\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/> </pre>\n\n</div></li></ul></div></div></div><div id='method-OnRegisterForRemoteNotificationsSuccess' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity'>Unity</span><br/><a href='source/unity.html#Unity-method-OnRegisterForRemoteNotificationsSuccess' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity-method-OnRegisterForRemoteNotificationsSuccess' class='name expandable'>OnRegisterForRemoteNotificationsSuccess</a>( <span class='pre'><a href=\"#!/api/Unity.Notification.RegistrationToken\" rel=\"Unity.Notification.RegistrationToken\" class=\"docClass\">Unity.Notification.RegistrationToken</a> registrationToken</span> )</div><div class='description'><div class='short'>Applications should override/implement this method to be aware of a successfully registration for remote notification...</div><div class='long'><p>Applications should override/implement this method to be aware of a successfully registration for remote notifications, and should perform the desired javascript code on this case.</p>\n\n<br> For further information see, <a href=\"#!/api/Unity.Notification.RegistrationToken\" rel=\"Unity.Notification.RegistrationToken\" class=\"docClass\">RegistrationToken</a>.\n\n\n<br> @version 3.9\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>registrationToken</span> : <a href=\"#!/api/Unity.Notification.RegistrationToken\" rel=\"Unity.Notification.RegistrationToken\" class=\"docClass\">Unity.Notification.RegistrationToken</a><div class='sub-desc'><p>The registration token (\"device token\" for iOS or \"registration ID\" for Android) data received from the Notifications Service (APNs for iOS or GMC for Android).</p>\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/> </pre>\n\n</div></li></ul></div></div></div><div id='method-OnRemoteNotificationReceived' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity'>Unity</span><br/><a href='source/unity.html#Unity-method-OnRemoteNotificationReceived' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity-method-OnRemoteNotificationReceived' class='name expandable'>OnRemoteNotificationReceived</a>( <span class='pre'>Unity.Notiticaton.NotificationData notificationData</span> )</div><div class='description'><div class='short'>Applications should override/implement this method to be aware of remote notification arrival, and should perform the...</div><div class='long'><p>Applications should override/implement this method to be aware of remote notification arrival, and should perform the desired javascript code on this case.</p>\n\n<br> For further information see, <a href=\"#!/api/Unity.Notification.NotificationData\" rel=\"Unity.Notification.NotificationData\" class=\"docClass\">NotificationData</a>.\n\n\n<br> @version 3.9\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>notificationData</span> : Unity.Notiticaton.NotificationData<div class='sub-desc'><p>The notification data received (visual data and custom provider data)</p>\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/> </pre>\n\n</div></li></ul></div></div></div><div id='method-OnUnRegisterForRemoteNotificationsSuccess' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity'>Unity</span><br/><a href='source/unity.html#Unity-method-OnUnRegisterForRemoteNotificationsSuccess' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity-method-OnUnRegisterForRemoteNotificationsSuccess' class='name expandable'>OnUnRegisterForRemoteNotificationsSuccess</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Applications should override/implement this method to be aware of a successfully unregistration for remote notificati...</div><div class='long'><p>Applications should override/implement this method to be aware of a successfully unregistration for remote notifications, and should perform the desired javascript code on this case.</p>\n\n<br> @version 4.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/error.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/> </pre>\n\n</div></div></div><div id='method-backButtonListener' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity'>Unity</span><br/><a href='source/unity.html#Unity-method-backButtonListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity-method-backButtonListener' class='name expandable'>backButtonListener</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Applications should override/implement this method to be aware of device physical back button has been pressed, and s...</div><div class='long'><p>Applications should override/implement this method to be aware of device physical back button has been pressed, and should perform the desired javascript code on this case.</p>\n\n<br> @version 3.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/error.png\"/> N/A | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/> </pre>\n\n</div></div></div><div id='method-backgroundApplicationListener' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity'>Unity</span><br/><a href='source/unity.html#Unity-method-backgroundApplicationListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity-method-backgroundApplicationListener' class='name expandable'>backgroundApplicationListener</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Applications should override/implement this method to be aware of application being send to background, and should pe...</div><div class='long'><p>Applications should override/implement this method to be aware of application being send to background, and should perform the desired javascript code on this case.</p>\n\n<br> @version 2.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/> </pre>\n\n</div></div></div><div id='method-foregroundApplicationListener' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity'>Unity</span><br/><a href='source/unity.html#Unity-method-foregroundApplicationListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity-method-foregroundApplicationListener' class='name expandable'>foregroundApplicationListener</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Applications should override/implement this method to be aware of application coming back from background, and should...</div><div class='long'><p>Applications should override/implement this method to be aware of application coming back from background, and should perform the desired javascript code on this case.</p>\n\n<br> @version 2.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/> </pre>\n\n</div></div></div><div id='method-getCurrentOrientation' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity'>Unity</span><br/><a href='source/unity.html#Unity-method-getCurrentOrientation' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity-method-getCurrentOrientation' class='name expandable'>getCurrentOrientation</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Applications should override/implement this method to provide current device orientation javascript stored variable. ...</div><div class='long'><p>Applications should override/implement this method to provide current device orientation javascript stored variable.</p>\n\n<br> @version 1.0\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>Current Device Orientation.</p>\n</div></li></ul></div></div></div><div id='method-init' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity'>Unity</span><br/><a href='source/unity.html#Unity-method-init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity-method-init' class='name expandable'>init</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Initialization function ...</div><div class='long'><p>Initialization function</p>\n</div></div></div><div id='method-isBackground' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity'>Unity</span><br/><a href='source/unity.html#Unity-method-isBackground' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity-method-isBackground' class='name expandable'>isBackground</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Indicates if application is currently in background or not. ...</div><div class='long'><p>Indicates if application is currently in background or not.</p>\n\n<br> @version 2.0\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if application has been set to background.</p>\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/> </pre>\n\n</div></li></ul></div></div></div><div id='method-setOrientationChange' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity'>Unity</span><br/><a href='source/unity.html#Unity-method-setOrientationChange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity-method-setOrientationChange' class='name expandable'>setOrientationChange</a>( <span class='pre'>String orientation, int width, int height</span> )</div><div class='description'><div class='short'>Applications should override this method to implement specific rotation/resizing actions for given orientation, width...</div><div class='long'><p>Applications should override this method to implement specific rotation/resizing actions for given orientation, width and height.</p>\n\n<br> @version 1.0\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>orientation</span> : String<div class='sub-desc'><p>The device current orientation.</p>\n</div></li><li><span class='pre'>width</span> : int<div class='sub-desc'><p>The new width to be set.</p>\n</div></li><li><span class='pre'>height</span> : int<div class='sub-desc'><p>The height width to be set.</p>\n</div></li></ul></div></div></div></div></div></div></div>"});