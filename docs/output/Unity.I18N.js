Ext.data.JsonP.Unity_I18N({"tagname":"class","name":"Unity.I18N","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":true,"requires":[],"uses":[],"enum":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Unity.I18N","members":{"cfg":[],"property":[{"name":"serviceName","tagname":"property","owner":"Unity.I18N","meta":{},"id":"property-serviceName"}],"method":[{"name":"constructor","tagname":"method","owner":"Unity.I18N","meta":{},"id":"method-constructor"},{"name":"GetLocaleSupported","tagname":"method","owner":"Unity.I18N","meta":{},"id":"method-GetLocaleSupported"},{"name":"GetLocaleSupportedDescriptors","tagname":"method","owner":"Unity.I18N","meta":{},"id":"method-GetLocaleSupportedDescriptors"},{"name":"GetResourceLiteral","tagname":"method","owner":"Unity.I18N","meta":{},"id":"method-GetResourceLiteral"},{"name":"GetResourceLiterals","tagname":"method","owner":"Unity.I18N","meta":{},"id":"method-GetResourceLiterals"}],"event":[],"css_var":[],"css_mixin":[]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":3731,"files":[{"filename":"unity.js","href":"unity.html#Unity-I18N"}],"html_meta":{},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/unity.html#Unity-I18N' target='_blank'>unity.js</a></div></pre><div class='doc-contents'><p>Singleton class field to access I18N interface.</p>\n\n<br>This interface provides features to build your application with 'localized' (centralized on external files) and 'internationalized' (for different languages) texts.<br>\n\n\n<br> @version 1.0\n\n\n<pre>Usage: <a href=\"#!/api/Unity.I18N\" rel=\"Unity.I18N\" class=\"docClass\">Unity.I18N</a>.&lt;metodName&gt;([params]).<br>Example: <a href=\"#!/api/Unity.I18N-method-GetResourceLiteral\" rel=\"Unity.I18N-method-GetResourceLiteral\" class=\"docClass\">Unity.I18N.GetResourceLiteral</a>('myKey').</pre>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-serviceName' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.I18N'>Unity.I18N</span><br/><a href='source/unity.html#Unity-I18N-property-serviceName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.I18N-property-serviceName' class='name expandable'>serviceName</a><span> : String</span></div><div class='description'><div class='short'>I18N service name (as configured on Platform Service Locator). ...</div><div class='long'><p>I18N service name (as configured on Platform Service Locator). <br> @version 1.0</p>\n<p>Defaults to: <code>&quot;i18n&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.I18N'>Unity.I18N</span><br/><a href='source/unity.html#Unity-I18N-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Unity.I18N-method-constructor' class='name expandable'>Unity.I18N</a>( <span class='pre'></span> ) : <a href=\"#!/api/Unity.I18N\" rel=\"Unity.I18N\" class=\"docClass\">Unity.I18N</a></div><div class='description'><div class='short'>Constructs a new I18N interface. ...</div><div class='long'><p>Constructs a new I18N interface.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Unity.I18N\" rel=\"Unity.I18N\" class=\"docClass\">Unity.I18N</a></span><div class='sub-desc'><p>A new I18N interface.</p>\n</div></li></ul></div></div></div><div id='method-GetLocaleSupported' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.I18N'>Unity.I18N</span><br/><a href='source/unity.html#Unity-I18N-method-GetLocaleSupported' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.I18N-method-GetLocaleSupported' class='name expandable'>GetLocaleSupported</a>( <span class='pre'></span> ) : Locale[]</div><div class='description'><div class='short'>List of supported locales for the application (the ones configured on the '/app/config/i18n-config.xml' file). ...</div><div class='long'><p>List of supported locales for the application (the ones configured on the '/app/config/i18n-config.xml' file).</p>\n\n<br/>For further information see, <a href=\"#!/api/Unity.I18N.Locale\" rel=\"Unity.I18N.Locale\" class=\"docClass\">Locale</a>.\n\n\n<br> @version 1.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/check.png\"/></pre>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Locale[]</span><div class='sub-desc'><p>List of locales.</p>\n</div></li></ul></div></div></div><div id='method-GetLocaleSupportedDescriptors' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.I18N'>Unity.I18N</span><br/><a href='source/unity.html#Unity-I18N-method-GetLocaleSupportedDescriptors' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.I18N-method-GetLocaleSupportedDescriptors' class='name expandable'>GetLocaleSupportedDescriptors</a>( <span class='pre'></span> ) : String[]</div><div class='description'><div class='short'>List of supported locales for the application (the ones configured on the '/app/config/i18n-config.xml' file). ...</div><div class='long'><p>List of supported locales for the application (the ones configured on the '/app/config/i18n-config.xml' file).</p>\n\n<br/>For further information see, <a href=\"#!/api/Unity.I18N.Locale\" rel=\"Unity.I18N.Locale\" class=\"docClass\">Locale</a>. \n\n\n<br> @version 1.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/check.png\"/> </pre>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String[]</span><div class='sub-desc'><p>List of locales (only locale descriptor string, such as \"en-US\").</p>\n</div></li></ul></div></div></div><div id='method-GetResourceLiteral' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.I18N'>Unity.I18N</span><br/><a href='source/unity.html#Unity-I18N-method-GetResourceLiteral' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.I18N-method-GetResourceLiteral' class='name expandable'>GetResourceLiteral</a>( <span class='pre'>String key, String/Locale locale</span> ) : String</div><div class='description'><div class='short'>Gets the text/message corresponding to the given key and locale. ...</div><div class='long'><p>Gets the text/message corresponding to the given key and locale.</p>\n\n<br/>For further information see, <a href=\"#!/api/Unity.I18N.Locale\" rel=\"Unity.I18N.Locale\" class=\"docClass\">Locale</a>.\n\n\n<br> @version 1.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/check.png\"/> </pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : String<div class='sub-desc'><p>The key to match text.</p>\n</div></li><li><span class='pre'>locale</span> : String/Locale<div class='sub-desc'><p>The full locale object to get localized message, or the locale desciptor (\"language\" or \"language-country\" two-letters ISO codes.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>Localized text.</p>\n</div></li></ul></div></div></div><div id='method-GetResourceLiterals' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.I18N'>Unity.I18N</span><br/><a href='source/unity.html#Unity-I18N-method-GetResourceLiterals' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.I18N-method-GetResourceLiterals' class='name expandable'>GetResourceLiterals</a>( <span class='pre'>String/Locale locale</span> ) : ResourceLiteralDictionary</div><div class='description'><div class='short'>Gets the full application configured literals (key/message pairs) corresponding to the given locale. ...</div><div class='long'><p>Gets the full application configured literals (key/message pairs) corresponding to the given locale.</p>\n\n<br/>For further information see, <a href=\"#!/api/Unity.I18N.Locale\" rel=\"Unity.I18N.Locale\" class=\"docClass\">Locale</a> and <a href=\"#!/api/Unity.I18N.ResourceLiteralDictionary\" rel=\"Unity.I18N.ResourceLiteralDictionary\" class=\"docClass\">ResourceLiteralDictionary</a>.\n\n\n<br> @version 3.2 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/check.png\"/></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>locale</span> : String/Locale<div class='sub-desc'><p>The full locale object to get localized message, or the locale desciptor (\"language\" or \"language-country\" two-letters ISO codes.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>ResourceLiteralDictionary</span><div class='sub-desc'><p>Localized texts in the form of an object (you could get the value of a keyed literal using <b>resourceLiteralDictionary.MY_KEY</b> or <b>resourceLiteralDictionary[\"MY_KEY\"]</b>).</p>\n</div></li></ul></div></div></div></div></div></div></div>"});