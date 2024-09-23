import React, { useState } from "react";
import {
  closestCenter,
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  useSortable,
} from "@dnd-kit/sortable";
import { Avatar, Flex, Tag, Typography } from "antd";
import { Paper } from "@mui/material";
import EmptyContent from "src/components/empty-content";
import { alpha, Box, Container, margin } from "@mui/system";
import { useSettingsContext } from "src/components/settings";
const commonStyle = {
  cursor: "move",
  transition: "unset", // Prevent element from shaking after drag
  direction: "row-reverse",
};
const DraggableTag = (props) => {
  const { tag } = props;
  const {
    listeners,
    transform,
    transition,
    isDragging,
    setNodeRef,
    index,
    cps,
  } = useSortable({
    id: tag.id,
  });
  const style = transform
    ? {
        ...commonStyle,
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        transition: isDragging ? "unset" : transition, // Improve performance/visual effect when dragging
        backgroundColor: tag.bg,
      }
    : { ...commonStyle, backgroundColor: tag.bg };
  return (
    // <Tag style={style} ref={setNodeRef} {...listeners} index={index}>
    //   {tag.text}
    // </Tag>
    // <Avatar style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>U</Avatar>
    <Avatar.Group shape="square">
      <Avatar
        size={50}
        style={style}
        ref={setNodeRef}
        {...listeners}
        index={index}
      >
        <Typography.Title style={{ margin: 5, color: "white" }} level={1}>
          {tag.text}
        </Typography.Title>
      </Avatar>
    </Avatar.Group>
  );
};
const DraggableSequence = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      text: "GT16",
      bg: "#f56a00",
    },
    {
      id: 2,
      text: "GT19",
      bg: "#f56a00",
    },
    {
      id: 3,
      text: "GT20",
      bg: "#f56a00",
    },
    {
        id: 4,
        text: "GT21",
        bg: "#108ee9",
      },
      {
        id: 5,
        text: "GT22",
        bg: "#108ee9",
      },
      {
        id: 6,
        text: "GT23",
        bg: "#f56a00",
      },
      {
        id: 7,
        text: "GT24",
        bg: "#f56a00",
      },
      {
        id: 8,
        text: "GT25",
        bg: "#f56a00",
      },
      {
        id: 9,
        text: "GT26",
        bg: "#f56a00",
      },
      {
        id: 10,
        text: "GT27",
        bg: "#108ee9",
      },
      {
        id: 11,
        text: "GT28",
        bg: "#108ee9",
      },
      {
        id: 12,
        text: "GT29",
        bg: "#108ee9",
      },
      {
        id: 13,
        text: "GT30",
        bg: "#f56a00",
      },
  ]);
  const settings = useSettingsContext();
  const sensors = useSensors(useSensor(PointerSensor));
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) {
      return;
    }
    if (active.id !== over.id) {
      setItems((data) => {
        const oldIndex = data.findIndex((item) => item.id === active.id);
        const newIndex = data.findIndex((item) => item.id === over.id);
        return arrayMove(data, oldIndex, newIndex);
      });
    }
  };
  return (
    <DndContext
      sensors={sensors}
      onDragEnd={handleDragEnd}
      collisionDetection={closestCenter}
    >
      <Container maxWidth={settings.themeStretch ? false : "xl"}>
        <SortableContext items={items} strategy={horizontalListSortingStrategy}>
          <Box
            sx={{
              mt: 5,
              width: 1,
              height: 320,
              borderRadius: 2,
              bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04),
              border: (theme) => `dashed 1px ${theme.palette.divider}`,
            }}
          >
            <Flex
              gap="20px 20px"
              wrap
              style={{ flexDirection: "row-reverse", margin: "20px" }}
              vertical
            >
              <Avatar.Group shape="square">
                <Avatar size={50} style={{ backgroundColor: "#f56a00" }}>
                  <Typography.Title
                    style={{ margin: 5, color: "white" }}
                    level={1}
                  >
                    CPS 1
                  </Typography.Title>
                </Avatar>
              </Avatar.Group>
              <Avatar.Group shape="square">
                <Avatar size={50} style={{ backgroundColor: "#108ee9" }}>
                  <Typography.Title
                    style={{ margin: 5, color: "white" }}
                    level={1}
                  >
                    CPS 2
                  </Typography.Title>
                </Avatar>
              </Avatar.Group>
            </Flex>
            <Flex
              gap="20px 20px"
              wrap
              style={{ flexDirection: "row-reverse", margin: "20px" }}
            >
              {items.map((item) => (
                <DraggableTag tag={item} key={item.id} />
              ))}
            </Flex>
          </Box>
        </SortableContext>
      </Container>
    </DndContext>
  );
};
export default DraggableSequence;
