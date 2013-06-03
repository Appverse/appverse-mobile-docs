Ext.data.JsonP.Unity_IO_IOService({"tagname":"class","name":"Unity.IO.IOService","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"inheritable":null,"inheritdoc":null,"meta":{"author":["maps"]},"private":null,"id":"class-Unity.IO.IOService","members":{"cfg":[],"property":[{"name":"Endpoint","tagname":"property","owner":"Unity.IO.IOService","meta":{},"id":"property-Endpoint"},{"name":"Name","tagname":"property","owner":"Unity.IO.IOService","meta":{},"id":"property-Name"},{"name":"RequestMethod","tagname":"property","owner":"Unity.IO.IOService","meta":{},"id":"property-RequestMethod"},{"name":"Type","tagname":"property","owner":"Unity.IO.IOService","meta":{},"id":"property-Type"}],"method":[],"event":[],"css_var":[],"css_mixin":[]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":724,"files":[{"filename":"appverse-data.js","href":"appverse-data.html#Unity-IO-IOService"}],"html_meta":{"author":null},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/appverse-data.html#Unity-IO-IOService' target='_blank'>appverse-data.js</a></div></pre><div class='doc-contents'><p>@namespace <a href=\"#!/api/Unity.IO\" rel=\"Unity.IO\" class=\"docClass\">Unity.IO</a> This is a sample class.<br/><br/>\nUsed only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>\nDefines a remote invocation service (end-point path, host, port, exchanged data, etc..).\n@version 1.0</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-Endpoint' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.IO.IOService'>Unity.IO.IOService</span><br/><a href='source/appverse-data.html#Unity-IO-IOService-property-Endpoint' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.IO.IOService-property-Endpoint' class='name expandable'>Endpoint</a><span> : <a href=\"#!/api/Unity.IO.IOServiceEndpoint\" rel=\"Unity.IO.IOServiceEndpoint\" class=\"docClass\">Unity.IO.IOServiceEndpoint</a></span></div><div class='description'><div class='short'>The data for the service end-point. ...</div><div class='long'><p>The data for the service end-point. <br/><br/>For further information see, <a href=\"#!/api/Unity.IO.IOServiceEndpoint\" rel=\"Unity.IO.IOServiceEndpoint\" class=\"docClass\">IOServiceEndpoint</a>.</p>\n</div></div></div><div id='property-Name' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.IO.IOService'>Unity.IO.IOService</span><br/><a href='source/appverse-data.html#Unity-IO-IOService-property-Name' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.IO.IOService-property-Name' class='name expandable'>Name</a><span> : String</span></div><div class='description'><div class='short'>The name of the service (not unique, to uniquely define a service, use Name and Type). ...</div><div class='long'><p>The name of the service (not unique, to uniquely define a service, use Name and Type).</p>\n<p>Defaults to: <code>''</code></p></div></div></div><div id='property-RequestMethod' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.IO.IOService'>Unity.IO.IOService</span><br/><a href='source/appverse-data.html#Unity-IO-IOService-property-RequestMethod' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.IO.IOService-property-RequestMethod' class='name expandable'>RequestMethod</a><span> : int</span></div><div class='description'><div class='short'>The method used to request the service. ...</div><div class='long'><p>The method used to request the service.</p>\n\n<br/>Possible values: 0 (POST), 1 (GET)\n\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-Type' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.IO.IOService'>Unity.IO.IOService</span><br/><a href='source/appverse-data.html#Unity-IO-IOService-property-Type' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.IO.IOService-property-Type' class='name expandable'>Type</a><span> : int</span></div><div class='description'><div class='short'>The type of the service. ...</div><div class='long'><p>The type of the service.</p>\n\n<br/>Possible values: \n\n\n<p><a href=\"#!/api/Unity.IO-property-SERVICETYPE_AMF_SERIALIZATION\" rel=\"Unity.IO-property-SERVICETYPE_AMF_SERIALIZATION\" class=\"docClass\">SERVICETYPE_AMF_SERIALIZATION</a>,\n<a href=\"#!/api/Unity.IO-property-SERVICETYPE_GWT_RPC\" rel=\"Unity.IO-property-SERVICETYPE_GWT_RPC\" class=\"docClass\">SERVICETYPE_GWT_RPC</a>,\n<a href=\"#!/api/Unity.IO-property-SERVICETYPE_OCTET_BINARY\" rel=\"Unity.IO-property-SERVICETYPE_OCTET_BINARY\" class=\"docClass\">SERVICETYPE_OCTET_BINARY</a>,\n<a href=\"#!/api/Unity.IO-property-SERVICETYPE_REMOTING_SERIALIZATION\" rel=\"Unity.IO-property-SERVICETYPE_REMOTING_SERIALIZATION\" class=\"docClass\">SERVICETYPE_REMOTING_SERIALIZATION</a>,\n<a href=\"#!/api/Unity.IO-property-SERVICETYPE_REST_JSON\" rel=\"Unity.IO-property-SERVICETYPE_REST_JSON\" class=\"docClass\">SERVICETYPE_REST_JSON</a>\n<a href=\"#!/api/Unity.IO-property-SERVICETYPE_REST_XML\" rel=\"Unity.IO-property-SERVICETYPE_REST_XML\" class=\"docClass\">SERVICETYPE_REST_XML</a>\n<a href=\"#!/api/Unity.IO-property-SERVICETYPE_SOAP_JSON\" rel=\"Unity.IO-property-SERVICETYPE_SOAP_JSON\" class=\"docClass\">SERVICETYPE_SOAP_JSON</a>\n<a href=\"#!/api/Unity.IO-property-SERVICETYPE_SOAP_XML\" rel=\"Unity.IO-property-SERVICETYPE_SOAP_XML\" class=\"docClass\">SERVICETYPE_SOAP_XML</a>\n<a href=\"#!/api/Unity.IO-property-SERVICETYPE_XMLRPC_JSON\" rel=\"Unity.IO-property-SERVICETYPE_XMLRPC_JSON\" class=\"docClass\">SERVICETYPE_XMLRPC_JSON</a>\n&amp; <a href=\"#!/api/Unity.IO-property-SERVICETYPE_XMLRPC_XML\" rel=\"Unity.IO-property-SERVICETYPE_XMLRPC_XML\" class=\"docClass\">SERVICETYPE_XMLRPC_XML</a></p>\n<p>Defaults to: <code>0</code></p></div></div></div></div></div></div></div>"});