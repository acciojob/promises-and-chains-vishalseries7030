document.getElementById("voteForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent form from refreshing

  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();

  // Validation
  if (!name || !age) {
    alert("Please enter valid details"); // ✅ fixed: removed the dot
    return;
  }

  // Create promise
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (parseInt(age) > 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000); // 4-second delay
  })
    .then((message) => alert(message))
    .catch((error) => alert(error));
});
