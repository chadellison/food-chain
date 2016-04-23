var FoodChain = function() {}

FoodChain.prototype.verse = function(verse) {
  switch (verse) {
    case 1:
    return verseOne() + ending()
    break
    case 2:
    return verseTwo() + ending()
    break
    case 3:
    return verseThree() + ending()
    break
    case 4:
    return verseFour() + ending()
    break
    case 5:
    return verseFive() + ending()
    break
    case 6:
    return verseSix() + ending()
    break
    case 7:
    return verseSeven() + ending()
    break
    case 8:
    return verseEight()
    break
  }
}

FoodChain.prototype.verses = function(start, end) {
  return this.verse(start) +'\n' + this.verse(end) + '\n'
}

var verseOne = function() {
  return 'I know an old lady who swallowed a fly.\n'
}

var verseTwo = function() {
  return 'I know an old lady who swallowed a spider.\nIt wriggled and jiggled and tickled inside her.\n' +
    'She swallowed the spider to catch the fly.\n'
}

var verseThree = function() {
  return 'I know an old lady who swallowed a bird.\n' +
    'How absurd to swallow a bird!\n' +
    'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' +
    verseTwo().split('\n')[2] + '\n'
}

var verseFour = function() {
  return 'I know an old lady who swallowed a cat.\n' +
    'Imagine that, to swallow a cat!\n' +
    'She swallowed the cat to catch the bird.\n' +
    verseThree().split('\n').slice(2, 4).join('\n') + '\n'
}

var verseFive = function() {
  return 'I know an old lady who swallowed a dog.\n' +
    'What a hog, to swallow a dog!\n' +
    'She swallowed the dog to catch the cat.\n' +
    verseFour().split('\n').slice(2, 5).join('\n') + '\n'
}

var verseSix = function() {
  return 'I know an old lady who swallowed a goat.\n' +
    'Just opened her throat and swallowed a goat!\n' +
    'She swallowed the goat to catch the dog.\n' +
    verseFive().split('\n').slice(2, 6).join('\n') + '\n'
}

var verseSeven = function() {
  return 'I know an old lady who swallowed a cow.\n' +
    'I don\'t know how she swallowed a cow!\n' +
    'She swallowed the cow to catch the goat.\n' +
    verseSix().split('\n').slice(2, 7).join('\n') + '\n'
}

var verseEight = function() {
  return 'I know an old lady who swallowed a horse.\n' + 'She\'s dead, of course!\n'
}

var ending = function() {
  return 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n'
}

module.exports = FoodChain
