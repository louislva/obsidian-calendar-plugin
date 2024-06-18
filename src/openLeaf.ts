export default function openLeaf(inNewTab: boolean) {
  return inNewTab
    ? window.app.workspace.createLeafInTabGroup()
    : window.app.workspace.getUnpinnedLeaf();
}
