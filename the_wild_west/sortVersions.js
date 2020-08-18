/*
* We have lots of deployment dashboards where we have drop-down UI to select
* an application version to deploy. We want to ensure that software version
* numbers delivered to our UI from the back-end API are always ordered with
* the newest (highest) available version at the top.

Eg:
const input = [0.1.0, 3.2.1, 2.2.3, 0.1.1];
sortVersions(input) should return [3.2.1, 2.2.3, 0.1.1, 0.1.0];
*/
const { performance } = require("perf_hooks");

const getMaxParts = (versions) => {
  let max = 0;
  for (let version of versions) {
    const parts = version.split('.');
    const length = parts.length;
    max = Math.max(max, length);
  }
  return max;
}

const getPart = (version, pos) => {
  const parts = version.split('.');
  return parts[pos] ? Number(parts[pos]) : 0;
}

const generateSortPart = (pos) => {
  return function(a, b) {
    const valA = getPart(a, pos);
    const valB = getPart(b, pos);
    return valB - valA;
  }
}

const sortVersions = (unsortedVersions) => {
  const t1 = performance.now();
  let versions = [...unsortedVersions];
  const maximumParts = getMaxParts(versions);
  for (let i = maximumParts; i >= 0; i--) {
    versions.sort(generateSortPart(i));
  }
  console.log(performance.now() - t1);
  return versions;
};

// const versions = ['0.2.0', '3.1.2', '0.1.6', '5.0.0'];
// const output = ['5.0.0', '3.1.2', '0.2.0', '0.1.6'];
const versions = [
  '1.3.0.9',
  '0.2.0',
  '3.1.2',
  '0.1.6',
  '5.0.0',
  '3.3.3.3',
  '3.3.3.3.3',
  '3.10',
  '0.2.0',
];
const output = [
  '5.0.0',
  '3.10',
  '3.3.3.3.3',
  '3.3.3.3',
  '3.1.2',
  '1.3.0.9',
  '0.2.0',
  '0.2.0',
  '0.1.6',
];
console.log(sortVersions(versions));

function compare(a, b) {
  if (a === b) {
    return 0;
  }
  const a_components = a.split(".");
  const b_components = b.split(".");
  const len = Math.min(a_components.length, b_components.length);
  // loop while the components are equal
  for (var i = 0; i < len; i++) {
    // A bigger than B
    if (parseInt(a_components[i]) > parseInt(b_components[i])) {
      return -1;
    }
    // B bigger than A
    if (parseInt(a_components[i]) < parseInt(b_components[i])) {
      return 1;
    }
  }
  // If one's a prefix of the other, the longer one is greater.
  if (a_components.length > b_components.length) {
    return -1;
  }
  if (a_components.length < b_components.length) {
    return 1;
  }
  // Otherwise they are the same.
  return 0;
}

const t1 = performance.now();
console.log(versions.sort(compare));
console.log(performance.now() - t1);