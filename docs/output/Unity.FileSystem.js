Ext.data.JsonP.Unity_FileSystem({"tagname":"class","name":"Unity.FileSystem","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":true,"requires":[],"uses":[],"enum":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Unity.FileSystem","members":{"cfg":[],"property":[{"name":"serviceName","tagname":"property","owner":"Unity.FileSystem","meta":{},"id":"property-serviceName"}],"method":[{"name":"constructor","tagname":"method","owner":"Unity.FileSystem","meta":{},"id":"method-constructor"},{"name":"CopyFromRemote","tagname":"method","owner":"Unity.FileSystem","meta":{},"id":"method-CopyFromRemote"},{"name":"CopyFromResources","tagname":"method","owner":"Unity.FileSystem","meta":{},"id":"method-CopyFromResources"},{"name":"CreateDirectory","tagname":"method","owner":"Unity.FileSystem","meta":{},"id":"method-CreateDirectory"},{"name":"CreateFile","tagname":"method","owner":"Unity.FileSystem","meta":{},"id":"method-CreateFile"},{"name":"DeleteDirectory","tagname":"method","owner":"Unity.FileSystem","meta":{},"id":"method-DeleteDirectory"},{"name":"DeleteFile","tagname":"method","owner":"Unity.FileSystem","meta":{},"id":"method-DeleteFile"},{"name":"ExistsDirectory","tagname":"method","owner":"Unity.FileSystem","meta":{},"id":"method-ExistsDirectory"},{"name":"ExistsFile","tagname":"method","owner":"Unity.FileSystem","meta":{},"id":"method-ExistsFile"},{"name":"GetDirectoryRoot","tagname":"method","owner":"Unity.FileSystem","meta":{},"id":"method-GetDirectoryRoot"},{"name":"ListDirectories","tagname":"method","owner":"Unity.FileSystem","meta":{},"id":"method-ListDirectories"},{"name":"ListFiles","tagname":"method","owner":"Unity.FileSystem","meta":{},"id":"method-ListFiles"},{"name":"ReadFile","tagname":"method","owner":"Unity.FileSystem","meta":{},"id":"method-ReadFile"},{"name":"WriteFile","tagname":"method","owner":"Unity.FileSystem","meta":{},"id":"method-WriteFile"}],"event":[],"css_var":[],"css_mixin":[]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":1651,"files":[{"filename":"unity.js","href":"unity.html#Unity-FileSystem"}],"html_meta":{},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/unity.html#Unity-FileSystem' target='_blank'>unity.js</a></div></pre><div class='doc-contents'><p>Singleton class field to access FileSystem interface.</p>\n\n<br>This interface provides access to the device filesystem (only personal folder is accessible), to create/access/delete directories and files.<br>\n\n\n<br> @version 1.0\n\n\n<pre>Usage: <a href=\"#!/api/Unity.FileSystem\" rel=\"Unity.FileSystem\" class=\"docClass\">Unity.FileSystem</a>.&lt;metodName&gt;([params]).<br>Example: <a href=\"#!/api/Unity.FileSystem-method-GetDirectoryRoot\" rel=\"Unity.FileSystem-method-GetDirectoryRoot\" class=\"docClass\">Unity.FileSystem.GetDirectoryRoot</a>().</pre>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-serviceName' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.FileSystem'>Unity.FileSystem</span><br/><a href='source/unity.html#Unity-FileSystem-property-serviceName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.FileSystem-property-serviceName' class='name expandable'>serviceName</a><span> : String</span></div><div class='description'><div class='short'>FileSystem service name (as configured on Platform Service Locator). ...</div><div class='long'><p>FileSystem service name (as configured on Platform Service Locator). <br> @version 1.0</p>\n<p>Defaults to: <code>&quot;file&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.FileSystem'>Unity.FileSystem</span><br/><a href='source/unity.html#Unity-FileSystem-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Unity.FileSystem-method-constructor' class='name expandable'>Unity.FileSystem</a>( <span class='pre'></span> ) : <a href=\"#!/api/Unity.FileSystem\" rel=\"Unity.FileSystem\" class=\"docClass\">Unity.FileSystem</a></div><div class='description'><div class='short'>Constructs a new FileSystem interface. ...</div><div class='long'><p>Constructs a new FileSystem interface.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Unity.FileSystem\" rel=\"Unity.FileSystem\" class=\"docClass\">Unity.FileSystem</a></span><div class='sub-desc'><p>A new FileSystem interface.</p>\n</div></li></ul></div></div></div><div id='method-CopyFromRemote' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.FileSystem'>Unity.FileSystem</span><br/><a href='source/unity.html#Unity-FileSystem-method-CopyFromRemote' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.FileSystem-method-CopyFromRemote' class='name expandable'>CopyFromRemote</a>( <span class='pre'>String url, String destFileName</span> ) : Boolean</div><div class='description'><div class='short'>Copies the given remote file from \"url\" to the \"toPath\" (local relative path). ...</div><div class='long'><p>Copies the given remote file from \"url\" to the \"toPath\" (local relative path).</p>\n\n<br> @version 2.1 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/check.png\"/> </pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : String<div class='sub-desc'><p>The remote url file to be copied from.</p>\n</div></li><li><span class='pre'>destFileName</span> : String<div class='sub-desc'><p>The file name (relative path under \"documents\" application directory) to be copied to.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if file could be copied.</p>\n</div></li></ul></div></div></div><div id='method-CopyFromResources' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.FileSystem'>Unity.FileSystem</span><br/><a href='source/unity.html#Unity-FileSystem-method-CopyFromResources' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.FileSystem-method-CopyFromResources' class='name expandable'>CopyFromResources</a>( <span class='pre'>String sourceFileName, String destFileName</span> ) : Boolean</div><div class='description'><div class='short'>Copies the given file on \"fromPath\" to the \"toPath\". ...</div><div class='long'><p>Copies the given file on \"fromPath\" to the \"toPath\".</p>\n\n<br> @version 1.1 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/warning.png\"/> *\"resources\" path pending to be defined for this platform </pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>sourceFileName</span> : String<div class='sub-desc'><p>The file name (relative path under \"resources\" application directory) to be copied from.</p>\n</div></li><li><span class='pre'>destFileName</span> : String<div class='sub-desc'><p>The file name (relative path under \"documents\" application directory) to be copied to.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if file could be copied.</p>\n</div></li></ul></div></div></div><div id='method-CreateDirectory' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.FileSystem'>Unity.FileSystem</span><br/><a href='source/unity.html#Unity-FileSystem-method-CreateDirectory' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.FileSystem-method-CreateDirectory' class='name expandable'>CreateDirectory</a>( <span class='pre'>String directoryName, <a href=\"#!/api/Unity.FileSystem.DirectoryData\" rel=\"Unity.FileSystem.DirectoryData\" class=\"docClass\">Unity.FileSystem.DirectoryData</a> baseDirectory</span> ) : <a href=\"#!/api/Unity.FileSystem.DirectoryData\" rel=\"Unity.FileSystem.DirectoryData\" class=\"docClass\">Unity.FileSystem.DirectoryData</a></div><div class='description'><div class='short'>Creates a directory under the given base directory, or under root directory if it is not provided.For further informa...</div><div class='long'><p>Creates a directory under the given base directory, or under root directory if it is not provided.<br/>For further information see, <a href=\"#!/api/Unity.FileSystem.DirectoryData\" rel=\"Unity.FileSystem.DirectoryData\" class=\"docClass\">DirectoryData</a>.</p>\n\n<br> @version 1.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/check.png\"/> </pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>directoryName</span> : String<div class='sub-desc'><p>The directory name to be created.</p>\n</div></li><li><span class='pre'>baseDirectory</span> : <a href=\"#!/api/Unity.FileSystem.DirectoryData\" rel=\"Unity.FileSystem.DirectoryData\" class=\"docClass\">Unity.FileSystem.DirectoryData</a><div class='sub-desc'><p>The base Directory to create directory under it. Optional parameter.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Unity.FileSystem.DirectoryData\" rel=\"Unity.FileSystem.DirectoryData\" class=\"docClass\">Unity.FileSystem.DirectoryData</a></span><div class='sub-desc'><p>The directory created, or null if folder cannot be created.</p>\n</div></li></ul></div></div></div><div id='method-CreateFile' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.FileSystem'>Unity.FileSystem</span><br/><a href='source/unity.html#Unity-FileSystem-method-CreateFile' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.FileSystem-method-CreateFile' class='name expandable'>CreateFile</a>( <span class='pre'>String fileName, <a href=\"#!/api/Unity.FileSystem.DirectoryData\" rel=\"Unity.FileSystem.DirectoryData\" class=\"docClass\">Unity.FileSystem.DirectoryData</a> baseDirectory</span> ) : <a href=\"#!/api/Unity.FileSystem.FileData\" rel=\"Unity.FileSystem.FileData\" class=\"docClass\">Unity.FileSystem.FileData</a></div><div class='description'><div class='short'>Creates a file under the given base directory, or under root directory if it is not provided.For further information ...</div><div class='long'><p>Creates a file under the given base directory, or under root directory if it is not provided.<br/>For further information see, <a href=\"#!/api/Unity.FileSystem.DirectoryData\" rel=\"Unity.FileSystem.DirectoryData\" class=\"docClass\">DirectoryData</a> and <a href=\"#!/api/Unity.FileSystem.FileData\" rel=\"Unity.FileSystem.FileData\" class=\"docClass\">FileData</a>.</p>\n\n<br> @version 1.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/check.png\"/> </pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fileName</span> : String<div class='sub-desc'><p>The file name to be created.</p>\n</div></li><li><span class='pre'>baseDirectory</span> : <a href=\"#!/api/Unity.FileSystem.DirectoryData\" rel=\"Unity.FileSystem.DirectoryData\" class=\"docClass\">Unity.FileSystem.DirectoryData</a><div class='sub-desc'><p>The base Directory to create file under it. Optional parameter.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Unity.FileSystem.FileData\" rel=\"Unity.FileSystem.FileData\" class=\"docClass\">Unity.FileSystem.FileData</a></span><div class='sub-desc'><p>The file created, or null if folder cannot be created.</p>\n</div></li></ul></div></div></div><div id='method-DeleteDirectory' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.FileSystem'>Unity.FileSystem</span><br/><a href='source/unity.html#Unity-FileSystem-method-DeleteDirectory' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.FileSystem-method-DeleteDirectory' class='name expandable'>DeleteDirectory</a>( <span class='pre'><a href=\"#!/api/Unity.FileSystem.DirectoryData\" rel=\"Unity.FileSystem.DirectoryData\" class=\"docClass\">Unity.FileSystem.DirectoryData</a> dirData</span> ) : Boolean</div><div class='description'><div class='short'>Deletes the given directory.For further information see, DirectoryData. ...</div><div class='long'><p>Deletes the given directory.<br/>For further information see, <a href=\"#!/api/Unity.FileSystem.DirectoryData\" rel=\"Unity.FileSystem.DirectoryData\" class=\"docClass\">DirectoryData</a>.</p>\n\n<br> @version 1.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/check.png\"/> </pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dirData</span> : <a href=\"#!/api/Unity.FileSystem.DirectoryData\" rel=\"Unity.FileSystem.DirectoryData\" class=\"docClass\">Unity.FileSystem.DirectoryData</a><div class='sub-desc'><p>The directory to be deleted.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True on successful directory deletion.</p>\n</div></li></ul></div></div></div><div id='method-DeleteFile' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.FileSystem'>Unity.FileSystem</span><br/><a href='source/unity.html#Unity-FileSystem-method-DeleteFile' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.FileSystem-method-DeleteFile' class='name expandable'>DeleteFile</a>( <span class='pre'><a href=\"#!/api/Unity.FileSystem.FileData\" rel=\"Unity.FileSystem.FileData\" class=\"docClass\">Unity.FileSystem.FileData</a> fileData</span> ) : Boolean</div><div class='description'><div class='short'>Deletes the given file.For further information see, FileData. ...</div><div class='long'><p>Deletes the given file.<br/>For further information see, <a href=\"#!/api/Unity.FileSystem.FileData\" rel=\"Unity.FileSystem.FileData\" class=\"docClass\">FileData</a>.</p>\n\n<br> @version 1.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/check.png\"/> </pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fileData</span> : <a href=\"#!/api/Unity.FileSystem.FileData\" rel=\"Unity.FileSystem.FileData\" class=\"docClass\">Unity.FileSystem.FileData</a><div class='sub-desc'><p>The file to be deleted.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True on successful file deletion.</p>\n</div></li></ul></div></div></div><div id='method-ExistsDirectory' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.FileSystem'>Unity.FileSystem</span><br/><a href='source/unity.html#Unity-FileSystem-method-ExistsDirectory' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.FileSystem-method-ExistsDirectory' class='name expandable'>ExistsDirectory</a>( <span class='pre'><a href=\"#!/api/Unity.FileSystem.DirectoryData\" rel=\"Unity.FileSystem.DirectoryData\" class=\"docClass\">Unity.FileSystem.DirectoryData</a> dirData</span> ) : Boolean</div><div class='description'><div class='short'>Checks if the given directory exists.For further information see, DirectoryData. ...</div><div class='long'><p>Checks if the given directory exists.<br/>For further information see, <a href=\"#!/api/Unity.FileSystem.DirectoryData\" rel=\"Unity.FileSystem.DirectoryData\" class=\"docClass\">DirectoryData</a>.</p>\n\n<br> @version 1.0\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dirData</span> : <a href=\"#!/api/Unity.FileSystem.DirectoryData\" rel=\"Unity.FileSystem.DirectoryData\" class=\"docClass\">Unity.FileSystem.DirectoryData</a><div class='sub-desc'><p>The directory to check for existence.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if directory exists.</p>\n</div></li></ul></div></div></div><div id='method-ExistsFile' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.FileSystem'>Unity.FileSystem</span><br/><a href='source/unity.html#Unity-FileSystem-method-ExistsFile' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.FileSystem-method-ExistsFile' class='name expandable'>ExistsFile</a>( <span class='pre'><a href=\"#!/api/Unity.FileSystem.FileData\" rel=\"Unity.FileSystem.FileData\" class=\"docClass\">Unity.FileSystem.FileData</a> fileData</span> ) : Boolean</div><div class='description'><div class='short'>Checks if the given file exists.For further information see, FileData. ...</div><div class='long'><p>Checks if the given file exists.<br/>For further information see, <a href=\"#!/api/Unity.FileSystem.FileData\" rel=\"Unity.FileSystem.FileData\" class=\"docClass\">FileData</a>.</p>\n\n<br> @version 1.0\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fileData</span> : <a href=\"#!/api/Unity.FileSystem.FileData\" rel=\"Unity.FileSystem.FileData\" class=\"docClass\">Unity.FileSystem.FileData</a><div class='sub-desc'><p>The file data to check for existence.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if file exists.</p>\n</div></li></ul></div></div></div><div id='method-GetDirectoryRoot' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.FileSystem'>Unity.FileSystem</span><br/><a href='source/unity.html#Unity-FileSystem-method-GetDirectoryRoot' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.FileSystem-method-GetDirectoryRoot' class='name expandable'>GetDirectoryRoot</a>( <span class='pre'></span> ) : <a href=\"#!/api/Unity.FileSystem.DirectoryData\" rel=\"Unity.FileSystem.DirectoryData\" class=\"docClass\">Unity.FileSystem.DirectoryData</a></div><div class='description'><div class='short'>Get configured root directory.For further information see, DirectoryData. ...</div><div class='long'><p>Get configured root directory.<br/>For further information see, <a href=\"#!/api/Unity.FileSystem.DirectoryData\" rel=\"Unity.FileSystem.DirectoryData\" class=\"docClass\">DirectoryData</a>.</p>\n\n<br> @version 1.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/check.png\"/> </pre>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Unity.FileSystem.DirectoryData\" rel=\"Unity.FileSystem.DirectoryData\" class=\"docClass\">Unity.FileSystem.DirectoryData</a></span><div class='sub-desc'><p>The configured root directory information.</p>\n</div></li></ul></div></div></div><div id='method-ListDirectories' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.FileSystem'>Unity.FileSystem</span><br/><a href='source/unity.html#Unity-FileSystem-method-ListDirectories' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.FileSystem-method-ListDirectories' class='name expandable'>ListDirectories</a>( <span class='pre'><a href=\"#!/api/Unity.FileSystem.DirectoryData\" rel=\"Unity.FileSystem.DirectoryData\" class=\"docClass\">Unity.FileSystem.DirectoryData</a> dirData</span> ) : <a href=\"#!/api/Unity.FileSystem.DirectoryData\" rel=\"Unity.FileSystem.DirectoryData\" class=\"docClass\">Unity.FileSystem.DirectoryData</a>[]</div><div class='description'><div class='short'>List all directories under the given base directory data, or under root directory if it is not provided.For further i...</div><div class='long'><p>List all directories under the given base directory data, or under root directory if it is not provided.<br/>For further information see, <a href=\"#!/api/Unity.FileSystem.DirectoryData\" rel=\"Unity.FileSystem.DirectoryData\" class=\"docClass\">DirectoryData</a>.</p>\n\n<br> @version 1.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/check.png\"/> </pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dirData</span> : <a href=\"#!/api/Unity.FileSystem.DirectoryData\" rel=\"Unity.FileSystem.DirectoryData\" class=\"docClass\">Unity.FileSystem.DirectoryData</a><div class='sub-desc'><p>The base Directory to check for directories under it. Optional parameter.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Unity.FileSystem.DirectoryData\" rel=\"Unity.FileSystem.DirectoryData\" class=\"docClass\">Unity.FileSystem.DirectoryData</a>[]</span><div class='sub-desc'><p>The directories information array.</p>\n</div></li></ul></div></div></div><div id='method-ListFiles' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.FileSystem'>Unity.FileSystem</span><br/><a href='source/unity.html#Unity-FileSystem-method-ListFiles' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.FileSystem-method-ListFiles' class='name expandable'>ListFiles</a>( <span class='pre'><a href=\"#!/api/Unity.FileSystem.DirectoryData\" rel=\"Unity.FileSystem.DirectoryData\" class=\"docClass\">Unity.FileSystem.DirectoryData</a> dirData</span> ) : <a href=\"#!/api/Unity.FileSystem.FileData\" rel=\"Unity.FileSystem.FileData\" class=\"docClass\">Unity.FileSystem.FileData</a>[]</div><div class='description'><div class='short'>List all files under the given base directory data, or under root directory if it is not provided.For further informa...</div><div class='long'><p>List all files under the given base directory data, or under root directory if it is not provided.<br/>For further information see, <a href=\"#!/api/Unity.FileSystem.DirectoryData\" rel=\"Unity.FileSystem.DirectoryData\" class=\"docClass\">DirectoryData</a> and <a href=\"#!/api/Unity.FileSystem.FileData\" rel=\"Unity.FileSystem.FileData\" class=\"docClass\">FileData</a>.</p>\n\n<br> @version 1.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/check.png\"/> </pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dirData</span> : <a href=\"#!/api/Unity.FileSystem.DirectoryData\" rel=\"Unity.FileSystem.DirectoryData\" class=\"docClass\">Unity.FileSystem.DirectoryData</a><div class='sub-desc'><p>The base Directory to check for files under it. Optional parameter.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Unity.FileSystem.FileData\" rel=\"Unity.FileSystem.FileData\" class=\"docClass\">Unity.FileSystem.FileData</a>[]</span><div class='sub-desc'><p>The files information array.</p>\n</div></li></ul></div></div></div><div id='method-ReadFile' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.FileSystem'>Unity.FileSystem</span><br/><a href='source/unity.html#Unity-FileSystem-method-ReadFile' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.FileSystem-method-ReadFile' class='name expandable'>ReadFile</a>( <span class='pre'><a href=\"#!/api/Unity.FileSystem.FileData\" rel=\"Unity.FileSystem.FileData\" class=\"docClass\">Unity.FileSystem.FileData</a> fileData</span> ) : byte[]</div><div class='description'><div class='short'>Reads file on given path.For further information see, FileData. ...</div><div class='long'><p>Reads file on given path.<br/>For further information see, <a href=\"#!/api/Unity.FileSystem.FileData\" rel=\"Unity.FileSystem.FileData\" class=\"docClass\">FileData</a>.</p>\n\n<br> @version 1.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/check.png\"/> </pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fileData</span> : <a href=\"#!/api/Unity.FileSystem.FileData\" rel=\"Unity.FileSystem.FileData\" class=\"docClass\">Unity.FileSystem.FileData</a><div class='sub-desc'><p>The file data to read.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>byte[]</span><div class='sub-desc'><p>Readed bytes.</p>\n</div></li></ul></div></div></div><div id='method-WriteFile' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.FileSystem'>Unity.FileSystem</span><br/><a href='source/unity.html#Unity-FileSystem-method-WriteFile' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.FileSystem-method-WriteFile' class='name expandable'>WriteFile</a>( <span class='pre'><a href=\"#!/api/Unity.FileSystem.FileData\" rel=\"Unity.FileSystem.FileData\" class=\"docClass\">Unity.FileSystem.FileData</a> fileData, byte[] contents, Boolean appendFlag</span> ) : Boolean</div><div class='description'><div class='short'>Writes contents to file on given path.For further information see, FileData. ...</div><div class='long'><p>Writes contents to file on given path.<br/>For further information see, <a href=\"#!/api/Unity.FileSystem.FileData\" rel=\"Unity.FileSystem.FileData\" class=\"docClass\">FileData</a>.</p>\n\n<br> @version 1.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/check.png\"/> </pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fileData</span> : <a href=\"#!/api/Unity.FileSystem.FileData\" rel=\"Unity.FileSystem.FileData\" class=\"docClass\">Unity.FileSystem.FileData</a><div class='sub-desc'><p>The file to add/append contents to.</p>\n</div></li><li><span class='pre'>contents</span> : byte[]<div class='sub-desc'><p>The data to be written to file.</p>\n</div></li><li><span class='pre'>appendFlag</span> : Boolean<div class='sub-desc'><p>True if data should be appended to previous file data.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if file could be written.</p>\n</div></li></ul></div></div></div></div></div></div></div>"});