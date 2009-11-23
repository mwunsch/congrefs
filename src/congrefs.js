/**
 * Congrefs v0.1.0
 *
 * Copyright (c) 2009 Mark Wunsch
 * Licensed under the MIT and GPL Licenses.
 * http://creativecommons.org/licenses/MIT/
 * http://www.gnu.org/licenses/gpl.html
**/

(function(window){
  
  var Congrefs = function(text, lang) {
    lang = lang || 'en-us';
    var long_s = "\u017F";
    var pattern = /(s(?!\b|f))/gi;
    
    return text.replace(pattern, long_s);
  };
  
  window.Congrefs = Congrefs;
})(this);