Ext.data.JsonP.push_notifications({"guide":"<h1>Enabling Push Notifications</h1>\n<div class='toc'>\n<p><strong>Contents</strong></p>\n<ol>\n<li><a href='#!/guide/push_notifications-section-1'>On iOS devices</a></li>\n<li><a href='#!/guide/push_notifications-section-2'>On Android devices</a></li>\n<li><a href='#!/guide/push_notifications-section-3'>On All platforms</a></li>\n<li><a href='#!/guide/push_notifications-section-4'>Only on iOS Platform</a></li>\n</ol>\n</div>\n\n<h2 id='push_notifications-section-1'>On iOS devices</h2>\n\n<p>Ensure that your application \"bundle id\" has been enabled to receive <b>Push Notifications</b> on the <b>Apple iOS Developer Program Portal</b>.</p>\n\n<p>There are two environments to be enabled per application:</p>\n\n<ul>\n<li><strong>Development</strong> environment (also called as 'Sandbox')</li>\n<li><strong>Production</strong> environment</li>\n</ul>\n\n\n<p>When enabling an environment for a specific bundle id, a corresponding <strong>certificate</strong> is created. That certificate must be distributed to your <strong>Push Notification Provider</strong> (the server side of your app that will be in charge of sending notifications to this app).</p>\n\n<p>Any <strong>Provisioning Profile</strong> previously submitted for you bundle id application <strong>MUST BE re-downloaded</strong> and <strong>re-distributed</strong> again after enabling one notifications enviroment:</p>\n\n<ul>\n<li>Enabling the <strong>development</strong> environment will change any <strong>Development Provisioning Profile</strong> associated with you bundle id.</li>\n<li>Enabling the <strong>production</strong> environment will change any <strong>Distribution Provisioning Profile</strong> associated with your bundle id.</li>\n</ul>\n\n\n<p>Once you application is configured for enabling push notifications, you could follow the same steps as the other platforms.</p>\n\n<h2 id='push_notifications-section-2'>On Android devices</h2>\n\n<h3>Sender ID</h3>\n\n<p>When registering for receiving remote notifications (using the <strong><a href=\"#!/api/Unity-method-OnRegisterForRemoteNotificationsSuccess\" rel=\"Unity-method-OnRegisterForRemoteNotificationsSuccess\" class=\"docClass\">Unity.OnRegisterForRemoteNotificationsSuccess</a></strong> method), the <strong>senderId</strong> argumemnt value is required for Android devices. In other platforms (such as the iOS platform, this value will be just ignored).</p>\n\n<h3>Notification Configuration</h3>\n\n<p>Whereas the <b> Apple Push Notifications Service</b> (APNs) has a predefined fields names for the notification data, the <b>Google Cloud Messaging</b> (GMC) works with custom fields. Due to that fact, your application will have to define some custom fields to be received.</p>\n\n<p>The configuration file should be placed at the <b>/app/config/</b> folder with the <b>notification-config.xml</b> name, and the following structure (the number of fields, and their names are custom; types are predefined):</p>\n\n<pre><code>    &lt;?xml version=\"1.0\" encoding=\"UTF-8\"?&gt;\n    &lt;notification-config&gt;\n        &lt;android&gt; &lt;!-- not all fields are required, this is an example --&gt;\n            &lt;field name=\"body\" type=\"RN_BODY\"/&gt;\n            &lt;field name=\"title\" type=\"RN_TITLE\"/&gt;\n            &lt;field name=\"sound\" type=\"RN_SOUND\"/&gt;\n            &lt;field name=\"ticker\" type=\"RN_TICKER\"/&gt;\n            &lt;field name=\"largeicon\" type=\"RN_LARGE_ICON\"/&gt;\n            &lt;field name=\"smallicon\" type=\"RN_SMALL_ICON\"/&gt;\n            &lt;field name=\"ledcolor\" type=\"RN_LED_COLOR_ARGB\"/&gt;\n        &lt;/android&gt;\n    &lt;/notification-config&gt;  \n</code></pre>\n\n<p>To following field types are available:</p>\n\n<ul>\n<li><b>RN_TITLE</b> : the title to be used for the notification alert.</li>\n<li><b>RN_BODY</b> : the message body for the notification alert.</li>\n<li><b>RN_TICKET</b> : the text displayed in the status bar when the notification first arrives, on some devices.</li>\n<li><b>RN_SOUND</b> : the sound to play when a notification alert arrives (default sound is played instead).</li>\n<li><b>RN_SMALL_ICON</b> : the small icon name to be displaed on the notification center (if not provided, the application icon is displayed).</li>\n<li><b>RN_LARGE_ICON</b> : the large icon name to be displayed on the notification center for large screen devices (if not provided, the application icon is displayed).</li>\n<li><b>RN_LED_COLOR_ARGB</b> : the color of the led to be activated when a remote notification arrives. More information at: <a href=\"http://developer.android.com/reference/android/app/Notification.Builder.html#setLights(int, int, int)\">android.app.Notification.Builder</a></li>\n</ul>\n\n\n<h3>Server Side example</h3>\n\n<p>The following code is a test example to send remote notifications through the <b>GCM Server</b> (Java implementation):</p>\n\n<pre><code>    import com.google.android.gcm.server.*;\n\n    public static void main(String[] args){\n\n        Sender sender = new Sender(\"&lt;your google account number to send notifications&gt;\");\n        Message.Builder build = new Message.Builder();\n\n        // main fields (should map the ones specified at the notification-config.xml file)\n        build.addData(\"title\", \"Notification Title\");\n        build.addData(\"body\", \"You have received a notification\");\n\n        // custom data\n        build.addData(\"customdata\", \"this is a custom data send by the notification server\");\n\n        Message msg = build.build();\n        Result rs;\n        try {\n\n            String  = \"&lt;the registration id returned by the GCM when you invoke the <a href=\"#!/api/Unity.Notification-method-RegisterForRemoteNotifications\" rel=\"Unity.Notification-method-RegisterForRemoteNotifications\" class=\"docClass\">Unity.Notification.RegisterForRemoteNotifications</a> method&gt;\"\n            rs = sender.send(msg, registrationId, 1);\n\n            System.out.println(rs.toString());\n        } catch (IOException e) {\n            // TODO Auto-generated catch block\n            e.printStackTrace();\n        }\n    }\n</code></pre>\n\n<p>See the <b>Showcase</b> application for an example of the usage.</p>\n\n<h2 id='push_notifications-section-3'>On All platforms</h2>\n\n<p>To <strong>REGISTER</strong> your application for receiving Push Notification, please use the <strong><a href=\"#!/api/Unity.Notification-method-RegisterForRemoteNotifications\" rel=\"Unity.Notification-method-RegisterForRemoteNotifications\" class=\"docClass\">Unity.Notification.RegisterForRemoteNotifications</a></strong> method.</p>\n\n<p>(*) Note: remote notifications are not granted to be delivered to the device. In addition, the registration token supplied by the Push Notificaion Service after registration could change. So it is a common approach to execute the registration each time the application launches.</p>\n\n<p>To <strong>UNREGISTER</strong> your application from receiving Push Notification, please use the <strong><a href=\"#!/api/Unity.Notification-method-UnRegisterForRemoteNotifications\" rel=\"Unity.Notification-method-UnRegisterForRemoteNotifications\" class=\"docClass\">Unity.Notification.UnRegisterForRemoteNotifications</a></strong> method.</p>\n\n<p>Your app should override some <strong>platform event listeners</strong> in order to:</p>\n\n<ul>\n<li><p>Be notified about a <strong>SUCESSFUL REGISTRATION</strong>, by overriding the <strong><a href=\"#!/api/Unity-method-OnRegisterForRemoteNotificationsSuccess\" rel=\"Unity-method-OnRegisterForRemoteNotificationsSuccess\" class=\"docClass\">Unity.OnRegisterForRemoteNotificationsSuccess</a></strong> method.</p>\n\n<ul>\n<li>When called, this method will receive as an argument the <strong>registration token</strong> (\"device token\" for iOS or \"registration ID\" for Android) received from the Notifications Service (APNs for iOS or GMC for Android).</li>\n<li>This token must be sended to your application <strong>Push Notification Provider</strong>, using a secure SSL channel (the <strong><a href=\"#!/api/Unity.IO\" rel=\"Unity.IO\" class=\"docClass\">Unity.IO</a></strong> services could be used for that purpose).</li>\n<li>For further details check the <strong><a href=\"#!/api/Unity.Notification.RegistrationToken\" rel=\"Unity.Notification.RegistrationToken\" class=\"docClass\">Unity.Notification.RegistrationToken</a></strong> class.</li>\n</ul>\n</li>\n<li><p>Be notified about a <strong>FAILURE REGISTRATION</strong>, by overriding the <strong><a href=\"#!/api/Unity-method-OnRegisterForRemoteNotificationsFailure\" rel=\"Unity-method-OnRegisterForRemoteNotificationsFailure\" class=\"docClass\">Unity.OnRegisterForRemoteNotificationsFailure</a></strong> method.</p>\n\n<ul>\n<li>When called, this method will receive as an argument the <strong>registration error</strong> information.</li>\n<li>Available error codes on <strong>Android Platform</strong>:\n\n<ul>\n<li><strong><a href=\"#!/api/Unity.Notification-property-REMOTE_NOTIFICATION_REGISTRATION_FAILURE_DEFAULT\" rel=\"Unity.Notification-property-REMOTE_NOTIFICATION_REGISTRATION_FAILURE_DEFAULT\" class=\"docClass\">Unity.Notification#REMOTE_NOTIFICATION_REGISTRATION_FAILURE_DEFAULT</a></strong> : this is the default error code value received when an error ocurrs during the registration process.</li>\n<li><strong><a href=\"#!/api/Unity.Notification-property-REMOTE_NOTIFICATION_REGISTRATION_FAILURE_MISMATCH_SENDERID\" rel=\"Unity.Notification-property-REMOTE_NOTIFICATION_REGISTRATION_FAILURE_MISMATCH_SENDERID\" class=\"docClass\">Unity.Notification#REMOTE_NOTIFICATION_REGISTRATION_FAILURE_MISMATCH_SENDERID</a></strong> : this is the error code value received when your application is trying to register with a sender id but your device/application is already registered with another sender id (a previous one, maybe a test one).\n\n<ul>\n<li>When receiving this error, your application should perform an unregistration (via the <strong><a href=\"#!/api/Unity.Notification-method-UnRegisterForRemoteNotifications\" rel=\"Unity.Notification-method-UnRegisterForRemoteNotifications\" class=\"docClass\">Unity.Notification.UnRegisterForRemoteNotifications</a></strong> method) and repeat the registration call when the platform calls your <strong><a href=\"#!/api/Unity-method-OnUnRegisterForRemoteNotificationsSuccess\" rel=\"Unity-method-OnUnRegisterForRemoteNotificationsSuccess\" class=\"docClass\">Unity.OnUnRegisterForRemoteNotificationsSuccess</a></strong> method implementation.</li>\n</ul>\n</li>\n<li><strong><a href=\"#!/api/Unity.Notification-property-REMOTE_NOTIFICATION_REGISTRATION_FAILURE_GCM_SERVER\" rel=\"Unity.Notification-property-REMOTE_NOTIFICATION_REGISTRATION_FAILURE_GCM_SERVER\" class=\"docClass\">Unity.Notification#REMOTE_NOTIFICATION_REGISTRATION_FAILURE_GCM_SERVER</a></strong> : this is error code value received when an error is sendby the GCM Server either on the registration or unregistration process.</li>\n</ul>\n</li>\n<li>For further details check the <strong><a href=\"#!/api/Unity.Notification.RegistrationError\" rel=\"Unity.Notification.RegistrationError\" class=\"docClass\">Unity.Notification.RegistrationError</a></strong> class.</li>\n</ul>\n</li>\n<li><p>Be notified about an <strong>INCOMING REMOTE NOTIFICATION</strong>,  by overriding the <strong><a href=\"#!/api/Unity-method-OnRemoteNotificationReceived\" rel=\"Unity-method-OnRemoteNotificationReceived\" class=\"docClass\">Unity.OnRemoteNotificationReceived</a></strong> method.</p>\n\n<ul>\n<li>When called, this method will receive as an argument the <strong>notification data</strong> information.</li>\n<li>This method is not called when the notification is received and the application is not running.</li>\n<li>For further details check the <strong><a href=\"#!/api/Unity.Notification.NotificationData\" rel=\"Unity.Notification.NotificationData\" class=\"docClass\">Unity.Notification.NotificationData</a></strong> class.</li>\n</ul>\n</li>\n<li><p>Be notified about a <strong>SUCESSFUL UNREGISTRATION</strong>, by overriding the <strong><a href=\"#!/api/Unity-method-OnUnRegisterForRemoteNotificationsSuccess\" rel=\"Unity-method-OnUnRegisterForRemoteNotificationsSuccess\" class=\"docClass\">Unity.OnUnRegisterForRemoteNotificationsSuccess</a></strong> method. <br/><img src=\"resources/images/warning.png\"/> This method is just called on <strong>Android</strong> Platform.</p>\n\n<ul>\n<li>This method will just aware the application that the last unregistration call (via the <strong><a href=\"#!/api/Unity.Notification-method-UnRegisterForRemoteNotifications\" rel=\"Unity.Notification-method-UnRegisterForRemoteNotifications\" class=\"docClass\">Unity.Notification.UnRegisterForRemoteNotifications</a></strong> method) was successful.</li>\n</ul>\n</li>\n</ul>\n\n\n<h2 id='push_notifications-section-4'>Only on iOS Platform</h2>\n\n<p>The following methods are only available on the <strong>iOS</strong> platform:</p>\n\n<ul>\n<li><strong><a href=\"#!/api/Unity.Notification-method-IncrementApplicationIconBadgeNumber\" rel=\"Unity.Notification-method-IncrementApplicationIconBadgeNumber\" class=\"docClass\">Unity.Notification.IncrementApplicationIconBadgeNumber</a></strong></li>\n<li><strong><a href=\"#!/api/Unity.Notification-method-DecrementApplicationIconBadgeNumber\" rel=\"Unity.Notification-method-DecrementApplicationIconBadgeNumber\" class=\"docClass\">Unity.Notification.DecrementApplicationIconBadgeNumber</a></strong></li>\n<li><strong><a href=\"#!/api/Unity.Notification-method-SetApplicationIconBadgeNumber\" rel=\"Unity.Notification-method-SetApplicationIconBadgeNumber\" class=\"docClass\">Unity.Notification.SetApplicationIconBadgeNumber</a></strong></li>\n</ul>\n\n\n<p>They allow the application to change the application bage number (the number inside the red icon located at the application top-right corner).\nThis feature is not available on the Android platform.</p>\n","title":"Enabling Push Notifications"});