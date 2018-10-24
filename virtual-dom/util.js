export let StateEnums = {
  ChangeText: 0,
  ChangeProps: 1,
  Insert: 2,
  Move: 3,
  Remove: 4,
  Replace: 5
};

export function move(arr, oldIndex, newIndex) {
  while (oldIndex < 0) {
    oldIndex += arr.length;
  }

  while (newIndex < 0) {
    newIndex += arr.length;
  }

  if (newIndex >= arr.length) {
    let k = newIndex - arr.length;
    while (k-- + 1) {
      arr.push(undefined);
    }
  }

  arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
  return arr;
}
