import * as React from "react";
import { useEffect, useState } from "react";
import { CollapseLink } from "./CollapseLink";

interface RenderTree {
  id: number;
  name: string;
  children?: readonly RenderTree[];
}

export default function BrowseTree(props) {
  const { concepts } = props;
  const [conceptObj, setConceptObj] = useState();
  const [treeData, setTreeData] = useState()<RenderTree>;

  function createNode(childIds) {
    if (childIds == null || childIds == undefined) return;
    let retArr = [];

    childIds.forEach((id) => {
      conceptObj[id].children = createNode(conceptObj[id].childIds);
      retArr.push(conceptObj[id]);
    });
    return retArr;
  }

  function createRenderTree() {
    let retArr = [];
    concepts.forEach((concept) => {
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
    const obj = {};
    concepts.forEach((concept) => {
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

  const renderTree = (nodes: RenderTree, count = 0) => {
    return (
      <CollapseLink
        key={nodes.id}
        nodeId={nodes.id}
        label={nodes.name}
        count={count}
        children={nodes.children}
        content={
          nodes &&
          nodes?.children?.length >= 1 &&
          Array.isArray(nodes?.children)
            ? nodes?.children.map((node) => renderTree(node, count + 1))
            : null
        }
      >
        {/* {getDash(count) + nodes.name} */}
      </CollapseLink>
    );
  };

  return (
    <>
      {treeData && (
        <div
          aria-label="rich object"
          //   defaultCollapseIcon={<ExpandMoreIcon />}
          //   defaultExpanded={["root"]}
          //   defaultExpandIcon={<ChevronRightIcon />}
          //   sx={{ height: 110, flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
        >
          {renderTree(treeData)}
        </div>
      )}
    </>
  );
}
