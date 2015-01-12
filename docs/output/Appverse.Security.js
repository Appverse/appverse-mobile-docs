Ext.data.JsonP.Appverse_Security({"tagname":"class","name":"Appverse.Security","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":true,"requires":[],"uses":[],"enum":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Appverse.Security","members":{"cfg":[],"property":[{"name":"serviceName","tagname":"property","owner":"Appverse.Security","meta":{},"id":"property-serviceName"}],"method":[{"name":"constructor","tagname":"method","owner":"Appverse.Security","meta":{},"id":"method-constructor"},{"name":"GetStoredKeyValuePair","tagname":"method","owner":"Appverse.Security","meta":{},"id":"method-GetStoredKeyValuePair"},{"name":"GetStoredKeyValuePairs","tagname":"method","owner":"Appverse.Security","meta":{},"id":"method-GetStoredKeyValuePairs"},{"name":"IsDeviceModified","tagname":"method","owner":"Appverse.Security","meta":{},"id":"method-IsDeviceModified"},{"name":"RemoveStoredKeyValuePair","tagname":"method","owner":"Appverse.Security","meta":{},"id":"method-RemoveStoredKeyValuePair"},{"name":"RemoveStoredKeyValuePairs","tagname":"method","owner":"Appverse.Security","meta":{},"id":"method-RemoveStoredKeyValuePairs"},{"name":"StoreKeyValuePair","tagname":"method","owner":"Appverse.Security","meta":{},"id":"method-StoreKeyValuePair"},{"name":"StoreKeyValuePairs","tagname":"method","owner":"Appverse.Security","meta":{},"id":"method-StoreKeyValuePairs"}],"event":[],"css_var":[],"css_mixin":[]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":4808,"files":[{"filename":"appverse.js","href":"appverse.html#Appverse-Security"}],"html_meta":{},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/appverse.html#Appverse-Security' target='_blank'>appverse.js</a></div></pre><div class='doc-contents'><p>Singleton class field to access Security interface.</p>\n\n<br>This interface provides features to check the device security integrity.<br>\n\n\n<br> @version 3.7\n\n\n<pre>Usage: <a href=\"#!/api/Appverse.Security\" rel=\"Appverse.Security\" class=\"docClass\">Appverse.Security</a>.&lt;metodName&gt;([params]).<br>Example: <a href=\"#!/api/Appverse.Security-method-IsDeviceModified\" rel=\"Appverse.Security-method-IsDeviceModified\" class=\"docClass\">Appverse.Security.IsDeviceModified</a>().</pre>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-serviceName' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Security'>Appverse.Security</span><br/><a href='source/appverse.html#Appverse-Security-property-serviceName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.Security-property-serviceName' class='name expandable'>serviceName</a><span> : String</span></div><div class='description'><div class='short'>Security service name (as configured on Platform Service Locator). ...</div><div class='long'><p>Security service name (as configured on Platform Service Locator). <br> @version 3.7</p>\n<p>Defaults to: <code>&quot;security&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Security'>Appverse.Security</span><br/><a href='source/appverse.html#Appverse-Security-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Appverse.Security-method-constructor' class='name expandable'>Appverse.Security</a>( <span class='pre'></span> ) : <a href=\"#!/api/Appverse.Security\" rel=\"Appverse.Security\" class=\"docClass\">Appverse.Security</a></div><div class='description'><div class='short'>Constructs a new Security interface. ...</div><div class='long'><p>Constructs a new Security interface.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Appverse.Security\" rel=\"Appverse.Security\" class=\"docClass\">Appverse.Security</a></span><div class='sub-desc'><p>A new Security interface.</p>\n</div></li></ul></div></div></div><div id='method-GetStoredKeyValuePair' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Security'>Appverse.Security</span><br/><a href='source/appverse.html#Appverse-Security-method-GetStoredKeyValuePair' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.Security-method-GetStoredKeyValuePair' class='name expandable'>GetStoredKeyValuePair</a>( <span class='pre'>String key</span> )</div><div class='description'><div class='short'>Returns a previously stored key/value pair from the device local secure storage. ...</div><div class='long'><p>Returns a previously stored key/value pair from the device local secure storage.</p>\n\n<br> Returned data should be handled by overriding the corresponding Platform Listeners <a href=\"#!/api/Appverse-method-OnKeyValuePairsFound\" rel=\"Appverse-method-OnKeyValuePairsFound\" class=\"docClass\">Appverse.OnKeyValuePairsFound</a>\n\n\n<br> @version 4.2\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : String<div class='sub-desc'><p>Name of the key to be returned</p>\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/></pre>\n\n</div></li></ul></div></div></div><div id='method-GetStoredKeyValuePairs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Security'>Appverse.Security</span><br/><a href='source/appverse.html#Appverse-Security-method-GetStoredKeyValuePairs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.Security-method-GetStoredKeyValuePairs' class='name expandable'>GetStoredKeyValuePairs</a>( <span class='pre'>String[] keys</span> )</div><div class='description'><div class='short'>Returns a list of previously stored key/value pairs from the device local secure storage. ...</div><div class='long'><p>Returns a list of previously stored key/value pairs from the device local secure storage.</p>\n\n<br> Returned data should be handled by overriding the corresponding Platform Listeners <a href=\"#!/api/Appverse-method-OnKeyValuePairsFound\" rel=\"Appverse-method-OnKeyValuePairsFound\" class=\"docClass\">Appverse.OnKeyValuePairsFound</a>\n\n\n<br> @version 4.2\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>keys</span> : String[]<div class='sub-desc'><p>Array of Strings containing the keys to be returned</p>\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/></pre>\n\n</div></li></ul></div></div></div><div id='method-IsDeviceModified' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Security'>Appverse.Security</span><br/><a href='source/appverse.html#Appverse-Security-method-IsDeviceModified' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.Security-method-IsDeviceModified' class='name expandable'>IsDeviceModified</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Checks if the device has been modified. ...</div><div class='long'><p>Checks if the device has been modified.</p>\n\n<br> @version 3.7 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/> *mock data </pre>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if the device is modified.</p>\n</div></li></ul></div></div></div><div id='method-RemoveStoredKeyValuePair' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Security'>Appverse.Security</span><br/><a href='source/appverse.html#Appverse-Security-method-RemoveStoredKeyValuePair' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.Security-method-RemoveStoredKeyValuePair' class='name expandable'>RemoveStoredKeyValuePair</a>( <span class='pre'>String key</span> )</div><div class='description'><div class='short'>Removes - if already exists - a given key/value pair from the device local secure storage\n\n Returned data should be h...</div><div class='long'><p>Removes - if already exists - a given key/value pair from the device local secure storage</p>\n\n<br> Returned data should be handled by overriding the corresponding Platform Listeners <a href=\"#!/api/Appverse-method-OnKeyValuePairsRemoveCompleted\" rel=\"Appverse-method-OnKeyValuePairsRemoveCompleted\" class=\"docClass\">Appverse.OnKeyValuePairsRemoveCompleted</a>\n\n\n<br> @version 4.2\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : String<div class='sub-desc'><p>Name of the key to be removed</p>\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/></pre>\n\n</div></li></ul></div></div></div><div id='method-RemoveStoredKeyValuePairs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Security'>Appverse.Security</span><br/><a href='source/appverse.html#Appverse-Security-method-RemoveStoredKeyValuePairs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.Security-method-RemoveStoredKeyValuePairs' class='name expandable'>RemoveStoredKeyValuePairs</a>( <span class='pre'>String[] keys</span> )</div><div class='description'><div class='short'>Removes - if already exists - a given list of key/value pairs from the device local secure storage\n\n Returned data sh...</div><div class='long'><p>Removes - if already exists - a given list of key/value pairs from the device local secure storage</p>\n\n<br> Returned data should be handled by overriding the corresponding Platform Listeners <a href=\"#!/api/Appverse-method-OnKeyValuePairsRemoveCompleted\" rel=\"Appverse-method-OnKeyValuePairsRemoveCompleted\" class=\"docClass\">Appverse.OnKeyValuePairsRemoveCompleted</a>\n\n\n<br> @version 4.2\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>keys</span> : String[]<div class='sub-desc'><p>Array of Strings containing the keys to be removed</p>\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/></pre>\n\n</div></li></ul></div></div></div><div id='method-StoreKeyValuePair' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Security'>Appverse.Security</span><br/><a href='source/appverse.html#Appverse-Security-method-StoreKeyValuePair' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.Security-method-StoreKeyValuePair' class='name expandable'>StoreKeyValuePair</a>( <span class='pre'><a href=\"#!/api/Appverse.Security.KeyPair\" rel=\"Appverse.Security.KeyPair\" class=\"docClass\">Appverse.Security.KeyPair</a> keyPair</span> )</div><div class='description'><div class='short'>Adds or updates  - if already exists - a given key/value pair into the device local secure storage. ...</div><div class='long'><p>Adds or updates  - if already exists - a given key/value pair into the device local secure storage.</p>\n\n<br> Returned data should be handled by overriding the corresponding Platform Listeners <a href=\"#!/api/Appverse-method-OnKeyValuePairsStoreCompleted\" rel=\"Appverse-method-OnKeyValuePairsStoreCompleted\" class=\"docClass\">Appverse.OnKeyValuePairsStoreCompleted</a>\n\n\n<br> @version 4.2\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>keyPair</span> : <a href=\"#!/api/Appverse.Security.KeyPair\" rel=\"Appverse.Security.KeyPair\" class=\"docClass\">Appverse.Security.KeyPair</a><div class='sub-desc'><p>A key/value pair to store</p>\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/></pre>\n\n</div></li></ul></div></div></div><div id='method-StoreKeyValuePairs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Security'>Appverse.Security</span><br/><a href='source/appverse.html#Appverse-Security-method-StoreKeyValuePairs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.Security-method-StoreKeyValuePairs' class='name expandable'>StoreKeyValuePairs</a>( <span class='pre'><a href=\"#!/api/Appverse.Security.KeyPair\" rel=\"Appverse.Security.KeyPair\" class=\"docClass\">Appverse.Security.KeyPair</a>[] keyPair</span> )</div><div class='description'><div class='short'>Adds or updates - if already exists - a given list of key/value pairs into/to the device local secure storage. ...</div><div class='long'><p>Adds or updates - if already exists - a given list of key/value pairs into/to the device local secure storage.</p>\n\n<br> Returned data should be handled by overriding the corresponding Platform Listeners <a href=\"#!/api/Appverse-method-OnKeyValuePairsStoreCompleted\" rel=\"Appverse-method-OnKeyValuePairsStoreCompleted\" class=\"docClass\">Appverse.OnKeyValuePairsStoreCompleted</a>\n\n\n<br> @version 4.2\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>keyPair</span> : <a href=\"#!/api/Appverse.Security.KeyPair\" rel=\"Appverse.Security.KeyPair\" class=\"docClass\">Appverse.Security.KeyPair</a>[]<div class='sub-desc'><p>A list of key/value pairs to store</p>\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/></pre>\n\n</div></li></ul></div></div></div></div></div></div></div>"});