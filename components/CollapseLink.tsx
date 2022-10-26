import { useEffect, useState } from "react";
import { Button, Collapse, Container, Paper, Title } from "@mantine/core";
import Link from "next/link";
import React from "react";

export function CollapseLink(props) {
  const { nodeId, label, content, count, children } = props;
  const [opened, setOpened] = useState(false);

  return (
    <div>
      {count != 0 ? (
        <Container>
          <Link href={"/concept/" + nodeId}>
            <a style={{ cursor: "pointer" }}>{label}</a>
          </Link>
          {children ? (
            <span>
              <span onClick={() => setOpened((o) => !o)}>
                <span style={{ marginLeft: "30px", cursor: "pointer" }}>
                  {opened && "-" + (count == 1 ? " (collapse)" : "")}
                  {!opened && "+" + (count == 1 ? " (expand)" : "")}
                </span>
              </span>

              <Collapse ml={"lg"} in={opened}>
                {content}
              </Collapse>
            </span>
          ) : (
            <Paper></Paper>
          )}
        </Container>
      ) : (
        <Container>
          <Title order={5}>
            {label}:
            <Collapse ml={"lg"} in={true}>
              {content}
            </Collapse>
          </Title>
        </Container>
      )}
    </div>
  );
}
