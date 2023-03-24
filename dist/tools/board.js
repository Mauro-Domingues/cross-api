"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Board = void 0;
var _messages = require("../../dist/tools/messages");
class Board {
  constructor() {
    this.messages = void 0;
    this.toolOptions = void 0;
    this.ormOptions = void 0;
    this.structureOptions = void 0;
    this.messages = new _messages.Messages().execute();
    this.toolOptions = [{
      title: 'comands             ',
      description: this.messages.comands
    }, {
      title: 'language            ',
      description: this.messages.changeLanguage
    }, {
      title: 'list:provider       ',
      description: this.messages.listProvider
    }];
    this.ormOptions = [{
      title: 'migration:generate           ',
      description: this.messages.migrationGenerate
    }, {
      title: 'migration:run                ',
      description: this.messages.migrationRun
    }];
    this.structureOptions = [{
      title: 'make:api                     ',
      description: this.messages.makeApi
    }, {
      title: 'make:module [name]           ',
      description: this.messages.makeModule
    }, {
      title: 'make:module [name] [father]  ',
      description: this.messages.makeModuleD
    }, {
      title: 'make:provider [name]         ',
      description: this.messages.makeProvider
    }, {
      title: 'make:provider [name] [father]',
      description: this.messages.makeProviderD
    }, {
      title: 'revert                       ',
      description: this.messages.undo
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