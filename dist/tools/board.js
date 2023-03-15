"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Board = void 0;
var _messages = _interopRequireDefault(require("./messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class Board {
  constructor() {
    this.messages = void 0;
    this.toolOptions = void 0;
    this.ormOptions = void 0;
    this.structureOptions = void 0;
    this.messages = _messages.default;
    this.toolOptions = [{
      title: 'comands             ',
      description: _messages.default.comands
    }, {
      title: 'language            ',
      description: _messages.default.changeLanguage
    }, {
      title: 'list:provider       ',
      description: _messages.default.listProvider
    }];
    this.ormOptions = [{
      title: 'migration:generate           ',
      description: _messages.default.migrationGenerate
    }, {
      title: 'migration:run                ',
      description: _messages.default.migrationRun
    }];
    this.structureOptions = [{
      title: 'make:api                     ',
      description: _messages.default.makeApi
    }, {
      title: 'make:module [name]           ',
      description: _messages.default.makeModule
    }, {
      title: 'make:module [name] [father]  ',
      description: _messages.default.makeModuleD
    }, {
      title: 'make:provider [name]         ',
      description: _messages.default.makeProvider
    }, {
      title: 'make:provider [name] [father]',
      description: _messages.default.makeProviderD
    }, {
      title: 'migration:generate           ',
      description: _messages.default.migrationGenerate
    }, {
      title: 'revert                       ',
      description: _messages.default.undo
    }];
  }
  renderEmptyLine() {
    console.log('\x1b[1m', '\x1b[38;2;0;155;255m', '|                                                                                                                        |', '\x1b[0m');
  }
  renderToolOptions() {
    this.renderEmptyLine();
    console.log('\x1b[1m', '\x1b[38;2;0;155;255m', '|', '\x1b[38;2;0;255;155m', ` 〇 ${this.messages.tools}`, '\x1b[38;2;0;155;255m', '                                                                                                     |', '\x1b[0m');
    this.renderEmptyLine();
    this.toolOptions.forEach(tool => {
      console.log('\x1b[1m', '\x1b[38;2;0;155;255m', '|', '\x1b[38;2;255;255;0m', `   ➤  ${tool.title}         `, '\x1b[38;2;0;155;255m', '|', '\x1b[0m', `${tool.description}`, '\x1b[1m', '\x1b[38;2;0;155;255m', '                          |', '\x1b[0m');
      this.renderEmptyLine();
    });
  }
  renderOrmOptions() {
    console.log('\x1b[1m', '\x1b[38;2;0;155;255m', '|', '\x1b[38;2;0;255;155m', ` 〇 ORM`, '\x1b[38;2;0;155;255m', '                                                                                                             |', '\x1b[0m');
    this.renderEmptyLine();
    this.ormOptions.forEach(orm => {
      console.log('\x1b[1m', '\x1b[38;2;0;155;255m', '|', '\x1b[38;2;255;255;0m', `   ➤  ${orm.title}`, '\x1b[38;2;0;155;255m', '|', '\x1b[0m', `${orm.description}`, '\x1b[1m', '\x1b[38;2;0;155;255m', '|', '\x1b[0m');
      this.renderEmptyLine();
    });
  }
  renderStructureOptions() {
    console.log('\x1b[1m', '\x1b[38;2;0;155;255m', '|', '\x1b[38;2;0;255;155m', ` 〇 ${this.messages.structure}`, '\x1b[38;2;0;155;255m', '                                                                                            |', '\x1b[0m');
    this.renderEmptyLine();
    this.structureOptions.forEach(structure => {
      console.log('\x1b[1m', '\x1b[38;2;0;155;255m', '|', '\x1b[38;2;255;255;0m', `   ➤  ${structure.title}`, '\x1b[38;2;0;155;255m', '|', '\x1b[0m', `${structure.description}`, '\x1b[1m', '\x1b[38;2;0;155;255m', '|', '\x1b[0m');
      this.renderEmptyLine();
    });
  }
  execute() {
    console.log('');
    console.log('\x1b[1m', '\x1b[38;2;0;155;255m', ` /================================================${this.messages.comandTitle}=================================================\\`, '\x1b[0m');
    this.renderToolOptions();
    this.renderOrmOptions();
    this.renderStructureOptions();
    console.log('\x1b[1m', '\x1b[38;2;0;155;255m', ` \\======================================================================================================================/`, '\x1b[0m');
    console.log('');
  }
}
exports.Board = Board;