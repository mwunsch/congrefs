(function ($) {
  /**
   * Congrefs: replaces the short s with a long s, according to the rules:
   * http://babelstone.blogspot.com/2006/06/rules-for-long-s.html 
   *
   * @param lang
   *   (Optional) If given, this will be the language rules to apply.
   *   This is not yet implemented. Maybe a future version.
   *
   * @version 0.1
   * @see http://github.com/mwunsch/congrefs
   *
   * Copyright (c) 2009 Mark Wunsch <mark@markwunsch.com>
   * Dual licensed under the MIT and GPL licenses.
   */
  $.fn.congrefs = function(lang) {
    lang = lang || 'en-us';
    var long_s = "\u017F";
    var pattern = /(s(?!\b|f))/gi;
    
    this.each(function(i){
      var $this = $(this);
      var text = $this.text();
      
      $this.text(text.replace(pattern, long_s));
    });
    
    return this;
  };
})(jQuery);