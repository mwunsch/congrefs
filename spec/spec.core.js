
describe 'Congrefs'
  
  it 'A short S is used at the end of words'
    var congrefs = Congrefs("e.g. his, complains, success")
    congrefs.should.eql "e.g. his, complains, \u017Fucce\u017Fs"
  end
  
  it "A short S is used before an apostrophe"
    var congrefs = Congrefs("e.g. clos'd, us'd")
    congrefs.should.eql "e.g. clos'd, us'd"
  end
  
  it "A short S is used before the letter 'F'"
    var congrefs = Congrefs("e.g. satisfaction, misfortune, transfute, transfix, transfer, successful")
    congrefs.should.eql "e.g. \u017Fatisfaction, misfortune, transfute, transfix, transfer, \u017Fucce\u017Fsful"
  end
  
  it "A long S is used initially and medially except for the exceptions noted above"
    var congrefs = Congrefs("e.g. song, use, press, substitute")
    congrefs.should.eql "e.g. \u017Fong, u\u017Fe, pre\u017Fs, \u017Fub\u017Ftitute"
  end
  
  it "A short S is used before a hyphen in compound words with the first element ending in the letter 'S'"
    var congrefs = Congrefs("e.g. cross-piece, cross-examination, Press-work, bird's-nest")
    congrefs.should.eql "e.g. cro\u017Fs-piece, cro\u017Fs-examination, Pre\u017Fs-work, bird's-ne\u017Ft"
  end
  
  describe 'jQuery plugin'
    before_each
      dom = jQuery(fixture('fixture.html'))
      h1 = dom.find('h1')
    end
    
    it "modifies the text of a jQuery object"
      h1.congrefs().text().should.eql "In Congre\u017Fs"
    end
    
  end
  
end