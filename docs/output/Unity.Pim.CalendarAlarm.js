Ext.data.JsonP.Unity_Pim_CalendarAlarm({"tagname":"class","name":"Unity.Pim.CalendarAlarm","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"inheritable":null,"inheritdoc":null,"meta":{"author":["maps"]},"private":null,"id":"class-Unity.Pim.CalendarAlarm","members":{"cfg":[],"property":[{"name":"Action","tagname":"property","owner":"Unity.Pim.CalendarAlarm","meta":{},"id":"property-Action"},{"name":"EmailAddress","tagname":"property","owner":"Unity.Pim.CalendarAlarm","meta":{},"id":"property-EmailAddress"},{"name":"Sound","tagname":"property","owner":"Unity.Pim.CalendarAlarm","meta":{},"id":"property-Sound"},{"name":"Trigger","tagname":"property","owner":"Unity.Pim.CalendarAlarm","meta":{},"id":"property-Trigger"}],"method":[],"event":[],"css_var":[],"css_mixin":[]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":1704,"files":[{"filename":"appverse-data.js","href":"appverse-data.html#Unity-Pim-CalendarAlarm"}],"html_meta":{"author":null},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/appverse-data.html#Unity-Pim-CalendarAlarm' target='_blank'>appverse-data.js</a></div></pre><div class='doc-contents'><p>@namespace <a href=\"#!/api/Unity.Pim\" rel=\"Unity.Pim\" class=\"docClass\">Unity.Pim</a> This is a sample class.<br/><br/>\nUsed only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>\nThe alarm data for a calendar entry.\n@version 1.0</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-Action' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Pim.CalendarAlarm'>Unity.Pim.CalendarAlarm</span><br/><a href='source/appverse-data.html#Unity-Pim-CalendarAlarm-property-Action' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Pim.CalendarAlarm-property-Action' class='name expandable'>Action</a><span> : int</span></div><div class='description'><div class='short'>The type of alarm for a calendar entry (display, sound, etc)\n\nPossible values: \n\n\nALARM_DISPAY,\nALARM_EMAIL,\nALARM_SO...</div><div class='long'><p>The type of alarm for a calendar entry (display, sound, etc)</p>\n\n<br/>Possible values: \n\n\n<p><a href=\"#!/api/Unity.Pim-property-ALARM_DISPAY\" rel=\"Unity.Pim-property-ALARM_DISPAY\" class=\"docClass\">ALARM_DISPAY</a>,\n<a href=\"#!/api/Unity.Pim-property-ALARM_EMAIL\" rel=\"Unity.Pim-property-ALARM_EMAIL\" class=\"docClass\">ALARM_EMAIL</a>,\n<a href=\"#!/api/Unity.Pim-property-ALARM_SOUND\" rel=\"Unity.Pim-property-ALARM_SOUND\" class=\"docClass\">ALARM_SOUND</a>,\n&amp; <a href=\"#!/api/Unity.Pim-property-ATTENDEESTATUS_TENTATIVE\" rel=\"Unity.Pim-property-ATTENDEESTATUS_TENTATIVE\" class=\"docClass\">ATTENDEESTATUS_TENTATIVE</a></p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-EmailAddress' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Pim.CalendarAlarm'>Unity.Pim.CalendarAlarm</span><br/><a href='source/appverse-data.html#Unity-Pim-CalendarAlarm-property-EmailAddress' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Pim.CalendarAlarm-property-EmailAddress' class='name expandable'>EmailAddress</a><span> : String</span></div><div class='description'><div class='short'>The email address for an alarm of type ALARM_EMAIL. ...</div><div class='long'><p>The email address for an alarm of type <a href=\"#!/api/Unity.Pim-property-ALARM_EMAIL\" rel=\"Unity.Pim-property-ALARM_EMAIL\" class=\"docClass\">ALARM_EMAIL</a>.</p>\n<p>Defaults to: <code>''</code></p></div></div></div><div id='property-Sound' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Pim.CalendarAlarm'>Unity.Pim.CalendarAlarm</span><br/><a href='source/appverse-data.html#Unity-Pim-CalendarAlarm-property-Sound' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Pim.CalendarAlarm-property-Sound' class='name expandable'>Sound</a><span> : String</span></div><div class='description'><div class='short'>The sound to be executed for an alarm of type ALARM_SOUND. ...</div><div class='long'><p>The sound to be executed for an alarm of type <a href=\"#!/api/Unity.Pim-property-ALARM_SOUND\" rel=\"Unity.Pim-property-ALARM_SOUND\" class=\"docClass\">ALARM_SOUND</a>.</p>\n<p>Defaults to: <code>''</code></p></div></div></div><div id='property-Trigger' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Pim.CalendarAlarm'>Unity.Pim.CalendarAlarm</span><br/><a href='source/appverse-data.html#Unity-Pim-CalendarAlarm-property-Trigger' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Pim.CalendarAlarm-property-Trigger' class='name expandable'>Trigger</a><span> : <a href=\"#!/api/Unity.Pim.DateTime\" rel=\"Unity.Pim.DateTime\" class=\"docClass\">Unity.Pim.DateTime</a></span></div><div class='description'><div class='short'>The datetime trigger to start the alarm. ...</div><div class='long'><p>The datetime trigger to start the alarm. <br/><br/>For further information see, <a href=\"#!/api/Unity.Pim.DateTime\" rel=\"Unity.Pim.DateTime\" class=\"docClass\">DateTime</a>.</p>\n</div></div></div></div></div></div></div>"});