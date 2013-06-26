Ext.data.JsonP.Unity_Geo({"tagname":"class","name":"Unity.Geo","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":true,"requires":[],"uses":[],"enum":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Unity.Geo","members":{"cfg":[],"property":[{"name":"NORTHTYPE_MAGNETIC","tagname":"property","owner":"Unity.Geo","meta":{},"id":"property-NORTHTYPE_MAGNETIC"},{"name":"NORTHTYPE_TRUE","tagname":"property","owner":"Unity.Geo","meta":{},"id":"property-NORTHTYPE_TRUE"},{"name":"serviceName","tagname":"property","owner":"Unity.Geo","meta":{},"id":"property-serviceName"}],"method":[{"name":"constructor","tagname":"method","owner":"Unity.Geo","meta":{},"id":"method-constructor"},{"name":"GetAcceleration","tagname":"method","owner":"Unity.Geo","meta":{},"id":"method-GetAcceleration"},{"name":"GetCoordinates","tagname":"method","owner":"Unity.Geo","meta":{},"id":"method-GetCoordinates"},{"name":"GetDeviceOrientation","tagname":"method","owner":"Unity.Geo","meta":{},"id":"method-GetDeviceOrientation"},{"name":"GetGeoDecoder","tagname":"method","owner":"Unity.Geo","meta":{},"id":"method-GetGeoDecoder"},{"name":"GetHeading","tagname":"method","owner":"Unity.Geo","meta":{},"id":"method-GetHeading"},{"name":"GetMap","tagname":"method","owner":"Unity.Geo","meta":{},"id":"method-GetMap"},{"name":"GetPOI","tagname":"method","owner":"Unity.Geo","meta":{},"id":"method-GetPOI"},{"name":"GetPOIList","tagname":"method","owner":"Unity.Geo","meta":{},"id":"method-GetPOIList"},{"name":"GetVelocity","tagname":"method","owner":"Unity.Geo","meta":{},"id":"method-GetVelocity"},{"name":"IsGPSEnabled","tagname":"method","owner":"Unity.Geo","meta":{},"id":"method-IsGPSEnabled"},{"name":"RemovePOI","tagname":"method","owner":"Unity.Geo","meta":{},"id":"method-RemovePOI"},{"name":"SetMapSettings","tagname":"method","owner":"Unity.Geo","meta":{},"id":"method-SetMapSettings"},{"name":"StartProximitySensor","tagname":"method","owner":"Unity.Geo","meta":{},"id":"method-StartProximitySensor"},{"name":"StartUpdatingHeading","tagname":"method","owner":"Unity.Geo","meta":{},"id":"method-StartUpdatingHeading"},{"name":"StartUpdatingLocation","tagname":"method","owner":"Unity.Geo","meta":{},"id":"method-StartUpdatingLocation"},{"name":"StopProximitySensor","tagname":"method","owner":"Unity.Geo","meta":{},"id":"method-StopProximitySensor"},{"name":"StopUpdatingHeading","tagname":"method","owner":"Unity.Geo","meta":{},"id":"method-StopUpdatingHeading"},{"name":"StopUpdatingLocation","tagname":"method","owner":"Unity.Geo","meta":{},"id":"method-StopUpdatingLocation"},{"name":"UpdatePOI","tagname":"method","owner":"Unity.Geo","meta":{},"id":"method-UpdatePOI"}],"event":[],"css_var":[],"css_mixin":[]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":3013,"files":[{"filename":"unity.js","href":"unity.html#Unity-Geo"}],"html_meta":{},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/unity.html#Unity-Geo' target='_blank'>unity.js</a></div></pre><div class='doc-contents'><p>Singleton class field to access Geo interface.</p>\n\n<br>This interface provides access to GPS device features (getting current location, acceleration, etc) and embedded Map views, to locate/handle Points of Interest.<br>\n\n\n<br> @version 1.0\n\n\n<pre>Usage: <a href=\"#!/api/Unity.Geo\" rel=\"Unity.Geo\" class=\"docClass\">Unity.Geo</a>.&lt;metodName&gt;([params]).<br>Example: <a href=\"#!/api/Unity.Geo-method-GetAcceleration\" rel=\"Unity.Geo-method-GetAcceleration\" class=\"docClass\">Unity.Geo.GetAcceleration</a>().</pre>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-NORTHTYPE_MAGNETIC' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Geo'>Unity.Geo</span><br/><a href='source/unity.html#Unity-Geo-property-NORTHTYPE_MAGNETIC' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Geo-property-NORTHTYPE_MAGNETIC' class='name expandable'>NORTHTYPE_MAGNETIC</a><span> : int</span></div><div class='description'><div class='short'>Magnetic North Type. ...</div><div class='long'><p>Magnetic North Type.</p>\n\n<br> @version 1.0\n\n</div></div></div><div id='property-NORTHTYPE_TRUE' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Geo'>Unity.Geo</span><br/><a href='source/unity.html#Unity-Geo-property-NORTHTYPE_TRUE' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Geo-property-NORTHTYPE_TRUE' class='name expandable'>NORTHTYPE_TRUE</a><span> : int</span></div><div class='description'><div class='short'>True North Type. ...</div><div class='long'><p>True North Type.</p>\n\n<br> @version 1.0\n\n</div></div></div><div id='property-serviceName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Geo'>Unity.Geo</span><br/><a href='source/unity.html#Unity-Geo-property-serviceName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Geo-property-serviceName' class='name expandable'>serviceName</a><span> : String</span></div><div class='description'><div class='short'>Geo service name (as configured on Platform Service Locator). ...</div><div class='long'><p>Geo service name (as configured on Platform Service Locator).</p>\n\n<br> @version 1.0\n\n<p>Defaults to: <code>&quot;geo&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Geo'>Unity.Geo</span><br/><a href='source/unity.html#Unity-Geo-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Unity.Geo-method-constructor' class='name expandable'>Unity.Geo</a>( <span class='pre'></span> ) : <a href=\"#!/api/Unity.Geo\" rel=\"Unity.Geo\" class=\"docClass\">Unity.Geo</a></div><div class='description'><div class='short'>Constructs a new Geo interface. ...</div><div class='long'><p>Constructs a new Geo interface.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Unity.Geo\" rel=\"Unity.Geo\" class=\"docClass\">Unity.Geo</a></span><div class='sub-desc'><p>A new Geo interface.</p>\n</div></li></ul></div></div></div><div id='method-GetAcceleration' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Geo'>Unity.Geo</span><br/><a href='source/unity.html#Unity-Geo-method-GetAcceleration' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Geo-method-GetAcceleration' class='name expandable'>GetAcceleration</a>( <span class='pre'></span> ) : <a href=\"#!/api/Unity.Geo.Acceleration\" rel=\"Unity.Geo.Acceleration\" class=\"docClass\">Unity.Geo.Acceleration</a></div><div class='description'><div class='short'>Gets the current device acceleration (measured in meters/second/second). ...</div><div class='long'><p>Gets the current device acceleration (measured in meters/second/second). <br/>For further information see, <a href=\"#!/api/Unity.Geo.Acceleration\" rel=\"Unity.Geo.Acceleration\" class=\"docClass\">Acceleration</a>.</p>\n\n<br> @version 1.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/> *mock data</pre>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Unity.Geo.Acceleration\" rel=\"Unity.Geo.Acceleration\" class=\"docClass\">Unity.Geo.Acceleration</a></span><div class='sub-desc'><p>Current acceleration info (coordinates and acceleration vector number).</p>\n</div></li></ul></div></div></div><div id='method-GetCoordinates' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Geo'>Unity.Geo</span><br/><a href='source/unity.html#Unity-Geo-method-GetCoordinates' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Geo-method-GetCoordinates' class='name expandable'>GetCoordinates</a>( <span class='pre'></span> ) : <a href=\"#!/api/Unity.Geo.LocationCoordinate\" rel=\"Unity.Geo.LocationCoordinate\" class=\"docClass\">Unity.Geo.LocationCoordinate</a></div><div class='description'><div class='short'>Gets the current device location coordinates. ...</div><div class='long'><p>Gets the current device location coordinates. <br/>For further information see, <a href=\"#!/api/Unity.Geo.LocationCoordinate\" rel=\"Unity.Geo.LocationCoordinate\" class=\"docClass\">LocationCoordinate</a>.</p>\n\n<br> @version 1.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/> *mock data</pre>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Unity.Geo.LocationCoordinate\" rel=\"Unity.Geo.LocationCoordinate\" class=\"docClass\">Unity.Geo.LocationCoordinate</a></span><div class='sub-desc'><p>Current location info (coordinates and precision).</p>\n</div></li></ul></div></div></div><div id='method-GetDeviceOrientation' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Geo'>Unity.Geo</span><br/><a href='source/unity.html#Unity-Geo-method-GetDeviceOrientation' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Geo-method-GetDeviceOrientation' class='name expandable'>GetDeviceOrientation</a>( <span class='pre'></span> ) : float</div><div class='description'><div class='short'>Gets the orientation relative to the magnetic north pole. ...</div><div class='long'><p>Gets the orientation relative to the magnetic north pole.</p>\n\n<br> @version 1.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/> *mock data</pre>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>float</span><div class='sub-desc'><p>Current orientation. Measured in degrees, minutes and seconds.</p>\n</div></li></ul></div></div></div><div id='method-GetGeoDecoder' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Geo'>Unity.Geo</span><br/><a href='source/unity.html#Unity-Geo-method-GetGeoDecoder' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Geo-method-GetGeoDecoder' class='name expandable'>GetGeoDecoder</a>( <span class='pre'></span> ) : <a href=\"#!/api/Unity.Geo.GeoDecoderAttributes\" rel=\"Unity.Geo.GeoDecoderAttributes\" class=\"docClass\">Unity.Geo.GeoDecoderAttributes</a></div><div class='description'><div class='short'>Performs a reverse geocoding in order to get, from the present latitude and longitude,\nattributes like \"County\", \"Str...</div><div class='long'><p>Performs a reverse geocoding in order to get, from the present latitude and longitude,\nattributes like \"County\", \"Street\", \"County code\", \"Location\", ... in case such attributes\nare available for that location.</p>\n\n<br/>For further information see, <a href=\"#!/api/Unity.Geo.GeoDecoderAttributes\" rel=\"Unity.Geo.GeoDecoderAttributes\" class=\"docClass\">GeoDecoderAttributes</a>.\n\n\n<br> @version 1.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/error.png\"/> | windows <img src=\"resources/images/error.png\"/> *mock data</pre>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Unity.Geo.GeoDecoderAttributes\" rel=\"Unity.Geo.GeoDecoderAttributes\" class=\"docClass\">Unity.Geo.GeoDecoderAttributes</a></span><div class='sub-desc'><p>Reverse geocoding attributes from the present location (latitude and longitude)</p>\n</div></li></ul></div></div></div><div id='method-GetHeading' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Geo'>Unity.Geo</span><br/><a href='source/unity.html#Unity-Geo-method-GetHeading' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Geo-method-GetHeading' class='name expandable'>GetHeading</a>( <span class='pre'>int northType</span> ) : float</div><div class='description'><div class='short'>Gets the heading relative to the given north type (if 'northType' is not provided, default is used: magnetic noth pole). ...</div><div class='long'><p>Gets the heading relative to the given north type (if 'northType' is not provided, default is used: magnetic noth pole).</p>\n\n<br> @version 1.0\n\n\n<br/>Possible values of north type: \n\n\n<p><a href=\"#!/api/Unity.Geo-property-NORTHTYPE_MAGNETIC\" rel=\"Unity.Geo-property-NORTHTYPE_MAGNETIC\" class=\"docClass\">NORTHTYPE_MAGNETIC</a>,\n&amp; <a href=\"#!/api/Unity.Geo-property-NORTHTYPE_TRUE\" rel=\"Unity.Geo-property-NORTHTYPE_TRUE\" class=\"docClass\">NORTHTYPE_TRUE</a></p>\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/> *mock data</pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>northType</span> : int<div class='sub-desc'><p>Type of north to measured heading relative to it. Optional parameter.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>float</span><div class='sub-desc'><p>Current heading. Measured in degrees, minutes and seconds.</p>\n</div></li></ul></div></div></div><div id='method-GetMap' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Geo'>Unity.Geo</span><br/><a href='source/unity.html#Unity-Geo-method-GetMap' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Geo-method-GetMap' class='name expandable'>GetMap</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Shows Map on screen. ...</div><div class='long'><p>Shows Map on screen.</p>\n\n<br> @version 1.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/error.png\"/> | windows <img src=\"resources/images/error.png\"/> </pre>\n\n</div></div></div><div id='method-GetPOI' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Geo'>Unity.Geo</span><br/><a href='source/unity.html#Unity-Geo-method-GetPOI' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Geo-method-GetPOI' class='name expandable'>GetPOI</a>( <span class='pre'>String poiId</span> ) : <a href=\"#!/api/Unity.Geo.POI\" rel=\"Unity.Geo.POI\" class=\"docClass\">Unity.Geo.POI</a></div><div class='description'><div class='short'>Gets a POI by the given id. ...</div><div class='long'><p>Gets a POI by the given id. <br/>For further information see, <a href=\"#!/api/Unity.Geo.POI\" rel=\"Unity.Geo.POI\" class=\"docClass\">POI</a>.</p>\n\n<br> @version 1.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/> *xml data store</pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>poiId</span> : String<div class='sub-desc'><p>POI identifier.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Unity.Geo.POI\" rel=\"Unity.Geo.POI\" class=\"docClass\">Unity.Geo.POI</a></span><div class='sub-desc'><p>Point of Interest found.</p>\n</div></li></ul></div></div></div><div id='method-GetPOIList' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Geo'>Unity.Geo</span><br/><a href='source/unity.html#Unity-Geo-method-GetPOIList' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Geo-method-GetPOIList' class='name expandable'>GetPOIList</a>( <span class='pre'><a href=\"#!/api/Unity.Geo.LocationCoordinate\" rel=\"Unity.Geo.LocationCoordinate\" class=\"docClass\">Unity.Geo.LocationCoordinate</a> location, float radius, String queryText, <a href=\"#!/api/Unity.Geo.LocationCategory\" rel=\"Unity.Geo.LocationCategory\" class=\"docClass\">Unity.Geo.LocationCategory</a> category</span> ) : <a href=\"#!/api/Unity.Geo.POI\" rel=\"Unity.Geo.POI\" class=\"docClass\">Unity.Geo.POI</a>[]</div><div class='description'><div class='short'>List of POIs for the current location, given a radius (bounding box). ...</div><div class='long'><p>List of POIs for the current location, given a radius (bounding box). Optionaly, a query text and/or a category could be added to search for specific conditions.</p>\n\n<br/>For further information see, <a href=\"#!/api/Unity.Geo.POI\" rel=\"Unity.Geo.POI\" class=\"docClass\">POI</a>.\n\n\n<br> @version 1.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/> *xml data store</pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>location</span> : <a href=\"#!/api/Unity.Geo.LocationCoordinate\" rel=\"Unity.Geo.LocationCoordinate\" class=\"docClass\">Unity.Geo.LocationCoordinate</a><div class='sub-desc'><p>Map location point to search nearest POIs.</p>\n</div></li><li><span class='pre'>radius</span> : float<div class='sub-desc'><p>The radius around location to search POIs in.</p>\n</div></li><li><span class='pre'>queryText</span> : String<div class='sub-desc'><p>The query to search POIs.. Optional parameter.</p>\n</div></li><li><span class='pre'>category</span> : <a href=\"#!/api/Unity.Geo.LocationCategory\" rel=\"Unity.Geo.LocationCategory\" class=\"docClass\">Unity.Geo.LocationCategory</a><div class='sub-desc'><p>The query to search POIs.. Optional parameter.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Unity.Geo.POI\" rel=\"Unity.Geo.POI\" class=\"docClass\">Unity.Geo.POI</a>[]</span><div class='sub-desc'><p>Points of Interest for location, ordered by distance.</p>\n</div></li></ul></div></div></div><div id='method-GetVelocity' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Geo'>Unity.Geo</span><br/><a href='source/unity.html#Unity-Geo-method-GetVelocity' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Geo-method-GetVelocity' class='name expandable'>GetVelocity</a>( <span class='pre'></span> ) : float</div><div class='description'><div class='short'>Gets the current device velocity. ...</div><div class='long'><p>Gets the current device velocity.</p>\n\n<br> @version 1.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/> *mock data</pre>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>float</span><div class='sub-desc'><p>Device speed (in meters/second).</p>\n</div></li></ul></div></div></div><div id='method-IsGPSEnabled' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Geo'>Unity.Geo</span><br/><a href='source/unity.html#Unity-Geo-method-IsGPSEnabled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Geo-method-IsGPSEnabled' class='name expandable'>IsGPSEnabled</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Determines whether the Location Services (GPS) is enabled. ...</div><div class='long'><p>Determines whether the Location Services (GPS) is enabled.</p>\n\n<br> @version 3.8 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/> *mock data</pre>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if the device can start the location services</p>\n</div></li></ul></div></div></div><div id='method-RemovePOI' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Geo'>Unity.Geo</span><br/><a href='source/unity.html#Unity-Geo-method-RemovePOI' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Geo-method-RemovePOI' class='name expandable'>RemovePOI</a>( <span class='pre'>String poiId</span> )</div><div class='description'><div class='short'>Removes a POI given its id. ...</div><div class='long'><p>Removes a POI given its id. <br/>For further information see, <a href=\"#!/api/Unity.Geo.POI\" rel=\"Unity.Geo.POI\" class=\"docClass\">POI</a>.</p>\n\n<br> @version 1.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/> *xml data store</pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>poiId</span> : String<div class='sub-desc'><p>POI identifier.</p>\n</div></li></ul></div></div></div><div id='method-SetMapSettings' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Geo'>Unity.Geo</span><br/><a href='source/unity.html#Unity-Geo-method-SetMapSettings' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Geo-method-SetMapSettings' class='name expandable'>SetMapSettings</a>( <span class='pre'>float scale, float boundingBox</span> )</div><div class='description'><div class='short'>Specifies current map scale and bounding box radius. ...</div><div class='long'><p>Specifies current map scale and bounding box radius.</p>\n\n<br> @version 1.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/error.png\"/> | windows <img src=\"resources/images/error.png\"/> </pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>scale</span> : float<div class='sub-desc'><p>The desired map scale.</p>\n</div></li><li><span class='pre'>boundingBox</span> : float<div class='sub-desc'><p>The desired map view bounding box.</p>\n</div></li></ul></div></div></div><div id='method-StartProximitySensor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Geo'>Unity.Geo</span><br/><a href='source/unity.html#Unity-Geo-method-StartProximitySensor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Geo-method-StartProximitySensor' class='name expandable'>StartProximitySensor</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>The proximity sensor detects an object close to the device. ...</div><div class='long'><p>The proximity sensor detects an object close to the device.</p>\n\n<br> @version 1.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/> *mock data</pre>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if the proximity sensor detects an object close to the device</p>\n</div></li></ul></div></div></div><div id='method-StartUpdatingHeading' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Geo'>Unity.Geo</span><br/><a href='source/unity.html#Unity-Geo-method-StartUpdatingHeading' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Geo-method-StartUpdatingHeading' class='name expandable'>StartUpdatingHeading</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Starts the heading services in order to get the latitude, longitude, altitude, speed, etc. ...</div><div class='long'><p>Starts the heading services in order to get the latitude, longitude, altitude, speed, etc.</p>\n\n<br> @version 1.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/> *mock data</pre>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if the device can start the location services</p>\n</div></li></ul></div></div></div><div id='method-StartUpdatingLocation' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Geo'>Unity.Geo</span><br/><a href='source/unity.html#Unity-Geo-method-StartUpdatingLocation' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Geo-method-StartUpdatingLocation' class='name expandable'>StartUpdatingLocation</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Starts the location services in order to get the latitude, longitude, altitude, speed, etc. ...</div><div class='long'><p>Starts the location services in order to get the latitude, longitude, altitude, speed, etc.</p>\n\n<br> @version 1.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/> *mock data</pre>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if the device can start the location services</p>\n</div></li></ul></div></div></div><div id='method-StopProximitySensor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Geo'>Unity.Geo</span><br/><a href='source/unity.html#Unity-Geo-method-StopProximitySensor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Geo-method-StopProximitySensor' class='name expandable'>StopProximitySensor</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Stops the proximity sensor service. ...</div><div class='long'><p>Stops the proximity sensor service.</p>\n\n<br> @version 1.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/> *mock data</pre>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if the proximity sensor service could be stopped.</p>\n</div></li></ul></div></div></div><div id='method-StopUpdatingHeading' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Geo'>Unity.Geo</span><br/><a href='source/unity.html#Unity-Geo-method-StopUpdatingHeading' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Geo-method-StopUpdatingHeading' class='name expandable'>StopUpdatingHeading</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Stops the heading services in order to get the latitude, longitude, altitude, speed, etc. ...</div><div class='long'><p>Stops the heading services in order to get the latitude, longitude, altitude, speed, etc.</p>\n\n<br> @version 1.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/> *mock data</pre>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if the device can stop the location services</p>\n</div></li></ul></div></div></div><div id='method-StopUpdatingLocation' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Geo'>Unity.Geo</span><br/><a href='source/unity.html#Unity-Geo-method-StopUpdatingLocation' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Geo-method-StopUpdatingLocation' class='name expandable'>StopUpdatingLocation</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Stops the location services in order to get the latitude, longitude, altitude, speed, etc. ...</div><div class='long'><p>Stops the location services in order to get the latitude, longitude, altitude, speed, etc.</p>\n\n<br> @version 1.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/> *mock data</pre>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if the device can stop the location services</p>\n</div></li></ul></div></div></div><div id='method-UpdatePOI' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Geo'>Unity.Geo</span><br/><a href='source/unity.html#Unity-Geo-method-UpdatePOI' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Geo-method-UpdatePOI' class='name expandable'>UpdatePOI</a>( <span class='pre'>String poiId</span> )</div><div class='description'><div class='short'>Moves a POI - given its id - to target location. ...</div><div class='long'><p>Moves a POI - given its id - to target location. <br/>For further information see, <a href=\"#!/api/Unity.Geo.POI\" rel=\"Unity.Geo.POI\" class=\"docClass\">POI</a>.</p>\n\n<br> @version 1.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/> *xml data store</pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>poiId</span> : String<div class='sub-desc'><p>POI identifier.</p>\n</div></li></ul></div></div></div></div></div></div></div>"});