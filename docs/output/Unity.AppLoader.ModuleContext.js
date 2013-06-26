Ext.data.JsonP.Unity_AppLoader_ModuleContext({"tagname":"class","name":"Unity.AppLoader.ModuleContext","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"inheritable":null,"inheritdoc":null,"meta":{"author":["maps"]},"private":null,"id":"class-Unity.AppLoader.ModuleContext","members":{"cfg":[],"property":[{"name":"AlertMessage_LoadModuleError","tagname":"property","owner":"Unity.AppLoader.ModuleContext","meta":{},"id":"property-AlertMessage_LoadModuleError"},{"name":"AlertMessage_Title","tagname":"property","owner":"Unity.AppLoader.ModuleContext","meta":{},"id":"property-AlertMessage_Title"},{"name":"Credentials","tagname":"property","owner":"Unity.AppLoader.ModuleContext","meta":{},"id":"property-Credentials"},{"name":"LoadingMessage_DeleteModule","tagname":"property","owner":"Unity.AppLoader.ModuleContext","meta":{},"id":"property-LoadingMessage_DeleteModule"},{"name":"LoadingMessage_UpdateModule","tagname":"property","owner":"Unity.AppLoader.ModuleContext","meta":{},"id":"property-LoadingMessage_UpdateModule"},{"name":"LoadingMessage_UpdateModules","tagname":"property","owner":"Unity.AppLoader.ModuleContext","meta":{},"id":"property-LoadingMessage_UpdateModules"},{"name":"User","tagname":"property","owner":"Unity.AppLoader.ModuleContext","meta":{},"id":"property-User"}],"method":[],"event":[],"css_var":[],"css_mixin":[]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":2098,"files":[{"filename":"appverse-data.js","href":"appverse-data.html#Unity-AppLoader-ModuleContext"}],"html_meta":{"author":null},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/appverse-data.html#Unity-AppLoader-ModuleContext' target='_blank'>appverse-data.js</a></div></pre><div class='doc-contents'><p>@namespace <a href=\"#!/api/Unity.AppLoader\" rel=\"Unity.AppLoader\" class=\"docClass\">Unity.AppLoader</a> This is a sample class.<br/><br/>\nUsed only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>\nRepresents the data required to initialize the working context for the AppLoader API.</p>\n\n<br><br>For example, the field <b><a href=\"#!/api/Unity.AppLoader.ModuleContext-property-User\" rel=\"Unity.AppLoader.ModuleContext-property-User\" class=\"docClass\">User</a></b> is used by this API to store contents under a specific 'User' folder (so they can only be accessible if context is initialized for that user).\n\n\n<br><br>There are also some context fields to change the default text displayed on some native loading messages (LoadingMessage_xxxx) or error alerts (AlertMessage_xxx).\n\n\n<br><br>See more information at <b><a href=\"#!/api/Unity.AppLoader-method-InitializeModuleContext\" rel=\"Unity.AppLoader-method-InitializeModuleContext\" class=\"docClass\">Unity.AppLoader.InitializeModuleContext</a></b>.\n\n\n<p>@version 4.0</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-AlertMessage_LoadModuleError' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.AppLoader.ModuleContext'>Unity.AppLoader.ModuleContext</span><br/><a href='source/appverse-data.html#Unity-AppLoader-ModuleContext-property-AlertMessage_LoadModuleError' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.AppLoader.ModuleContext-property-AlertMessage_LoadModuleError' class='name expandable'>AlertMessage_LoadModuleError</a><span> : String</span></div><div class='description'><div class='short'>The custom text (localized by the application) for the native notification alert body that is shown when an error occ...</div><div class='long'><p>The custom text (localized by the application) for the native notification alert <b>body</b> that is shown when an error occurres loading a module (by calling the method <b><a href=\"#!/api/Unity.AppLoader-method-LoadModule\" rel=\"Unity.AppLoader-method-LoadModule\" class=\"docClass\">Unity.AppLoader.LoadModule</a></b>).</p>\n<p>Defaults to: <code>'The module could not be loaded'</code></p></div></div></div><div id='property-AlertMessage_Title' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.AppLoader.ModuleContext'>Unity.AppLoader.ModuleContext</span><br/><a href='source/appverse-data.html#Unity-AppLoader-ModuleContext-property-AlertMessage_Title' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.AppLoader.ModuleContext-property-AlertMessage_Title' class='name expandable'>AlertMessage_Title</a><span> : String</span></div><div class='description'><div class='short'>The custom text (localized by the application) for the native notification alert title that is shown when an error oc...</div><div class='long'><p>The custom text (localized by the application) for the native notification alert <b>title</b> that is shown when an error occurres loading a module (by calling the method <b><a href=\"#!/api/Unity.AppLoader-method-LoadModule\" rel=\"Unity.AppLoader-method-LoadModule\" class=\"docClass\">Unity.AppLoader.LoadModule</a></b>).</p>\n<p>Defaults to: <code>'AppLoader Alert'</code></p></div></div></div><div id='property-Credentials' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.AppLoader.ModuleContext'>Unity.AppLoader.ModuleContext</span><br/><a href='source/appverse-data.html#Unity-AppLoader-ModuleContext-property-Credentials' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.AppLoader.ModuleContext-property-Credentials' class='name expandable'>Credentials</a><span> : String</span></div><div class='description'><div class='short'>The current user credentials (it could be plain password data, or encrypted.. ...</div><div class='long'><p>The current user credentials (it could be plain password data, or encrypted.. as required by the app).</p>\n<p>Defaults to: <code>''</code></p></div></div></div><div id='property-LoadingMessage_DeleteModule' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.AppLoader.ModuleContext'>Unity.AppLoader.ModuleContext</span><br/><a href='source/appverse-data.html#Unity-AppLoader-ModuleContext-property-LoadingMessage_DeleteModule' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.AppLoader.ModuleContext-property-LoadingMessage_DeleteModule' class='name expandable'>LoadingMessage_DeleteModule</a><span> : String</span></div><div class='description'><div class='short'>The custom text (localized by the application) for the native loading mask that is shown when deleting a bunch of mod...</div><div class='long'><p>The custom text (localized by the application) for the native loading mask that is shown when deleting a bunch of modules (by calling the method <b><a href=\"#!/api/Unity.AppLoader-method-DeleteModules\" rel=\"Unity.AppLoader-method-DeleteModules\" class=\"docClass\">Unity.AppLoader.DeleteModules</a></b>).</p>\n<p>Defaults to: <code>'Deleting Modules'</code></p></div></div></div><div id='property-LoadingMessage_UpdateModule' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.AppLoader.ModuleContext'>Unity.AppLoader.ModuleContext</span><br/><a href='source/appverse-data.html#Unity-AppLoader-ModuleContext-property-LoadingMessage_UpdateModule' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.AppLoader.ModuleContext-property-LoadingMessage_UpdateModule' class='name expandable'>LoadingMessage_UpdateModule</a><span> : String</span></div><div class='description'><div class='short'>The custom text (localized by the application) for the native loading mask that is shown when updating a single modul...</div><div class='long'><p>The custom text (localized by the application) for the native loading mask that is shown when updating a single module (by calling the method <b><a href=\"#!/api/Unity.AppLoader-method-UpdateModule\" rel=\"Unity.AppLoader-method-UpdateModule\" class=\"docClass\">Unity.AppLoader.UpdateModule</a></b>, or calling the <b><a href=\"#!/api/Unity.AppLoader-method-LoadModule\" rel=\"Unity.AppLoader-method-LoadModule\" class=\"docClass\">Unity.AppLoader.LoadModule</a></b> with the 'autoUpload' flag set to true).</p>\n<p>Defaults to: <code>'Updating Module'</code></p></div></div></div><div id='property-LoadingMessage_UpdateModules' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.AppLoader.ModuleContext'>Unity.AppLoader.ModuleContext</span><br/><a href='source/appverse-data.html#Unity-AppLoader-ModuleContext-property-LoadingMessage_UpdateModules' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.AppLoader.ModuleContext-property-LoadingMessage_UpdateModules' class='name expandable'>LoadingMessage_UpdateModules</a><span> : String</span></div><div class='description'><div class='short'>The custom text (localized by the application) for the native loading mask that is shown when updating a bunch of mod...</div><div class='long'><p>The custom text (localized by the application) for the native loading mask that is shown when updating a bunch of modules (by calling the method <b><a href=\"#!/api/Unity.AppLoader-method-UpdateModules\" rel=\"Unity.AppLoader-method-UpdateModules\" class=\"docClass\">Unity.AppLoader.UpdateModules</a></b>).</p>\n<p>Defaults to: <code>'Updating Modules'</code></p></div></div></div><div id='property-User' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.AppLoader.ModuleContext'>Unity.AppLoader.ModuleContext</span><br/><a href='source/appverse-data.html#Unity-AppLoader-ModuleContext-property-User' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.AppLoader.ModuleContext-property-User' class='name expandable'>User</a><span> : String</span></div><div class='description'><div class='short'>The  current user (name). ...</div><div class='long'><p>The  current user (name). It is used by the API to store user contents under a specific folder, only accessible by this user.</p>\n<p>Defaults to: <code>''</code></p></div></div></div></div></div></div></div>"});