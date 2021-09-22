import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "./App.style.css";
import Main from "./Main";
import { sleep } from "../helpers/index";
function App() {
  const [size, setSize] = useState(100);
  const [arr, setArr] = useState([]);
  const [curr, setCurr] = useState(null);
  const [next, setNext] = useState(null);

  useEffect(() => {
    updateList();
  }, [size]);

  const handleChange = (event, newvalue) => {
    setSize(newvalue);
    updateList();
  };
  const updateList = () => {
    const randomArr = Array.from({ length: size }, () =>
      Math.floor(Math.random() * 500)
    );
    setArr(randomArr);
  };

  const bubbleSort = async () => {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
      await sleep(10);
      for (let j = 0; j < len - i - 1; j++) {
        setCurr(j);
        setNext(j + 1);
        setArr([...arr]);
        await sleep(10);
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          setCurr(j);
          setNext(j + 1);
        }
        setArr([...arr]);
        await sleep(20);
      }
    }
    setNext(null);
    setCurr(null);
  };
  const selectionSort = async () => {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
      let min = i;
      for (let j = i + 1; j < n; j++) {
        setCurr(j);
        setNext(min);
        setArr([...arr]);
        if (arr[j] < arr[min]) {
          min = j;
          setNext(min);
          await sleep(10);
        }
        setArr([...arr]);
        await sleep(50);
      }
      if (min !== i) {
        setCurr(i);
        await sleep(50);
        setNext(i);
        await sleep(50);
        let tmp = arr[i];
        arr[i] = arr[min];
        arr[min] = tmp;
        setArr([...arr]);
        await sleep(50);
      }
      setNext(null);
      await sleep(100);
    }
    setCurr(null);
    setNext(null);
  };
  const insertionSort = async () => {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
      let current = arr[i];
      setCurr(i);
      let j = i - 1;

      while (j > -1 && current < arr[j]) {
        setNext(j);
        arr[j + 1] = arr[j];
        j--;

        await sleep(20);
      }

      arr[j + 1] = current;
      setArr([...arr]);
      await sleep(100);
    }
    setCurr(null);
    setNext(null);
  };

  const mergeSort = async () => {
    async function mergeArray(start, end) {
      let mid = parseInt((start + end) >> 1);
      let start1 = start,
        start2 = mid + 1;
      let end1 = mid,
        end2 = end;
      var itmd = [];
      let index = start;

      while (start1 <= end1 && start2 <= end2) {
        if (arr[start1] <= arr[start2]) {
          itmd[index] = arr[start1];
          index = index + 1;
          setCurr(index);
          start1 = start1 + 1;
        } else if (arr[start1] > arr[start2]) {
          itmd[index] = arr[start2];
          index = index + 1;
          setCurr(index);
          start2 = start2 + 1;
        }
      }

      while (start1 <= end1) {
        itmd[index] = arr[start1];
        index = index + 1;
        start1 = start1 + 1;
        setArr([...arr]);
      }

      while (start2 <= end2) {
        itmd[index] = arr[start2];
        index = index + 1;
        start2 = start2 + 1;
        setArr([...arr]);
      }

      index = start;
      setNext(index);
      while (index <= end) {
        await sleep(30);
        arr[index] = itmd[index];
        setCurr(index);
        index++;
        setArr([...arr]);
      }
      setArr([...arr]);
    }

    const SortMerge = async (start, end) => {
      if (start < end) {
        let mid = parseInt((start + end) / 2);

        await SortMerge(start, mid);

        await SortMerge(mid + 1, end);

        await mergeArray(start, end);

        await sleep(20);
      }
      setCurr(null);
      setNext(null);
    };
    SortMerge(0, arr.length - 1);
  };

  const quickSort = async () => {
    function swap(arr, a, b) {
      let temp = arr[a];
      arr[a] = arr[b];
      arr[b] = temp;
    }

    async function Partition(arr, start, end) {
      let index = start;
      let Pivot = arr[end];

      for (let i = start; i < end; i++) {
        setNext(i);
        if (arr[i] < Pivot) {
          swap(arr, i, index);
          setCurr(index);
          setArr([...arr]);
          await sleep(100);
          index++;
        }
      }

      swap(arr, index, end);
      setArr([...arr]);
      return index;
    }

    async function recursive(arr, start, end) {
      if (start >= end) return;

      let index = await Partition(arr, start, end);

      await Promise.all([
        recursive(arr, start, index - 1),
        recursive(arr, index + 1, end),
      ]);
      setNext(null);
      setCurr(null);
    }

    recursive(arr, 0, arr.length - 1);
  };

  const heapSort = async () => {
    async function heapify(arr, n, i) {
      var largest = i;
      var l = 2 * i + 1;
      var r = 2 * i + 2;
      if (l < n && arr[l] > arr[largest]) largest = l;

      if (r < n && arr[r] > arr[largest]) largest = r;

      if (largest !== i) {
        var swap = arr[i];
        setCurr(i);
        arr[i] = arr[largest];
        arr[largest] = swap;
        await sleep(30);
        setArr([...arr]);

        await heapify(arr, n, largest);
      }
      setArr([...arr]);
    }

    async function addHeap(arr) {
      var n = arr.length;

      for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        await heapify(arr, n, i);
      }

      for (let i = n - 1; i > 0; i--) {
        var temp = arr[0];
        setNext(i);
        arr[0] = arr[i];
        arr[i] = temp;
        await sleep(10);
        setArr([...arr]);

        await heapify(arr, i, 0);
      }
      setNext(null);
      setCurr(null);
    }

    addHeap(arr);
  };

  return (
    <div className="App">
      <Header
        handleChange={handleChange}
        value={size}
        updateList={updateList}
        bubbleSort={bubbleSort}
        selectionSort={selectionSort}
        insertionSort={insertionSort}
        mergeSort={mergeSort}
        quickSort={quickSort}
        heapSort={heapSort}
      />

      <Main data={arr} curr={curr} next={next} />
    </div>
  );
}

export default App;
