"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateEditorConfig = void 0;
class CreateEditorConfig {
  execute() {
    return `root = true

[*]
end_of_line = lf
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = false
insert_final_newline = false`;
  }
}
exports.CreateEditorConfig = CreateEditorConfig;