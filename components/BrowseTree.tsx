import * as React from "react";
import { useEffect, useState } from "react";
import { Concept, RenderTree } from "../types";
import { CollapseLink } from "./link/CollapseLink";

export default function BrowseTree(props: any) {
  const { concepts } = props;
  const [conceptObj, setConceptObj] = useState<any>();
  const [treeData, setTreeData] = useState<RenderTree | null>();

  function createNode(childIds: number[] | null) {
    if (childIds == null || childIds == undefined) return;
    let retArr: Object[] = [];

    childIds.forEach((id) => {
      if (conceptObj) {
        conceptObj[id].children = createNode(conceptObj[id].childIds);
        retArr.push(conceptObj[id]);
      }
    });
    return retArr;
  }

  function createRenderTree() {
    let retArr: RenderTree[] = [];
    concepts.forEach((concept: Concept) => {
      if (concept.parentIds == null) {
        const currentConcept = conceptObj?.[concept.conceptId];
        retArr.push(currentConcept);
        if (currentConcept?.childIds && currentConcept.childIds.length >= 1)
          currentConcept.children = createNode(currentConcept?.childIds);
      }
    });
    setTreeData({
      id: 0,
      name: "Browse",
      children: retArr,
    });
  }

  function createConceptObj() {
    const obj: any = {};
    concepts.forEach((concept: Concept) => {
      obj[concept.conceptId] = {
        id: concept.conceptId.toString(),
        name: concept.displayName,
        childIds: concept.childIds,
        parentIds: concept.parentIds,
      };
    });
    setConceptObj(obj);
  }

  useEffect(() => {
    if (!conceptObj) createConceptObj();
    if (conceptObj && !treeData) createRenderTree();
  }, [conceptObj, treeData]);

  const renderTree = (nodes: RenderTree, count: number = 0) => {
    return (
      <CollapseLink
        key={nodes.id}
        nodeId={nodes.id}
        label={nodes.name}
        count={count}
        content={
          nodes && Array.isArray(nodes?.children)
            ? nodes?.children.map((node) => renderTree(node, count + 1))
            : null
        }
      >
        {nodes.children}
      </CollapseLink>
    );
  };

  return (
    <>
      {treeData && (
        <div style={{ padding: "0 4rem" }}>{renderTree(treeData)}</div>
      )}
    </>
  );
}
