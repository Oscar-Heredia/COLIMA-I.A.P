const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

document.documentElement.classList.add('js');
if (!reduceMotion.matches) document.documentElement.classList.add('motion-ok');

const menuButton = document.querySelector('[data-menu-button]');
const menu = document.querySelector('[data-menu]');
const header = document.querySelector('[data-header]');
const menuLinks = menu ? [...menu.querySelectorAll('a[href^="#"]')] : [];

if (menuButton) menuButton.hidden = false;

function setMenu(open) {
    if (!menuButton || !menu) return;

    menuButton.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
}

menuButton?.addEventListener('click', () => {
    const willOpen = menuButton.getAttribute('aria-expanded') !== 'true';
    setMenu(willOpen);
});

menuLinks.forEach((link) => {
    link.addEventListener('click', () => setMenu(false));
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
        if (event.detail === 0 || reduceMotion.matches) return;

        const target = document.querySelector(link.getAttribute('href'));
        if (!target) return;

        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (window.location.hash !== link.hash) history.pushState(null, '', link.hash);
    });
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton?.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        menuButton.focus();
    }
});

window.addEventListener('resize', () => {
    if (window.matchMedia('(min-width: 52rem)').matches) setMenu(false);
});

const sectionLinks = menu ? [...menu.querySelectorAll('a[href^="#"]:not(.button)')] : [];
const sections = sectionLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

if ('IntersectionObserver' in window && sections.length) {
    const sectionObserver = new IntersectionObserver((entries) => {
        const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;

        sectionLinks.forEach((link) => {
            const isCurrent = link.getAttribute('href') === `#${visible.target.id}`;
            if (isCurrent) link.setAttribute('aria-current', 'true');
            else link.removeAttribute('aria-current');
        });
    }, {
        rootMargin: '-25% 0px -60% 0px',
        threshold: [0, 0.2, 0.5],
    });

    sections.forEach((section) => sectionObserver.observe(section));
}

if ('IntersectionObserver' in window) {
    const headerSentinel = document.querySelector('#inicio');
    if (header && headerSentinel) {
        const headerObserver = new IntersectionObserver(([entry]) => {
            header.classList.toggle('is-scrolled', !entry.isIntersecting);
        }, { threshold: 0.02 });

        headerObserver.observe(headerSentinel);
    }
}

const revealItems = [...document.querySelectorAll('[data-reveal]')];

function waitForImage(image) {
    if (!image) return Promise.resolve();

    const decode = () => {
        if (!image.decode || !image.naturalWidth) return Promise.resolve();

        return Promise.race([
            image.decode().catch(() => undefined),
            new Promise((resolve) => window.setTimeout(resolve, 500)),
        ]);
    };
    if (image.complete) return decode();

    image.loading = 'eager';

    return new Promise((resolve) => {
        let timeout;
        const finish = (event) => {
            window.clearTimeout(timeout);
            image.removeEventListener('load', finish);
            image.removeEventListener('error', finish);
            resolve(event?.type === 'load');
        };

        image.addEventListener('load', finish, { once: true });
        image.addEventListener('error', finish, { once: true });
        timeout = window.setTimeout(() => finish(), 1800);
    }).then((loaded) => loaded ? decode() : undefined);
}

function settleReveal(item) {
    const transitionTarget = item.matches('[data-reveal="photo"]')
        ? item.querySelector('img')
        : item;
    let settled = false;

    const finish = () => {
        if (settled) return;
        settled = true;
        item.classList.add('is-settled');
    };

    transitionTarget?.addEventListener('transitionend', finish, { once: true });
    window.setTimeout(finish, 1600);
}

async function revealItem(item) {
    if (item.matches('[data-reveal="photo"]')) {
        await waitForImage(item.querySelector('img'));
    }

    requestAnimationFrame(() => {
        item.classList.add('is-revealed');
        settleReveal(item);
    });
}

if ('IntersectionObserver' in window && !reduceMotion.matches && revealItems.length) {
    document.documentElement.classList.add('motion-observer');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            observer.unobserve(entry.target);
            revealItem(entry.target);
        });
    }, {
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.12,
    });

    revealItems.forEach((item) => revealObserver.observe(item));
}

reduceMotion.addEventListener?.('change', (event) => {
    if (!event.matches) return;

    document.documentElement.classList.remove('motion-ok', 'motion-observer');
    revealItems.forEach((item) => item.classList.add('is-revealed'));
});

const year = document.querySelector('[data-year]');
if (year) year.textContent = String(new Date().getFullYear());
