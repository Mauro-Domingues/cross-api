import { Messages } from './messages.js';
import { Console } from './console.js';

export class Pluralize {
  console;
  uncontableData = [
    'adulthood',
    'advice',
    'agenda',
    'aid',
    'aircraft',
    'alcohol',
    'ammo',
    'analytics',
    'anime',
    'athletics',
    'audio',
    'bison',
    'blood',
    'bream',
    'buffalo',
    'butter',
    'carp',
    'cash',
    'chassis',
    'chess',
    'clothing',
    'cod',
    'commerce',
    'cooperation',
    'corps',
    'debris',
    'diabetes',
    'digestion',
    'elk',
    'energy',
    'equipment',
    'excretion',
    'expertise',
    'firmware',
    'flounder',
    'fun',
    'gallows',
    'garbage',
    'graffiti',
    'hardware',
    'headquarters',
    'health',
    'herpes',
    'highjinks',
    'homework',
    'housework',
    'information',
    'jeans',
    'justice',
    'kudos',
    'labour',
    'literature',
    'machinery',
    'mackerel',
    'mail',
    'media',
    'mews',
    'moose',
    'music',
    'mud',
    'manga',
    'news',
    'only',
    'personnel',
    'pike',
    'plankton',
    'pliers',
    'police',
    'pollution',
    'premises',
    'rain',
    'research',
    'rice',
    'salmon',
    'scissors',
    'series',
    'sewage',
    'shambles',
    'shrimp',
    'software',
    'species',
    'staff',
    'swine',
    'tennis',
    'traffic',
    'transportation',
    'trout',
    'tuna',
    'wealth',
    'welfare',
    'whiting',
    'wildebeest',
    'wildlife',
    'you',
    /pok[eé]mon$/i,
    /[^aeiou]ese$/i,
    /deer$/i,
    /fish$/i,
    /measles$/i,
    /o[iu]s$/i,
    /pox$/i,
    /sheep$/i,
  ];
  irregularData = [
    ['I', 'we'],
    ['me', 'us'],
    ['he', 'they'],
    ['she', 'they'],
    ['them', 'them'],
    ['myself', 'ourselves'],
    ['yourself', 'yourselves'],
    ['itself', 'themselves'],
    ['herself', 'themselves'],
    ['himself', 'themselves'],
    ['themself', 'themselves'],
    ['is', 'are'],
    ['was', 'were'],
    ['has', 'have'],
    ['this', 'these'],
    ['that', 'those'],
    ['echo', 'echoes'],
    ['dingo', 'dingoes'],
    ['volcano', 'volcanoes'],
    ['tornado', 'tornadoes'],
    ['torpedo', 'torpedoes'],
    ['genus', 'genera'],
    ['viscus', 'viscera'],
    ['stigma', 'stigmata'],
    ['stoma', 'stomata'],
    ['dogma', 'dogmata'],
    ['lemma', 'lemmata'],
    ['schema', 'schemata'],
    ['anathema', 'anathemata'],
    ['ox', 'oxen'],
    ['axe', 'axes'],
    ['die', 'dice'],
    ['yes', 'yeses'],
    ['foot', 'feet'],
    ['eave', 'eaves'],
    ['goose', 'geese'],
    ['tooth', 'teeth'],
    ['quiz', 'quizzes'],
    ['human', 'humans'],
    ['proof', 'proofs'],
    ['carve', 'carves'],
    ['valve', 'valves'],
    ['looey', 'looies'],
    ['thief', 'thieves'],
    ['groove', 'grooves'],
    ['pickaxe', 'pickaxes'],
    ['passerby', 'passersby'],
  ];
  singularData = [
    [/s$/i, ''],
    [/(ss)$/i, '$1'],
    [/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i, '$1fe'],
    [/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, '$1f'],
    [/ies$/i, 'y'],
    [
      /\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,
      '$1ie',
    ],
    [/\b(mon|smil)ies$/i, '$1ey'],
    [/\b((?:tit)?m|l)ice$/i, '$1ouse'],
    [/(seraph|cherub)im$/i, '$1'],
    [
      /(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,
      '$1',
    ],
    [
      /(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,
      '$1sis',
    ],
    [/(movie|twelve|abuse|e[mn]u)s$/i, '$1'],
    [/(test)(?:is|es)$/i, '$1is'],
    [
      /(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,
      '$1us',
    ],
    [
      /(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,
      '$1um',
    ],
    [
      /(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,
      '$1on',
    ],
    [/(alumn|alg|vertebr)ae$/i, '$1a'],
    [/(cod|mur|sil|vert|ind)ices$/i, '$1ex'],
    [/(matr|append)ices$/i, '$1ix'],
    [/(pe)(rson|ople)$/i, '$1rson'],
    [/(child)ren$/i, '$1'],
    [/(eau)x?$/i, '$1'],
    [/men$/i, 'man'],
  ];
  pluralData = [
    [/s?$/i, 's'],
    [/[^\u0000-\u007F]$/i, '$0'],
    [/([^aeiou]ese)$/i, '$1'],
    [/(ax|test)is$/i, '$1es'],
    [/(alias|[^aou]us|t[lm]as|gas|ris)$/i, '$1es'],
    [/(e[mn]u)s?$/i, '$1s'],
    [/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i, '$1'],
    [
      /(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,
      '$1i',
    ],
    [/(alumn|alg|vertebr)(?:a|ae)$/i, '$1ae'],
    [/(seraph|cherub)(?:im)?$/i, '$1im'],
    [/(her|at|gr)o$/i, '$1oes'],
    [
      /(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,
      '$1a',
    ],
    [
      /(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,
      '$1a',
    ],
    [/sis$/i, 'ses'],
    [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, '$1$2ves'],
    [/([^aeiouy]|qu)y$/i, '$1ies'],
    [/([^ch][ieo][ln])ey$/i, '$1ies'],
    [/(x|ch|ss|sh|zz)$/i, '$1es'],
    [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, '$1ices'],
    [/\b((?:tit)?m|l)(?:ice|ouse)$/i, '$1ice'],
    [/(pe)(?:rson|ople)$/i, '$1ople'],
    [/(child)(?:ren)?$/i, '$1ren'],
    [/eaux$/i, '$0'],
    [/m[ae]n$/i, 'men'],
    ['thou', 'you'],
  ];
  messages;
  word;
  pluralRules;
  singularRules;
  uncountables;
  irregularPlurals;
  irregularSingles;
  constructor(word) {
    this.word = word;
    this.messages = new Messages().execute();
    this.console = new Console();
    this.pluralRules = [];
    this.singularRules = [];
    this.irregularPlurals = {};
    this.irregularSingles = {};
    this.uncountables = {};
    this.pluralData.map(data => this.addPluralRule(data[0], data[1]));
    this.singularData.map(data => this.addSingularRule(data[0], data[1]));
    this.uncontableData.map(data => this.addUncountableRule(data));
    this.irregularData.map(data => this.addIrregularRule(data[0], data[1]));
  }
  replace(word, rule) {
    return word.replace(rule[0], (match, index) => {
      const result = this.interpolate(rule[1], [null, index]);
      if (match === '') {
        return this.restoreCase(word[index - 1], result);
      }
      return this.restoreCase(match, result);
    });
  }
  restoreCase(word, token) {
    if (word === token) return token;
    if (word === word.toLowerCase()) return token.toLowerCase();
    if (word === word.toUpperCase()) return token.toUpperCase();
    if (word[0] === word[0].toUpperCase()) {
      return (
        token.charAt(0).toUpperCase() +
        token.replace(token.charAt(0), token.charAt(0).toUpperCase())
      );
    }
    return token.toLowerCase();
  }
  sanitizeWord(token, word, rules) {
    if (!token.length || this.uncountables[token]) {
      return word;
    }
    let len = rules.length;
    while (len) {
      len -= 1;
      const rule = rules[len];
      if (rule && rule[0].test(word)) {
        return this.replace(word, rule);
      }
    }
    return word;
  }
  replaceWord(replaceMap, keepMap, rules) {
    if (!this.word) {
      this.console.one([
        `this${this.messages.invalidLanguage}`,
        'red',
        true,
        false,
        false,
      ]);
      throw new Error();
    }
    const token = this.word.toLowerCase();
    if (keepMap[token]) {
      return this.restoreCase(this.word, token);
    }
    if (replaceMap[token]) {
      return this.restoreCase(this.word, replaceMap[token]);
    }
    return this.sanitizeWord(token, this.word, rules);
  }
  checkWord(replaceMap, keepMap, rules) {
    if (!this.word) {
      this.console.one([
        `this${this.messages.invalidLanguage}`,
        'red',
        true,
        false,
        false,
      ]);
      throw new Error();
    }
    const token = this.word.toLowerCase();
    if (keepMap[token]) return true;
    if (replaceMap[token]) return false;
    return this.sanitizeWord(token, token, rules) === token;
  }
  sanitizeRule(rule) {
    if (typeof rule === 'string') {
      return new RegExp(`^${rule}$`, 'i');
    }
    return rule;
  }
  interpolate(str, args) {
    return str.replace(/\$(\d{1,2})/g, (_match, index) => {
      return args[index];
    });
  }
  addIrregularRule(single, plural) {
    this.irregularSingles[single] = plural.toLowerCase();
    this.irregularPlurals[plural] = single.toLowerCase();
  }
  addPluralRule(rule, replacement) {
    if (typeof replacement === 'string')
      this.pluralRules.push([this.sanitizeRule(rule), replacement]);
  }
  addSingularRule(rule, replacement) {
    if (typeof replacement === 'string')
      this.singularRules.push([this.sanitizeRule(rule), replacement]);
  }
  addUncountableRule(word) {
    if (typeof word === 'string') {
      this.uncountables[word.toLowerCase()] = true;
      return;
    }
    this.addPluralRule(word, '$0');
    this.addSingularRule(word, '$0');
  }
  isPlural() {
    return this.checkWord(
      this.irregularSingles,
      this.irregularPlurals,
      this.pluralRules,
    );
  }
  isSingular() {
    return this.checkWord(
      this.irregularPlurals,
      this.irregularSingles,
      this.singularRules,
    );
  }
  plural() {
    return this.replaceWord(
      this.irregularSingles,
      this.irregularPlurals,
      this.pluralRules,
    );
  }
  singular() {
    return this.replaceWord(
      this.irregularPlurals,
      this.irregularSingles,
      this.singularRules,
    );
  }
}
