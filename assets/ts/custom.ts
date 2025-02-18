class ArticleNavigation {
    private backButton: HTMLButtonElement | null = null;
    private topButton: HTMLButtonElement | null = null;

    constructor() {
        this.init();
    }

    private init(): void {
        this.backButton = document.querySelector('.back-button');
        this.topButton = document.querySelector('.top-button');

        this.backButton?.addEventListener('click', this.handleBack.bind(this));
        this.topButton?.addEventListener('click', this.handleTop.bind(this));
    }

    private handleBack(e: Event): void {
        e.preventDefault();
        if (document.referrer && document.referrer.includes(window.location.host)) {
            window.history.back();
        } else {
            window.location.href = '/';
        }
    }

    private handleTop(e: Event): void {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    new ArticleNavigation();
});