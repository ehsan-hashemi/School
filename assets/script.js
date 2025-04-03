document.addEventListener('DOMContentLoaded', () => {
    // دریافت اخبار از سرور
    fetch('https://yourbackend.vercel.app/api/getNews')
        .then(response => response.json())
        .then(data => {
            const newsSection = document.getElementById('news-section');
            data.news.forEach(newsItem => {
                const p = document.createElement('p');
                p.textContent = newsItem;
                newsSection.appendChild(p);
            });
        })
        .catch(error => console.error('Error fetching news:', error));
});
