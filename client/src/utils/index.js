import { surpriseMePrompts } from "../constants";
import { saveAs } from "file-saver";

export function getRandomPrompt() {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];
  if (randomPrompt === prompt) return getRandomPrompt();
  return randomPrompt;
}

export function downloadImage(_id, photo) {
  saveAs(photo, `download-${_id}.jpeg`);
}
