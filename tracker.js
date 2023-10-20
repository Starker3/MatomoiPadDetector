(function() {
    try {
        let isIpad = /Macintosh/i.test(navigator.userAgent) && navigator.maxTouchPoints && navigator.maxTouchPoints > 1;
        if (isIpad){
          const versionRegex = /Version\/(\d+(\.\d+)?)/;
          const version = navigator.userAgent.match(versionRegex);
          const modifiedVersion = version[1].replace(/\./g, '_');
          const deviceRegex = /\([^)]+\) AppleWebKit/;
          const ipad_ua = navigator.userAgent.replace(deviceRegex, "(iPad; CPU OS " + modifiedVersion + ") AppleWebKit");
          _paq.push(['appendToTrackingUrl', 'ua='+ipad_ua]); 
        }
    }
    catch (error) {
        console.error(error);
    }
})();