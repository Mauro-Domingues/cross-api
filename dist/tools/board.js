"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.board = board;
var _messages = _interopRequireDefault(require("./messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function renderEmptyLine() {
  console.log('\x1b[1m', '\x1b[38;2;0;155;255m', '|                                                                                                                        |', '\x1b[0m');
}
function board() {
  const tools = [{
    title: 'comands             ',
    description: _messages.default.comands
  }, {
    title: 'language            ',
    description: _messages.default.changeLanguage
  }, {
    title: 'list:provider       ',
    description: _messages.default.listProvider
  }];
  const orm = [{
    title: 'migration:generate           ',
    description: _messages.default.migrationGenerate
  }, {
    title: 'migration:run                ',
    description: _messages.default.migrationRun
  }];
  const structure = [{
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
  console.log('');
  console.log('\x1b[1m', '\x1b[38;2;0;155;255m', ` /================================================${_messages.default.comandTitle}=================================================\\`, '\x1b[0m');
  renderEmptyLine();
  console.log('\x1b[1m', '\x1b[38;2;0;155;255m', '|', '\x1b[38;2;0;255;155m', ` 〇 ${_messages.default.tools}`, '\x1b[38;2;0;155;255m', '                                                                                                     |', '\x1b[0m');
  renderEmptyLine();
  tools.forEach(tool => {
    console.log('\x1b[1m', '\x1b[38;2;0;155;255m', '|', '\x1b[38;2;255;255;0m', `   ➤  ${tool.title}         `, '\x1b[38;2;0;155;255m', '|', '\x1b[0m', `${tool.description}`, '\x1b[1m', '\x1b[38;2;0;155;255m', '                          |', '\x1b[0m');
    renderEmptyLine();
  });
  console.log('\x1b[1m', '\x1b[38;2;0;155;255m', '|', '\x1b[38;2;0;255;155m', ` 〇 ORM`, '\x1b[38;2;0;155;255m', '                                                                                                             |', '\x1b[0m');
  renderEmptyLine();
  orm.forEach(orm => {
    console.log('\x1b[1m', '\x1b[38;2;0;155;255m', '|', '\x1b[38;2;255;255;0m', `   ➤  ${orm.title}`, '\x1b[38;2;0;155;255m', '|', '\x1b[0m', `${orm.description}`, '\x1b[1m', '\x1b[38;2;0;155;255m', '|', '\x1b[0m');
    renderEmptyLine();
  });
  console.log('\x1b[1m', '\x1b[38;2;0;155;255m', '|', '\x1b[38;2;0;255;155m', ` 〇 ${_messages.default.structure}`, '\x1b[38;2;0;155;255m', '                                                                                            |', '\x1b[0m');
  renderEmptyLine();
  structure.forEach(structure => {
    console.log('\x1b[1m', '\x1b[38;2;0;155;255m', '|', '\x1b[38;2;255;255;0m', `   ➤  ${structure.title}`, '\x1b[38;2;0;155;255m', '|', '\x1b[0m', `${structure.description}`, '\x1b[1m', '\x1b[38;2;0;155;255m', '|', '\x1b[0m');
    renderEmptyLine();
  });
  console.log('\x1b[1m', '\x1b[38;2;0;155;255m', ` \\======================================================================================================================/`, '\x1b[0m');
  console.log('');
}