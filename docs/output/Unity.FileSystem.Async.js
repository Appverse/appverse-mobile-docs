Ext.data.JsonP.Unity_FileSystem_Async({"tagname":"class","name":"Unity.FileSystem.Async","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Unity.FileSystem.Async","members":{"cfg":[],"property":[],"method":[{"name":"CopyFromRemote","tagname":"method","owner":"Unity.FileSystem.Async","meta":{},"id":"method-CopyFromRemote"},{"name":"CopyFromResources","tagname":"method","owner":"Unity.FileSystem.Async","meta":{},"id":"method-CopyFromResources"},{"name":"CreateDirectory","tagname":"method","owner":"Unity.FileSystem.Async","meta":{},"id":"method-CreateDirectory"},{"name":"CreateFile","tagname":"method","owner":"Unity.FileSystem.Async","meta":{},"id":"method-CreateFile"},{"name":"DeleteDirectory","tagname":"method","owner":"Unity.FileSystem.Async","meta":{},"id":"method-DeleteDirectory"},{"name":"DeleteFile","tagname":"method","owner":"Unity.FileSystem.Async","meta":{},"id":"method-DeleteFile"},{"name":"ExistsDirectory","tagname":"method","owner":"Unity.FileSystem.Async","meta":{},"id":"method-ExistsDirectory"},{"name":"ExistsFile","tagname":"method","owner":"Unity.FileSystem.Async","meta":{},"id":"method-ExistsFile"},{"name":"GetDirectoryRoot","tagname":"method","owner":"Unity.FileSystem.Async","meta":{},"id":"method-GetDirectoryRoot"},{"name":"ListDirectories","tagname":"method","owner":"Unity.FileSystem.Async","meta":{},"id":"method-ListDirectories"},{"name":"ListFiles","tagname":"method","owner":"Unity.FileSystem.Async","meta":{},"id":"method-ListFiles"},{"name":"ReadFile","tagname":"method","owner":"Unity.FileSystem.Async","meta":{},"id":"method-ReadFile"},{"name":"WriteFile","tagname":"method","owner":"Unity.FileSystem.Async","meta":{},"id":"method-WriteFile"}],"event":[],"css_var":[],"css_mixin":[]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":1878,"files":[{"filename":"unity.js","href":"unity.html#Unity-FileSystem-Async"}],"html_meta":{},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/unity.html#Unity-FileSystem-Async' target='_blank'>unity.js</a></div></pre><div class='doc-contents'><p>Invokes all FileSystem API methods asynchronously.</p>\n\n<br>\n\n\n<p>Callback function name and callback identifier are passed to the methods (last arguments) to handle the result object when it is received from unity runtime.</p>\n\n<pre>Usage:\n<br> var myCallbackFn = function(result, id){ <br>  ...//code here your custom functionality to handle the result... <br>}\n<br><a href=\"#!/api/Unity.FileSystem\" rel=\"Unity.FileSystem\" class=\"docClass\">Unity.FileSystem</a>.<b>Async</b>.GetDirectoryRoot('myCallbackFn', 'myId').\n<br>or\n<br><a href=\"#!/api/Unity.FileSystem\" rel=\"Unity.FileSystem\" class=\"docClass\">Unity.FileSystem</a>.<b>Async</b>.ReadFile(fileDataObj, 'myCallbackFn', 'myId').\n</pre>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-CopyFromRemote' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.FileSystem.Async'>Unity.FileSystem.Async</span><br/><a href='source/unity.html#Unity-FileSystem-Async-method-CopyFromRemote' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.FileSystem.Async-method-CopyFromRemote' class='name expandable'>CopyFromRemote</a>( <span class='pre'>String url, String destFileName, String callbackFunctionName, String callbackId</span> )</div><div class='description'><div class='short'>Copies the given remote file from \"url\" to the \"toPath\" (local relative path), in ASYNC mode. ...</div><div class='long'><p>Copies the given remote file from \"url\" to the \"toPath\" (local relative path), in ASYNC mode.</p>\n\n<br> @version 3.8.5 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/check.png\"/> </pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : String<div class='sub-desc'><p>The remote url file to be copied from.</p>\n</div></li><li><span class='pre'>destFileName</span> : String<div class='sub-desc'><p>The file name (relative path under \"documents\" application directory) to be copied to.</p>\n</div></li><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n</div></li></ul></div></div></div><div id='method-CopyFromResources' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.FileSystem.Async'>Unity.FileSystem.Async</span><br/><a href='source/unity.html#Unity-FileSystem-Async-method-CopyFromResources' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.FileSystem.Async-method-CopyFromResources' class='name expandable'>CopyFromResources</a>( <span class='pre'>String sourceFileName, String destFileName, String callbackFunctionName, String callbackId</span> )</div><div class='description'><div class='short'>Copies the given file on \"fromPath\" to the \"toPath\", in ASYNC mode. ...</div><div class='long'><p>Copies the given file on \"fromPath\" to the \"toPath\", in ASYNC mode.</p>\n\n<br> @version 3.8.5 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/warning.png\"/> *\"resources\" path pending to be defined for this platform </pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>sourceFileName</span> : String<div class='sub-desc'><p>The file name (relative path under \"resources\" application directory) to be copied from.</p>\n</div></li><li><span class='pre'>destFileName</span> : String<div class='sub-desc'><p>The file name (relative path under \"documents\" application directory) to be copied to.</p>\n</div></li><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n</div></li></ul></div></div></div><div id='method-CreateDirectory' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.FileSystem.Async'>Unity.FileSystem.Async</span><br/><a href='source/unity.html#Unity-FileSystem-Async-method-CreateDirectory' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.FileSystem.Async-method-CreateDirectory' class='name expandable'>CreateDirectory</a>( <span class='pre'>String directoryName, <a href=\"#!/api/Unity.FileSystem.DirectoryData\" rel=\"Unity.FileSystem.DirectoryData\" class=\"docClass\">Unity.FileSystem.DirectoryData</a> baseDirectory, String callbackFunctionName, String callbackId</span> )</div><div class='description'><div class='short'>Creates a directory under the given base directory, or under root directory if it is not provided.For further informa...</div><div class='long'><p>Creates a directory under the given base directory, or under root directory if it is not provided.<br/>For further information see, <a href=\"#!/api/Unity.FileSystem.DirectoryData\" rel=\"Unity.FileSystem.DirectoryData\" class=\"docClass\">DirectoryData</a>, in ASYNC mode.</p>\n\n<br> @version 3.8.5 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/check.png\"/> </pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>directoryName</span> : String<div class='sub-desc'><p>The directory name to be created.</p>\n</div></li><li><span class='pre'>baseDirectory</span> : <a href=\"#!/api/Unity.FileSystem.DirectoryData\" rel=\"Unity.FileSystem.DirectoryData\" class=\"docClass\">Unity.FileSystem.DirectoryData</a><div class='sub-desc'><p>The base Directory to create directory under it. Optional parameter.</p>\n</div></li><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n</div></li></ul></div></div></div><div id='method-CreateFile' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.FileSystem.Async'>Unity.FileSystem.Async</span><br/><a href='source/unity.html#Unity-FileSystem-Async-method-CreateFile' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.FileSystem.Async-method-CreateFile' class='name expandable'>CreateFile</a>( <span class='pre'>String fileName, <a href=\"#!/api/Unity.FileSystem.DirectoryData\" rel=\"Unity.FileSystem.DirectoryData\" class=\"docClass\">Unity.FileSystem.DirectoryData</a> baseDirectory, String callbackFunctionName, String callbackId</span> )</div><div class='description'><div class='short'>Creates a file under the given base directory, or under root directory if it is not provided.For further information ...</div><div class='long'><p>Creates a file under the given base directory, or under root directory if it is not provided.<br/>For further information see, <a href=\"#!/api/Unity.FileSystem.DirectoryData\" rel=\"Unity.FileSystem.DirectoryData\" class=\"docClass\">DirectoryData</a> and <a href=\"#!/api/Unity.FileSystem.FileData\" rel=\"Unity.FileSystem.FileData\" class=\"docClass\">FileData</a>, in ASYNC mode.</p>\n\n<br> @version 3.8.5 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/check.png\"/> </pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fileName</span> : String<div class='sub-desc'><p>The file name to be created.</p>\n</div></li><li><span class='pre'>baseDirectory</span> : <a href=\"#!/api/Unity.FileSystem.DirectoryData\" rel=\"Unity.FileSystem.DirectoryData\" class=\"docClass\">Unity.FileSystem.DirectoryData</a><div class='sub-desc'><p>The base Directory to create file under it. Optional parameter.</p>\n</div></li><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n</div></li></ul></div></div></div><div id='method-DeleteDirectory' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.FileSystem.Async'>Unity.FileSystem.Async</span><br/><a href='source/unity.html#Unity-FileSystem-Async-method-DeleteDirectory' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.FileSystem.Async-method-DeleteDirectory' class='name expandable'>DeleteDirectory</a>( <span class='pre'><a href=\"#!/api/Unity.FileSystem.DirectoryData\" rel=\"Unity.FileSystem.DirectoryData\" class=\"docClass\">Unity.FileSystem.DirectoryData</a> dirData, String callbackFunctionName, String callbackId</span> )</div><div class='description'><div class='short'>Deletes the given directory.For further information see, DirectoryData, in ASYNC mode. ...</div><div class='long'><p>Deletes the given directory.<br/>For further information see, <a href=\"#!/api/Unity.FileSystem.DirectoryData\" rel=\"Unity.FileSystem.DirectoryData\" class=\"docClass\">DirectoryData</a>, in ASYNC mode.</p>\n\n<br> @version 3.8.5 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/check.png\"/> </pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dirData</span> : <a href=\"#!/api/Unity.FileSystem.DirectoryData\" rel=\"Unity.FileSystem.DirectoryData\" class=\"docClass\">Unity.FileSystem.DirectoryData</a><div class='sub-desc'><p>The directory to be deleted.</p>\n</div></li><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n</div></li></ul></div></div></div><div id='method-DeleteFile' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.FileSystem.Async'>Unity.FileSystem.Async</span><br/><a href='source/unity.html#Unity-FileSystem-Async-method-DeleteFile' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.FileSystem.Async-method-DeleteFile' class='name expandable'>DeleteFile</a>( <span class='pre'><a href=\"#!/api/Unity.FileSystem.FileData\" rel=\"Unity.FileSystem.FileData\" class=\"docClass\">Unity.FileSystem.FileData</a> fileData, String callbackFunctionName, String callbackId</span> )</div><div class='description'><div class='short'>Deletes the given file.For further information see, FileData, in ASYNC mode. ...</div><div class='long'><p>Deletes the given file.<br/>For further information see, <a href=\"#!/api/Unity.FileSystem.FileData\" rel=\"Unity.FileSystem.FileData\" class=\"docClass\">FileData</a>, in ASYNC mode.</p>\n\n<br> @version 3.8.5 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/check.png\"/> </pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fileData</span> : <a href=\"#!/api/Unity.FileSystem.FileData\" rel=\"Unity.FileSystem.FileData\" class=\"docClass\">Unity.FileSystem.FileData</a><div class='sub-desc'><p>The file to be deleted.</p>\n</div></li><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n</div></li></ul></div></div></div><div id='method-ExistsDirectory' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.FileSystem.Async'>Unity.FileSystem.Async</span><br/><a href='source/unity.html#Unity-FileSystem-Async-method-ExistsDirectory' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.FileSystem.Async-method-ExistsDirectory' class='name expandable'>ExistsDirectory</a>( <span class='pre'><a href=\"#!/api/Unity.FileSystem.DirectoryData\" rel=\"Unity.FileSystem.DirectoryData\" class=\"docClass\">Unity.FileSystem.DirectoryData</a> dirData, String callbackFunctionName, String callbackId</span> )</div><div class='description'><div class='short'>Checks if the given directory exists.For further information see, DirectoryData, in ASYNC mode. ...</div><div class='long'><p>Checks if the given directory exists.<br/>For further information see, <a href=\"#!/api/Unity.FileSystem.DirectoryData\" rel=\"Unity.FileSystem.DirectoryData\" class=\"docClass\">DirectoryData</a>, in ASYNC mode.</p>\n\n<br> @version 3.8.5\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dirData</span> : <a href=\"#!/api/Unity.FileSystem.DirectoryData\" rel=\"Unity.FileSystem.DirectoryData\" class=\"docClass\">Unity.FileSystem.DirectoryData</a><div class='sub-desc'><p>The directory to check for existence.</p>\n</div></li><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n</div></li></ul></div></div></div><div id='method-ExistsFile' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.FileSystem.Async'>Unity.FileSystem.Async</span><br/><a href='source/unity.html#Unity-FileSystem-Async-method-ExistsFile' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.FileSystem.Async-method-ExistsFile' class='name expandable'>ExistsFile</a>( <span class='pre'><a href=\"#!/api/Unity.FileSystem.FileData\" rel=\"Unity.FileSystem.FileData\" class=\"docClass\">Unity.FileSystem.FileData</a> fileData, String callbackFunctionName, String callbackId</span> )</div><div class='description'><div class='short'>Checks if the given file exists.For further information see, FileData, in ASYNC mode. ...</div><div class='long'><p>Checks if the given file exists.<br/>For further information see, <a href=\"#!/api/Unity.FileSystem.FileData\" rel=\"Unity.FileSystem.FileData\" class=\"docClass\">FileData</a>, in ASYNC mode.</p>\n\n<br> @version 3.8.5\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fileData</span> : <a href=\"#!/api/Unity.FileSystem.FileData\" rel=\"Unity.FileSystem.FileData\" class=\"docClass\">Unity.FileSystem.FileData</a><div class='sub-desc'><p>The file data to check for existence.</p>\n</div></li><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n</div></li></ul></div></div></div><div id='method-GetDirectoryRoot' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.FileSystem.Async'>Unity.FileSystem.Async</span><br/><a href='source/unity.html#Unity-FileSystem-Async-method-GetDirectoryRoot' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.FileSystem.Async-method-GetDirectoryRoot' class='name expandable'>GetDirectoryRoot</a>( <span class='pre'>String callbackFunctionName, String callbackId</span> )</div><div class='description'><div class='short'>Get configured root directory.For further information see, DirectoryData, in ASYNC mode. ...</div><div class='long'><p>Get configured root directory.<br/>For further information see, <a href=\"#!/api/Unity.FileSystem.DirectoryData\" rel=\"Unity.FileSystem.DirectoryData\" class=\"docClass\">DirectoryData</a>, in ASYNC mode.</p>\n\n<br> @version 3.8.5 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/check.png\"/> </pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n</div></li></ul></div></div></div><div id='method-ListDirectories' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.FileSystem.Async'>Unity.FileSystem.Async</span><br/><a href='source/unity.html#Unity-FileSystem-Async-method-ListDirectories' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.FileSystem.Async-method-ListDirectories' class='name expandable'>ListDirectories</a>( <span class='pre'><a href=\"#!/api/Unity.FileSystem.DirectoryData\" rel=\"Unity.FileSystem.DirectoryData\" class=\"docClass\">Unity.FileSystem.DirectoryData</a> dirData, String callbackFunctionName, String callbackId</span> )</div><div class='description'><div class='short'>List all directories under the given base directory data, or under root directory if it is not provided.For further i...</div><div class='long'><p>List all directories under the given base directory data, or under root directory if it is not provided.<br/>For further information see, <a href=\"#!/api/Unity.FileSystem.DirectoryData\" rel=\"Unity.FileSystem.DirectoryData\" class=\"docClass\">DirectoryData</a>, in ASYNC mode.</p>\n\n<br> @version 3.8.5 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/check.png\"/> </pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dirData</span> : <a href=\"#!/api/Unity.FileSystem.DirectoryData\" rel=\"Unity.FileSystem.DirectoryData\" class=\"docClass\">Unity.FileSystem.DirectoryData</a><div class='sub-desc'><p>The base Directory to check for directories under it. Optional parameter.</p>\n</div></li><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n</div></li></ul></div></div></div><div id='method-ListFiles' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.FileSystem.Async'>Unity.FileSystem.Async</span><br/><a href='source/unity.html#Unity-FileSystem-Async-method-ListFiles' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.FileSystem.Async-method-ListFiles' class='name expandable'>ListFiles</a>( <span class='pre'><a href=\"#!/api/Unity.FileSystem.DirectoryData\" rel=\"Unity.FileSystem.DirectoryData\" class=\"docClass\">Unity.FileSystem.DirectoryData</a> dirData, String callbackFunctionName, String callbackId</span> )</div><div class='description'><div class='short'>List all files under the given base directory data, or under root directory if it is not provided.For further informa...</div><div class='long'><p>List all files under the given base directory data, or under root directory if it is not provided.<br/>For further information see, <a href=\"#!/api/Unity.FileSystem.DirectoryData\" rel=\"Unity.FileSystem.DirectoryData\" class=\"docClass\">DirectoryData</a> and <a href=\"#!/api/Unity.FileSystem.FileData\" rel=\"Unity.FileSystem.FileData\" class=\"docClass\">FileData</a>, in ASYNC mode.</p>\n\n<br> @version 3.8.5 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/check.png\"/> </pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dirData</span> : <a href=\"#!/api/Unity.FileSystem.DirectoryData\" rel=\"Unity.FileSystem.DirectoryData\" class=\"docClass\">Unity.FileSystem.DirectoryData</a><div class='sub-desc'><p>The base Directory to check for files under it. Optional parameter.</p>\n</div></li><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n</div></li></ul></div></div></div><div id='method-ReadFile' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.FileSystem.Async'>Unity.FileSystem.Async</span><br/><a href='source/unity.html#Unity-FileSystem-Async-method-ReadFile' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.FileSystem.Async-method-ReadFile' class='name expandable'>ReadFile</a>( <span class='pre'><a href=\"#!/api/Unity.FileSystem.FileData\" rel=\"Unity.FileSystem.FileData\" class=\"docClass\">Unity.FileSystem.FileData</a> fileData, String callbackFunctionName, String callbackId</span> )</div><div class='description'><div class='short'>Reads file on given path.For further information see, FileData, in ASYNC mode. ...</div><div class='long'><p>Reads file on given path.<br/>For further information see, <a href=\"#!/api/Unity.FileSystem.FileData\" rel=\"Unity.FileSystem.FileData\" class=\"docClass\">FileData</a>, in ASYNC mode.</p>\n\n<br> @version 3.8.5 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/check.png\"/> </pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fileData</span> : <a href=\"#!/api/Unity.FileSystem.FileData\" rel=\"Unity.FileSystem.FileData\" class=\"docClass\">Unity.FileSystem.FileData</a><div class='sub-desc'><p>The file data to read.</p>\n</div></li><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n</div></li></ul></div></div></div><div id='method-WriteFile' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.FileSystem.Async'>Unity.FileSystem.Async</span><br/><a href='source/unity.html#Unity-FileSystem-Async-method-WriteFile' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.FileSystem.Async-method-WriteFile' class='name expandable'>WriteFile</a>( <span class='pre'><a href=\"#!/api/Unity.FileSystem.FileData\" rel=\"Unity.FileSystem.FileData\" class=\"docClass\">Unity.FileSystem.FileData</a> fileData, byte[] contents, Boolean appendFlag, String callbackFunctionName, String callbackId</span> )</div><div class='description'><div class='short'>Writes contents to file on given path.For further information see, FileData, in ASYNC mode. ...</div><div class='long'><p>Writes contents to file on given path.<br/>For further information see, <a href=\"#!/api/Unity.FileSystem.FileData\" rel=\"Unity.FileSystem.FileData\" class=\"docClass\">FileData</a>, in ASYNC mode.</p>\n\n<br> @version 3.8.5 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/check.png\"/> </pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fileData</span> : <a href=\"#!/api/Unity.FileSystem.FileData\" rel=\"Unity.FileSystem.FileData\" class=\"docClass\">Unity.FileSystem.FileData</a><div class='sub-desc'><p>The file to add/append contents to.</p>\n</div></li><li><span class='pre'>contents</span> : byte[]<div class='sub-desc'><p>The data to be written to file.</p>\n</div></li><li><span class='pre'>appendFlag</span> : Boolean<div class='sub-desc'><p>True if data should be appended to previous file data.</p>\n</div></li><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n</div></li></ul></div></div></div></div></div></div></div>"});