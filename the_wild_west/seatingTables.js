/**
 * Given a table for N people, figure out every possible seating of the table for all of your friends
 */
function findSeatingFriends(friends, tableSize) {
  function combineFriends(
    groups = [],
    group = [],
    pos = 0
  ) {
    if (group.length === tableSize) groups.push(group);
    else if (pos < friends.length) {
      combineFriends(groups, group, pos + 1);
      const newGroup = [...group];
      newGroup.push(friends[pos]);
      combineFriends(groups, newGroup, pos + 1);
    }
    return groups;
  }
  return combineFriends();
}

findSeatingFriends(['Sara', 'John', 'Laura', 'Brad', 'Ana'], 3);

