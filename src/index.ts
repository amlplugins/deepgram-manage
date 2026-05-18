/**
 * @amlplugins/deepgram-manage
 *
 * Thin namespaced re-export of the native @deepgram/sdk SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Deepgram Manage — projects, keys, balances, usage, model lists, members across the Deepgram console.
 */

import * as _sdk from "@deepgram/sdk";
export * from "@deepgram/sdk";
export { _sdk as sdk };
export default _sdk;
