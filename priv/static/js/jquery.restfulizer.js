/*!
* RestfulizerJs 0.1
* http://ifnot.github.io/RestfulizerJs/
*
* Use jQuery
* http://jquery.com/
*
* Inspired by froztbytes works :
* https://gist.github.com/froztbytes/5385905
*
* Copyright 2014 Anael Favre and other contributors
* Released under the MIT license
* https://raw.github.com/Ifnot/RestfulizerJs/master/LICENCE
*/

(function($){
  $.fn.extend({
    restfulizer: function(options) {
      var defaults = {
        parse: false,
        target: null,
        method: "POST"
      };
      var options =  $.extend(defaults, options);
      var last = null;

      return this.each(function() {
        var self = $(this);

        // Try to get data-param into options
        if(typeof($(this).attr('data-method')) != "undefined") {
          options.method = $(this).attr('data-method').toUpperCase();
        }
        if(typeof($(this).attr('href')) != "undefined") {
          options.target = $(this).attr('href');
        }

        // Parse href parameters and create an input for each parameter
        var inputs = "";
        if(options.parse) {
          var params = options.target.substr(options.target.indexOf("?")+1).split('&');
          options.target = options.target.substr(0, options.target.indexOf("?"));

          for (var i = 0; i < params.length; i++) {
            var pair = params[i].split('=');
            inputs += "	<input type='hidden' name='" + decodeURIComponent(pair[0]) + "' value='" + decodeURIComponent(pair[1]) + "'>\n";
          }
        }

        if(options.method == 'GET' || options.method == 'POST') {
          var form = "\n" +
          "<form action='" + options.target + "' method='" + options.method + "' style='display:none'>\n" +
          inputs +
          "</form>\n";
        }
        else {
          var form = "\n" +
          "<form action='" + options.target + "' method='POST' style='display:none'>\n" +
          "	<input type='hidden' name='_method' value='" + options.method + "'>\n" +
          inputs +
          "</form>\n";
        }

        self.append(form)
        .removeAttr('href')
        .attr('style','cursor:pointer;')
        .attr('onclick','$(this).find("form").submit();');
      });
    }
  });
})(jQuery);
