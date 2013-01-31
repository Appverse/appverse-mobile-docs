Ext.data.JsonP.Unity_Net({"tagname":"class","name":"Unity.Net","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":true,"requires":[],"uses":[],"enum":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Unity.Net","members":{"cfg":[],"property":[{"name":"NETWORKTYPE_25G","tagname":"property","owner":"Unity.Net","meta":{},"id":"property-NETWORKTYPE_25G"},{"name":"NETWORKTYPE_2G","tagname":"property","owner":"Unity.Net","meta":{},"id":"property-NETWORKTYPE_2G"},{"name":"NETWORKTYPE_3G","tagname":"property","owner":"Unity.Net","meta":{},"id":"property-NETWORKTYPE_3G"},{"name":"NETWORKTYPE_CABLE","tagname":"property","owner":"Unity.Net","meta":{},"id":"property-NETWORKTYPE_CABLE"},{"name":"NETWORKTYPE_GSM","tagname":"property","owner":"Unity.Net","meta":{},"id":"property-NETWORKTYPE_GSM"},{"name":"NETWORKTYPE_UNKNOWN","tagname":"property","owner":"Unity.Net","meta":{},"id":"property-NETWORKTYPE_UNKNOWN"},{"name":"NETWORKTYPE_WIFI","tagname":"property","owner":"Unity.Net","meta":{},"id":"property-NETWORKTYPE_WIFI"},{"name":"serviceName","tagname":"property","owner":"Unity.Net","meta":{},"id":"property-serviceName"}],"method":[{"name":"constructor","tagname":"method","owner":"Unity.Net","meta":{},"id":"method-constructor"},{"name":"DownloadFile","tagname":"method","owner":"Unity.Net","meta":{},"id":"method-DownloadFile"},{"name":"GetNetworkTypeReachable","tagname":"method","owner":"Unity.Net","meta":{},"id":"method-GetNetworkTypeReachable"},{"name":"GetNetworkTypeReachableList","tagname":"method","owner":"Unity.Net","meta":{},"id":"method-GetNetworkTypeReachableList"},{"name":"GetNetworkTypeSupported","tagname":"method","owner":"Unity.Net","meta":{},"id":"method-GetNetworkTypeSupported"},{"name":"IsNetworkReachable","tagname":"method","owner":"Unity.Net","meta":{},"id":"method-IsNetworkReachable"},{"name":"OpenBrowser","tagname":"method","owner":"Unity.Net","meta":{},"id":"method-OpenBrowser"},{"name":"ShowHtml","tagname":"method","owner":"Unity.Net","meta":{},"id":"method-ShowHtml"}],"event":[],"css_var":[],"css_mixin":[]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":232,"files":[{"filename":"unity.js","href":"unity.html#Unity-Net"}],"html_meta":{},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/unity.html#Unity-Net' target='_blank'>unity.js</a></div></pre><div class='doc-contents'><p>Singleton class field to access Net interface.</p>\n\n<br>This interface gives access to device cellular and WIFI connection information.<br>\n\n\n<pre>Usage: <a href=\"#!/api/Unity.Net\" rel=\"Unity.Net\" class=\"docClass\">Unity.Net</a>.&lt;metodName&gt;([params]).<br>Example: <a href=\"#!/api/Unity.Net-method-IsNetworkReachable\" rel=\"Unity.Net-method-IsNetworkReachable\" class=\"docClass\">Unity.Net.IsNetworkReachable</a>('gft.com').</pre>\n\n\n<br>Each method could be called Asynchrnously by doing:.<br>\n\n\n<pre>Usage: <a href=\"#!/api/Unity.Net\" rel=\"Unity.Net\" class=\"docClass\">Unity.Net</a>.<b>Async</b>.&lt;metodName&gt;([params]).<br>Example: <a href=\"#!/api/Unity.Net\" rel=\"Unity.Net\" class=\"docClass\">Unity.Net</a>.<b>Async</b>.IsNetworkReachable('gft.com').</pre>\n\n\n<br> @version 1.0\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-NETWORKTYPE_25G' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Net'>Unity.Net</span><br/><a href='source/unity.html#Unity-Net-property-NETWORKTYPE_25G' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Net-property-NETWORKTYPE_25G' class='name expandable'>NETWORKTYPE_25G</a><span> : int</span></div><div class='description'><div class='short'>Network Type for 25G Carrier. ...</div><div class='long'><p>Network Type for 25G Carrier.</p>\n\n<br> @version 1.0\n\n</div></div></div><div id='property-NETWORKTYPE_2G' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Net'>Unity.Net</span><br/><a href='source/unity.html#Unity-Net-property-NETWORKTYPE_2G' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Net-property-NETWORKTYPE_2G' class='name expandable'>NETWORKTYPE_2G</a><span> : int</span></div><div class='description'><div class='short'>Network Type for 2G Carrier. ...</div><div class='long'><p>Network Type for 2G Carrier.</p>\n\n<br> @version 1.0\n\n</div></div></div><div id='property-NETWORKTYPE_3G' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Net'>Unity.Net</span><br/><a href='source/unity.html#Unity-Net-property-NETWORKTYPE_3G' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Net-property-NETWORKTYPE_3G' class='name expandable'>NETWORKTYPE_3G</a><span> : int</span></div><div class='description'><div class='short'>Network Type for 3G Carrier. ...</div><div class='long'><p>Network Type for 3G Carrier.</p>\n\n<br> @version 1.0\n\n</div></div></div><div id='property-NETWORKTYPE_CABLE' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Net'>Unity.Net</span><br/><a href='source/unity.html#Unity-Net-property-NETWORKTYPE_CABLE' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Net-property-NETWORKTYPE_CABLE' class='name expandable'>NETWORKTYPE_CABLE</a><span> : int</span></div><div class='description'><div class='short'>Network Type for Cable. ...</div><div class='long'><p>Network Type for Cable.</p>\n\n<br> @version 1.0\n\n</div></div></div><div id='property-NETWORKTYPE_GSM' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Net'>Unity.Net</span><br/><a href='source/unity.html#Unity-Net-property-NETWORKTYPE_GSM' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Net-property-NETWORKTYPE_GSM' class='name expandable'>NETWORKTYPE_GSM</a><span> : int</span></div><div class='description'><div class='short'>Network Type for GSM Carrier. ...</div><div class='long'><p>Network Type for GSM Carrier.</p>\n\n<br> @version 1.0\n\n</div></div></div><div id='property-NETWORKTYPE_UNKNOWN' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Net'>Unity.Net</span><br/><a href='source/unity.html#Unity-Net-property-NETWORKTYPE_UNKNOWN' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Net-property-NETWORKTYPE_UNKNOWN' class='name expandable'>NETWORKTYPE_UNKNOWN</a><span> : int</span></div><div class='description'><div class='short'>Unknown Network Type. ...</div><div class='long'><p>Unknown Network Type.</p>\n\n<br> @version 1.0\n\n</div></div></div><div id='property-NETWORKTYPE_WIFI' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Net'>Unity.Net</span><br/><a href='source/unity.html#Unity-Net-property-NETWORKTYPE_WIFI' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Net-property-NETWORKTYPE_WIFI' class='name expandable'>NETWORKTYPE_WIFI</a><span> : int</span></div><div class='description'><div class='short'>Network Type for WIFI. ...</div><div class='long'><p>Network Type for WIFI.</p>\n\n<br> @version 1.0\n\n</div></div></div><div id='property-serviceName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Net'>Unity.Net</span><br/><a href='source/unity.html#Unity-Net-property-serviceName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Net-property-serviceName' class='name expandable'>serviceName</a><span> : String</span></div><div class='description'><div class='short'>Net service name (as configured on Platform Service Locator). ...</div><div class='long'><p>Net service name (as configured on Platform Service Locator).</p>\n\n<br> @version 1.0\n\n<p>Defaults to: <code>&quot;net&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Net'>Unity.Net</span><br/><a href='source/unity.html#Unity-Net-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Unity.Net-method-constructor' class='name expandable'>Unity.Net</a>( <span class='pre'></span> ) : <a href=\"#!/api/Unity.Net\" rel=\"Unity.Net\" class=\"docClass\">Unity.Net</a></div><div class='description'><div class='short'>Constructs a new Net interface. ...</div><div class='long'><p>Constructs a new Net interface.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Unity.Net\" rel=\"Unity.Net\" class=\"docClass\">Unity.Net</a></span><div class='sub-desc'><p>A new Net interface.</p>\n</div></li></ul></div></div></div><div id='method-DownloadFile' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Net'>Unity.Net</span><br/><a href='source/unity.html#Unity-Net-method-DownloadFile' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Net-method-DownloadFile' class='name expandable'>DownloadFile</a>( <span class='pre'>String url</span> ) : Boolean</div><div class='description'><div class='short'>Downloads the given url file by using the default native handler. ...</div><div class='long'><p>Downloads the given url file by using the default native handler.</p>\n\n<br> @version 2.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/check.png\"/> </pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : String<div class='sub-desc'><p>The url to be opened.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True on successful</p>\n</div></li></ul></div></div></div><div id='method-GetNetworkTypeReachable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Net'>Unity.Net</span><br/><a href='source/unity.html#Unity-Net-method-GetNetworkTypeReachable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Net-method-GetNetworkTypeReachable' class='name expandable'>GetNetworkTypeReachable</a>( <span class='pre'>String url</span> ) : int</div><div class='description'><div class='short'>Gets the prefered network type from which this device is able to reach the given url host. ...</div><div class='long'><p>Gets the prefered network type from which this device is able to reach the given url host.</p>\n\n<br> @version 1.0\n\n\n<br/>Possible values of the network types: \n\n\n<p><a href=\"#!/api/Unity.Net-property-NETWORKTYPE_UNKNOWN\" rel=\"Unity.Net-property-NETWORKTYPE_UNKNOWN\" class=\"docClass\">NETWORKTYPE_UNKNOWN</a>,\n<a href=\"#!/api/Unity.Net-property-NETWORKTYPE_CABLE\" rel=\"Unity.Net-property-NETWORKTYPE_CABLE\" class=\"docClass\">NETWORKTYPE_CABLE</a>,\n<a href=\"#!/api/Unity.Net-property-NETWORKTYPE_GSM\" rel=\"Unity.Net-property-NETWORKTYPE_GSM\" class=\"docClass\">NETWORKTYPE_GSM</a>,\n<a href=\"#!/api/Unity.Net-property-NETWORKTYPE_2G\" rel=\"Unity.Net-property-NETWORKTYPE_2G\" class=\"docClass\">NETWORKTYPE_2G</a>,\n<a href=\"#!/api/Unity.Net-property-NETWORKTYPE_25G\" rel=\"Unity.Net-property-NETWORKTYPE_25G\" class=\"docClass\">NETWORKTYPE_25G</a>,\n<a href=\"#!/api/Unity.Net-property-NETWORKTYPE_3G\" rel=\"Unity.Net-property-NETWORKTYPE_3G\" class=\"docClass\">NETWORKTYPE_3G</a>,\n&amp; <a href=\"#!/api/Unity.Net-property-NETWORKTYPE_WIFI\" rel=\"Unity.Net-property-NETWORKTYPE_WIFI\" class=\"docClass\">NETWORKTYPE_WIFI</a></p>\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/check.png\"/> </pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : String<div class='sub-desc'><p>The host url to check for reachability.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>int</span><div class='sub-desc'><p>Prefered network type from which given url host is reachable.</p>\n</div></li></ul></div></div></div><div id='method-GetNetworkTypeReachableList' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Net'>Unity.Net</span><br/><a href='source/unity.html#Unity-Net-method-GetNetworkTypeReachableList' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Net-method-GetNetworkTypeReachableList' class='name expandable'>GetNetworkTypeReachableList</a>( <span class='pre'>String url</span> ) : int[]</div><div class='description'><div class='short'>Gets the network types from which this device is able to reach the given url host. ...</div><div class='long'><p>Gets the network types from which this device is able to reach the given url host. Preference ordered list.</p>\n\n<br> @version 1.0\n\n\n<br/>Possible values of the network types: \n\n\n<p><a href=\"#!/api/Unity.Net-property-NETWORKTYPE_UNKNOWN\" rel=\"Unity.Net-property-NETWORKTYPE_UNKNOWN\" class=\"docClass\">NETWORKTYPE_UNKNOWN</a>,\n<a href=\"#!/api/Unity.Net-property-NETWORKTYPE_CABLE\" rel=\"Unity.Net-property-NETWORKTYPE_CABLE\" class=\"docClass\">NETWORKTYPE_CABLE</a>,\n<a href=\"#!/api/Unity.Net-property-NETWORKTYPE_GSM\" rel=\"Unity.Net-property-NETWORKTYPE_GSM\" class=\"docClass\">NETWORKTYPE_GSM</a>,\n<a href=\"#!/api/Unity.Net-property-NETWORKTYPE_2G\" rel=\"Unity.Net-property-NETWORKTYPE_2G\" class=\"docClass\">NETWORKTYPE_2G</a>,\n<a href=\"#!/api/Unity.Net-property-NETWORKTYPE_25G\" rel=\"Unity.Net-property-NETWORKTYPE_25G\" class=\"docClass\">NETWORKTYPE_25G</a>,\n<a href=\"#!/api/Unity.Net-property-NETWORKTYPE_3G\" rel=\"Unity.Net-property-NETWORKTYPE_3G\" class=\"docClass\">NETWORKTYPE_3G</a>,\n&amp; <a href=\"#!/api/Unity.Net-property-NETWORKTYPE_WIFI\" rel=\"Unity.Net-property-NETWORKTYPE_WIFI\" class=\"docClass\">NETWORKTYPE_WIFI</a></p>\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/check.png\"/> </pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : String<div class='sub-desc'><p>The host url to check for reachability.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>int[]</span><div class='sub-desc'><p>Array of network types from which given url host is reachable.</p>\n</div></li></ul></div></div></div><div id='method-GetNetworkTypeSupported' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Net'>Unity.Net</span><br/><a href='source/unity.html#Unity-Net-method-GetNetworkTypeSupported' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Net-method-GetNetworkTypeSupported' class='name expandable'>GetNetworkTypeSupported</a>( <span class='pre'></span> ) : int[]</div><div class='description'><div class='short'>Gets the network types currently supported by this device. ...</div><div class='long'><p>Gets the network types currently supported by this device.</p>\n\n<br> @version 1.0\n\n\n<br/>Possible values of the network types: \n\n\n<p><a href=\"#!/api/Unity.Net-property-NETWORKTYPE_UNKNOWN\" rel=\"Unity.Net-property-NETWORKTYPE_UNKNOWN\" class=\"docClass\">NETWORKTYPE_UNKNOWN</a>,\n<a href=\"#!/api/Unity.Net-property-NETWORKTYPE_CABLE\" rel=\"Unity.Net-property-NETWORKTYPE_CABLE\" class=\"docClass\">NETWORKTYPE_CABLE</a>,\n<a href=\"#!/api/Unity.Net-property-NETWORKTYPE_GSM\" rel=\"Unity.Net-property-NETWORKTYPE_GSM\" class=\"docClass\">NETWORKTYPE_GSM</a>,\n<a href=\"#!/api/Unity.Net-property-NETWORKTYPE_2G\" rel=\"Unity.Net-property-NETWORKTYPE_2G\" class=\"docClass\">NETWORKTYPE_2G</a>,\n<a href=\"#!/api/Unity.Net-property-NETWORKTYPE_25G\" rel=\"Unity.Net-property-NETWORKTYPE_25G\" class=\"docClass\">NETWORKTYPE_25G</a>,\n<a href=\"#!/api/Unity.Net-property-NETWORKTYPE_3G\" rel=\"Unity.Net-property-NETWORKTYPE_3G\" class=\"docClass\">NETWORKTYPE_3G</a>,\n&amp; <a href=\"#!/api/Unity.Net-property-NETWORKTYPE_WIFI\" rel=\"Unity.Net-property-NETWORKTYPE_WIFI\" class=\"docClass\">NETWORKTYPE_WIFI</a></p>\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/check.png\"/> </pre>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>int[]</span><div class='sub-desc'><p>Array of supported network types.</p>\n</div></li></ul></div></div></div><div id='method-IsNetworkReachable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Net'>Unity.Net</span><br/><a href='source/unity.html#Unity-Net-method-IsNetworkReachable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Net-method-IsNetworkReachable' class='name expandable'>IsNetworkReachable</a>( <span class='pre'>String url</span> ) : Boolean</div><div class='description'><div class='short'>Detects if network is reachable or not. ...</div><div class='long'><p>Detects if network is reachable or not.</p>\n\n<br> @version 1.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/check.png\"/> </pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : String<div class='sub-desc'><p>The host url to check for reachability.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True/false if reachable.</p>\n</div></li></ul></div></div></div><div id='method-OpenBrowser' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Net'>Unity.Net</span><br/><a href='source/unity.html#Unity-Net-method-OpenBrowser' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Net-method-OpenBrowser' class='name expandable'>OpenBrowser</a>( <span class='pre'>String title, String buttonText, String url</span> ) : Boolean</div><div class='description'><div class='short'>Opens the given url in a different Web View with a Navigation Bar. ...</div><div class='long'><p>Opens the given url in a different Web View with a Navigation Bar.</p>\n\n<br> @version 1.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/check.png\"/> </pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>title</span> : String<div class='sub-desc'><p>The title of the Navigation Bar.</p>\n</div></li><li><span class='pre'>buttonText</span> : String<div class='sub-desc'><p>The Back Button text of the Navigation Bar.</p>\n</div></li><li><span class='pre'>url</span> : String<div class='sub-desc'><p>The url to be opened.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True on successful</p>\n</div></li></ul></div></div></div><div id='method-ShowHtml' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Net'>Unity.Net</span><br/><a href='source/unity.html#Unity-Net-method-ShowHtml' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Net-method-ShowHtml' class='name expandable'>ShowHtml</a>( <span class='pre'>String title, String buttonText, String htmls</span> ) : Boolean</div><div class='description'><div class='short'>Renders the given html in a different Web View with a Navigation Bar. ...</div><div class='long'><p>Renders the given html in a different Web View with a Navigation Bar.</p>\n\n<br> @version 1.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/check.png\"/> </pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>title</span> : String<div class='sub-desc'><p>The title of the Navigation Bar.</p>\n</div></li><li><span class='pre'>buttonText</span> : String<div class='sub-desc'><p>The Back Button text of the Navigation Bar.</p>\n</div></li><li><span class='pre'>htmls</span> : String<div class='sub-desc'><p>The html string to be rendered.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True on successful</p>\n</div></li></ul></div></div></div></div></div></div></div>"});