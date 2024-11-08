let titles = document.querySelectorAll('.box-title');
let contents = document.querySelectorAll('.box-content');

titles.forEach((title, i) => {
  title.addEventListener('click', () => {
    const content = contents[i];

    if (content.style.display === 'block') {
      content.style.display = 'none';
      title.style.background = "white";
      title.style.color = "#21555b";
    } else {
      contents.forEach(c => c.style.display = 'none');
      titles.forEach(t => {
        t.style.background = "white";
        t.style.color = "#21555b";
      });
      content.style.display = 'block';
      title.style.background = "green";
      title.style.color = "white";
    }
  });
});
