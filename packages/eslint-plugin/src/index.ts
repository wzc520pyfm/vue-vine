import type { ESLint, Linter } from 'eslint'
import * as VueVineESLintParser from '@vue-vine/eslint-parser'

import { version } from '../package.json'

import vineComponentNameFormat from './rules/format-vine-component-name'
import vineMacrosLeading from './rules/format-vine-macros-leading'
import vineStyleIndent from './rules/format-vine-style-indent'
import vineTemplateFormat from './rules/format-vine-template'

const plugin = {
  meta: {
    name: 'vue-vine',
    version,
  },
  rules: {
    'format-vine-template': vineTemplateFormat,
    'format-vine-style-indent': vineStyleIndent,
    'format-vine-macros-leading': vineMacrosLeading,
    'format-vine-component-name': vineComponentNameFormat,
  },
} satisfies ESLint.Plugin

export {
  plugin as default,
  VueVineESLintParser as vineParser,
}

type RuleDefinitions = typeof plugin['rules']

export type RuleOptions = {
  [K in keyof RuleDefinitions]: RuleDefinitions[K]['defaultOptions']
}

export type Rules = {
  [K in keyof RuleOptions]: Linter.RuleEntry<RuleOptions[K]>
}
