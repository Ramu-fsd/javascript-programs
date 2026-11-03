const feed = document.querySelector("#feed");
const sentinel = document.querySelector("#sentinel");
let page = 1;
let loading = false;
const maxPages = 5;

function appendPage(pageNumber) {
  const fragment = document.createDocumentFragment();
  for (let index = 1; index <= 10; index++) {
    const article = document.createElement("article");
    article.textContent = `Page ${pageNumber} — Item ${index}`;
    fragment.append(article);
  }
  feed.append(fragment);
}

const observer = new IntersectionObserver(async entries => {
  if (!entries.some(entry => entry.isIntersecting) || loading) return;
  if (page > maxPages) {
    sentinel.textContent = "You have reached the end.";
    observer.disconnect();
    return;
  }

  loading = true;
  sentinel.textContent = "Loading…";
  await new Promise(resolve => setTimeout(resolve, 350)); // Simulated request
  appendPage(page++);
  loading = false;
  sentinel.textContent = "Scroll to load more…";
}, { rootMargin: "200px" });

observer.observe(sentinel);
