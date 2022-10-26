import { useState } from "react";
import { Button, Collapse, Container, Paper, Title } from "@mantine/core";
import Link from "next/link";
import React from "react";

export function CollapseLink(props: any) {
  const { nodeId, label, content, count, children } = props;
  const [opened, setOpened] = useState(false);

  return (
    <div style={{ width: "100%" }}>
      {count != 0 ? (
        <Container style={{ width: "100%" }}>
          {children && (
            <span onClick={() => setOpened((o) => !o)}>
              <span style={{ marginRight: "10px", cursor: "pointer" }}>
                {opened &&
                  (count == 1 ? (
                    <Button m="xs" py={0} px="xs" size="xs">
                      collapse
                    </Button>
                  ) : (
                    <Button m="xs" py={0} px="xs" size="xs">
                      -
                    </Button>
                  ))}
                {!opened &&
                  (count == 1 ? (
                    <Button m="xs" py={0} px="xs" size="xs">
                      expand
                    </Button>
                  ) : (
                    <Button m="xs" py={0} px="xs" size="xs">
                      +
                    </Button>
                  ))}
              </span>
            </span>
          )}
          {!children && (
            <div
              style={{
                marginBottom: "12px",
                padding: "12px",
                paddingLeft: "34px",
              }}
            >
              🔵{" "}
              <Link href={"/concept/" + nodeId}>
                <a style={{ cursor: "pointer" }}>{label}</a>
              </Link>
            </div>
          )}
          {children && (
            <Link href={"/concept/" + nodeId}>
              <a style={{ cursor: "pointer" }}>{label}</a>
            </Link>
          )}
          {children ? (
            <span>
              <Collapse ml={"xl"} in={opened}>
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
