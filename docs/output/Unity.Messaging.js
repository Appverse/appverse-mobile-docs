Ext.data.JsonP.Unity_Messaging({"tagname":"class","name":"Unity.Messaging","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":true,"requires":[],"uses":[],"enum":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Unity.Messaging","members":{"cfg":[],"property":[{"name":"serviceName","tagname":"property","owner":"Unity.Messaging","meta":{},"id":"property-serviceName"}],"method":[{"name":"constructor","tagname":"method","owner":"Unity.Messaging","meta":{},"id":"method-constructor"},{"name":"SendEmail","tagname":"method","owner":"Unity.Messaging","meta":{},"id":"method-SendEmail"},{"name":"SendMessageMMS","tagname":"method","owner":"Unity.Messaging","meta":{},"id":"method-SendMessageMMS"},{"name":"SendMessageSMS","tagname":"method","owner":"Unity.Messaging","meta":{},"id":"method-SendMessageSMS"}],"event":[],"css_var":[],"css_mixin":[]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":3155,"files":[{"filename":"unity.js","href":"unity.html#Unity-Messaging"}],"html_meta":{},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/unity.html#Unity-Messaging' target='_blank'>unity.js</a></div></pre><div class='doc-contents'><p>Singleton class field to access Messaging interface.</p>\n\n<br>This interface provides access to device's messaging and telephone applications.<br>\n\n\n<br> @version 1.0\n\n\n<pre>Usage: <a href=\"#!/api/Unity.Messaging\" rel=\"Unity.Messaging\" class=\"docClass\">Unity.Messaging</a>.&lt;metodName&gt;([params]).<br>Example: <a href=\"#!/api/Unity.Messaging-method-SendEmail\" rel=\"Unity.Messaging-method-SendEmail\" class=\"docClass\">Unity.Messaging.SendEmail</a>(emailData).</pre>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-serviceName' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Messaging'>Unity.Messaging</span><br/><a href='source/unity.html#Unity-Messaging-property-serviceName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Messaging-property-serviceName' class='name expandable'>serviceName</a><span> : String</span></div><div class='description'><div class='short'>Messaging service name (as configured on Platform Service Locator). ...</div><div class='long'><p>Messaging service name (as configured on Platform Service Locator).</p>\n\n<br> @version 1.0\n\n<p>Defaults to: <code>&quot;message&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Messaging'>Unity.Messaging</span><br/><a href='source/unity.html#Unity-Messaging-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Unity.Messaging-method-constructor' class='name expandable'>Unity.Messaging</a>( <span class='pre'></span> ) : <a href=\"#!/api/Unity.Messaging\" rel=\"Unity.Messaging\" class=\"docClass\">Unity.Messaging</a></div><div class='description'><div class='short'>Constructs a new Messaging interface. ...</div><div class='long'><p>Constructs a new Messaging interface.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Unity.Messaging\" rel=\"Unity.Messaging\" class=\"docClass\">Unity.Messaging</a></span><div class='sub-desc'><p>A new Messaging interface.</p>\n</div></li></ul></div></div></div><div id='method-SendEmail' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Messaging'>Unity.Messaging</span><br/><a href='source/unity.html#Unity-Messaging-method-SendEmail' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Messaging-method-SendEmail' class='name expandable'>SendEmail</a>( <span class='pre'>EmailData emailData</span> ) : Boolean</div><div class='description'><div class='short'>Sends an email message.For further information see, EmailData. ...</div><div class='long'><p>Sends an email message.<br/>For further information see, <a href=\"#!/api/Unity.Messaging.EmailData\" rel=\"Unity.Messaging.EmailData\" class=\"docClass\">EmailData</a>.</p>\n\n<br> @version 1.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/> *mock data </pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>emailData</span> : EmailData<div class='sub-desc'><p>The email message data, such as: subject, 'To','Cc','Bcc' addresses, etc.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if email could be send.</p>\n</div></li></ul></div></div></div><div id='method-SendMessageMMS' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Messaging'>Unity.Messaging</span><br/><a href='source/unity.html#Unity-Messaging-method-SendMessageMMS' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Messaging-method-SendMessageMMS' class='name expandable'>SendMessageMMS</a>( <span class='pre'>String phoneNumber, String text, AttachmentData attachment</span> ) : Boolean</div><div class='description'><div class='short'>Sends a multimedia message (MMS). ...</div><div class='long'><p>Sends a multimedia message (MMS).</p>\n\n<br> @version 1.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/error.png\"/> | android <img src=\"resources/images/error.png\"/> | windows <img src=\"resources/images/error.png\"/> *mock data </pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>phoneNumber</span> : String<div class='sub-desc'><p>The phone address to send the message to.</p>\n</div></li><li><span class='pre'>text</span> : String<div class='sub-desc'><p>The message body.</p>\n</div></li><li><span class='pre'>attachment</span> : AttachmentData<div class='sub-desc'><p>Attachament data.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if MMS could be send.</p>\n</div></li></ul></div></div></div><div id='method-SendMessageSMS' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Messaging'>Unity.Messaging</span><br/><a href='source/unity.html#Unity-Messaging-method-SendMessageSMS' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Messaging-method-SendMessageSMS' class='name expandable'>SendMessageSMS</a>( <span class='pre'>String phoneNumber, String text</span> ) : Boolean</div><div class='description'><div class='short'>Sends a text message (SMS). ...</div><div class='long'><p>Sends a text message (SMS).</p>\n\n<br> @version 1.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/> *mock data </pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>phoneNumber</span> : String<div class='sub-desc'><p>The phone address to send the message to.</p>\n</div></li><li><span class='pre'>text</span> : String<div class='sub-desc'><p>The message body.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if SMS could be send.</p>\n</div></li></ul></div></div></div></div></div></div></div>"});