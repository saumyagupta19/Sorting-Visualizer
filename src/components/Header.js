import React from "react";
import { Button, Wrapper, Sortwrapper, Sliderwrapper } from "./header.style";
import Slider from "@material-ui/core/Slider";

export default function Header({
  handleChange,
  value,
  updateList,
  bubbleSort,
  selectionSort,
  insertionSort,
  mergeSort,
  quickSort,
  heapSort,
}) {
  return (
    <Wrapper>
      <Button onClick={updateList}>Generate New Array</Button>
      <Sliderwrapper>
        <Slider
          value={value}
          onChange={handleChange}
          max={250}
          min={10}
          step={10}
        />
      </Sliderwrapper>
      <Button onClick={mergeSort}>Merge Sort</Button>
      <Button onClick={quickSort}>Quick Sort</Button>
      <Button onClick={heapSort}>Heap Sort</Button>
      <Button onClick={bubbleSort}>Bubble Sort</Button>
      <Button onClick={selectionSort}>Selection Sort</Button>
      <Button onClick={insertionSort}>Insertion Sort</Button>
    </Wrapper>
  );
}
