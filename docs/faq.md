## FAQ

__Does this plugin require configuration?__

No, simply install and activate the plugin and you'll be able to track iPad devices.

__Does this plugin work with Tag Manager?__

Yes, as long as you bundle matomo.js in your Matomo Configuration variable and enable "Register as default tracker".

__Why do I need this plugin? Why doesn't this functionality exist already?__

Matomo detects what device/user agent is sending requests to your Matomo server by using the user agent sent with the request to the web server.
iPads pretend to be Desktop devices to websites by sending a macOS desktop User Agent to prevent receiving mobile versions of websites which are not optimised for iPad screen sizes. This plugin detects iPads using User Agent detection for a Macbook device with a touchscreen and then overwrites the User Agent with that of a iPad User agent so that Matomo can track it correctly. Since no Macbook exists with a touchscreen this method should be safe to use for this purpose.
