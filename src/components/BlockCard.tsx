import React from "react";
import {Badge, Card, Stack} from "react-bootstrap";
import {Link} from "react-router-dom";
import {type IRowBlock} from "../types/block";

export function BlockCard({data}: {data: IRowBlock}): JSX.Element {
  return (
    <Card
      as={Link}
      id={`${data.id}`}
      to={`/${data.id}`}
      className={`h-100 text-reset text-decoration-none `}>
      <Card.Body>
        <Stack
          gap={2}
          className="align-items-center justify-content-center h-100">
          <span className="fs-5">{data.name}</span>
          {data.items.length > 0 && (
            <Stack
              gap={1}
              direction="horizontal"
              className="justify-content-center flex-wrap">
              {data.items.map((item, key) => {
                if (key > 5) {
                  return "";
                }
                return (
                  <Badge key={item.id} className="text-truncate">
                    {item.label}
                  </Badge>
                );
              })}
            </Stack>
          )}

          {data.items.length > 5 && (
            <Stack
              gap={1}
              direction="horizontal"
              className="justify-content-center flex-wrap">
              {data.items.map(item => (
                <Badge key={item.id} className="text-truncate">
                  {data.items.length - 5}
                </Badge>
              ))}
            </Stack>
          )}
        </Stack>
      </Card.Body>
    </Card>
  );
}
