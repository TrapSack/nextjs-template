import { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";

const ITEMS = 3;

export default function IndexPage() {
  const [position, setPosition] = useState(0);

  return (
    <div>
      {Array(ITEMS)
        .fill(null)
        .map((_, index) => {
          return (
            <Box
              key={index}
              hasItem={index === position}
              onSelect={() => setPosition(index)}
            />
          );
        })}
    </div>
  );
}

const Draggable = () => {
  return <div draggable>Drag me</div>;
};

const Box = ({
  hasItem,
  onSelect,
}: {
  hasItem?: boolean;
  onSelect: Dispatch<SetStateAction<number>>;
}) => {
  const dragEnterOrOver = (e) => {
    if (hasItem) return;
    e.preventDefault();
  };

  return (
    <BoxContainer
      onDrop={onSelect}
      onDragEnter={dragEnterOrOver}
      onDragOver={dragEnterOrOver}
    >
      {hasItem && <Draggable />}
    </BoxContainer>
  );
};

const BoxContainer = styled.div<{ onDrop?: any }>`
  display: flex;
  width: 100px;
  height: 100px;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
`;
