let first = [
  { uuid: 2, name: "Darling" },
  { uuid: 3, name: "Cry-Baby" },
  { uuid: 4, name: "Snitch" },
  { uuid: 5, name: "Pawn" }
];
let second = [
  { uuid: 1, role: "admin" },
  { uuid: 2, role: "contributor" },
  { uuid: 3, role: "owner" },
  { uuid: 4, role: "contributor" }
];

function solution(first, second) {
  let output = [];

  first.forEach((item) => {
    let mergedItem = { ...item };

    const matchingItem = second.find((secItem) => secItem.uuid === item.uuid);
    if (matchingItem) {
      mergedItem.role = matchingItem.role;
    } else {
      mergedItem.role = null;
    }

    output.push(mergedItem);
  });

  second.forEach((item) => {
    const matchingItem = first.find((fItem) => fItem.uuid === item.uuid);
    if (!matchingItem) {
      output.push({ uuid: item.uuid, name: null, role: item.role });
    }
  });

  return output;
}

console.log(solution(first, second));

//OUTPUT
//[
// {uuid:1, name: null, role: 'admin'},
// {uuid:2, name: 'Darling', role: 'contributor'},
// {uuid:3, name: 'Cry-Baby', role: 'owner'},
// {uuid:4, name: 'Snitch', role: 'contributor'},
// {uuid:5, name: 'Pawn', role: null}
//]
