/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Dynamic block connection test playground.
 */

import * as Blockly from 'blockly';
import {createPlayground} from '@blockly/dev-tools';
import * as BlockDynamicConnection from '../src/index';
import {category} from '../../block-test/src/align';

/**
 * Create a workspace.
 * @param {HTMLElement} blocklyDiv The blockly container div.
 * @param {!Blockly.BlocklyOptions} options The Blockly options.
 * @return {!Blockly.WorkspaceSvg} The created workspace.
 */
function createWorkspace(blocklyDiv, options) {
  return Blockly.inject(blocklyDiv, options);
}

document.addEventListener('DOMContentLoaded', function() {
  BlockDynamicConnection.overrideOldBlockDefinitions();

  const toolbox = {
    kind: 'flyoutToolbox',
    contents: [
      {
        kind: 'block',
        type: 'controls_if',
      },
    ],
  };
  const defaultOptions = {
    toolbox: document.getElementById('toolbox'),
  };
  createPlayground(
      document.getElementById('root'),
      createWorkspace,
      defaultOptions
  );
});
