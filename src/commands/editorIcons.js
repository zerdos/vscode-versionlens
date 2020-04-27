/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Peter Flannery. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import appSettings from 'common/appSettings';
import { clearDecorations } from 'editor/decorations';
import * as CodeLensProviders from 'providers/codeLensProviders';

export function showTaggedVersions() {
  appSettings.showTaggedVersions = true;
  CodeLensProviders.reloadActiveProviders();
}

export function hideTaggedVersions() {
  appSettings.showTaggedVersions = false;
  CodeLensProviders.reloadActiveProviders();
}

export function showDependencyStatuses() {
  appSettings.showDependencyStatuses = true;
  CodeLensProviders.reloadActiveProviders();
}

export function hideDependencyStatuses() {
  appSettings.showDependencyStatuses = false;
  clearDecorations();
}

export function showVersionLenses() {
  appSettings.showVersionLenses = true;
  CodeLensProviders.reloadActiveProviders();
}

export function hideVersionLenses() {
  appSettings.showVersionLenses = false;
  CodeLensProviders.reloadActiveProviders();
}
