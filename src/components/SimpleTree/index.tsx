import React, { useState, useImperativeHandle, forwardRef } from 'react';
import { Tree } from 'antd';

// const { TreeNode } = Tree;

const RoleTree = forwardRef((props: {data: []}, ref) => {
  const { data } = props
  const [checkedKeys, setCheckey] = useState<string[]>([])
  const [autoExpandParent, setAutoExpandParent] = useState<boolean>(true);
  const lastExpandedKeys:string[] = []
  const formatData = (forData: any[]) => {
    const lastData:any[] = []
    forData.forEach((obj:any, index: number) => {
      lastData[index] = {
        key: obj.id,
        title: obj.menu_text,
        icon: obj.icon
      }
      if (obj.state.opened) {
        lastExpandedKeys.push(obj.id)
      }
      if (obj.children) {
        lastData[index].children = formatData(obj.children)
      }
      return obj
    })
    return lastData
  }
  const treeData = formatData(data)
  const [expandedKeys, setExpandedKeys] = useState<string[]>(lastExpandedKeys);

  useImperativeHandle(ref, () => ({
    getData: () => checkedKeys
  }))

  const onExpand = (expandedKeys: any) => {
    setExpandedKeys(expandedKeys);
    setAutoExpandParent(false);
  }

  const onCheck = (checkedKeys: any) => {
    setCheckey(checkedKeys)
  };

  return (
    <Tree
      checkable
      onExpand={onExpand}
      expandedKeys={expandedKeys}
      autoExpandParent={autoExpandParent}
      onCheck={onCheck}
      checkedKeys={checkedKeys}
      treeData={treeData}
    />
  );
});

export default RoleTree
