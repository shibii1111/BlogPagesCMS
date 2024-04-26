fetch('https://raw.githubusercontent.com/shibii1111/BlogPagesCMS/main/_posts/2024-04-25-hi.md')
  .then(response => response.text())
  .then(text => {
    var converter = new showdown.Converter(),
        html = converter.makeHtml(text);
    document.getElementById('postContainer').innerHTML = html;
  });
