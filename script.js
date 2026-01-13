document.addEventListener('DOMContentLoaded', function () {
    // === 1. 智能查找文章容器 ===
    const selectors = [
        '.post-content', '.entry-content', '.article-content', 
        '.markdown-body', '.joe_detail__content', '.content-body', '#article-body'
    ];

    let content = null;
    for (let i = 0; i < selectors.length; i++) {
        content = document.querySelector(selectors[i]);
        if (content) break;
    }

    if (!content) return; 

    // === 变量定义 ===
    const offsetTop = 80; 
    const tocList = document.getElementById('gweek-toc-list');
    const tocContainer = document.getElementById('gweek-toc-container');
    const menuBtn = document.getElementById('gweek-menu-btn');
    const toTopBtn = document.getElementById('gweek-to-top');
    const closeBtn = document.querySelector('.close-toc');

    // === 2. 生成目录 ===
    const headers = Array.from(content.querySelectorAll('h2, h3')).filter(header => {
        return !header.closest('.comment-container') && !header.closest('.recommend-post');
    });

    if (headers.length > 0) {
        headers.forEach((header, index) => {
            const id = 'toc-head-' + index;
            header.setAttribute('id', id);

            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = '#' + id;
            a.textContent = header.textContent;
            
            if (header.tagName.toLowerCase() === 'h3') {
                a.classList.add('toc-level-3');
            }

            a.addEventListener('click', function(e) {
                e.preventDefault();
                if(window.innerWidth < 768) tocContainer.classList.remove('active');

                const targetElement = document.getElementById(id);
                const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - offsetTop;

                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                history.replaceState(null, null, '#' + id);
                
                document.querySelectorAll('#gweek-toc-list a').forEach(link => link.classList.remove('active'));
                this.classList.add('active');
            });

            li.appendChild(a);
            tocList.appendChild(li);
        });
    } else {
        if(menuBtn) menuBtn.style.display = 'none';
    }

    // === 3. 按钮交互 (关键修复点) ===
    if(menuBtn) {
        menuBtn.addEventListener('click', (e) => {
            // 阻止冒泡：点击按钮时，不触发 document 的关闭事件
            e.stopPropagation(); 
            tocContainer.classList.toggle('active');
        });
    }

    if(closeBtn) {
        closeBtn.addEventListener('click', () => {
            tocContainer.classList.remove('active');
        });
    }

    // === 点击空白处关闭 TOC (这段之前可能因为缓存没生效) ===
    document.addEventListener('click', function(event) {
        // 如果点击的不是 TOC 容器内部
        if (tocContainer.classList.contains('active') && !tocContainer.contains(event.target)) {
            tocContainer.classList.remove('active');
        }
    });

    if(toTopBtn) {
        toTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // === 4. 滚动监听 ===
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        if (toTopBtn) {
            if (scrollY > 300) {
                toTopBtn.classList.add('show');
            } else {
                toTopBtn.classList.remove('show');
            }
        }

        let current = '';
        headers.forEach(header => {
            const headerTop = header.offsetTop;
            if (scrollY >= headerTop - offsetTop - 20) {
                current = header.getAttribute('id');
            }
        });

        if (current) {
            document.querySelectorAll('#gweek-toc-list a').forEach(a => {
                a.classList.remove('active');
                if (a.getAttribute('href').includes(current)) {
                    a.classList.add('active');
                }
            });
        }
    });
});