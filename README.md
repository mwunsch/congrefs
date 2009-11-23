# Congrefs

Congrefs is a little JavaScript function that sprinkles the long S (ſ) throughout your text. It looks like an *f*. But it's not. It is an *S*.

Learn more about the long S on [Wikipedia](http://en.wikipedia.org/wiki/Long_s)

## Usage:

	var some_text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit."	
	var with_long_s = Congrefs(long_string_of_text);
	
This gives you
	
	"Lorem ipſum dolor ſit amet, conſectetur adipiſicing elit."
	
There's also a jQuery plugin:

	$("<h1>In Congress</h1>").congrefs().text();
	
Will give you

	"In Congreſs"

The script follows the [Rules for Long S](http://babelstone.blogspot.com/2006/06/rules-for-long-s.html):

> * A short S is used at the end of words (e.g. his, complains, ſucceſs).
*	A short S is used before an apostrophe (e.g. clos'd, us'd).
*	A short S is used before the letter 'F' (e.g. ſatisfaction, misfortune, transfute, transfix, transfer, ſucceſsful).
*	A long S is used initially and medially except for the exceptions noted above (e.g. ſong, uſe, preſs, ſubſtitute).
*	A short S is used before a hyphen in compound words with the first element ending in the letter 'S' (e.g. croſs-piece, croſs-examination, Preſs-work, bird's-neſt).

As best it can.

Future versions might have support for multiple languages...maybe.

Copyright (c) 2009 Mark Wunsch
Released under both the MIT License and GNU General Public License (GPL).