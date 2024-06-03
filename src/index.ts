import { test } from "./app";

init()

function init() {
  test();
  const list = document.querySelector('#list') as HTMLUListElement;
  const form = document.getElementById('new-task-form') as HTMLFormElement || null // why does not work??????
  const input = document.querySelector<HTMLInputElement>('#new-task-title');
}

